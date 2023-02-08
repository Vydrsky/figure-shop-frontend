<template>
    <div class="px-0 px-md-4">
        <v-btn :link="link" :to="to" flat class="text-button text-md-h6 text-text text-center" variant="text" :ripple='false' block rounded="0" color="accent">
            <slot></slot>
        </v-btn>
    </div>
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