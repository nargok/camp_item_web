<template>
  <v-app>
    <p>
      <router-link to="/">HOME</router-link> >
      Create Item
    </p>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1>Create Camp Item</h1>
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="imageUrl"
            label="image"
          ></v-text-field>

          <v-textarea
            outlined
            name="input-7-4"
            label="outline"
          ></v-textarea>    

          <v-card-action>
            <v-btn
            >
              Create
            </v-btn>
          </v-card-action>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>