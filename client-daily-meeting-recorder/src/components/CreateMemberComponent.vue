<template>
    <div>
        <form @submit="rechercherMember">
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
        projectId
    },
    data() {
        return {
           emailMember: ''
        }
    },
    mounted(){
        this.ProjectService = new ProjectService();
    
    },
    methods: {
        addNewMember(){
            if (this.rechercherMember != ''){

            }

        },
        rechercherMember(){
            event.preventDefault()
            this.ProjectService.getMemberExist(this.emailMember).then((response) => {
                if(response){

                }this.dansLaTeam(response.data.id, this.projectId)
            });
        },
        dansLaTeam(memberId, projectId){
            
        }


    }    
    
}
</script>