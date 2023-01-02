<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-btn :link="link" :to="to" flat class="text-text text-button text-lg-h6 text-center"
            block :ripple='false' v-bind="props" :color="isHovering ? 'accent' : 'secondary'">
            <slot></slot>
        </v-btn>
    </v-hover>
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