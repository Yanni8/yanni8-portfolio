<template>
    <div @click="$emit('openProject')"
        class="library-card relative border w-40 min-w-[10rem] rounded-lg ma-6 pa-4 cursor-pointer md:hover:scale-125">
        <img :src="logo" class="h-24 mx-auto rounded-lg">
        <h1 class="text-center mt-2">{{ title }}</h1>
        <div class="hover-overlay  rounded-lg flex justify-center align-end max-md:-mx-7">
            <v-btn :href="projectUrl" :disabled="!projectUrl" color="white" class="learn-more w-min mb-1 scale-75"
                variant="outlined">
                {{ projectUrl ? 'View in Repo' : 'No Public Repo :(' }}
            </v-btn>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "FrameworkCard",
    emits: ['openProject'],
    props: {
        title: {
            required: true,
            type: String
        },
        logo: {
            require: true,
            type: String,
        },
        projectUrl: {
            require: false,
            type: String
        }
    }
}
</script>
<style scoped>
@media only screen and (min-width: 768px) {

    .library-card:hover>h1,
    .library-card .hover-overlay>.learn-more {
        display: none;
    }

    .library-card:hover .hover-overlay>.learn-more {
        display: flex;

    }

    .library-card:hover .hover-overlay {
        background-color: rgba(211, 211, 211, 0.452);
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
}
</style>