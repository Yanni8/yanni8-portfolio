<template>
    <div class="flex aling-center justify left">
        <div class="w-full h-2 rounded-lg bg-gray-200 my-5 max-w-[60%]">
            <div :style="{ 'width': experienceWidth }">
                <div class="h-2 rounded-lg w-full slider bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
        </div>
        <span class="h-min my-auto ml-5 relative w-[40%]"> <div class="inline">{{ title }}</div> <div class="inline absolute right-0 max-md:hidden">{{ experienceInYear }} of experience</div></span>
    </div>
</template>
<script lang="ts">
import { networkInterfaces } from 'os';

export default {
    name: "ExperienceSlider",
    props: {
        experience: {
            required: true,
            type: Number
        },
        title: {
            required: true,
            type: String
        },
    },
    data() {
        return {
            startDate: Date.parse('2021-08-01'),
            now: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime(),
        }
    },
    computed: {
        experienceWidth() {
            return (this.now - this.experience) / (this.now - this.startDate) * 100 + "%";
        },

        experienceInYear() {
            let months = Math.ceil((this.now - this.experience) / 2629800000);
            const years = Math.floor(months / 12);
            months = months % 12;
            let yearsInText = ""
            if (years) {
                yearsInText = years + " year" + (years > 1 ? "s " : " ");
            }

            if (months) {

                if (yearsInText) {
                    yearsInText += " and ";
                }

                return yearsInText + months + " month" + (months > 1 ? "s" : "");
            }
            return yearsInText;
        }
    },
}
</script>
<style scoped>
.slider {
    width: 0%;
}

.is-visible .slider {
    animation: slide-in 3s forwards;
}

@keyframes slide-in {
    form {
        width: 0%;
    }

    to {
        width: 100%;
    }
}
</style>