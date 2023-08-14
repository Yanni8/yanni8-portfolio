<template>
    <div class="ma-8 h-fit">
        <h1 class="text-4xl ml-4 mb-5">My Technical Skills</h1>
        <div class="-mx-8 h-fit pt-8 flex" id="frameworks">
            <div class="h-fit flex" id="framework-slider">
                <framework-card class="framework-card" v-for="framework in frameworks" :logo="framework.logo"
                :title="framework.title" :project-url="framework.projectUrl"></framework-card>
                <framework-card class="framework-card" v-for="framework in frameworks" :logo="framework.logo"
                :title="framework.title" :project-url="framework.projectUrl"></framework-card>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

import FrameworkCard from '@/components/FrameworkCard.vue';

import angular from '@/assets/image/logos/angular.png';
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
import bash from '@/assets/image/logos/bash.png';

import mysql from '@/assets/image/logos/mysql.png';
import mongodb from '@/assets/image/logos/mongodb.png';

import docker from '@/assets/image/logos/docker.webp';
import debian from '@/assets/image/logos/debian.png';

export default {
    name: "FrameworkOverivew",
    components: {
        FrameworkCard
    },
    data() {
        return {
            frameworks: [
                { title: "Vue 3", logo: vue, projectUrl: "https://github.com/Yanni8/yanni8-portfolio/" },
                { title: "Angular", logo: angular, projectUrl: "https://github.com/bbzblit/stundenplan-ui" },
                { title: "NgRx", logo: ngrx, projectUrl: "https://github.com/bbzblit/stundenplan-ui" },
                { title: "TailwindCSS", logo: tailwind, projectUrl: "https://github.com/Yanni8/yanni8-portfolio/" },
                { title: "Spring Boot", logo: springboot, projectUrl: "https://github.com/Yanni8/M295" },
                { title: "Spring Security", logo: springsecurity, projectUrl: "https://github.com/Yanni8/M295" },
                { title: "Type Script", logo: ts, projectUrl: "https://github.com/Yanni8/M294" },
                { title: "Java Script", logo: js, projectUrl: "https://github.com/bbzblit/m293-project" },
                { title: "Python", logo: python, projectUrl: "" },
                { title: "Java", logo: java, projectUrl: "https://github.com/Yanni8/M295" },
                { title: "C++", logo: cpp, projectUrl: "https://github.com/bbzblit/stundenplan-api" },
                { title: "Bash", logo: bash, projectUrl: "" },
                { title: "MySQL", logo: mysql, projectUrl: "https://github.com/bbzblit/stundenplan-api" },
                { title: "MongoDB", logo: mongodb, projectUrl: "https://github.com/bbzblit/m322-backend" },
                { title: "Docker", logo: docker, projectUrl: "https://github.com/bbzblit/stundenplan-api" },
            ]
        }
    },
    methods: {
        openDetails(details: string) {

        }
    }
}
</script>
<style>

#frameworks {
    overflow-x: hidden;
}

#frameworks,
#framework-slider {
    pointer-events: none;
}

#framework-slider{
    pointer-events: none;
    animation: carousel 20s linear infinite;
}

#framework-slider>.framework-card {
    pointer-events: auto;
}

#framework-slider:hover {
    animation-play-state: paused;
}

@keyframes carousel {
    0% {
        transform: translateX(0)
    }

    100% {
        transform: translateX(calc(-12rem * 15));
    }
}
</style>