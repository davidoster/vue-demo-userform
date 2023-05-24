<script setup>
    import { useUserFormStore } from '@/stores/UserFormStore';
    import UserForm from '@/models/UserFormModel'
    import { useRepo } from 'pinia-orm'

    const userFormsRepo = useRepo(UserForm);
    
    const store = useUserFormStore();
    store.fillFormItems();

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

    const fieldItems = store.userFormItems[0];

    userFormsRepo.save(fieldItems);
    const userForms = useRepo(UserForm).all();
    console.log(userForms);

    
</script>

<template>
    <div >
        <p>{{ fieldItems[1].label }}</p>
        <input type="text" name="" id="">
    </div>
    <button type="submit"></button>
</template>