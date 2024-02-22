<script>
import Card from './Card.vue';
export default {
    name: "Person",
    components: {
        Card
    },
    props: {
        id: {
            type: Number,
        },
        name: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            default: 15000
        },
        img: {
            type: String,
        },
        department: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        skill: {
            type: Array,
            required: true
        },
        onDelete: {
            type: Function,
            required: true
        },

    },
    data() {
        return {
            isUpdateClicked: false,
            newData: {
                id: "",
                name: "",
                img: "",
                salary: "",
                department: "",
                gender: "",
                skill: []
            },

        };
    },
    mounted() {
        console.log('Props:', this.$props);
    },
    methods: {
        handleUpdate() {
            this.isUpdateClicked = !this.isUpdateClicked
            this.newData = {
                id: this.$props.id,
                name: this.$props.name,
                salary: this.$props.salary,
                img: this.$props.img,
                department: this.$props.department,
                gender: this.$props.gender,
                skill: this.$props.skill,
            };
        },
        resetForm() {

            this.isUpdateClicked = false;
        },
        submitForm() {
            const updatedEmployee = {
                id: this.newData.id,
                name: this.newData.name,
                img: this.newData.img,
                salary: this.newData.salary,
                department: this.newData.department,
                gender: this.newData.gender,
                skill: this.newData.skill,
            }

            this.$emit("update", updatedEmployee);


            this.resetForm();


        }
    },
    emits: ["update"]


}


</script>
<template >
    <Card>
        <template v-slot:card-img>
            <div>
                <img :src="img" alt="" width="50" height="50">
                IMHHHH
            </div>
        </template>
        <template v-slot:card-header>

            <tr class="name">
                <td colspan="5">
                    {{ name }}
                </td>

            </tr>

        </template>
        <template v-slot:card-button>
            <tr>
                <td colspan="5">
                    <div class="">
                        <button @click="onDelete(id)">Delete </button>
                        <button @click="handleUpdate()">Update </button>
                    </div>
                </td>

            </tr>
        </template>
        <template v-slot:card-content>
            <transition name="fade">
                <tr>
                    <td>{{ name }}</td>
                    <td>{{ salary }}</td>
                    <td>{{ department }}</td>
                    <td>{{ gender }}</td>
                    <td>
                        <span>{{ skill.length === 0 ? 'No skill' : skill.join(', ') }}</span>

                    </td>
                </tr>
            </transition>

        </template>



    </Card>

    <div v-show="isUpdateClicked">
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="emp-name">
                    Name
                </label>
                <input type="text" v-model.trim="newData.name" placeholder="Name">
            </div>
            <div class="form-control">
                <label for="emp-salary">
                    Salary
                </label>
                <input type="number" v-model="newData.salary" placeholder="Salary">
            </div>
            <div class="form-control">
                <label for="emp-name">
                    Image
                </label>
                <input type="text" v-model="newData.img" placeholder="Image">
            </div>
            <div class="form-control">
                <label for="department">
                    Department
                </label>

                <select v-model="newData.department">

                    <option value="Programmer">Programmer</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Manager">Manager</option>
                </select>
            </div>

            <div class="form-control gender">
                <div>Gender</div>
                <div class="radio-check">
                    <input type="radio" value="male" v-model="newData.gender">
                    <label for="gender">Male</label>
                </div>
                <div class="radio-check">
                    <input type="radio" value="female" v-model="newData.gender">
                    <label for="gender">Female</label>
                </div>
            </div>

            <div class="form-control ">
                <div>Gender</div>
                <div class="check-box">
                    <div class="radio-check">
                        <input type="checkbox" value="EN" v-model="newData.skill">
                        <label for="skill">EN</label>
                    </div>
                    <div class="radio-check">
                        <input type="checkbox" value="TH" v-model="newData.skill">
                        <label for="skill">TH</label>
                    </div>
                    <div class="radio-check">
                        <input type="checkbox" value="CH" v-model="newData.skill">
                        <label for="skill">CH</label>
                    </div>
                    <div class="radio-check">
                        <input type="checkbox" value="JP" v-model="newData.skill">
                        <label for="skill">JP</label>
                    </div>
                </div>

            </div>


            <div class="">
                <button type="submit">Save Update</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.name {

    height: 40px;
    background: #717171;
}


.fade-enter-from {
    opacity: 0;
    transition-duration: .4s;
}

.fade-enter-active {

    transition-duration: .4s;


}
</style>