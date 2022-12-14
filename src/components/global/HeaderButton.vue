<template>
    <v-btn :link="link" :to="to" flat variant="text" class="outline text-text text-body-1 text-lg-h6 text-center" block rounded="0" :ripple='false'>
        <slot></slot>
    </v-btn>
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
