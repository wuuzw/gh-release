<template>
  <header class="Header flex-justify-end">
    <div class="Header-item">
      <a
        class="Header-link"
        href="https://github.com/wuuzw/gh-release"
      >
        <Octicon
          class="mr-1"
          icon="mark-github"
          size="16"
        />
        Source code</a>
    </div>
  </header>
</template>

<script>
import Octicon from '@/components/Octicon';

export default {
  name: 'Header',
  components: {Octicon}
};
</script>
