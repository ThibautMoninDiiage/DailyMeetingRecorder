<template>
    <div>
        <!-- formulaire du bouton pour créer un projet -->
        <form @submit="createProject">
            <div id="create-project">
                <label for="createProject">pour créer un nouveau projet =</label>
                <input type="submit" value="Create Project">
            </div>
        </form>

        <hr/> <!-- séparation pour début de la liste des projet -->

        <!-- liste des projet du user connecter --> 
        <div>
            <p>project name</p>
            <p>description project</p>
            <p>Project creator</p>
            <p>List user of project</p>
            <button>Change button</button>
            <button>delete button</button><!-- regarder fenêtre modal -->
        </div>
    </div>
    
</template>

<script>
import ProjectService from '../services/projectService';

export default ({
    name:'Project',
    data(){

    },
    mounted(){

    },
    methods: {
        createNewProject(){
            this.ProjectService.createNewProject
        }
        
    },
})
</script>
