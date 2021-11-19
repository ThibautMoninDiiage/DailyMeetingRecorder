<template>
    <!-- formulaire de création d'un nouveau projet -->
    <form>
        <div>
            <input type="text" placeholder="Project Title">
            <input type="button" value="Validate">
        </div>
        <div>
            <textarea  placeholder="Project Desciption"></textarea>
        </div>
    </form>
</template>

<script>
// import ProjectService from '../services/projectService';

export default {
    name: 'ProjectCreate',
    data() {
        return {

        }
    },
    methods: {
        addNewProject(){
            
        }
    }    
    
}
</script>
