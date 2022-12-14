<template>
    <v-col cols="8" sm="3" style="border: 2px solid white" class="pa-4">
        <v-btn block rounded="0" color="accent text-center text-caption text-md-button" :link="link" :to="to"
            class="py-0 py-md-6" elevation="10">
            <slot></slot>
        </v-btn>
    </v-col>
</template>

<script>

export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>