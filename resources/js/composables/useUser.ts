import { Pagination } from '@/interfaces/paginacion';
import { StoreUserRequest, UserResource } from '@/pages/Panel/Users/interfaces/User';
import { UserService } from '@/services/UserService';
import { reactive, ref } from 'vue';

export const useUser = () => {
    const principal = reactive<{
        usersList: UserResource[];
        pagination: Pagination;
        filter: string;
        loading: boolean;
    }>({
        usersList: [],
        pagination: {
            total: 0,
            current_page: 0,
            per_page: 0,
            last_page: 0,
            from: 0,
            to: 0,
        },
        filter: '',
        loading: false,
    });
    const message = ref<string>('');
    const getUsersData = async (page: number = 1, name: string = '') => {
        try {
            principal.loading = true;
            const response = await UserService.listUsers(page, name);
            if (!response.success) {
                return;
            }
            principal.usersList = response.users;
            principal.pagination = response.pagination;
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            principal.loading = false;
        }
    };

    const storeUser = async (user: StoreUserRequest) => {
        try {
            const response = await UserService.StoreUser(user);
            if (response.success) {
                message.value = response.message;
                window.location.href = response.redirect_url;
            }
        } catch (error) {
            console.error('Error storing user:', error);
            message.value = 'Error storing user';
        }
    };

    return {
        principal,
        getUsersData,
        storeUser,
    };
};
