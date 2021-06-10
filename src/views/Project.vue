<template>
    <ProjectHeader></ProjectHeader>
    <div class="project-area">
        <ProjectSide></ProjectSide>
        <ProjectMain></ProjectMain>
    </div>
</template>

<script>
import ProjectHeader from '../components/project/ProjectHeader.vue'
import ProjectSide from '../components/project/ProjectSide.vue'
import ProjectMain from '../components/project/ProjectMain.vue'
export default {
    components: {
        ProjectHeader,
        ProjectSide,
        ProjectMain
    }
}
</script>

<style lang="scss" scoped>
.project-area{
    background-color: rgba($color: #afb4db, $alpha: 0.4);
    height: 95%;
}
</style>