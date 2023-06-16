<template>
    <div class="space-y-8 my-8">
        <Card class="mx-8">
        <template #title>
            <div class="flex space-x-2 items-center">
                <Button icon="pi pi-arrow-left" raised rounded text @click="navigateTo({name: 'index'})" />
                <span>Project Instance</span> 
            </div>
        </template>
    </Card>
    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>