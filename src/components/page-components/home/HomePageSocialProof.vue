<template>
    <article>
        <v-container>
            <div class="py-10 text-h5 outline text-text text-center">Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dicta
                nostrum aspernatur sed magnam
                ipsum tempore
                neque amet totam quo voluptates nihil deleniti debitis corporis ab, aut, molestias deserunt. Voluptatem,
                quidem.
            </div>
            <v-row justify="center" align="center">
                <associate-card></associate-card>
                <associate-card></associate-card>
                <associate-card></associate-card>
                <associate-card></associate-card>
            </v-row>
            <v-row class="mt-12">
                <user-comment></user-comment>
            </v-row>
        </v-container>
    </article>
</template>

<script>
import AssociateCard from '../../dedicated/home/HomeAssociateCard.vue'
import UserComment from '../../dedicated/home/HomeUserComment.vue'

export default{
    components:{
        AssociateCard,
        UserComment
    }
}

</script>