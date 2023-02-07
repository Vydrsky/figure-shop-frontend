<template>
    <v-carousel-item cover :src="src">
    </v-carousel-item>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: false,
            default: "/img/bg.jpg"
        }
    }
}
</script>