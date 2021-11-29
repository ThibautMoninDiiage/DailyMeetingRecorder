<template>
    <div>
        <h2>Gérer les membres</h2>

        <form @submit="addNewMember" v-if="newMember === false">
            <div>
                <input class="btnComponent" type="submit" value="add New member">
            </div>
        </form>

        <div v-if="newMember == true">
            <form @submit="cancelAddNewMember">
                <div>
                    <input class="btnComponent" type="submit" value="Cancel add new member">
                </div>
            </form>
            <createMember></createMember>
        </div>

        <div>
            <p>liste des membre :</p>

            <span class="listMembre" v-for="membre in membres" :key="membre.id">
                <p>{{ membre.username }} - {{ membre.email }}</p>
                <input class="btnLien" type="submit" value="Supprimer">
            </span>
        </div>
    </div>
</template>

<script>
import createMember from '../components/CreateMemberComponent.vue';
import ProjectService from '../services/projectService';

export default {
    name: 'manageMember',
    components: {
        createMember
    },
    data() {
        return {
            newMember: false,
            membres: undefined,
            projectId: 1
        }
    },
    mounted(){
        this.projectService = new ProjectService();
        // a faire
        this.projectService.getAllMemberByProject(this.projectId).then(members => {
            this.members = members
        })
    },
    methods: {
        addNewMember(){
            this.createNewMember = true
        },
        cancelAddNewMember(){
            this.createNewMember = false
        }

    }    
    
}
</script>
