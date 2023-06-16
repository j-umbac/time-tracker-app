<template>
    <div class="space-y-8 my-8">
        <ProjectsCard></ProjectsCard>
    </div>
</template>

<script setup>
const { retrieveUser } = useUser()
await retrieveUser()

</script>

<style lang="scss" scoped></style>