<script  lang="ts">
import { defineComponent, ref, onMounted, watch, reactive } from 'vue';
import LoginForm from './components/LoginForm.vue';

const defaultAccount = { username: "", password: "" }

export default defineComponent({
  components: {
    LoginForm
  },
  setup() {
    let count1 = 10 as number;
    const count2 = ref<number>(10);

    const state = reactive({
      account: {
        username: "admin" as string,
        password: "1234" as number | string
      },
    })

    const clearAccount = () => {
      state.account = defaultAccount
    }

    onMounted(() => {
      setInterval(handleIncrease, 500)


    });

    watch(count2, (newVal) => {
      if (newVal >= 15) {
        console.log('count2 is more than or equal to 15');
      }
    });



    const handleIncrease = () => {
      if (count2.value >= 15) {
        return
      }
      count2.value++;
    };

    const header = "Login Form" as string

    interface User {
      id: number,
      username: string,
      password: string
    }

    const data = ref<User[]>([])

    const handleLogin = (message: number) => {
      alert(message)
    }

    return {
      count1,
      count2,
      handleIncrease,
      state,
      clearAccount,
      header,
      data,
      handleLogin
    };
  },
});
</script>

<template>
  <h1>App.vue</h1>
  <p>"count1" {{ count1 }}</p>
  <button @click="handleIncrease">increaseCount2</button>
  <p>"count2" {{ count2 }}</p>

  <hr>

  <div class="">
    <h2> {{ state.account.username }}</h2>
    <h2> {{ state.account.password }}</h2>

  </div>
  <button @click="clearAccount">Clear account</button>


  <hr>


  <LoginForm :title="header" @submitLogin="handleLogin" :data="data" />

  {{ data }}
</template>

<style scoped></style>
