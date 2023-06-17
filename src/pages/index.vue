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

</style>