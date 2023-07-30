<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>
    <v-app-bar class="w-full" elevation="5">
      <v-app-bar-title>Portfolio Yannick Müller</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" to="frameworks">
        Frameworks
      </v-btn>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>
