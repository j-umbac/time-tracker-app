<template>
    <div class="flex min-h-[100dvh] h-fit sm:flex-row flex-col sm:justify-between justify-between container mx-auto">
        <div class="mx-8 my-16 sm:my-auto">
            <h1 class="text-h1 font-bold text-on-primary font-inter">Keepr</h1>
            <p class="text-h4 text-on-primary font-inter">The straightforward project tracker for teams.</p>
        </div>
        <LoginCard class="mx-8 mb-16 sm:mx-1 sm:my-auto sm:h-fit sm:w-96"></LoginCard>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'no-layout'
})
</script>