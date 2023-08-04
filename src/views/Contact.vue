<template>
    <div class="ma-8 h-fit">
        <h1 class="text-4xl pl-4 mb-8">Contact Details</h1>
        <div class="flex flex-wrap justify-between">
            <a href="https://github.com/yanni8" class="flex w-96 justify-start align-center rounded-lg hover:bg-stone-950/[.4] w-fit pa-4 cursor-pointer">
                <v-icon icon="fab fa-github" size="5rem"></v-icon>
                <h2 class="text-2xl text-center mx-5">Follow me on GitHub</h2>
            </a>
            <a class="flex w-96 justify-start align-center rounded-lg hover:bg-stone-950/[.4] w-fit pa-4 cursor-pointer">
                <v-icon icon="fab fa-linkedin" size="5rem"></v-icon>
                <h2 class="text-2xl text-center mx-5">Add me on LinkedIn</h2>
            </a>
            <a href="mailto:mail@ynnk.dev" class="flex w-96 justify-start align-center rounded-lg hover:bg-stone-950/[.4] w-fit pa-4 cursor-pointer">
                <v-icon icon="far fa-envelope" size="5rem"></v-icon>
                <h2 class="text-2xl text-center mx-5">Send me a Email</h2>
            </a>
            <a href="https://www.codewars.com/users/Yanni2" class="flex w-96 justify-start align-center rounded-lg hover:bg-stone-950/[.4] w-fit pa-4 cursor-pointer">
                <v-icon icon="fas fa-code" size="5rem"></v-icon>
                <h2 class="text-2xl text-center mx-5">Follow me on CodeWars</h2>
            </a>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "Contact"
}
</script>