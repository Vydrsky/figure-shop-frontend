<template>
    <article>
        <v-container class="my-12" id="content">
            <line-spacer></line-spacer>
            <v-row justify="center">
                <v-col class="text-text text-center font-weight-black">
                    NASI WSPÓŁPRACOWNICY
                </v-col>
            </v-row>
            <v-row justify="center" align="center" class="mb-12">
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
            </v-row>
            <v-row justify="center" class="text-body-1 text-text text-left my-8">
                <home-proof-text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio pariatur illum
                    perspiciatis repellendus eveniet facilis tempora, rerum nostrum numquam cum voluptatum
                    necessitatibus tenetur tempore blanditiis dolor nihil deserunt ipsa?
                </home-proof-text>
                <home-proof-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus sed quisquam soluta ab, atque
                    corporis earum eaque eveniet asperiores deserunt? Aspernatur, perspiciatis eligendi. Illum nobis
                    necessitatibus excepturi ipsum tempora!
                </home-proof-text>
                <home-proof-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dignissimos sed voluptatum,
                    deleniti dolore quaerat aut harum mollitia maxime voluptates suscipit explicabo illo est possimus
                    veniam tenetur dolorem aliquid rem.
                </home-proof-text>
            </v-row>
            <v-row justify="center" class="my-8">
                <home-user-comment></home-user-comment>
                <home-user-comment></home-user-comment>
            </v-row>
            <v-row class="my-8" justify="center">
                <home-social-links :size="size"></home-social-links>
            </v-row>
            <line-spacer></line-spacer>
        </v-container>
    </article>
</template>

<script>
import HomeAssociateCard from '../../dedicated/home/HomeAssociateCard.vue'
import HomeUserComment from '../../dedicated/home/HomeUserComment.vue'
import HomeSocialLinks from '../../dedicated/home/HomeSocialLinks.vue'
import HomeProofText from '../../dedicated/home/HomeProofText.vue'
import LineSpacer from '../../global/LineSpacer.vue'

export default {
    components: {
        HomeAssociateCard,
        HomeUserComment,
        HomeSocialLinks,
        HomeProofText,
        LineSpacer
    },
    computed: {
        size() {
            if (this.$vuetify.display.sm || this.$vuetify.display.xs) {
                return 60;
            }
            else {
                return 90;
            }
        },

    }
}

</script>