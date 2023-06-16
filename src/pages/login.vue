<template>
    <div class="flex h-screen sm:flex-row flex-col sm:justify-between justify-center container mx-auto space-y-8">
        <div class="mx-8">
            <h1 class="text-h1 font-bold text-on-surface">Keepr</h1>
            <p class="text-h4 text-on-surface">The straightforward project tracker for teams.</p>
        </div>
        <LoginCard class="h-96 mx-8"></LoginCard>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'no-layout'
})
</script>