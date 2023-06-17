<template>
    <div class="space-y-8 my-8">
        <Card class="mx-8">
            <template #title>
                <div class="flex space-x-2 items-center">
                    <Button icon="pi pi-arrow-left" raised rounded text @click="navigateTo({name: 'index'})" />
                    <span class="text-h">New Project</span>
                </div>
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