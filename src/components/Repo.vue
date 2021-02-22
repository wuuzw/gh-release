<template>
  <div class="py-4 px-3">
    <div class="d-flex flex-column mb-3">
      <h1 class="d-flex flex-items-center f3 text-normal">
        <Octicon
          class="mr-2"
          icon="repo"
          size="24"
        />
        <a :href="repo.owner_html_url">{{ repo.owner }}</a>
        <span class="mx-1">/</span>
        <strong class="mr-2">
          <a :href="repo.html_url">{{ repo.name }}</a>
        </strong>
      </h1>

      <p class="f4 my-2">
        {{ repo.description }}
      </p>

      <div class="d-flex flex-wrap text-small text-gray">
        <div class="mr-3">
          <span>
            <Octicon
              icon="star"
              size="16"
            />
            {{ repo.stargazers_count }}
          </span>
        </div>

        <div class="mr-3">
          <span>{{ repo.language }}</span>
        </div>

        <div class="mr-3">
          <span>
            <Octicon
              icon="law"
              size="16"
            />
            {{ repo.license }}</span>
        </div>
      </div>
    </div>

    <div class="border-top">
      <ReleaseList v-if="releases.length > 0" />
      <EmptyList v-else />
    </div>
  </div>
</template>
<script>
import EmptyList from '@/components/EmptyList';
import Octicon from '@/components/Octicon';
import ReleaseList from '@/components/ReleaseList';

export default {
  name: 'Repo',
  components: {EmptyList, ReleaseList, Octicon},
  computed: {
    repo() {
      return this.$store.getters.repo;
    },
    releases() {
      return this.$store.getters.releases;
    }
  }
};
</script>
