import axios from 'axios';
import {createStore} from 'vuex';

const GITHUB_API = 'https://api.github.com';
const PER_PAGE = 30;

const getDefaultState = () => {
  return {
    repo: {},
    releases: [],
    hasNext: true,
    page: 1,
    error: ''
  };
};

export default createStore({
  state: getDefaultState(),
  getters: {
    repo: function(state) {
      return state.repo;
    },
    releases: function(state) {
      return state.releases;
    },
    error: function(state) {
      return state.error;
    },
    hasNext: function(state) {
      return state.hasNext;
    }
  },
  mutations: {
    resetState(state) {
      Object.assign(state, getDefaultState());
    },
    setRepoDetail: function(state, repo) {
      state.repo = {
        'name': repo['name'],
        'html_url': repo['html_url'],
        'owner': repo['owner']['login'],
        'owner_html_url': repo['owner']['html_url'],
        'description': repo['description'],
        'stargazers_count': repo['stargazers_count'],
        'language': repo['language'],
        'license': repo['license']['name']
      };
      return state.repo;
    },
    setReleases: function(state, releases) {
      if (releases.length < PER_PAGE) {
        state.hasNext = false;
      }

      let assets = [];

      for (let i = 0; i < releases.length; i++) {
        for (let j = 0; j < releases[i]['assets'].length; j++) {
          let asset = {
            'id': releases[i]['assets'][j]['id'],
            'name': releases[i]['assets'][j]['name'],
            'size': releases[i]['assets'][j]['size'],
            'download_count': releases[i]['assets'][j]['download_count'],
            'browser_download_url': releases[i]['assets'][j]['browser_download_url']
          };
          assets.push(asset);
        }

        let release = {
          'id': releases[i]['id'],
          'html_url': releases[i]['html_url'],
          'name': releases[i]['name'],
          'draft': releases[i]['draft'],
          'prerelease': releases[i]['prerelease'],
          'assets': assets,
          'body': releases[i]['body']
        };
        assets = [];
        state.releases.push(release);
      }
      return state.releases;
    },
    setError: function(state, message) {
      return state.error = message;
    }
  },
  actions: {
    loadRepoDetail: async function({commit}, payload) {
      commit('resetState');
      try {
        let repo = await axios.get(`${GITHUB_API}/repos/${payload.owner}/${payload.repo}`);
        commit('setRepoDetail', repo.data);
        let releases = await axios.get(
            `${GITHUB_API}/repos/${payload.owner}/${payload.repo}/releases?per_page=${PER_PAGE}`);
        commit('setReleases', releases.data);
      } catch (err) {
        commit('setError', err.message);
      }
    },
    loadReleases: async function({commit}) {
      console.log('called');
      this.state.page += 1;
      let response = await axios.get(
          `${GITHUB_API}/repos/${this.state.repo.owner}/${this.state.repo.name}/releases?per_page=${PER_PAGE}&page=${this.state.page}`);
      commit('setReleases', response.data);
    }
  },
  modules: {}
});
