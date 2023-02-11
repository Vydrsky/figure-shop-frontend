<template>
    <div>
        <p class="text-subtitle-1 font-weight-bold">
            {{ title }}
        </p>
        <v-text-field v-if="inputType === 'textfield'" :rules="[isRequired, isEmail, isPhone]"
            :suffix="suffix" :type="type" :variant="variant"></v-text-field>
        <v-textarea v-if="inputType === 'textarea'" :rows="rows" :rules="[isRequired, isEmail, isPhone]"></v-textarea>
        <v-radio-group v-if="inputType === 'radio'" v-model="radioGroup" :mandatory="required">
            <v-radio v-for="radio in dataArray.length" :key="radio" :label="dataArray[radio - 1]"
                :value="radio"></v-radio>
        </v-radio-group>
        <v-select v-if="inputType === 'select'" :items="dataArray">

        </v-select>
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
        phone: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        dataArray: {
            type: Array,
            default: () => [],
            required: false
        },
        suffix: {
            type: String,
            default: '',
            required: false
        },
        type:{
            type: String,
            default: 'text'
        },
        variant:{
            type:String,
            default: 'filled'
        }
    },
    data() {
        return {
            rules: {
                required: value => !!value || 'Dane wymagane',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Nieprawidłowy adres E-Mail'
                },
                phoneNumber: value => {
                    const pattern = /^([+][0-9][0-9])?\s?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;
                    return pattern.test(value) || 'Nieprawidłowy format numeru telefonu'
                }
            },
            radioGroup: 1
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
        },
        isPhone() {
            if (!this.phone)
                return true;
            else
                return this.rules.phoneNumber;
        }
    }
}
</script>