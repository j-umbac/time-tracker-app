<template>
    <div>
        <Card class="mx-8">
            <template #title>
                <span class="text-h3">
                    My Projects
                </span>
            </template>
            <template #content>
                <div class="space-y-4 mt-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div class="h-full" v-for="project in userProjectList" :key="project.projects.id">
                            <ProjectCard :project="project.projects">
                            </ProjectCard>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <Button icon="pi pi-plus" rounded raised @click="navigateTo({name: 'add-project'})"></Button>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
const { retrieveUserProjects } = useCurrentUserProjects()

//Fetch User Projects
await retrieveUserProjects()
const userProjectList = useUserProjects()
</script>

<style lang="scss" scoped></style>