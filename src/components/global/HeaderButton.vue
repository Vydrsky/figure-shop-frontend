<template>
    <div class="px-0 px-md-4">
        <v-btn :link="link" :to="to" flat class="text-button text-text text-center" variant="plain" :ripple='false'>
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