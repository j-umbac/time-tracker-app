export function useProject() {
    const supabase = useSupabaseClient()
    const errorMsg = ref()
    const project = ref()
    const entries = ref()
    const workHours = ref(0)

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

    async function retrieveEntries(id) {
        const { data, error } = await supabase
            .from("project_entry")
            .select("*, users(name)")
            .order('date', { ascending: false })
            .eq("project_id", id)
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            entries.value = data
            errorMsg.value = null
        }
    }

    async function retrieveWeekEntries(id) {
        const dateTo = new Date()
        const dateFrom = new Date()
        dateFrom.setDate(dateTo.getDate()-5)

        const { data, error } = await supabase
            .from("project_entry")
            .select("*, users(name)")
            .order('date', { ascending: false })
            .lt('date', dateTo.toISOString())
            .gt('date', dateFrom.toISOString())
            .eq("project_id", id)
        if (error) {
            console.log(error)
            errorMsg.value = error
        } else {
            entries.value = data
            errorMsg.value = null
        }
    }

    async function getHours() {
        workHours.value=0
        if (entries.value.length) {
            for (let i = 0; i < entries.value.length; i++) {
                workHours.value = workHours.value + entries.value[i].hours_worked
            }
        }
    }

    function convertDuration(duration) {
        var days = Math.floor(duration / (24 * 60 * 60));
        var hours = Math.floor((duration % (24 * 60 * 60)) / (60 * 60));
        var minutes = Math.floor((duration % (60 * 60)) / 60);
        var seconds = Math.floor(duration % 60);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function formatDateTime(dateTime) {
        let date = new Date(dateTime)
        return date.toLocaleString('en-US', {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
    }

    return {
        errorMsg,
        retrieveProject,
        retrieveEntries,
        getHours,
        project,
        entries,
        workHours,
        convertDuration,
        formatDateTime,
        retrieveWeekEntries
    }
}