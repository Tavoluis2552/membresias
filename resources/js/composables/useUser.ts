import { Pagination } from '@/interfaces/paginacion';
import { UserResource } from '@/pages/Panel/Users/interfaces/User';
import { UserService } from '@/services/UserService';
import { reactive } from 'vue';

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

    return {
        principal,
        getUsersData,
    };
};
