export function useCurrentUserProjects() {
    const supabase = useSupabaseClient()
    const userProjectList = useUserProjects()
    const user = useCurrentUser()
    const errorMsg = ref()

    async function retrieveUserProjects() {
        const { data, error } = await supabase
            .from("users_projects")
            .select("*, projects(*)")
            .eq('user_id', 2)
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            userProjectList.value = data
            errorMsg.value = null
        }
    }

    return {
        errorMsg,
        retrieveUserProjects
    }
}