<template class="bg-webtech-bg-primary">
  <HelloWorld class="bg-webtech-bg-primary" />
  <MainNavbar class="bg-webtech-bg-primary" />
  <h3 class="font-heading">Testing</h3>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MainNavbar from './components/MainNavbar.vue';

export default {
  name: 'App',
  components: {
    MainNavbar,
    HelloWorld
  }
}
</script>