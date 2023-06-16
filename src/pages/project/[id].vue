<template>
    <div class="space-y-8 my-8">
        <Card class="mx-8">
            <template #title>
                <div class="flex flex-col space-y-2 items-start">
                    <Button icon="pi pi-arrow-left" raised rounded text @click="navigateTo({ name: 'index' })" />
                    <span class="text-h">{{ project.name }}</span>
                </div>
            </template>
            <template #content>
                <div>
                    <p>{{ project.description }}</p>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
const id  = useRoute().params

const { retrieveProject, project } = useProject()

await retrieveProject(id.id)

</script>

<style lang="scss" scoped></style>