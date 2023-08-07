<template>
    <div class="ma-8 h-fit px-4">
        <h1 class="text-4xl mb-4">About Me</h1>
        <v-divider thickness="2" class="mb-8 w-full h-fit"></v-divider>
        <div class="flex flex-wrap md:justify-left">
            <div class="md:w-[calc(100%-20rem)] min-w-[min(20rem, 100%)]">
                <h2 class="text-2xl max-md:text-xl">Hey, I'm <b>Yannick Müller</b>,</h2>
                <div class="h-4"></div>
                <p class="w-100">
                    I'm currently in the third year of my apprenticeship as a software engineer at the company <wbr/> <a  class="underline underline-offset-2 cursor-pointer" href="https://www.roche.ch/">F. Hoffmann
                    La-Roche AG.</a> <br />
                    I have experiences in full stack development with <span
                        class="underline underline-offset-2 cursor-pointer" @click="scrollTo('experience')">Java</span> and <span class="underline underline-offset-2 cursor-pointer" @click="scrollTo('experience')">Angular</span>
                    and
                    <span class="underline underline-offset-2 cursor-pointer" @click="scrollTo('experience')">Vue</span> <br />
                    I am always motivated to learn new technologies and expand my existing skills. <br />
                    What I love most about my job is that I have to solve new problems every day and can broaden my
                    experience in the process.
                </p>
                <br />
                <p>
                    I could already gain very valuable experience with 2 web projects in the company.<br />
                    I have also been able to expand my experience through various private projects. <br />
                    Currently, I am trying to gain some experience in the field of data analysis.
                </p>
                <br />
                <p>md
                    On my private laptop, I use Debian as operating system. <br />
                    However, I also have no problems working with Windows or MacOS. <br />
                    By using Linux on my personal device and by maintaining some private servers, <br />
                    was I also be able to gain experience in the area of server setup and maintenance.
                </p>
            </div>
            <div class="max-md:mx-auto min-w-[min(20rem, 100%)] flex justify-center align-start">
            </div>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    name: "AboutMe",
    data() {
        return {
        }
    },
    methods: {
        scrollTo(id: string) {
            const domElement = document.getElementById(id);
            if (domElement) {
                domElement.scrollIntoView({ behavior: 'smooth' });
            }

        }
    }
}
</script>
