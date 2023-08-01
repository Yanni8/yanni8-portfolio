<template>
    <div class="ma-8 h-fit">
        <h1 class="text-4xl ml-4 mb-5">My Technical Skills</h1>
        <div class="h-fit">
            <div v-for="framework in frameworks" class="ma-4 h-fit">
                <h2 class="mb-2 text-xl max-sm:text-center">{{ framework.groupName }}</h2>
                <v-divider thickness="2" class="mb-8 w-full h-fit"></v-divider>
                <div class="flex flex-wrap max-md:justify-center min-h-40">
                    <framework-card v-for="library in framework['frameworks']" :logo="library.logo"
                        :title="library.title" :project-url="library.projectUrl"></framework-card>
                </div>
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
                    { title: "Vue 3", logo: "/src/assets/image/logos/vue3.png", projectUrl: "https://github.com/Yanni8/yanni8-portfolio/" },
                    { title: "Angular", logo: "/src/assets/image/logos/angular.svg", projectUrl: "https://github.com/bbzblit/stundenplan-ui" },
                    { title: "NgRx", logo: "/src/assets/image/logos/ngrx.svg", projectUrl: "https://github.com/bbzblit/stundenplan-ui" },
                    { title: "TailwindCSS", logo: "/src/assets/image/logos/tailwindcss.png", projectUrl: "https://github.com/Yanni8/yanni8-portfolio/" }
                ]
            },
            {
                groupName: "Backend Technologies",
                frameworks: [
                    { title: "Spring Boot", logo: "/src/assets/image/logos/spring.png", projectUrl: "https://github.com/Yanni8/M295" },
                    { title: "Spring Security", logo: "/src/assets/image/logos/spring_security.png", projectUrl: "https://github.com/Yanni8/M295" }

                ]
            },
            {
                groupName: "Programming Languages",
                frameworks: [
                    { title: "Type Script", logo: "/src/assets/image/logos/typescript.png", projectUrl: "https://github.com/Yanni8/M294" },
                    { title: "Java Script", logo: "/src/assets/image/logos/javascript.png", projectUrl: "https://github.com/bbzblit/m293-project" },
                    { title: "Python", logo: "/src/assets/image/logos/python.png", projectUrl: "" },
                    { title: "Java", logo: "/src/assets/image/logos/java.png", projectUrl: "https://github.com/Yanni8/M295" },
                    { title: "C++", logo: "/src/assets/image/logos/cpp.png", projectUrl: "https://github.com/bbzblit/stundenplan-api" }
                ]
            },
            {
                groupName: "Databases",
                frameworks: [
                    { title: "MySQL", logo: "/src/assets/image/logos/mysql.png", projectUrl: "https://github.com/bbzblit/stundenplan-api"},
                    { title: "MongoDB", logo: "/src/assets/image/logos/mongodb.png", projectUrl: "https://github.com/bbzblit/m322-backend" },
                ]
            }
            ]
        }
    },
    methods: {
        openDetails(details: string){
            
        }
    }
}
</script>