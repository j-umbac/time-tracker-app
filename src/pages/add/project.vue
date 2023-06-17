<template>
    <div class="space-y-8 my-8">
        <Card class="mx-8">
            <template #title>
                <div class="flex space-x-2 items-center">
                    <Button icon="pi pi-arrow-left" raised rounded text @click="navigateTo({name: 'index'})" />
                    <span class="text-h">New Project</span>
                </div>
            </template>
            <template #content>
                <form class="space-y-8 mt-8" @submit.prevent="addNewProj()">
                    <span class="p-float-label transition">
                        <InputText v-model="newProject.name" class="w-full" />
                        <label>Project Name</label>
                    </span>
                    <small v-if="err" class="text-red-500">{{ err }}</small>
                    <span class="p-float-label">
                        <Textarea v-model="newProject.description" rows="12" class="w-full" />
                        <label>Description</label>
                    </span>
                    <Divider></Divider>
                    <div class="flex space-x-4 justify-end">
                        <Button icon="pi pi-plus" label="Create" type="submit" size="small" />
                    </div>
                </form>
            </template>
        </Card>
    </div>
</template>

<script setup>
const { addProject } = useCurrentUserProjects()
const err = ref()
const newProject = ref({
    name: '',
    decription: ''
})

</script>

<style lang="scss" scoped>

</style>