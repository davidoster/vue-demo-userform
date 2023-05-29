import { ref, computed } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia'


export const useUserFormStore = defineStore('userFormStore', {
     state: () =>   ({ 
                        count: ref(0), 
                        userFormItems: computed(() => []), // metadata
                        userFormValues: [], // data
                        loading: false,
                        error: null
                    }),
     actions: {
        increment(){
            this.count++;
        },
        async fillFormItems(){
            this.userFormItems = computed(() => []); // clear the array
            this.loading = true;
            try {
                const response = await axios.get('http://localhost:5217/UserFormFields');
                const myArray = [...response.data];
                // console.log('here');
                // console.log(...myArray[0].fieldItems);
                // const [fieldItem1, ...rest] = [...myArray[0].fieldItems];
                // console.log(fieldItem1, rest);
                this.userFormItems.push(...myArray[0].fieldItems);
                this.userFormItems.push(myArray[0].buttonItem);
                // .then((response) => {
                //     const myArray = [...response.data];
                //     this.userFormItems.push(...myArray[0].fieldItems);
                // });
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },    
        async saveFormValues(values){
            try {
                const response = await axios.post('http://localhost:5217/UserFormFields', values);
                console.log(response);
            } catch (error) {
                console.log(error);
            } finally {
                console.log('finally');
            }
        }    
     }
});