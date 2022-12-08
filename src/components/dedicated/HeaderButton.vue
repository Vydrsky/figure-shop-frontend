<template>
    <v-col cols="1">
        <v-btn :link="link" :to="to" flat variant="plain" class="text-text" rounded="0" block :ripple='false'>
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