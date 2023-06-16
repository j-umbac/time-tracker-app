export function useUser() {
    const supabase = useSupabaseClient();
    const user = useCurrentUser();
    const errorMsg = ref();

    async function retrieveUser() {
        const { data: userId } = await supabase.auth.getUser();
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("user_id", userId.user?.id)
            .single();
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            user.value = data
            errorMsg.value = null
        }
    }

    return {
        errorMsg,
        retrieveUser
    }
}