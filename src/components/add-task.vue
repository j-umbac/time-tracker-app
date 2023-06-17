<template>
    <div class="space-y-8 my-8">
        <Card class="mx-8">
            <template #title>
                <div class="flex space-x-2 items-center">
                    <Button icon="pi pi-arrow-left" raised rounded text @click="navigateTo(`/project/${project.id}`)" />
                    <span class="text-h">Record New Task</span>
                </div>
            </template>
            <template #subtitle>
                {{ project.name }}
            </template>
           
        </Card>
    </div>
</template>

<script setup>
const id = useRoute().params
const { retrieveProject, project } = useProject()
const { retrieveUser } = useUser()
await retrieveUser()
await retrieveProject(id.id)
const user = useCurrentUser()
const supabase = useSupabaseClient()

const newTask = ref({
    project_id: project.value.id,
    description: '',
    hours_worked: null,
    user_id: user.value.id
})




</script>

<style lang="scss" scoped></style>