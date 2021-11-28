<template>
    <div class="bodyComponent">
        <form @submit="modifProject">
        <div class="FormAddProject">
            <label for="titleProject" class="labelProject">Title</label>
            <input type="text" disabled placeholder="Project Title" name="titleProject" id="titleProject" v-model="titleProject">
            <label for="descriptionProject" class="labelProject">Description</label>
            <textarea disabled placeholder="Project Desciption" name="descriptionProject" id="descriptionProject" v-model="descriptionProject"></textarea>   
            <label for="" class="labelProject">Status</label> 
            <select disabled name="StatusProject" id="statusProject">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>     
            <div>
                <input class="btnValide" type="submit" value="Validate">
                <input class="btnValide" type="submit" value="Annuler">
            </div>
        </div>
    </form>

    <div>
        <form @submit="createNewProject" v-if="projectCreated === false">
            <div id="createNewProject">
                <input class="btnComponent" type="submit" value="Modifier">
                <input class="btnComponent" type="submit" value="Supprimer">
            </div>
        </form>
    </div>




    </div>
</template>

<style>
    @import '../styles/project.css';
</style>

<script>
// import { defineComponent } from '@vue/composition-api'

export default({
    name:'ProjectSelected',
    components: {
        
    },
    data(){
        return{
            
        }
    },
    mounted(){
       
    },
    methods: {
        modifProject(){

        },
        suppProject(){

        }

    }
})
</script>
