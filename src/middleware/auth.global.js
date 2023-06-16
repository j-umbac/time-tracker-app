// Checks all routes for authentication (can go to other pages if user is logged in)

export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    if (to.name !== 'login' && !user.value) {
        return console.log('User is not logged in')
    }

    if (to.name === 'login' && user.value) {
        return console.log('User is authenticated')
    }
})