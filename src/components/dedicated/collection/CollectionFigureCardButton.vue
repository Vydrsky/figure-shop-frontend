<template>
    <div class="d-flex justify-center align-center py-3">
        <v-btn :prepend-icon="icon" color="secondary" rounded="0" :to="link">{{ text }}</v-btn>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            required: true,
        },
        icon:{
            type:String,
            required: true,
        },
        text:{
            type: String,
            required: false,
            default: ""
        },
        link:{
            type: String,
            required: true
        }
    }
}
</script>