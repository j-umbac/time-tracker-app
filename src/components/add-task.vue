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
            <template #content>
                <form class="space-y-8 mt-8" @submit.prevent="addTask()">
                    <span class="p-float-label">
                        <InputNumber v-model="newTask.hours_worked" class="w-full" suffix=" hrs" :minFractionDigits="2"
                            :step="0.02" show-buttons :min="0" />
                        <label>Hours Worked</label>
                    </span>
                    <small>Input only hours in decimal form</small>
                    <span class="p-float-label transition">
                        <Textarea v-model="newTask.description" class="w-full" rows="5" />
                        <label>Task Description</label>
                    </span>
                    <Divider></Divider>
                    <div class="flex space-x-4 justify-end">
                        <Button icon="pi pi-times" label="Cancel" severity="danger" size="small"
                            @click="navigateTo(`/project/${project.id}`)" />
                        <Button icon="pi pi-check" label="Accept" type="submit" size="small" />
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>

<script setup>
const id = useRoute().params
const { retrieveProject, project } = useProject()
const { retrieveUser } = useUser()
const { retrieveProjects, getOtherProjects } = useCurrentProjects()
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

// Add task to server TODO: transfer to composable
const addTask = async () => {
    if (newTask.value.description && newTask.value.hours_worked && newTask.value.hours_worked >= 0) {
        const { error } = await supabase
            .from("project_entry")
            .insert({
                project_id: newTask.value.project_id,
                user_id: newTask.value.user_id,
                description: newTask.value.description,
                hours_worked: newTask.value.hours_worked
            })
        if (error) {
            console.log(error)
        } else {
            console.log("Task added")
            await retrieveProject(id.id)
            await getOtherProjects()
            await retrieveProjects()
            navigateTo(`/project/${project.value.id}`)
        }
    }
}


</script>

<style lang="scss" scoped></style>