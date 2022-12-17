<template>
    <article>
        <v-container>
            <div class="py-10 text-h6 text-md-h5 outline text-text text-center mt-md-10">Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dicta
                nostrum aspernatur sed magnam
                ipsum tempore
                neque amet totam quo voluptates nihil deleniti debitis corporis ab, aut, molestias deserunt. Voluptatem,
                quidem.
            </div>
            <v-row justify="center" align="center" class="pa-0 py-md-5">
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
                <home-associate-card></home-associate-card>
            </v-row>
            <v-row class="mt-12 pa-0 py-md-5">
                <home-user-comment></home-user-comment>
                <home-user-comment></home-user-comment>
                <home-user-comment></home-user-comment>
                <home-user-comment></home-user-comment>
            </v-row>
            <v-row class="mt-10 pa-0 py-md-5" justify="center">
                <home-social-links :size="size"></home-social-links>
            </v-row>
        </v-container>
    </article>
</template>

<script>
import HomeAssociateCard from '../../dedicated/home/HomeAssociateCard.vue'
import HomeUserComment from '../../dedicated/home/HomeUserComment.vue'
import HomeSocialLinks from '../../dedicated/home/HomeSocialLinks.vue'

export default{
    components:{
        HomeAssociateCard,
        HomeUserComment,
        HomeSocialLinks
    },
    computed:{
        size(){
            if(this.$vuetify.display.sm || this.$vuetify.display.xs){
                return 45;
            }
            else{
                return 90;
            }
        }
    }
}

</script>