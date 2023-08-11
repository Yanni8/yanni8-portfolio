<template>
    <div class="w-[20rem] min-w-[25%] m-5 flex align-center justify-center flex-column h-40 bg-gray-800/[.7] rounded-lg">
        <h2 class="mx-auto w-fit mt-2 text-2xl">{{ title }}</h2>
        <div class="m-auto w-fit text-4xl">{{ displayedValue }}</div>
    </div>
</template>
<script lang="ts">

export default {

    name: "GithubStatsCard",

    props: {
        title: {
            reuqired: true,
            type: String
        },
        value: {
            required: true
        },
        inViewport: {
            required: true,
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            displayedValue: 0
        }
    },
    watch: {
        inViewport(value){
            if(value){
                this.onValueChange();
            }else{
                this.displayedValue = 0;
            }
        }
    },
    methods: {
        onValueChange() {
            if (this.displayedValue === this.value || !this.inViewport) { 
                return
            };
            if (this.displayedValue < this.value) {
                this.displayedValue++
            };
            if (this.displayedValue > this.value) {
                this.displayedValue--
            };
            setTimeout(() => this.onValueChange(), 1000 / this.value);
        }
    }
}
</script>