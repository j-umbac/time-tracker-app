<template>
    <div class="space-y-8 my-8">
        <Card class="mx-8">
            <template #title>
                <div class="flex flex-col space-y-2">
                    <div class="flex justify-between">
                        <Button icon="pi pi-arrow-left" raised rounded text @click="navigateTo({ name: 'index' })" />
                        <Button icon="pi pi-pencil" raised rounded text @click="navigateTo(`edit/${project.id}`)"></Button>
                    </div>
                    <span class="text-h">{{ project.name }}</span>
                </div>
            </template>
            <template #subtitle>
                <div>
                    <p class="font-semibold">Total:
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
                    </p>
                </div>
            </template>
            <template #content>
                <div>
                    <p>{{ project.description }}</p>
                    <Divider></Divider>
                    <div class="flex justify-center sm:justify-start mb-8">
                        <Button label="Add Task" icon="pi pi-plus" icon-pos="right" size="small" rounded raised
                            @click="navigateTo(`/add/task/${project.id}`)" />
                    </div>
                    <div class="max-w-lg sm:mx-0 mx-auto">
                        <Timeline :value="entries">
                            <template #opposite="slotProps" style="width: 100px">
                                <small class="p-text-secondary">
                                    {{ formatDateTime(slotProps.item.date) }}
                                </small>
                            </template>
                            <template #content="slotProps">
                                <Card class="mb-4 bg-gradient-to-tr from-blue-500 to-cyan-300">
                                    <template #content>
                                        <div class="flex flex-col items-start">
                                            <span class="text-on-primary font-semibold text-body">
                                                {{ slotProps.item.description }}
                                            </span>
                                            <Tag class="text-small mt-2" rounded text raised
                                                style="background-color: white; color: var(--text-color)">
                                                {{ slotProps.item.hours_worked }} hrs
                                            </Tag>
                                            <span class="text-body mt-2 text-on-primary">
                                                {{ slotProps.item.users.name }}
                                            </span>
                                        </div>
                                    </template>
                                </Card>
                            </template>
                        </Timeline>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
const id = useRoute().params
const { retrieveProject, project, retrieveEntries, getHours, workHours, convertDuration, entries, formatDateTime } = useProject()

await retrieveProject(id.id)
await retrieveEntries(id.id)
await getHours()
entries.value.reverse()

const formatDuration = ref(convertDuration(workHours.value * 3600))

// const supabase = use
// const nameEntries = ref()

// for (let i = 0; i<entries.value.length; i++) {

//     // console.log(entries.value[i].user_id)
// }

</script>

<style lang="scss">
.p-timeline .p-card .p-card-content {
    padding: 0;

}

.p-timeline-event-opposite {
    max-width: 6rem;
}
</style>