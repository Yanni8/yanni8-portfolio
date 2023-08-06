<template>
    <div class="ma-8 h-fit px-4">
        <h1 class="text-4xl mb-5">My Experience</h1>
        <v-divider thickness="2" class="mb-8 w-full h-fit"></v-divider>
        <div id="experience-wrapper" :class="{ 'is-visible': isVisible }">
            <experience-slider title="Python" :experience="Date.parse('2021-08-01')"></experience-slider>
            <experience-slider title="Java" :experience="Date.parse('2021-10-01')"></experience-slider>
            <experience-slider title="Spring Boot" :experience="Date.parse('2021-12-01')"></experience-slider>
            <experience-slider title="MySql" :experience="Date.parse('2021-12-01')"></experience-slider>
            <experience-slider title="MongoDB" :experience="Date.parse('2022-01-01')"></experience-slider>

            <experience-slider title="Angular" :experience="Date.parse('2022-04-01')"></experience-slider>
            <experience-slider title="TypeScript (JS)" :experience="Date.parse('2022-04-01')"></experience-slider>
            <experience-slider title="NgRx" :experience="Date.parse('2022-04-01')"></experience-slider>
            <experience-slider title="TailwindCSS" :experience="Date.parse('2023-01-01')"></experience-slider>
            <experience-slider title="Vue 3" :experience="Date.parse('2023-04-01')"></experience-slider>

        </div>
    </div>
</template>
<script lang="ts">

import ExperienceSlider from '@/components/ExperienceSlider.vue';

export default {
    name: "Experience",
    components: {
        ExperienceSlider
    },
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        const element = document.getElementById("experience-wrapper");
        const observer = new IntersectionObserver(entries => {
            console.log(entries[0].isIntersecting)
            this.isVisible = entries[0].isIntersecting;
        });

        observer.observe(element);
    }
}
</script>