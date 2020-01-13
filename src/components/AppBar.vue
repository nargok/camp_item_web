<template>
  <div>
    <v-app-bar
      color="white"
      dense
    >
      <v-btn icon v-on:click="onClickPlus">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>Camp Item</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  <router-view />
 </div>
</template>

<script>
export default {
  name: 'AppBar',

  data: () => ({
  }),
  methods: {
    onClickPlus() {
      this.$router.push('/camp_items/new')
    }
  }
};
</script>