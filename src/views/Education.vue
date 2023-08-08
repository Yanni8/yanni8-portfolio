<template>
    <div class="ma-8 h-fit px-4">
        <h1 class="text-4xl mb-5">My Education</h1>
        <v-divider thickness="2" class="mb-8 w-full h-fit"></v-divider>
        <div class="-mb-8 mt-12">
            <v-timeline :direction=" isMobile ? 'vertical': 'horizontal'" truncate-line="end" :class="{'min-h-[30rem]' : isMobile}">
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
                        Highest Level <br/> of Secondary School
                    </div>
                </v-timeline-item>

                <v-timeline-item>
                    <template v-slot:opposite>
                        2021 - Present
                    </template>
                    <div class="text-center">
                        Apprenticeship at <br />
                        F. Hoffmann La-Roche AaG
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>

    </div>
</template>
<script lang="ts">
export default {
    name: "Education",
    computed: {
        isMobile(){
            return window.innerWidth <= 768; 
        }
    }
}
</script>   