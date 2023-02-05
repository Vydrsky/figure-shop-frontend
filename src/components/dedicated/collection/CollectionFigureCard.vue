<template>
    <v-col cols="6" md="4" lg="3">
        <v-card rounded="md" class="bg-primary accent-border" elevation="20" block>
            <v-hover v-slot="{ isHovering, props }" v-model="hover">
                <v-img :src="figure.filePath" cover :height="size" v-bind="props" :class="isHovering ? 'zoom-in' : ''"
                    eager></v-img>
                <transition name="overlay" mode="out-in" @after-enter="setContent(true)" @before-leave="setContent(false)">
                    <div v-if="hover" class="overlay w-100 h-100" v-bind="props">
                        <transition name="details" mode="out-in" >
                            <div v-if="showContent" class="d-flex flex-column align-center text-white justify-center h-100">
                                <div class="d-flex justify-center align-center py-3">
                                    <v-icon :size="size / 8">mdi-text-box-multiple</v-icon>
                                    <p class="text-body-1 pa-2">Wyświetl szczegóły</p>
                                </div>
                                <div class="d-flex justify-center align-center py-3">
                                    <v-icon :size="size / 8">mdi-magnify</v-icon>
                                    <p class="text-body-1 pa-2">Powiększ</p>
                                </div>
                            </div>
                        </transition>
                    </div>
                </transition>
            </v-hover>
        </v-card>
    </v-col>
</template>

<script>



export default {
    props: {
        figure: {
            type: Object,
            required: true,
            default: null,
        }
    },
    data() {
        return {
            hover: false,
            showContent: false,
        }
    },
    methods: {
        setContent(value){
            this.showContent = value;
        }
    },
    computed: {
        size() {
            if (this.$vuetify.display.xs) {
                return 150;
            }
            else if (this.$vuetify.display.lgAndDown) {
                return 350;
            }
            else {
                return 500;
            }
        },
        details() {
            return this.$route.path + '/details/' + this.figure.id;
        }
    }
}
</script>

<style scoped>
.v-card {
    position: relative;
    text-align: center;
}

.overlay {
    position: absolute;
    top: 0%;
}

.accent-border {
    border: 3px solid rgb(var(--v-theme-accent))
}

.overlay:hover {
    background-color: rgb(var(--v-theme-accent),0.2);
}

.details-enter-from,
.details-leave-to {
    transform: translateY(-25px);
}

.details-enter-to,
.details-leave-from {
    transform: translateY(0);
}

.details-enter-active,
.details-leave-active {
    transition: transform 0.2s ease
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

.overlay-enter-to,
.overlay-leave-from {
    opacity: 1;
}

.overlay-enter-active,
.overlay-leave-active {
    transition: all 0.2s ease
}
</style>