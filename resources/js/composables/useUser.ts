import { Pagination } from '@/interfaces/paginacion';
import { StoreUserRequest, UserResource } from '@/pages/Panel/Users/interfaces/User';
import { UserService } from '@/services/UserService';
import { showErrorMessage, showSuccessMessage } from '@/utils/messages';
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
                showSuccessMessage('Success', response.message);
                window.location.href = response.redirect_url;
            }
        } catch (error) {
            if (typeof error === 'object' && error !== null) {
                const errorMessage = (error as Error).message;
                message.value = errorMessage;
                showErrorMessage('Error', errorMessage);
            }
        }
    };

    const deleteUser = async (id: number) => {
        try {
            principal.loading = true;
            const response = await UserService.deleteUser(id);
            if (response.success) {
                message.value = response.message;
                getUsersData(principal.pagination.current_page);
                showSuccessMessage('Success', response.message);
                console.log(message.value);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            message.value = 'Error deleting user';
        } finally {
            principal.loading = false;
        }
    };

    return {
        principal,
        getUsersData,
        storeUser,
        deleteUser,
    };
};
