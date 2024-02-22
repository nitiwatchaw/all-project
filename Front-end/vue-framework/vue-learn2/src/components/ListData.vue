
<script>
import Person from './Person.vue';
export default {
    name: "ListData",
    components: {
        Person,
    },
    props: ["employeesList", "onDelete"],
    methods: {
        updateEmployee(data) {
            this.$emit("updateEmployee", data);
        }
    },
    emits: ["updateEmployee"]
}

</script>
<template >
    <table>
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Salary
                </th>
                <th>
                    Department
                </th>
                <th>
                    Gender
                </th>
                <th>
                    Skill
                </th>

            </tr>
        </thead>

        <tbody v-if="employeesList.length === 0">
            <tr>
                <td colspan="5">No Data</td>
            </tr>
        </tbody>

        <tbody v-else>
            <Person v-for="(item) in employeesList" :key="item.id" :id="item.id" :name="item.name" :skill="item.skill"
                :gender="item.gender" :salary="item.salary" :img="item.img" :department="item.department" :onDelete="onDelete"
                @update="updateEmployee" />
        </tbody>


    </table>
</template>


<style scoped>
table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    border: 1px solid white;

}

td,
th {
    border: 1px solid #dddddd;
    padding: 8px;

}

tr:nth-child(even) {
    background-color: #717171;
}
</style>