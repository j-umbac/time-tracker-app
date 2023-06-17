<template>
    <div>
        <Card class="mx-8">
            <template #title>
                <span class="text-h3">
                    Other Projects
                </span>
            </template>
            <template #content>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div v-for="project in otherProjects" :key="project.id">
                        <OtherProjectCard :project="project">
                        </OtherProjectCard>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
const { retrieveProjects, getOtherProjects } = useCurrentProjects()
const otherProjects = useOtherProjects()

await retrieveProjects()
await getOtherProjects()

</script>

<style lang="scss" scoped></style>