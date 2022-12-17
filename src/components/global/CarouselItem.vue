<template>
    <v-carousel-item :src="src" cover>
    </v-carousel-item>
</template>

<script>
export default{
    props:{
        src:{
            type: String,
            required: false,
            default: "/img/bg.jpg"
        }
    }
}
</script>