import { defineStore } from "pinia";

export interface TaskType {
    id: string;
    title: string;
    isFav: boolean;
}

export interface TaskStoreState {
    tasks: TaskType[];
    isLoading: boolean;
    modal: boolean;
    sigleTask: TaskType;
}


export const useTaskStore = defineStore('taskStore', {
    state: (): TaskStoreState => ({
        tasks: [],
        isLoading: false,
        modal: false,
        sigleTask: {
            id: '',
            title: '',
            isFav: false
        }
    }),
    getters: {
        favs(): TaskType[] {
            return this.tasks.filter(e => e.isFav === true)
        },
        favCount(): number {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        async getTasks() {
            this.isLoading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data
            this.isLoading = false
        },
        async getSigleTask(id: string) {
            this.isLoading = true
            const res = await fetch(`http://localhost:3000/tasks/${id}`)
            const data = await res.json()
            this.sigleTask = data
            this.isLoading = false
        },
        async addTask(task: TaskType) {
            try {
                await fetch('http://localhost:3000/tasks', {
                    method: 'POST',
                    body: JSON.stringify(task),
                    headers: { 'Content-Type': 'application/json' }
                })
                this.getTasks()
            } catch (error) {
                console.log(error)
            }

        },
        async deleteTask(id: string) {
            try {
                await fetch(`http://localhost:3000/tasks/${id}`, {
                    method: 'DELETE',
                })
                this.getTasks()
            }
            catch (error) {
                console.log(error)
            }

        },
        async updateTask(task: TaskType, id: string) {
            try {
                await fetch(`http://localhost:3000/tasks/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(task),
                    headers: { 'Content-Type': 'application/json' }
                })
                await console.log(task, id)
                this.modal = false
                this.getTasks()
            }
            catch (error) {
                console.log(error)
            }

        },
        async toggleFav(id: string) {
            const task = this.tasks.find(task => task.id === id)
            try {
                await fetch(`http://localhost:3000/tasks/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ isFav: !task?.isFav }),
                    headers: { 'Content-Type': 'application/json' }
                })
                this.getTasks()
            }
            catch (error) {
                console.log(error)
            }
        }
    }
})