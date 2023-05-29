<script setup>
    import { useUserFormStore } from '@/stores/UserFormStore';
    import { useRepo } from 'pinia-orm'
    import UserForm from '@/models/UserFormModel'

    // pinia store
    const store = useUserFormStore();
    store.fillFormItems();
    

    // // pinia repo - pinia orm
    const userFormsRepo = useRepo(UserForm);
    

    function generateInputName(label) {
        return label.toLowerCase().replace(' ', '_');
    }

    function saveItems() {
        let values = [];
        values.push(
            {
                first_name: document.getElementById('1').value,
                last_name: document.getElementById('2').value,
                email: document.getElementById('3').value,
            });
        store.userFormValues = values;
        console.log(store.userFormValues);
        store.saveFormValues(store.userFormValues);
        userFormsRepo.save({
            name: document.getElementById('1').name,
            value: document.getElementById('1').value,
        });
        userFormsRepo.save({
            name: document.getElementById('2').name,
            value: document.getElementById('2').value,
        });
        userFormsRepo.save({
            name: document.getElementById('3').name,
            value: document.getElementById('3').value,
        });
    }

    // console.log(store.userFormItems);
    // console.log('userForms:');
    // console.log(userFormsRepo.all());
    // console.log(userFormsRepo.find(1));
</script>

<template>
    <div>
        <h1>User Form</h1>
        <p v-if="store.loading">Loading...</p>
        <p v-else-if="store.error">{{ store.error }}</p>
        <div v-else-if="store.userFormItems">
            <div v-for="(item, index) in store.userFormItems" :key="++index">
                <div v-if="item.type == 'text'">
                    <label :for="generateInputName(item.label)">{{ item.label }}:&nbsp;</label>
                    <input type="text" :name="generateInputName(item.label)" :id="index" value="" :placeholder="item.placeholder">
                </div>
                <div v-if="item.type == 'submit'">
                    <button :type="store.userFormItems[store.userFormItems.length - 1].type" @click="saveItems">
                        {{ store.userFormItems[store.userFormItems.length - 1].value }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>