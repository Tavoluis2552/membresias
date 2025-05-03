import { Pagination } from '@/interfaces/paginacion';

export interface UserResource {
    id: number;
    name: string;
    username: string;
    photo: string;
    email: string;
    local: string;
    status: boolean;
}

export interface UsersTable {
    success: boolean;
    users: UserResource[];
    pagination: Pagination;
}
