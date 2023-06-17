<template>
    <Card class="bg-gradient-to-tr from-blue-500 to-cyan-300">
        <template #title>
            <div class="text-h4 text-on-primary font-bold">
                {{ project.name }}
            </div>
        </template>
        <template #content>
            <div class="flex flex-col">
                <span class="text-on-primary font-semibold text-h5">
                    Total:
                    <span v-if="formatDuration.days">
                        {{ formatDuration.days }}d
                    </span>
                    <span v-if="formatDuration.hours">
                        {{ formatDuration.hours }}h
                    </span>
                    <span v-if="formatDuration.minutes">
                        {{ formatDuration.minutes }}m
                    </span>
                    <span v-if="formatDuration.seconds">
                        {{ formatDuration.seconds }}s
                    </span>
                    <span v-else-if="isEmpty">
                        <small>No logged hours yet</small>
                    </span>
                </span>
                <div class="flex mt-4 justify-center">
                    <Button class="bg-surface-a text-on-surface" label="Join Project" icon="pi pi-plus"
                        icon-pos="right" size="small" rounded raised text plain
                        @click="addProject(project.id)" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
const { project } = defineProps(['project'])
const { retrieveEntries, getHours, workHours, convertDuration } = useProject()
const { addToProjectList } = useCurrentProjects()

// Retrieves entries and hours worked on, formates the data and evaluates if empty for templat rendering
await retrieveEntries(project.id)
await getHours()
const formatDuration = ref(convertDuration(workHours.value * 3600))
const isEmpty = Object.values(formatDuration.value).every(x => x === null || x === 0);

const addProject = async (id) =>{
    await addToProjectList(id)
}
</script>

<style lang="scss">
.p-card .p-card-content {
    padding: 0;
}
</style>