<script setup>
    import { useUserFormStore } from '@/stores/UserFormStore';
    // import { useRepo } from 'pinia-orm'
    // import UserForm from '@/models/UserFormModel'
    // import { toRaw } from 'vue'

    const store = useUserFormStore();
    store.fillFormItems();
    // const userFormsRepo = useRepo(UserForm);

    // demo for the ORM
    // const userFormArray = [];
    // let userForm1 = new UserForm();
    // userForm1.name = "sdfsdf";
    // userForm1.email = "aaaa@aaa";

    // let userForm2 = new UserForm();
    // userForm2.name = "aaaaaa";
    // userForm2.email = "jxclvjlvc@aaa";

    // console.log(userForm1);
    // userFormArray.push(userForm1);
    // userFormArray.push(userForm2);

    console.log(store.userFormItems);
    // userFormsRepo.save(store.userFormItems);
    // console.log('userForms:');
    // console.log(userFormsRepo.all());
    // console.log(userFormsRepo.find(1));

    
</script>

<template>
    <div>
        <p v-if="store.loading">Loading...</p>
        <p v-else-if="store.error">{{ store.error }}</p>
        <div v-else-if="store.userFormItems">
            <p>
                {{ store.userFormItems[0].label }}
                <input type="text" name="" id="">
            </p>
            <p>
                {{ store.userFormItems[1].label }}
                <input type="text" name="" id="">
            </p>
        </div>
    </div>
    <button type="submit" @click="store.increment">New User</button>
</template>