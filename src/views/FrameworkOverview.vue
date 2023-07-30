<template>
    <div class="ma-8">
        <div v-for="framework in frameworks">
            <h2 class="mb-2 text-xl">{{ framework.groupName }}</h2>
            <v-divider thickness="2" class="mb-8"></v-divider>
            <div class="flex">
                <framework-card v-for="library in framework['frameworks']" :logo="library['logo']" :title="library['title']"></framework-card>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

import FrameworkCard from '@/components/FrameworkCard.vue';

export default {
    name: "FrameworkOverivew",
    components: {
        FrameworkCard
    },
    data() {
        return {
            frameworks: [{
                groupName: "Web Technologies",
                frameworks: [
                    { title: "Vue 3", logo: "/src/assets/image/logos/vue3.svg"},
                    { title: "Angular", logo: "/src/assets/image/logos/angular.svg"},
                    { title: "TailwindCSS", logo: "/src/assets/image/logos/tailwindcss.png"}
                ]
            },
            {
                groupName: "Backend Technologies",
                frameworks: [
                    {title: "Spring Boot", logo: "/src/assets/image/logos/spring.png"},
                    {title: "Spring Security", logo: "/src/assets/image/logos/spring_security.png"}

                ]
            },
            {
                groupName: "Programming Languages",
                frameworks: [
                { title: "Type Script", logo: "/src/assets/image/logos/typescript.png"},
                { title: "Type Script", logo: "/src/assets/image/logos/javascript.png"},
                { title: "Python", logo: "/src/assets/image/logos/python.png"},
                { title: "Java", logo: "/src/assets/image/logos/java.png"},
                { title: "C++", logo: "/src/assets/image/logos/cpp.png"}    
                ]
            }
        ]
        }
    }
}
</script>