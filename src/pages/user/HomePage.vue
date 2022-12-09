<template>
    <v-parallax class="container">
        <v-img src="/img/bg.jpg" class="blur" cover></v-img>
        <section>
            <div class="text-center text-h1 font-weight-black pa-8 text-accent">
                <span>INSPIRUJĄCY TEKST</span>
            </div>
            <div class="text-center text-h4 pa-8">
                Co Proponujemy? <br> Jakie wartości przedstawiamy? <br> Produkujemy wysokiej klasy produkty itd. itd.?
            </div>
        </section>
    </v-parallax>
    <div class="py-12">
        <div class="side-left bg-secondary">
        
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    height: 100vh;
}

.blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: brightness(20%);
}

section {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.side-left{
    border-top-right-radius: 3em;
    border-bottom-right-radius: 3em;
    height: 300px;
    width:50%;
}
</style>