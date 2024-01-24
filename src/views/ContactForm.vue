<template>
    <div class="w-full flex justify-center items-center">
        <div class="w-[max(40%, 10rem)] mx-6 bg-[#3005534f] p-12 mb-12 rounded-2xl">
            <h1 class="text-4xl">Contact</h1>
            <div class="h-4"></div>
            <p>
                If you have any questions or suggestions, please feel free to contact me.
            </p>
            <div class="h-4"></div>
            <v-text-field v-model="email" label="Email" class="w-full"></v-text-field>
            <div class="h-4"></div>
            <v-textarea v-model="message" label="Message" class="w-full"></v-textarea>
            <div class="h-4"></div>
            <v-btn @click="sendMail()" class="w-full border hover:!bg-[#ffffff8c] hover:!text-black border-white bg-red-900" color="transparent">Send</v-btn>
        </div>
    </div>
</template>

<script lang="ts">

import axios from 'axios';

export default {
    name: "ContactForm",

    data(){
        return {
            email: "",
            message: ""
        }
    },

    methods:{
        sendMail(){
            axios.post("https://contactapi.ynnk.dev", {
                email: this.email,
                message: this.message
            }).then(() => {
                this.$root.$emit("show-snackbar", "Message sent successfully");
            }).catch(() => {
                this.$root.$emit("show-snackbar", "An error occurred while sending the message");
            })
        }
    }
}
</script>