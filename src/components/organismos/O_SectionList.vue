<script lang="ts">
import ButtonComponent from '../atomos/A_Button.vue'
import 'primeicons/primeicons.css';
import A_Title from '../atomos/A_Title.vue';

export default {
    name: "O_SectionListComponent",
    components: {
        ButtonComponent,
        A_Title
    },
    data() {
        return {
            list: [{
                task: '',
                uuid: '',
                created_At: '',
                check: false
            }],
            key: "@minhas-tarefas"
        }
    },
    created() {
        const myTasks: any = localStorage.getItem(this.key);
        this.list = this.orderArray(JSON.parse(myTasks) || [])
        return this.list;
    },
    methods: {
        searchDiffItem(uuid: string) {
            return this.list.filter(item => item.uuid !== uuid);
        },

        searchItem(uuid: string) {
            return this.list.find(item => item.uuid === uuid);
        },

        setStorage(list: any[]): boolean {
            localStorage.setItem(this.key, JSON.stringify(list));
            return true;
        },

        orderArray(array: any[]) {
            return array.sort((a: any, b: any) => {
                if (a?.created_At < b?.created_At) return -1
                if (a?.created_At > b?.created_At) return 1

                return 0
            })
        },

        clearStorage(): boolean {
            localStorage.removeItem(this.key)
            const myTasks: any = localStorage.getItem(this.key);
            this.list = JSON.parse(myTasks) || [];

            return true;
        },

        removeItemStorage(uuid: string): boolean {
            this.list = this.searchDiffItem(uuid)
            return this.setStorage(this.list)
        },

        checked(uuid: string) {
            let item = this.searchItem(uuid);
            const obj: any = {
                ...item,
                check: !item?.check
            }
            this.list = this.searchDiffItem(uuid);
            this.list.push(obj)
            return this.setStorage(this.orderArray(this.list));
        }
    }
}

</script>

<template>
    <main class="pt-6 pr-8 pl-8 bg-gray-100 mt-2">
        <div class="border-b border-gray-200 pb-5 flex items-center justify-between gap-3">
            <A_Title title="Tarefas" />

            <div class="flex items-center gap-3">
                <router-link to="/tarefa" exact>
                    <ButtonComponent title="Cadastrar tarefa" class="bg-green-100 text-white" />
                </router-link>
                <ButtonComponent title="Limpar lista" @click="clearStorage" class="bg-red-100 text-white" />
            </div>
        </div>

        <ul class="mt-4 flex flex-col gap-3" v-if="list.length > 0">
            <li v-for="item in list" class="bg-white rounded-md flex items-center justify-between pl-3 pr-3 h-12"
                :key="item?.uuid">
                <div class="flex items-center gap-3">
                    <input type="checkbox" :id="item?.uuid" @click="checked(item?.uuid)" :checked="item?.check" />
                    <label :for="item?.uuid" class="text-gray-400">{{ item?.task }}</label>
                </div>

                <div class="flex gap-3">
                    <button class="text-gray-300">
                        <router-link :to="`/tarefa/${item?.uuid}`"> <i class="pi pi-pencil"
                                style="font-size: 1rem"></i></router-link>
                    </button>

                    <button class="text-red-100" @click="removeItemStorage(item?.uuid)">
                        <i class="pi pi-trash" style="font-size: 1rem"></i>
                    </button>
                </div>
            </li>
        </ul>

        <div v-else class="flex align-center justify-center mt-20">
            <span class="text-xl text-gray-400">Você não tem tarefas</span>
        </div>

    </main>
</template>

<style scoped></style>
 