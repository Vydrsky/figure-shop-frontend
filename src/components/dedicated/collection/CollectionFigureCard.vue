<template>
    <v-col cols="12" sm="6"  md="6" lg="4" xl="3">
        <v-card rounded="md" class="bg-primary accent-border" elevation="20" block>
            <v-hover v-slot="{ isHovering, props }" v-model="hover">
                <v-img :src="figure.filePath" cover :height="size" v-bind="props" :class="isHovering ? 'zoom-in' : ''"
                    eager></v-img>
                <transition name="overlay" @after-enter="setContent(true)" @before-leave="setContent(false)">
                    <div v-if="hover" class="overlay w-100 h-100" v-bind="props">
                        <transition name="details">
                            <div v-if="showContent"
                                class="d-flex flex-column align-center text-white justify-center h-100">
                                <collection-figure-card-button :size="size / 8" icon='mdi-text-box-multiple'
                                    text="Wyświetl Szczegóły" :link="details"></collection-figure-card-button>
                                <collection-figure-card-button v-if="$vuetify.display.mdAndUp" :size="size / 8" icon="mdi-magnify"
                                    text="Powiększ" :link="picture"></collection-figure-card-button>
                            </div>
                        </transition>
                    </div>
                </transition>
            </v-hover>
        </v-card>
    </v-col>
</template>

<script>
import CollectionFigureCardButton from './CollectionFigureCardButton.vue'

export default {
    components: {
        CollectionFigureCardButton
    },
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
        setContent(value) {
            this.showContent = value;
        }
    },
    computed: {
        size() {
            if (this.$vuetify.display.xs) {
                return 400;
            }
            else if (this.$vuetify.display.lgAndDown) {
                return 450;
            }
            else {
                return 500;
            }
        },
        details() {
            return this.$route.path + '/details/' + this.figure.id;
        },
        picture() {
            return this.$route.path + '/picture/' + this.figure.id
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
    background-color: rgb(var(--v-theme-accent), 0.2);
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
    transition: transform 0.1s ease
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
    transition: opacity 0.1s ease
}
</style>