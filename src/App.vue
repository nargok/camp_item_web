<template>
<div>
  <AppBar />
  <router-view />
 </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
export default {
  
  name: 'App',
  components: {
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
