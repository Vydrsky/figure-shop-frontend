<template>
    <section>
        <div class="pa-12 bg-secondary"></div>
        <v-row no-gutters justify="center" align="center">
            <v-col cols="12" sm="10" md="8" lg="6" class="about-content">
                <v-img src="/img/tw.jpg" cover></v-img>
            </v-col>
        </v-row>
        <v-row no-gutters justify="center" align="center">
            <v-col cols="12" sm="10" md="8" lg="6" class="text-body-1 text-md-h6 text-justify pb-8 about-content ma-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit id quibusdam architecto
                pariatur sunt itaque in aperiam at veniam reiciendis. Maiores pariatur, facere assumenda neque
                nesciunt vitae provident iure delectus.<br><br> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quasi illum dolor fuga, consequatur odit, ipsam ullam ducimus velit iste
                eos assumenda blanditiis et cupiditate reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aspernatur molestiae voluptates doloribus accusantium, <br><br> provident nisi laboriosam deleniti
                et
                qui
                ea aperiam ullam sint, quisquam id voluptatum repellendus, a beatae voluptatibus.
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: false,
            default: "/img/logo.jpg"
        },
        imageSwap: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style>
.about-content {
    position: relative;
    top: -10vw;
}
</style>
