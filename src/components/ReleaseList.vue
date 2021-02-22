<template>
  <div class="d-flex flex-column flex-items-center">
    <ul class="flex-self-stretch">
      <Release
        v-for="release in releases"
        :key="release['id']"
        :release="release"
      />
    </ul>
    <button
      v-if="hasNext"
      class="btn btn-primary"
      type="button"
      @click="loadNext"
    >
      <Octicon
        class="mr-2"
        icon="plus-circle"
        size="16"
      />
      <span>Next</span>
    </button>
  </div>
</template>

<script>
import Octicon from '@/components/Octicon';
import Release from '@/components/Release';

export default {
  name: 'ReleaseList',
  components: {
    Octicon,
    Release
  },
  methods: {
    loadNext: function() {
      this.$store.dispatch('loadReleases');
    }
  },
  computed: {
    releases() {
      return this.$store.getters.releases;
    },
    hasNext() {
      return this.$store.getters.hasNext;
    }
  }
};
</script>
