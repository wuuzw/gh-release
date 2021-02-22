<template>
  <main class="d-flex flex-column">
    <SearchBar />
    <Repo v-if="hasRepoDetail" />
    <Error v-if="hasError" />
  </main>
</template>

<script>
import Error from '@/components/Error';
import Repo from '@/components/Repo';
import SearchBar from '@/components/SearchBar';

export default {
  name: 'Main',
  components: {Error, Repo, SearchBar},
  computed: {
    hasRepoDetail() {
      return Object.keys(this.$store.getters.repo).length !== 0;
    },
    hasError() {
      return this.$store.state.error !== '';
    }
  }
};
</script>
