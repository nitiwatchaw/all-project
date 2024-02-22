<script >

import ListData from './components/ListData.vue';
import FormCommponent from './components/FormCommponent.vue';


export default {
  name: "App",
  components: {
    ListData,
    FormCommponent
  },
  data() {
    return {
      employeesList: [],
    }
  },
  methods: {
    insertEmployee(data) {
      this.employeesList.push(data)
  
    },
    handleDelete(id) {
      this.employeesList = this.employeesList.filter((item) => item.id !== id);
    },
    updateEmployee(data) {
      const index = this.employeesList.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        // Update the found item with the new data
        this.employeesList[index] = {
          id: data.id,
          name: data.name,
          img: data.img,
          salary: data.salary,
          department: data.department,
          gender: data.gender,
          skill: data.skill,
        };
      }
    }

  }

}

</script>

<template>
  <header>
    <h1>ระบบจัดการข้อมูลพนักงาน</h1>
  </header>

  <FormCommponent @save="insertEmployee" />

  <section>
    <h2>ข้อมูลพนักงาน</h2>
    <ListData :employeesList="employeesList" :onDelete="handleDelete" @updateEmployee="updateEmployee" />

  </section>
</template>

<style >
* {
  box-sizing: border-box;
}

header h1 {
  text-decoration: underline;
  color: #a688fa;
}

section h2 {
  text-align: left;
  margin: 20px 0;
  color: #908d96;
}
</style>
