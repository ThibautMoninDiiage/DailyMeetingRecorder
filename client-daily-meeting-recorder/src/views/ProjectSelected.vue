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
                    <input class="btnValide" type="submit" value="Valider">
                    <input class="btnValide" type="submit" value="Annuler">
                </div>
            </div>
        </form>

        <div>
            <form @submit="modifProject" v-if="projectModif === false">
                <div id="createNewProject">
                    <input class="btnValide" type="submit" value="Modifier projet">
                    <input class="btnValide" type="submit" value="Supprimer projet">
                </div>
            </form>
        </div>

        <hr/>

        <div>
            <input class="btnValide" v-if="manageMember === false" type="submit" value="Gérer membre">
            <input class="btnValide" v-if="manageMember === true" type="submit" value="cacher membre">
            <input class="btnValide" v-if="manageMeeting === false" type="submit" value="Gérer meeting">
            <input class="btnValide" v-if="manageMeeting === true" type="submit" value="cacher meeting">
        </div>

        <hr/>

        <manageMember v-if="manageMember === true"></manageMember><!-- components -->
        <manageMeeting v-if="manageMeeting === true"></manageMeeting><!-- components -->

    </div>
</template>

<style>
    @import '../styles/project.css';
</style>

<script>
import manageMember from '../components/ManageMemberComponent.vue';
import manageMeeting from '../components/ManageMeetingComponent.vue';

export default({
    name:'ProjectSelected',
    components: {
        manageMember,
        manageMeeting
    },
    data(){
        return{
            projectModif: false,
            manageMember: false,
            manageMeeting: false
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
