<template>
    <Head title="Usuarios"></Head>
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div class="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 rounded-xl border md:min-h-min">
                <div class="mt-4 mb-4 flex items-center justify-between px-6">
                    <TableUser
                        :users-list="principal.usersList"
                        :pagination="principal.pagination"
                        :loading="principal.loading"
                        @page-change="handlePageChange"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script setup lang="ts">
import { useUser } from '@/composables/useUser';
import AppLayout from '@/layouts/AppLayout.vue';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import TableUser from './components/tableUser.vue';

const { principal, getUsersData } = useUser();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Crear Usuario',
        href: '/panel/users/create',
    },
    {
        title: 'Usuarios',
        href: '/panel/users',
    },
];

const handlePageChange = (page: number) => {
    console.log(page);
    getUsersData(page);
};

onMounted(() => {
    getUsersData();
});
</script>
<style scoped></style>
