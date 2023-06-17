export function useUser() {
    const supabase = useSupabaseClient()
    const user = useCurrentUser()
    const errorMsg = ref()
    const client = useSupabaseClient()
    const { retrieveUserProjects } = useCurrentUserProjects()

    //Fetches current user
    async function retrieveUser() {
        const { data: userId } = await supabase.auth.getUser()
        const { data, error } = await supabase
            .from("users")
            .select("id, user_id, name")
            .eq("user_id", userId.user?.id)
            .single();
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            user.value = data
            retrieveUserProjects()
            errorMsg.value = null
        }
    }

    //Signs out user
    async function signoutUser() {
        const { error } = await client.auth.signOut()
        if (!error) {
            navigateTo({ name: 'login' })
        }
        else {
            console.log(error)
        }
    }

    return {
        errorMsg,
        retrieveUser,
        signoutUser,
    }
}