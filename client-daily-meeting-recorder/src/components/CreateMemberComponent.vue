<template>
    <div>
        <form @submit="addNewMember">
        <div>
            <input type="email" placeholder="email" name="email" id="email" v-model="emailMember">        
            <input id="btnValidate" type="submit" value="Validate">
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
    data() {
        return {
           emailMember: '',
           memberId: undefined,
           projectId: this.$route.params.projectId           
        }
    },
    mounted(){
        this.ProjectService = new ProjectService();
    
    },
    methods: {
        addNewMember(){
            event.preventDefault()
            if (this.emailMember != ''){
                this.searchMember()
            }else{
                alert('vide')
            }

        },
        searchMember(){
            event.preventDefault()
            this.ProjectService.getMemberExist(this.emailMember).then((response) => {
                if(response != null){
                    this.memberId = response.id;
                    this.ProjectService.getMemberInTeam(this.memberId, this.projectId).then((response) => {
                        if(response == false){
                            this.ProjectService.addMemberToTeam(this.memberId, this.projectId)
                            location.reload()
                        }else{
                            alert('il est déjà dans la team')
                        }
                    })
                }else {
                    alert('il n\'existe pas')
                }
                
            });
        }
    }    
    
}
</script>