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
import ProjectService from '../services/projectService';

export default {
    name: 'createMember',
    components: {
    },
    props: {
        projectId: undefined
    },
    data() {
        return {
           emailMember: '',
           memberId: undefined,
           
        }
    },
    mounted(){
        this.ProjectService = new ProjectService();
    
    },
    methods: {
        addNewMember(){
            event.preventDefault()
            if (this.emailMember != ''){
                //this.searchMember()
                alert('pas vide')
            }else{
                alert('vide')
            }

        },
        searchMember(){
            event.preventDefault()
            this.ProjectService.getMemberExist(this.emailMember).then((response) => {
                if(response != null){
                    if(this.ProjectService.getMemberInTeam(memberId, this.projectId) != false){
                        this.ProjectService.addMemberToTeam(memberId, this.projectId)
                    }else{
                        alert('il est déjà dans la team')
                    }
                    
                }else {
                    alert('il n\'existe pas')
                }
                
            });
        }
    }    
    
}
</script>