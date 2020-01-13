<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in items"
          :key="card.name"
          :cols="12"
        >
          <v-card>
            <v-img
              :src="require('../assets/campfire-896196_640.jpg')"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.name" class="card__title"></v-card-title>
            </v-img>
            <v-card-text>{{ card.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      items: null,
    }
  },
  mounted() {
    axios.get('/api/v1/items/')
      .then(res => this.items = res.data.data)
  }
}
</script>

<style scoped>
  .card__title {
    color: white;
  }
</style>