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

export interface StoreUserRequest {
    name: string;
    username: string;
    photo: File | null;
    email: string;
    password: string;
    local_id: number;
    role: 'administrador' | 'personal';
}

export interface ResponsoUserStore {
    success: boolean;
    message: string;
    redirect_url: string;
    user: UserResource;
}
export interface ResponseUserDelete {
    success: boolean;
    message: string;
}
