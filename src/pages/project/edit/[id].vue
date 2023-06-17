<template>
    <div class="space-y-8 my-8">
        <Card class="mx-8">
            <template #title>
                <div class="flex space-x-2 items-center">
                    <Button icon="pi pi-arrow-left" raised rounded text @click="navigateTo(`/project/${project.id}`)" />
                    <span class="text-h">Edit Project</span>
                </div>
            </template>
            <template #content>
                <form class="space-y-8 mt-8" @submit.prevent="">
                    <span class="p-float-label transition">
                        <InputText v-model="project.name" class="w-full" />
                        <label>Project Name</label>
                    </span>
                    <span class="p-float-label">
                        <Textarea v-model="project.description" rows="12" class="w-full" />
                        <label>Description</label>
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
const supabase = useSupabaseClient()

const { retrieveProject, project } = useProject()

await retrieveProject(id.id)



</script>

<style lang="scss" scoped></style>