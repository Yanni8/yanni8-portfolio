<template> 
    <div class="border w-40 rounded-lg ma-6 pa-4 cursor-pointer hover:scale-125">
        <img :src="logo" class="h-24 mx-auto">
        <h1 class="text-center mt-2">{{ title }}</h1>
    </div>
</template>
<script lang="ts">
export default{
    name: "FrameworkCard",
    props: {
        title: {
            required: true,
            type: String
        },
        logo: {
            require: true,
            type: String,
        }
    }
}
</script>