<template>
    <div class="min-h-[100dvh] h-full bg-surface-ground">
        <div class="border-b bg-surface-card">
            <Topbar class="container mx-auto" />
        </div>
        <main>
            <div class="container mx-auto grid grid-cols-12">
                <div class="col-span-12">
                    <slot />
                </div>
            </div>
        </main>
    </div>
    <div>
        <PageFooter></PageFooter>
    </div>
</template>