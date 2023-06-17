export function useCurrentUserProjects() {
    const supabase = useSupabaseClient()
    const userProjectList = useUserProjects()
    const user = useCurrentUser()
    const errorMsg = ref()

    async function retrieveUserProjects() {
        const { data, error } = await supabase
            .from("users_projects")
            .select("*, projects(*)")
            .eq('user_id', user.value.id)
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            userProjectList.value = data
            errorMsg.value = null
        }
    }

    async function addProject(project) {
        const { data, error } = await supabase
            .from('projects')
            .insert({
                name: project.name,
                description: project.description
            }).select().single()
        if (error) {
            console.log(error)
        } else {
            const { error } =  await supabase
                .from('users_projects')
                .insert({
                    user_id: user.value.id,
                    project_id: data.id
                })
            if (error) {
                console.log(error)
            }
        }
    }

    return {
        errorMsg,
        retrieveUserProjects,
        addProject
    }
}