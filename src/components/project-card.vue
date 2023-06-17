<template>
    <Card class="bg-gradient-to-tr from-blue-500 to-cyan-300">
        <template #title>
            <div class="text-h4 text-on-primary font-bold hover:cursor-pointer" @click="navigateTo(`/project/${project.id}`)">
                {{ project.name }}
            </div>
        </template>
        <template #content>
            <div class="flex flex-col">
                <span class="text-on-primary font-semibold text-h5 hover:cursor-pointer" @click="navigateTo(`/project/${project.id}`)">
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
                    <span v-else>
                        <small>No logged hours yet</small>
                    </span>
                </span>
                <div class="flex mt-4 justify-center">
                    <Button class="bg-surface-a text-on-surface" label="Add Task" icon="pi pi-plus" icon-pos="right"
                        size="small" rounded raised text plain @click="navigateTo(`/add/task/${project.id}`)" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
const { project } = defineProps(['project'])
const { retrieveEntries, getHours, workHours, convertDuration } = useProject()

await retrieveEntries(project.id)
await getHours()
const formatDuration = ref(convertDuration(workHours.value * 3600))


</script>

<style lang="scss">
.p-card .p-card-content {
    padding: 0;
}
</style>