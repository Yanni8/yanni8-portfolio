<template>
    <div class="ma-8 h-fit px-4">
        <h1 class="text-4xl mb-5">My Education</h1>
        <v-divider thickness="2" class="mb-8 w-full h-fit"></v-divider>
        <div class="mt-12">
            <h2 class="text-4xl">School Timeline</h2>
            <v-divider class="my-4"></v-divider>
            <v-timeline :direction="isMobile ? 'vertical' : 'horizontal'" truncate-line="end"
                :class="{ 'min-h-[30rem]': isMobile }">
                <v-timeline-item>
                    <template v-slot:opposite>
                        2012 - 2018
                    </template>
                    Primary School
                </v-timeline-item>

                <v-timeline-item>
                    <template v-slot:opposite>
                        2018 - 2021
                    </template>
                    <div class="text-center">
                        Highest Level <br /> of Secondary School
                    </div>
                </v-timeline-item>

                <v-timeline-item>
                    <template v-slot:opposite>
                        2021 - Present
                    </template>
                    <div class="text-center">
                        Apprenticeship at <br />
                        F. Hoffmann La-Roche AaG <br />
                        (With Berufsmaturität)
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
        <div class="-mb-8">
            <h2 class="text-4xl mt-8">Natural Languages</h2>
            <v-divider class="my-4"></v-divider>
            <ul id="list-none mt-8">
                <li
                    class="p-4 w-[8rem] max-md:mx-auto text-center md:inline-block bg-gray-800/[.7] cursor-pointer m-4 hover:bg-gray-900/[.7]">
                    French</li>
                <li
                    class="p-4 w-[8rem] max-md:mx-auto text-center md:inline-block bg-gray-800/[.7] cursor-pointer m-4 hover:bg-gray-900/[.7]">
                    Englisch</li>
                <li
                    class="p-4 w-[8rem] max-md:mx-auto text-center md:inline-block bg-gray-800/[.7] cursor-pointer m-4 hover:bg-gray-900/[.7]">
                    German</li>
            </ul>
        </div>

    </div>
</template>
<script lang="ts">
export default {
    name: "Education",
    computed: {
        isMobile() {
            return window.innerWidth <= 768;
        }
    }
}
</script>   