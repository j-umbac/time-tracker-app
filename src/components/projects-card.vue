<template>
    <div>
        <Card class="mx-8">
            <template #title>My Projects</template>
            <template #content>
                <div class="space-y-4">
                    <div v-for="project in userProjectList" :key="project.projects.id">
                        <ProjectCard :project="project.projects">
                        </ProjectCard>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
const userProjectList = useUserProjects()
</script>

<style lang="scss" scoped></style>