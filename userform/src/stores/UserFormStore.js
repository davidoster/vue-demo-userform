import { ref, computed } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia'


export const useUserFormStore = defineStore('userFormStore', {
     state: () =>   ({ 
                        count: ref(0), 
                        userFormItems: computed(() => []),
                        loading: false,
                        error: null
                    }),
     actions: {
        increment(){
            this.count++;
        },
        async fillFormItems(){
            this.userFormItems = computed(() => []);
            this.loading = true;
            try {
                await axios.get('http://localhost:5217/UserFormFields').then((response) => {
                    const myArray = [...response.data];
                    this.userFormItems.push(...myArray[0].fieldItems);
                });
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        }        
     }
});