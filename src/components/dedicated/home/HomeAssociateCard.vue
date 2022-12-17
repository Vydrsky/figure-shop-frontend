<template>
    <v-col cols="6" md="3" lg="2">
        <div class="pa-2 bordered">
            <v-card>
                <v-img :src="'/img/' + image" cover></v-img>
            </v-card>
        </div>
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