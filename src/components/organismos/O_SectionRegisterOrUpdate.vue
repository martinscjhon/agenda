


<script lang="ts">
import Button from '../atomos/A_Button.vue'
import A_Title from '../atomos/A_Title.vue'
import { uuid } from 'vue-uuid'

export default {
    name: "O_SectionRegisterOrUpdateComponent",
    components: {
        Button,
        A_Title
    },
    data() {
        return {
            task: '',
            uuid: '',
            showSuccess: false,
            isError: false,
            key: "@minhas-tarefas",
            id: '',
            message: ''
        }
    },
    mounted() {
        // @ts-ignore
        const params = this?.$route.params.id;
        this.id = params;
        let data = this.searchAllStorage();
        let obj = data.find(item => item.uuid === this.id);

        if (obj) {
            this.task = obj?.task;
        }
    },
    methods: {
        showMessages(message: string) {
            this.showSuccess = true;
            this.message = message;
            setInterval(() => {
                this.showSuccess = false;                
            }, 2000)
        },

        onChange(event: any) {
            this.task = event.target.value;
        },

        setStorage(list: any[]): boolean {
            localStorage.setItem(this.key, JSON.stringify(list));
            return true;
        },

        searchAllStorage(): any[] {
            const data: any = localStorage.getItem(this.key)
            return JSON.parse(data);
        },

        existStorage(): boolean {
            const getStorage = this.searchAllStorage();

            if (getStorage) {
                return true
            } else {
                return false
            }
        },

        verifyTaskDuplicate(task: string): boolean {
            const data: any[] = this.searchAllStorage();
            let obj;

            if (data?.length > 0) {
                obj = data.find(item => item.task === task);
            }

            if (obj) {
                return false
            }

            return true;
        },

        addTask() {
            this.isError = false;            
            let data: any[] = [];

            if (this.existStorage())
                data = this.searchAllStorage()

            const obj = {
                task: this.task,
                uuid: uuid.v1(),
                created_At: new Date(),
                check: false
            }

            if (!this.verifyTaskDuplicate(this.task)) {
                this.isError = true
                return this.showSuccess = false
            }

            data.push(obj);

            this.setStorage(data)
            this.showMessages("Tarefa adicionada com sucesso!")

            return true;
        },

        editTask() {
            if (this.id) {
                let data = this.searchAllStorage();
                let obj = data.find(item => item.uuid === this.id);

                if (obj && this.task !== '')
                    obj = {
                        ...obj,
                        task: this.task,
                    }


                const diff = data.filter(item => item.uuid !== this.id);
                diff.push(obj)

                this.setStorage(diff);                                
                this.showMessages("Tarefa editada com sucesso!")

                return true;
            } else
                return true
        },

        obseverAction() {
            if (this.id)
                return this.editTask();
            else
                return this.addTask()
        }


    },

}
</script>


<template>
    <main class="pt-6 pr-8 pl-8 bg-gray-100 mt-2">

        <form class="flex flex-col gap-5" @submit.prevent="obseverAction()">
            <div class="border-b border-gray-200 pb-5 flex items-center justify-between gap-3">
                <A_Title title="Cadastrar" />
                <div class="flex items-center gap-3">
                    <Button title="Adicionar" type="submit" class="bg-green-100 text-white" v-if="id === '' || !id" />
                    <Button title="Editar" type="submit" class="bg-green-100 text-white" v-else />
                    <router-link to="/" exact>
                        <Button title="Voltar" class="bg-gray-200 text-black" />
                    </router-link>
                </div>

            </div>
            <div class="flex flex-col">
                <label for="task" class="text-gray-300 mb-1 text-md">Tarefa</label>
                <input type="text" id="task" placeholder="Digite sua tarefa" :value="task" @change="onChange"
                    class="w-100 p-2 rounded-md outline-0 text-sm focus:ease-in focus:transition-ease focus:border focus:border-green-100 h-10 pl-3" />
            </div>

            <div v-if="showSuccess">
                <span class="text-green-100 text-md">{{ message }}</span>
            </div>

            <div v-if="isError">
                <span class="text-red-100 text-md">Já existe uma tarefa com o esse nome: "{{ task }}"</span>
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
 