// Checks all routes for authentication (can go to other pages if user is logged in)

export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()
    
    if (to.name !== 'login' && !user.value) {
        return navigateTo({name: 'login'})
    }

    if (to.name === 'login' && user.value) {
        return navigateTo({name: 'index'})
    }
})