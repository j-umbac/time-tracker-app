<template>
    <div class="flex h-[70px] justify-between py-8 items-center mx-auto">
        <h2 class="text-h2 font-bold sm:block ml-8 md:ml-0">
            <NuxtLink to="/">
                Keepr
            </NuxtLink>
        </h2>
        <div class="mr-8 md:mr-0">
            <ConfirmDialog></ConfirmDialog>
            <Button icon="pi pi-sign-out" severity="info" text rounded raised v-tooltip="'Sign Out'" @click="signOut()"/>
        </div>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm"

const confirm = useConfirm()
const { signoutUser } = useUser()

const signOut = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Sign Out',
        icon: 'pi pi-sign-out',
        position: 'bottom',
        accept: () => {
            signoutUser()
        }
    })
}

</script>

<style lang="scss" scoped></style>