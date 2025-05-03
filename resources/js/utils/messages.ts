import { toast } from 'vue-sonner';

export function showSuccessMessage(title: string, description?: string) {
    toast({ title, description, variant: 'default', duration: 3000 });
}

export function showErrorMessage(title: string, description?: string) {
    toast({ title, description, variant: 'destructive', duration: 3000 });
}
