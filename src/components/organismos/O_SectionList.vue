<script lang="ts">
import Button from '../atomos/A_Button.vue'

export default {
    name: "O_SectionListComponent",
    components: {
        Button
    },
    data() {
        return {
            list: [{
                task: '',
                uuid: '',
                created_At: ''
            }]
        }
    },
    created() {
        const myTasks: any = localStorage.getItem("@minhas-tarefas");
        this.list = JSON.parse(myTasks) || [];
    },
    methods: {
        clearStorage() {
            localStorage.removeItem("@minhas-tarefas")
            const myTasks: any = localStorage.getItem("@minhas-tarefas");
            this.list = JSON.parse(myTasks) || [];
        }
    }
}

</script>

<template>
    <main class="pt-6 pr-8 pl-8 bg-gray-100 mt-2">
        <div class="border-b border-gray-200 pb-5 flex align-end justify-end gap-6">
            <router-link to="/cadastrar" exact>
                <Button title="Cadastrar" />
            </router-link>
            <Button title="Limpar" @click="clearStorage" />
        </div>

        <ul class="mt-4" v-if="list.length > 0">
            <h4 class="mt-7 mb-4">Tarefas</h4>

            <li v-for="item in list" class="bg-white rounded-md">
                <div class="check pl-3">
                    <input type="checkbox" :id="item.uuid" />
                    <label :for="item.uuid" class="text-gray-300">{{ item.task }}</label>
                </div>
            </li>
        </ul>

        <div v-else class="flex align-center justify-center mt-20">
            <span>Sem tarefas</span>
        </div>

    </main>
</template>

<style scoped>
.check {
    height: 3rem;
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
 