<template>
    <v-col cols="12" md="7" lg="7">
        <v-card class="bg-secondary pa-5" elevation="10">
            <div class="d-flex text-start align-center">
                <v-avatar class="bg-secondary " size="50px">
                    <v-img :src="'/img/' + image" cover></v-img>
                </v-avatar>
                <p class="px-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit similique laboriosam amet hic
                    voluptatem
                    rerum aspernatur,</p>
            </div>
            <v-icon class="pt-3 text-end">mdi-star</v-icon>
            <v-icon class="pt-3 text-end">mdi-star</v-icon>
            <v-icon class="pt-3 text-end">mdi-star</v-icon>
            <v-icon class="pt-3 text-end">mdi-star</v-icon>
            <v-icon class="pt-3 text-end">mdi-star</v-icon>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: false,
            default: 'bird.jpg'
        }
    }
}
</script>