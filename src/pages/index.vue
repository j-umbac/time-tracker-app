<template>
    <div class="space-y-8 my-8">
        <ProjectsCard></ProjectsCard>
        <OtherProjects></OtherProjects>
    </div>
</template>

<script setup>
const { retrieveUser } = useUser()
await retrieveUser()

</script>

<style lang="scss">
.p-button.p-button-text.p-button-plain {
    color: var(--primary-color);
    background-color: white;
}
</style>