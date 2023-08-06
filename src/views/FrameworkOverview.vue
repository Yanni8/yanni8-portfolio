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

import angular from '@/assets/image/logos/angular.svg';
import vue from '@/assets/image/logos/vue3.png';
import tailwind from '@/assets/image/logos/tailwindcss.png';
import ngrx from '@/assets/image/logos/ngrx.svg';

import springboot from '@/assets/image/logos/spring.png';
import springsecurity from '@/assets/image/logos/spring_security.png';

import ts from '@/assets/image/logos/typescript.png';
import js from '@/assets/image/logos/javascript.png';
import java from '@/assets/image/logos/java.png';
import python from '@/assets/image/logos/python.png';
import cpp from '@/assets/image/logos/cpp.png';

import mysql from '@/assets/image/logos/mysql.png';
import mongodb from '@/assets/image/logos/mongodb.png';

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
                    { title: "Vue 3", logo: vue, projectUrl: "https://github.com/Yanni8/yanni8-portfolio/" },
                    { title: "Angular", logo: angular, projectUrl: "https://github.com/bbzblit/stundenplan-ui" },
                    { title: "NgRx", logo: ngrx, projectUrl: "https://github.com/bbzblit/stundenplan-ui" },
                    { title: "TailwindCSS", logo: tailwind, projectUrl: "https://github.com/Yanni8/yanni8-portfolio/" }
                ]
            },
            {
                groupName: "Backend Technologies",
                frameworks: [
                    { title: "Spring Boot", logo: springboot, projectUrl: "https://github.com/Yanni8/M295" },
                    { title: "Spring Security", logo: springsecurity, projectUrl: "https://github.com/Yanni8/M295" }

                ]
            },
            {
                groupName: "Programming Languages",
                frameworks: [
                    { title: "Type Script", logo: ts, projectUrl: "https://github.com/Yanni8/M294" },
                    { title: "Java Script", logo: js, projectUrl: "https://github.com/bbzblit/m293-project" },
                    { title: "Python", logo: python, projectUrl: "" },
                    { title: "Java", logo: java, projectUrl: "https://github.com/Yanni8/M295" },
                    { title: "C++", logo: cpp, projectUrl: "https://github.com/bbzblit/stundenplan-api" }
                ]
            },
            {
                groupName: "Databases",
                frameworks: [
                    { title: "MySQL", logo: mysql, projectUrl: "https://github.com/bbzblit/stundenplan-api"},
                    { title: "MongoDB", logo: mongodb, projectUrl: "https://github.com/bbzblit/m322-backend" },
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