<script setup>
    import { useUserFormStore } from '@/stores/UserFormStore';
    import { useRepo } from 'pinia-orm'
    import UserForm from '@/models/UserFormModel'

    const store = useUserFormStore();
    store.fillFormItems();
    const userFormsRepo = useRepo(UserForm);
    userFormsRepo.save(store.userFormItems);

    function generateInputName(label) {
        return label.toLowerCase().replace(' ', '_');
    }

    console.log(store.userFormItems);
    console.log('userForms:');
    console.log(userFormsRepo.all());
    // console.log(userFormsRepo.find(1));
</script>

<template>
    <div>
        <h1>User Form</h1>
        <p v-if="store.loading">Loading...</p>
        <p v-else-if="store.error">{{ store.error }}</p>
        <div v-else-if="store.userFormItems">
            <p>
                {{ store.userFormItems[0].label }}
                <input type="text" :name="generateInputName(store.userFormItems[0].label)" id="" value="" :placeholder="store.userFormItems[0].placeholder">
            </p>
            <p>
                {{ store.userFormItems[1].label }}
                <input type="text" name="" id="" value="" placeholder="">
            </p>
            <p>
                {{ store.userFormItems[2].label }}
                <input type="text" name="" id="" value="" placeholder="">
            </p>
        </div>
    </div>
    <button :type="store.userFormItems[3].type" @click="store.increment">{{ store.userFormItems[3].value }}</button>
</template>