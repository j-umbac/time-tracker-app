<template>
    <div class="min-h-[100dvh] h-full bg-gradient-to-br from-cyan-500 to-pink-400">
        <div class="border-b bg-surface-card  drop-shadow">
            <Topbar class="container mx-auto lg:max-w-5xl" />
        </div>
        <main>
            <div class="container mx-auto grid grid-cols-12">
                <div class="col-span-12 md:col-span-8 md:col-start-3">
                    <slot />
                </div>                
            </div>
            
        </main>
    </div>
    <div class="bg-surface-card  drop-shadow-xl">
        <PageFooter></PageFooter>
    </div>
</template>