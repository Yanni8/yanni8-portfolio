<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>
    <v-app-bar class="w-full" elevation="5">
      <v-app-bar-title>Portfolio Yannick Müller</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" to="frameworks">
        Technologies
      </v-btn>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer class="flex justify-between w-full">
      <div>
        &copy; {{ new Date().getFullYear() }} - Yannick Müller
      </div>
      <div>
        <v-btn class="mx-4" icon="far fa-envelope" variant="plain" href="mailto:mail@ynnk.dev" size="small"></v-btn>
        <v-btn class="mx-4" icon="fab fa-github" variant="plain" href="https://github.com/yanni8" size="small"></v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
