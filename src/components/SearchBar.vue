<template>
  <div class="d-flex flex-column flex-items-center">
    <div class="d-flex my-3">
      <img
        alt="GH-Release logo"
        class="mr-1"
        src="../assets/logo.png"
      >
      <h1>
        GH-Release
      </h1>
    </div>

    <form @submit.prevent="search">
      <input
        v-model.trim="query"
        aria-label="Github Repository URL"
        class="form-control p-3 input-lg input-block"
        placeholder="Enter a repository url"
        type="url"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    async search() {
      let data = this.query.replace(/^(http(s)?(:\/\/))?(www\.)?(github\.com\/)/i, '').split('/');
      let owner = data[0];
      let repo = data[1];
      await this.$store.dispatch('loadRepoDetail', {owner: owner, repo: repo});
    }
  }
};
</script>

<style scoped>
form {
  width: 80%;
}
</style>
