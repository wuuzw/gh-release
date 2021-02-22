<template>
  <svg
    :class="octiconClasses"
    :height="size"
    :viewBox="viewBox"
    :width="size"
    aria-hidden="true"
    v-html="octicon.path"
  />
</template>

<script>
import Octicons from '@primer/octicons';

export default {
  name: 'Octicon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    octicon() {
      return Octicons[this.icon].heights[this.size];
    },
    viewBox() {
      return this.octicon.options.viewBox;
    },
    octiconClasses() {
      return this.octicon.options.class;
    }

  }
};
</script>

<style scoped>

</style>
