<template>
    <div class="bodyComponent">
        <form @submit="modifProject">
            <div class="FormAddProject">
                <label for="titleProject" class="labelProject">Title</label>
                <input type="text" disabled placeholder="Project Title" name="titleProject" id="titleProject" v-model="titleProject">
                <label for="descriptionProject" class="labelProject">Description</label>
                <textarea disabled placeholder="Project Description" name="descriptionProject" id="descriptionProject" v-model="descriptionProject"></textarea>   
                <label for="" class="labelProject">Status</label> 
                <select disabled name="StatusProject" id="statusProject">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>     
                <div>
                    <input class="btnValide" type="submit" value="Validate">
                    <input class="btnValide" type="submit" value="Cancel">
                </div>
            </div>
        </form>

        <div>
            <form @submit="modifProject" v-if="projectModif === false">
                <div id="createNewProject">
                    <input class="btnValide" type="submit" value="Modify the project">
                    <input class="btnValide" type="submit" value="Delete the project">
                </div>
            </form>
        </div>

        <hr/>

        <manageMember v-if="manageMember === true"></manageMember><!-- components -->
        <ManageMeeting v-bind:projectId="1"></ManageMeeting><!-- components -->

    </div>
</template>

<style>
    @import '../styles/project.css';
</style>

<script>
import ManageMember from '../components/ManageMemberComponent.vue';
import ManageMeeting from '../components/ManageMeetingComponent.vue';

export default({
    name:'ProjectSelected',
    components: {
        ManageMember,
        ManageMeeting
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
