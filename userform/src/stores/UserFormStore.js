// import { ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia'


export const useUserFormStore = defineStore('userFormStore', {
     state: () =>   { 
                        return { count: 0, userFormItems: [] }
                    },
     actions: {
        increment(){
            this.count++;
        },
        fillFormItems(){
            axios.get('http://localhost:5217/UserFormFields').then((response) => {
                const myArray = [...response.data];
                this.userFormItems.push(myArray[0].fieldItems);
                console.log(this.userFormItems[0][1].label);
                
            });
            // console.log(this.userFormItems);
        }
        
     }
});