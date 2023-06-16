export function useProject() {
    const supabase = useSupabaseClient()
    const errorMsg = ref()
    const project = ref()

    async function retrieveProject(id) {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .eq("id", id)
            .single();
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            project.value = data
            errorMsg.value = null
        }
    }

    return {
        errorMsg,
        retrieveProject,
        project
    }
}