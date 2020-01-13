<template>
  <div>
    <v-app-bar
      color="white"
      dense
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
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
};
</script>