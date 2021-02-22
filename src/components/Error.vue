<template>
  <div class="blankslate my-3 text-gray">
    <Octicon
      class="text-red"
      icon="x-circle"
      size="24"
    />
    <h3 class="my-1">
      {{ error }}
    </h3>
  </div>
</template>

<script>
import Octicon from '@/components/Octicon';

export default {
  name: 'Error',
  components: {Octicon},
  computed: {
    error() {
      return this.$store.getters.error;
    }
  }
};
</script>
