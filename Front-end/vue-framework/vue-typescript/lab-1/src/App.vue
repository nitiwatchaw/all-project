<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { type Job } from './types/Job'
import { type OrderTerm } from './types/OrderTerm'


import JobList from './components/JobList.vue';



const name = ref('Link')
const age = ref<number | string>(25)

age.value = '30'

const changeName = (newName: string) => {
  name.value = newName
}

const changeAge = (newAge: string | number) => {
  age.value = newAge
}


const thejobs = ref<Job[]>([
  {
    title: 'farm',
    location: 'lon lundch',
    salary: 5000,
    id: '1'
  },
  {
    title: 'repo',
    location: 'Dentis',
    salary: 2000,
    id: '2'
  },
  {
    title: 'wirtter',
    location: 'Franch',
    salary: 1000,
    id: '3'
  },
  {
    title: 'killer',
    location: 'Signzoalo',
    salary: 8000,
    id: '4'
  }
])

const order = ref<OrderTerm>('title')

const handleClick = (term: OrderTerm) => {
  if (order.value === term) {

    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {

    sortOrder.value = 'asc';
  }
  order.value = term;
};


const sortOrder = ref<'asc' | 'desc'>('asc');


</script>

<template>
  <div>
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Ink')">Click to change name to Ink</button>
    <button @click="changeAge('29')">Click to change age to 29</button>

    <p>{{ name }}</p>
    <p>{{ age }}</p>

    <div class="title">
      <h1>Hyrule Jobs</h1>
    </div>
    <div class="">
      <button @click="handleClick('title')">Order by Title</button>
      <button @click="handleClick('location')">Order by Location</button>
      <button @click="handleClick('salary')">Order by salary</button>
    </div>


    <JobList :thejobs="thejobs" :order="order" :sortOrder="sortOrder" />
  </div>
</template>
