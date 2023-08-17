


<script lang="ts">
import Button from '../atomos/A_Button.vue'
import { uuid } from 'vue-uuid'

export default {
    name: "O_SectionRegisterComponent",
    components: {
        Button
    },
    data() {
        return {
            task: '',
            uuid: '',
            showSuccess: false
        }
    },
    methods: {
        AddTask() {
            this.showSuccess = true;

            const obj = {
                task: this.task,
                uuid: uuid.v1(),
                created_At: new Date()
            }

            const data: any[] = [];
            data.push(obj);            

            console.log(data)

            localStorage.setItem("@minhas-tarefas", JSON.stringify(data));


            setInterval(() => {
                this.showSuccess = false;
                this.task = '';
            }, 1500)

            return true;
        },
        onChange (event: any)  {
            this.task = event.target.value;
        }
    }
}
</script>


<template>
    <main class="pt-6 pr-8 pl-8 bg-gray-100 mt-2">

        <form class="flex flex-col gap-5" @submit.prevent="AddTask">
            <div class="border-b border-gray-200 pb-5 flex align-end justify-end gap-6">
                <Button title="Adicionar" type="submit" />
                <router-link to="/" exact>
                    <Button title="Voltar" />
                </router-link>
            </div>
            <div class="flex flex-col">
                <label for="task" class="text-gray-300 mb-1 text-md">Tarefa</label>
                <input type="text" id="task" placeholder="Digite sua tarefa" @change="onChange"
                    class="w-100 p-2 rounded-md outline-0 text-sm focus:ease-in focus:transition-ease focus:border focus:border-green-100" />
            </div>

            <div v-if="showSuccess">
                <span class="text-green-100 text-md">Tarefa adicionada com sucesso!</span>
            </div>
        </form>
    </main>
</template>

<style scoped>
input:focus::placeholder {
    transform: translate(5px);
    transition: all 0.2s ease;
}

.options {
    font-size: 14.5px;
}
</style>
 