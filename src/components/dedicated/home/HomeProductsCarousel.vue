<template>
    <v-row justify="start" class="bg-secondary border-lg my-0 d-none d-md-flex">
        <v-col cols="12" md="6" class=" pa-12 ma-0">
            <v-sheet elevation="24">
                <v-carousel hide-delimiter-background show-arrows="hover" cycle interval="4000" height="900">
                    <v-carousel-item v-for="source in sources" :key="source" :src="source" cover>
                    </v-carousel-item>
                </v-carousel>
            </v-sheet>
        </v-col>
        <v-col cols="6" class="center-vertical text-h6">
            <div class="w-75 center-horizontal text-center pa-8">
                <v-icon :size="200">mdi-clipboard-check</v-icon>
            </div>
            <div class="w-75 center-horizontal text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident veniam ipsa veritatis suscipit
                doloremque asperiores impedit officiis vitae repellat odit odio, voluptate deserunt sequi. Ratione, eos
                voluptas. Odio, distinctio?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, eum quis
                itaque sed quam perferendis. Enim, quaerat ipsum nam alias id, quod ea inventore omnis, eius molestias
                dignissimos non earum?
            </div>
        </v-col>
    </v-row>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            sources: [
                '/img/pantera.jpg',
                '/img/kropla.jpg',
                '/img/bird.jpg'
            ]
        }
    }
}
</script>