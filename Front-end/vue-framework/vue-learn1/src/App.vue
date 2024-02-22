
<script>


export default {
  name: "App",
  data() {
    return {
      firstName: "Nitiwat",
      lastName: "Chawkanha",
      age: 25,
      address: "<i>กรุงเทพมหานคร</i>",
      picture: "https://c8.alamy.com/compfr/mfhgpa/homme-barbu-photographe-professionnel-des-montres-et-des-photographies-avec-un-appareil-photo-sur-une-rue-de-la-ville-dans-la-journee-mfhgpa.jpg",
      size: 150,
      social: "https://www.facebook.com/kongruksiamtutorial",
      hobby: [
        "ทำสวน",
        "เล่นเกม",
        "ทำอาหาร",
        "ดูทีวี",
        "ท่องเน็ต",
        "อ่านหนังสือ",
        "เลี้ยงแมว",
      ],
      general: { gender: "ชาย", weight: 70.4, height: 170, status: false },
      nickName: '',
      isVisible: false,
      salary: 20000
    }
  },
  methods: {
    showData() {
      alert(this.firstName)
    },
    submitForm() {
      this.nickName = this.$refs.nickNameEl.value
    },
    toggleVisible() {
      this.isVisible = !this.isVisible
    },
    getRandomByMethod() {
      return Math.random().toFixed(2)
    },
    IncreaseSalary(value) {
      this.salary += value
    }
  },
  computed: {
    getFullName() {
      return `${this.firstName}  ${this.lastName}`
    },
    getRandomByComputed() {
      return Math.random().toFixed(2)
    },
    getIncome() {
      return this.salary * 12
    },
    getDepartment() {
      return this.salary >= 35000 ? "PM" : "DEV"
    }
  },
  mounted() {
    console.log(this.firstName);
  },
  watch: {
    salary(value) {
      if (value > 50000) {
        alert("เงินเดือนไม่ควรเกิน 50000 บาท")
        setTimeout(() => {
          this.salary = 20000
        }, 2000)
      }
    },

  }

};

</script>


<template>
  <section>
    <img :src="picture" :width="size" :height="size" ref="imageEl" /><br />
    <h1>ชื่อ-นามสกุล : {{ getFullName }}</h1>
    <h1>อายุ : {{ age }} ปี</h1>

    <h2>Method1 :{{ getRandomByMethod() }}</h2>
    <h2>Method2 :{{ getRandomByMethod() }}</h2>
    <h2>Computed1 :{{ getRandomByComputed }}</h2>
    <h2>Computed2 :{{ getRandomByComputed }}</h2>

    <p> เงินเดือน:${{ salary }}</p>
    <p>รายได้ต่อปี : ${{ getIncome }}</p>
    <p>ตำแหน่งงาน : {{ getDepartment }}</p>
    <button @click="IncreaseSalary(5000)">เพิ่ม เงินเดือน</button>

    <hr>

    <form @submit.prevent="submitForm">
      <label for="">Nickname</label>
      <input type="text" ref="nickNameEl">
      <button type="submit">click</button>
    </form>

    {{ isVisible }}

    <button @click="toggleVisible">{{ isVisible ? " hide" : "show" }}</button>

    <article v-show="isVisible">

      <div class="">
        <h1>Hobby</h1>
        <!-- if else hobby -->
        <div v-if="hobby.length === 0"> No hobby</div>
        <ul v-else>
          <li v-for="(h, index) in hobby" :key="index">{{ h }}</li>
        </ul>

      </div>

      <div class="">
        <h1>General</h1>
        <ul>
          <li v-for="([key, value], index) in Object.entries(general)" :key="index">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </div>

      <p>{{ nickName }}</p>


    </article>


  </section>
</template>


<style>
ul {
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
}
</style>