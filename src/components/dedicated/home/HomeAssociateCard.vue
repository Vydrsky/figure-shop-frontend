<template>
    <v-col cols="6" sm="3" md="2">
        <v-card :elevation="24">
            <v-img :src="'/img/' + image" cover></v-img>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: false,
            default: 'company.png'
        }
    }
}
</script>