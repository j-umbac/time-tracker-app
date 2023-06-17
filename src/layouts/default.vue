<template>
    <div class="min-h-[100dvh] h-full bg-gradient-to-br from-teal-100 to-green-100">
        <div class="border-b bg-surface-card">
            <Topbar class="container mx-auto" />
        </div>
        <main>
            <div class="container mx-auto grid grid-cols-12">
                <div class="col-span-12 md:col-span-8 md:col-start-3">
                    <slot />
                </div>                
            </div>
            
        </main>
    </div>
    <div>
        <PageFooter></PageFooter>
    </div>
</template>