<template>
    <div>
        <form @submit="searchMember">
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
            if (this.rechercherMember != ''){
                alert('')
            }

        },
        searchMember(){
            event.preventDefault()
            this.ProjectService.getMemberExist(this.emailMember).then((response) => {
                if(response){
                    console.log(response)
                    alert('e')
                }else {
                    alert('a')
                }
                
            });
        },
        searchMemberinTeam(){
            
        }


    }    
    
}
</script>