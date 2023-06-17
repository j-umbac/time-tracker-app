export function useCurrentProjects() {
    const supabase = useSupabaseClient()
    const projectList = useProjects()
    const user = useCurrentUser()
    const errorMsg = ref()
    const userProjectList = useUserProjects()
    const otherProjects = useOtherProjects()
    const { retrieveUserProjects } = useCurrentUserProjects()

    //Retrieves all projects
    async function retrieveProjects() {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            projectList.value = data
            getOtherProjects()
            errorMsg.value = null
        }
    }

    //Adds project where user is not a part of, to their project list. Transfer from 'Other Projects' to 'My Projects'
    async function addToProjectList(id) {
        console.log("User Proj before", userProjectList.value)
        const { error } = await supabase
            .from("users_projects")
            .insert({
                user_id: user.value.id,
                project_id: id
            })
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            await retrieveUserProjects()
            otherProjects.value = otherProjects.value.filter(object => object.id !== id
            )
            errorMsg.value = null
        }
    }

    //Computes the difference of 'My Project' and 'All Projects' array of objects and puts the difference into the 'Other Projects' list
    function getDifference(array1, array2) {
        let diff = [];

        for (const item1 of array1) {
            const found = array2.some(item2 => item1.id === item2.project_id);

            if (!found) {
                diff.push(item1);
            }
        }
        otherProjects.value = diff
    }

    async function getOtherProjects() {
        getDifference(projectList.value, userProjectList.value)
    }

    return {
        errorMsg,
        retrieveProjects,
        addToProjectList,
        getDifference,
        getOtherProjects
    }
}