<template>
    <section>
        <v-parallax scale="0.5" class="background">
            <v-img src="img/bg.jpg" height="100%" :eager="true" gradient="rgba(0,0,0,0.5), rgba(0,0,0,0.5)"
                cover></v-img>
        </v-parallax>
        <v-container>
            <v-row justify="center" class="pa-2">
                <v-col cols="6" sm="4" lg="2" class="pa-8">
                    <v-card class="logo elevation-24">
                        <v-img eager src="img/logo.jpg" class="logoimg"></v-img>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="start" align="center" class="mt-0 mt-lg-4">
                <v-col cols="12">
                    <p class="outline text-white text-h4 text-sm-h3 text-lg-h1 font-weight-black">Lorem,
                        ipsum dolor sit amet consect
                        adipisicing elit amet.
                    </p>
                </v-col>
            </v-row>
            <v-row justify="start" align="center" class="mt-2 mt-lg-5">
                <v-col cols="12" md="8">
                    <p class="outline text-white text-body-1 text-sm-h6 text-lg-h6 font-weight-black">Lorem, ipsum
                        dolor
                        sit amet consectetur adipisicing elit. Proin in nibh vel velit luctus aliquam id at metus.
                        Sed
                        vel vehicula erat.
                        Nullam sagittis maximus lorem in feugiat. Praesent interdum metus et nulla rhoncus
                        fermentum.
                    </p>
                </v-col>
            </v-row>
            <line-spacer></line-spacer>
            <v-row justify="center" class="mt-16 mt-lg-16">
                <home-action-button>Dowiedz się wiecej</home-action-button>
                <v-col cols="0" lg="1"></v-col>
                <home-action-button link to="collection">Przejdź do strony</home-action-button>
            </v-row>
            <v-row align="end" class="mt-2 mt-lg-10 pa-2">
                <v-col>
                    <v-sheet class="bottom-icon bg-text mt-16 mt-md-10" elevation="10"></v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import HomeActionButton from '../../dedicated/home/HomeActionButton.vue'
import LineSpacer from '../../global/LineSpacer.vue'

export default {
    components: {
        HomeActionButton,
        LineSpacer
    }
}
</script>

<style scoped>
section {
    position: relative;
    min-height: 100vh;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}

.logoimg {
    border-radius: 10px;
}

.bottom-icon {
    width: 100px;
    height: 10px;
    border: 2px solid #f5f5f5;
    border-radius: 5px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right:0;
    bottom: 10px;
}
</style>