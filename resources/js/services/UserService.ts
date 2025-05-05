import { UsersTable } from '@/pages/Panel/Users/interfaces/User';
import axios from 'axios';

export const UserService = {
    //  list users
    async listUsers(page: number, name: string): Promise<UsersTable> {
        const response = await axios.get(`/panel/list-users?page=${page}&name=${name}`);
        return response.data;
    },
};
