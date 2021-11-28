<template>
    <div>
        <form @submit="addNewMember">
        <div>
            <input type="email" placeholder="email" name="email" id="email" v-model="emailMember">        
            <input class="btnValide" type="submit" value="Validate">
        </div>
    </form>
    </div>
</template>

<script>
//import createNewMember from '../components/CreateNewMemberComponent.vue';

export default {
    name: 'createMember',
    components: {
        
    },
    data() {
        return {
           emailMember: ''
        }
    },
    mounted(){
    
    },
    methods: {
        addNewMember(){

        }

    }    
    
}
</script>