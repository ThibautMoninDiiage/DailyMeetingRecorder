<template>
    <div>
        <h2>Gérer les membres</h2>

        <form @submit="addNewMember" v-if="newMember == false">
            <div>
                <input class="btnComponent" type="submit" value="add New member">
            </div>
        </form>

        <div v-if="newMember == true">
            <div>
                <input class="btnComponent" type="submit" @click="cancelAddNewMember" value="Cancel add new member">
            </div>
            <createMember></createMember>
        </div>

        <div>
            <p>liste des membre :</p>

            <span class="listMembre" v-for="member in members" :key="member.id">
                <p>{{ member.username }} - {{ member.email }} <input class="btnLien" type="submit" value="Supprimer"></p>
            </span>
        </div>
    </div>
</template>

<script>
import createMember from '../components/CreateMemberComponent.vue';
 //import router from '../router';
import ProjectService from '../services/projectService';

export default {
    name: 'manageMember',
    components: {
        createMember
    },
    data() {
        return {
            newMember: false,
            members: undefined,
            projectId: this.$route.params.projectId
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
            this.newMember = true
        },
        cancelAddNewMember(){
            this.newMember = false
        }

    }    
    
}
</script>
