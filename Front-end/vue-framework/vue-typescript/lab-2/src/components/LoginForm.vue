<template>
    <div>
        <h1>{{ title }}</h1>
        <form>
            <label for="">Username:</label>
            <input type="text" name="username" placeholder="username" v-model="state.account.username">
            <br>
            <label for="">Password:</label>
            <input type="text" name="username" placeholder="password" v-model="state.account.password">
            <br>
            <button type="button" @click="onAddData">Submit</button>
            <button type="button" @click="onClickClearForm">Clear</button>
            <button type="button" @click="submitLogin">sss</button>
        </form>
        <div class="">
            data length = {{ legthData }}
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, reactive, watch, ref, type PropType } from 'vue';


export default defineComponent({
    emits: ["submitLogin"],
    props: {
        title: {
            type: String as PropType<string>, 
            required: true,
        },
        data: {
            type: Array, 
            required: true,
        },
    },
    setup(props, { emit }) {

        const state = reactive({
            account: {
                username: "",
                password: ""
            }
        })

        watch(() => state.account.username, (newValue: string) => {
            console.log(newValue)

        })

        watch(() => props.data.length, (newValue: number) => {
            if (newValue !== 0) {
                legthData.value = props.data.length
            }
        })

        const legthData = ref<number | string>("noData")

        const onClickClearForm = () => {
            state.account = { username: "", password: "" }
        }

        const submitLogin = () => {
            emit("submitLogin", "1234")
        }
        const id = ref(1)
        const onAddData = () => {


            const newData = reactive({
                id: id.value++,
                username: state.account.username,
                password: state.account.password
            });

            props.data.push({ ...newData });
            console.log(props.data);
        };

        return {
            state,
            onClickClearForm,
            submitLogin,
            onAddData,
            legthData
        }
    },
})
</script>


<style></style>
