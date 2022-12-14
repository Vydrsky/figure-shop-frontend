<template>
    <section class="d-flex align-stretch">
        <v-parallax scale="0.5" class="background" src="img/bg.jpg"></v-parallax>
        <v-container>
            <v-row justify="center" class="pa-2">
                <v-col cols="6" sm="4" lg="2" class="pa-8">
                    <div class="logo">
                        <v-img src="img/logo.jpg" class="logoimg"></v-img>
                    </div>
                </v-col>
            </v-row>
            <v-row justify="left" align="center" class="mt-0 mt-md-4">
                <v-col cols="12" md="10">
                    <p class="outline text-text text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-black">Lorem,
                        ipsum
                        dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </v-col>
            </v-row>
            <v-row justify="left" align="center" class="mt-2 mt-md-5">
                <v-col cols="12" md="8">
                    <p class="outline text-text text-body-1 text-sm-h6 text-md-h6 font-weight-black">Lorem, ipsum
                        dolor
                        sit amet consectetur adipisicing elit. Proin in nibh vel velit luctus aliquam id at metus.
                        Sed
                        vel vehicula erat.
                        Nullam sagittis maximus lorem in feugiat. Praesent interdum metus et nulla rhoncus
                        fermentum.
                    </p>
                </v-col>
            </v-row>
            <v-row align="end" class="mt-16 mt-lg-16">
                <v-col cols="12">
                    <div class="line"></div>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-16 mt-md-16">
                <home-action-button>Dowiedz się wiecej</home-action-button>
                <v-col cols="1"></v-col>
                <home-action-button>Przejdź do strony</home-action-button>
            </v-row>
            <v-row align="end" class="mt-14 mt-md-10 pa-2">
                <v-col>
                    <v-sheet class="bottom-icon bg-accent mt-16 mt-md-10"></v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </section>
    <div class="pa-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nostrum aspernatur sed magnam
        ipsum tempore
        neque amet totam quo voluptates nihil deleniti debitis corporis ab, aut, molestias deserunt. Voluptatem, quidem.
    </div>
</template>

<script>
import HomeActionButton from '../../components/page-components/HomeActionButton.vue'

export default {
    components: {
        HomeActionButton
    }
}
</script>

<style scoped>
section {
    position: relative;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    filter: saturate(0);
    filter: brightness(25%);
}

.logoimg {
    border-radius: 10px;
}

.line {
    border-bottom: 2px dashed white;
}

.bottom-icon {
    width: 100px;
    height: 10px;
    border: 2px solid #f5f5f5;
    border-radius: 5px;
    margin: 0 auto;
}
</style>