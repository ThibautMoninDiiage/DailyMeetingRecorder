<template>
    <div>
        <h2>Manage members</h2>

        <form @submit="addNewMember" v-if="newMember == false">
            <div>
                <input class="btnComponent" type="submit" value="Add new member">
            </div>
        </form>

        <div v-if="newMember == true">
            <div>
                <input class="btnComponent" type="submit" @click="cancelAddNewMember" value="Cancel add new member">
            </div>
            <createMember></createMember>
        </div>

        <div>
            <p>Member list</p>
            <span class="listMembre" v-for="member in members" :key="member.id">
                <p>{{ member.username }} - {{ member.email }} <input class="btnLien" @click="deleteMember" type="submit" value="Delete member"></p>
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
            if(confirm('are you sur !')){
                this.newMember = false
            }
        },
        deleteMember(){
            if(confirm('are you sur !')){
                this.projectService.deleteMemberOnProject(this.memberId);
            }
        }

    } 
    
}
</script>
