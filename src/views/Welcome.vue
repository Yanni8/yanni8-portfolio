<template>
    <div class="h-[85vh] max-w-[80%] max-md:pb-16 relative mx-auto flex flex-wrap flex-column align-center justify-center">
        <h1 class="text-5xl">Hey, I'm <span class="font-bold inline">Yannick Müller</span></h1>
        <h2 class="pt-8 text-4xl max-md:mr-auto max-md:min-h-[10rem]">I'm a <span id="placeholder"></span></h2>
        <div class="absolute bottom-0 max-md:bottom-20 animate-bounce">
            <v-btn icon="fas fa-arrow-down" @click="goto()">
            </v-btn>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "Welcome",
    methods: {
        goto() {
            this.$root.goto("about-me", false);
        }
    }
}
</script>
<style scoped lang="scss">
@import '../typed.scss';

#placeholder {
    @include typed("Developer", "Linux Enthusiast", "Full Stack Engineer");

}
</style>