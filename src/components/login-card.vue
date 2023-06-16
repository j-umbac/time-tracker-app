<template>
    <Card>
        <template #title>
            <span class="text-h3">
                <span v-if="isSignUp">Sign Up</span>
                <span v-else>Login</span>
            </span>
        </template>
        <template #content>
            <form @submit.prevent="() => (isSignUp ? signUp() : login())" class="space-y-8">
                <span class="p-float-label transition" v-if="isSignUp">
                    <InputText v-model="userName" id="userName" class="w-full" />
                    <label for="userName">Name</label>
                </span>
                <span class="p-float-label">
                    <InputText v-model="email" id="email" class="w-full" />
                    <label for="email">Email</label>
                </span>
                <span class="p-float-label">
                    <Password v-model="password" id="password" input-class="w-full" class="w-full" :feedback="isSignUp" />
                    <label for="password">Password</label>
                </span>
                <div class="mt-8">
                    <Button class="w-full" v-if="isSignUp" label="Sign Up" type="submit" />
                    <Button class="w-full" v-else label="Login" type="submit" />
                </div>
            </form>
            <div class="mt-4">
                <Button @click="isSignUp = !isSignUp" text class="w-full text-small" :label="isSignUp
                    ? 'Have an account? Log in instead'
                    : 'Create a new account'
                    " />
            </div>
            <div v-if="errorMsg" class="flex justify-center">
                <span class="text-red-600">{{ errorMsg }}</span>
            </div>
        </template>
    </Card>
</template>
  
<script setup>
const isSignUp = ref(false);
const email = ref("");
const password = ref("");
const userName = ref("");
const errorMsg = ref("");

const client = useSupabaseClient();
const { retrieveUser } = useUser()
const user = useCurrentUser()

const login = async () => {
    const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });
    if (error) {
        errorMsg.value = "Invalid login credentials. Please try again.";
        console.log(error);
    } else {
        retrieveUser()
    }
};

const signUp = async () => {
    if (!email.value || !password.value || !userName.value) {
        errorMsg.value = "Please fill up all the fields to Signup"
    } else {
        errorMsg.value = ""
        const { data: userData, error: signUpErr } = await client.auth.signUp({
            email: email.value,
            password: password.value,
        });

        if (signUpErr) {
            errorMsg.value = "Something went wrong. Please try again";
            console.log(error);
        } else {
            const { error } = await client.from("users").insert({
                user_id: userData.user?.id,
                name: userName.value,
            });

            if (error) {
                errorMsg.value = "Cannot Sign Up. Please try again.";
                console.log(error);
            } else {
                retrieveUser()
            }
        }
    }
};


</script>
  
<style scoped></style>
  