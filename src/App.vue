<template>
  <div class="d-flex flex-column">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main';

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
};
</script>

<style>
body {
  min-height: 100%;
}
</style>
