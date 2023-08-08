<template>
    <div
        class="library-card relative border w-40 min-w-[10rem] md:hover:!border-0 rounded-lg ma-6 pa-4 cursor-pointer md:hover:scale-125">
        <img :src="logo" class="h-24 mx-auto rounded-lg">
        <h1 class="text-center mt-2">{{ title }}</h1>
        <div class="hover-overlay  rounded-lg flex justify-center align-end max-md:-mx-7  animate-border">
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
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }

    .animate-border:hover {
        border: 2px solid transparent;
        animation: border-animation 300ms forwards linear;

    }

    .animate-border:hover::before {
        content: "";
        position: absolute;
        inset: 0;
        transform: translate3d(0, 0, -1px);
        background: conic-gradient(#0f172a 0deg, #0f172a 72deg, #0f172a 144deg, #0f172a 216deg, #0f172a 288deg);
        animation: border-animation-bg 300ms forwards linear;

        filter: blur(10px);
        clip-path: polygon(-100vmax -100vmax, 100vmax -100vmax, 100vmax 100vmax, -100vmax 100vmax, -100vmax -100vmax, 0 0, 0 100%, 100% 100%, 100% 0, 0 0);
    }

    @keyframes border-animation-bg {
        0% {
            background: conic-gradient(#0f172a 0deg, #0f172a 72deg, #0f172a 144deg, #0f172a 216deg, #0f172a 288deg);
        }

        20% {
            background: conic-gradient(#b827fc 0deg, #0f172a 72deg, #0f172a 144deg, #0f172a 216deg, #0f172a 288deg);
        }

        40% {
            background: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #0f172a 144deg, #0f172a 216deg, #0f172a 288deg);
        }

        60% {
            background: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #b8fd33 144deg, #0f172a 216deg, #0f172a 288deg);
        }

        80% {
            background: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #b8fd33 144deg, #fec837 216deg, #0f172a 288deg);
        }

        100% {
            background: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #b8fd33 144deg, #fec837 216deg, #fd1892 288deg);
        }
    }

    @keyframes border-animation {
        0% {
            border-image: conic-gradient(#0f172a 0deg, #0f172a 72deg, #0f172a 144deg, #0f172a 216deg, #0f172a 288deg);
            border-image-slice: 1;
        }

        20% {
            border-image: conic-gradient(#b827fc 0deg, #0f172a 72deg, #0f172a 144deg, #0f172a 216deg, #0f172a 288deg);
            border-image-slice: 1;
        }

        40% {
            border-image: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #0f172a 144deg, #0f172a 216deg, #0f172a 288deg);
            border-image-slice: 1;
        }

        60% {
            border-image: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #b8fd33 144deg, #0f172a 216deg, #0f172a 288deg);
            border-image-slice: 1;
        }

        80% {
            border-image: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #b8fd33 144deg, #fec837 216deg, #0f172a 288deg);
            border-image-slice: 1;
        }

        100% {
            border-image: conic-gradient(#b827fc 0deg, #2c90fc 72deg, #b8fd33 144deg, #fec837 216deg, #fd1892 288deg);
            border-image-slice: 1;
        }
    }
}
</style>