<template>
    <section class="bg-secondary my-12">
        <v-row no-gutters align="center">
            <v-col  v-if="!imageSwap">
                <v-img cover :src=imageSrc></v-img>
            </v-col>
            <v-col cols="12" md="6" class="pa-12 text-center text-md-right text-h6 text-md-h5">
                <slot></slot>
            </v-col>
            <v-col  v-if="imageSwap">
                <v-img cover :src=imageSrc></v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default{
    props:{
        imageSrc:{
            type: String,
            required: false,
            default: "/img/logo.jpg"
        },
        imageSwap:{
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>
