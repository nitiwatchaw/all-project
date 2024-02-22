<script>
export default {
    name: "FormComponent",
    data() {
        return {
            // iniitial state
            employee: {
                id: 1,
                name: "Nitiwat",
                img: "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg",
                salary: 16000,
                department: "Programmer",
                gender: "",
                skill: []
            },
            error: false,
            emptyFields: []
        }
    }, methods: {
        submitForm() {

            this.emptyFields = Object.entries(this.employee)
                // .filter(([key, value]) => value === "")
                .map(([key]) => key);
                

            if (this.employee.gender.trim() === "") {
                this.error = true
                return
            }
            const newEmployee = {
                id: this.employee.id++,
                name: this.employee.name,
                img: this.employee.img,
                salary: this.employee.salary,
                department: this.employee.department,
                gender: this.employee.gender,
                skill: this.employee.skill,
            }
            // name method and pass the value 
            this.$emit("save", newEmployee)

            this.resetForm()
        },
        resetForm() {
            this.error = false,
                this.employee.name = "",
                this.employee.salary = "",
                this.employee.img = "",
                this.employee.department = "",
                this.employee.gender = "",
                this.employee.skill = []
        },

    },
    emits: ["save"]

}


</script>


<template lang="">
    
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="emp-name">
                    Name
            </label>
            <input type="text" v-model.trim="employee.name" placeholder="Name" >
        </div>
        <div class="form-control">
            <label for="emp-salary">
                    Salary
            </label>
            <input type="number" v-model="employee.salary" placeholder="Salary">
        </div>
        <div class="form-control">
            <label for="emp-salary">
                    Image
            </label>
            <input type="text" v-model="employee.img" placeholder="Image">
        </div>
        <div class="form-control">
            <label for="department">
                    Department
            </label>
         
            <select v-model="employee.department">
                
                <option value="Programmer">Programmer</option>
                <option value="Marketing">Marketing</option>
                <option value="Manager">Manager</option>
            </select>
        </div>

        <div class="form-control gender">
          <div>Gender</div>
          <div class="radio-check">
                <input type="radio" value="male" v-model="employee.gender">
                <label for="gender">Male</label>
          </div>
          <div class="radio-check">
                <input type="radio" value="female" v-model="employee.gender">
                <label for="gender">Female</label>
          </div>
        </div>

        <div class="form-control ">
          <div>Gender</div>
          <div class="check-box">
            <div class="radio-check">
                <input type="checkbox" value="EN" v-model="employee.skill">
                <label for="skill">EN</label>
          </div>
          <div class="radio-check">
                <input type="checkbox" value="TH" v-model="employee.skill">
                <label for="skill">TH</label>
          </div>
          <div class="radio-check">
                <input type="checkbox" value="CH" v-model="employee.skill">
                <label for="skill">CH</label>
          </div>
          <div class="radio-check">
                <input type="checkbox" value="JP" v-model="employee.skill">
                <label for="skill">JP</label>
          </div>
          </div>
          <div class="error" v-show="error">please fill {{emptyFields.toString()}}</div>
        </div>

        
        <div class="">
            <button type="submit">Save</button>
        </div>
    </form>
  
</template>

<style scoped>
form {
    margin-right: 2rem auto;
    max-width: 40rem;
    margin: 50px auto;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 2rem;
    background-color: #282828;
}



input[type=text],
input[type=number],
select {
    border-radius: 8px;
    background-color: #3f3f3f;
    color: white;
    border: none;
    height: 35px;
    width: 100%;
    padding-left: 10px;
    margin-top: 10px;
}

button {
    background-color: #9171f8;
    color: black;
    margin-top: 20px;

    width: 120px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 35px;
}

button:hover {
    filter: brightness(93%);
}

.gender {
    margin: 16px 0;
}

.check-box {
    display: flex;
    align-items: center;
    gap: 20px;
}

.radio-check {
    display: flex;
    gap: 13px;
}

.error {
    color: red;
}
</style>