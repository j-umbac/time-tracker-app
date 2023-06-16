<template>
    <Card class="bg-gradient-to-tr from-blue-500 to-cyan-300" @click="navigateTo(`/project/${project.id}`)">
        <template #title>
            <div class="text-h5 text-on-primary">
                {{ project.name }}
            </div>
        </template>
    </Card>
</template>

<script setup>
const { project }  = defineProps(['project'])
</script>

<style lang="scss" scoped>

</style>