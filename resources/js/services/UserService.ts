import { ResponseUserDelete, ResponsoUserStore, StoreUserRequest, UsersTable } from '@/pages/Panel/Users/interfaces/User';
import axios from 'axios';

export const UserService = {
    //  list users
    async listUsers(page: number, name: string): Promise<UsersTable> {
        const response = await axios.get(`/panel/list-users?page=${page}&name=${name}`);
        return response.data;
    },
    // create user
    async StoreUser(data: StoreUserRequest): Promise<ResponsoUserStore> {
        const response = await axios.post('/panel/users', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },
    // delete user
    async deleteUser(id: number): Promise<ResponseUserDelete> {
        const response = await axios.delete(`/panel/users/${id}`);
        return response.data;
    },
};
