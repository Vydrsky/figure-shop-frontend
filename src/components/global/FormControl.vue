<template>
    <div class="my-2">
        <p class="text-subtitle-1">
            {{ title }}
        </p>
        <v-text-field v-if="inputType === 'textfield'" :rules="[isRequired,isEmail]"></v-text-field>
        <v-textarea v-if="inputType === 'textarea'" :rows="rows" :rules="[isRequired,isEmail]"></v-textarea>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Text'
        },
        inputType: {
            type: String,
            default: 'textfield'
        },
        rows: {
            type: Number,
            default: 10
        },
        email: {
            type: Boolean,
            default: false,
        },
        required:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            rules: {
                required: value => !!value || 'Required.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            }
        }
    },
    computed: {
        isEmail() {
            if (!this.email)
                return true;
            else
                return this.rules.email;
        },
        isRequired() {
            if (!this.required)
                return true;
            else
                return this.rules.required;
        }
    }
}
</script>