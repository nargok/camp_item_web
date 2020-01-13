
<template>
  <v-app>
    <v-card >
      <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">定番ギア「XXXの焚火台」</h1>
      </v-card-title>
      <v-card-text>
        <v-img
          :src="require('../assets/campfire-896196_640.jpg')"
        >          
        </v-img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iure laborum laudantium, pariatur soluta est cumque, reprehenderit veritatis blanditiis nisi, necessitatibus dolor eveniet doloribus explicabo magnam. Odit quasi consequuntur pariatur?</p>
      </v-card-text>
    </v-card>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">小型焚き火台XXXの威力</h1>
      </v-card-title>
      <v-card-text>
        <v-img
          :src="require('../assets/fireplace-1598243_640.jpg')"
        >          
        </v-img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iure laborum laudantium, pariatur soluta est cumque, reprehenderit veritatis blanditiis nisi, necessitatibus dolor eveniet doloribus explicabo magnam. Odit quasi consequuntur pariatur?</p>
      </v-card-text>
    </v-card>
   </v-card>
   <div>
     {{items}}
   </div>
  </v-app>
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
    axios.get('http://localhost:3000/api/v1/items/').then(res => this.items = res)
  }
}
</script>