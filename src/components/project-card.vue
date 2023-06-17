<template>
    <Card class="bg-gradient-to-tr from-blue-500 to-cyan-300">
        <template #title>
            <div class="text-h4 text-on-primary font-bold hover:cursor-pointer" @click="navigateTo(`/project/${project.id}`)">
                {{ project.name }}
            </div>
        </template>
        
    </Card>
</template>

<script setup>
const { project } = defineProps(['project'])



</script>

<style lang="scss">
.p-card .p-card-content {
    padding: 0;
}
</style>