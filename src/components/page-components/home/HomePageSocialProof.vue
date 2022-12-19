<template>
    <article>
        <v-container>

            <v-row justify="center" class="text-body-1 text-text text-left">
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
            <v-row justify="space-around" align="center" class="pa-0 py-md-5">
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
            </v-row>
            <v-row justify="center" class="mt-12 pa-0 py-md-5">
                <home-user-comment></home-user-comment>
                <home-user-comment></home-user-comment>
            </v-row>
            <v-row class="mt-4 pa-5" justify="center">
                <home-social-links :size="size"></home-social-links>
            </v-row>
        </v-container>
    </article>
</template>

<script>
import HomeAssociateCard from '../../dedicated/home/HomeAssociateCard.vue'
import HomeUserComment from '../../dedicated/home/HomeUserComment.vue'
import HomeSocialLinks from '../../dedicated/home/HomeSocialLinks.vue'
import HomeProofText from '../../dedicated/home/HomeProofText.vue'

export default {
    components: {
        HomeAssociateCard,
        HomeUserComment,
        HomeSocialLinks,
        HomeProofText
    },
    computed: {
        size() {
            if (this.$vuetify.display.sm || this.$vuetify.display.xs) {
                return 60;
            }
            else {
                return 90;
            }
        }
    }
}

</script>