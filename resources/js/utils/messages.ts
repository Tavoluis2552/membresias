import { AlertTriangle, CheckCircle } from 'lucide-vue-next'; // o donde tengas los íconos
import { h } from 'vue';
import { toast } from 'vue-sonner';

export function showSuccessMessage(title: string, description?: string) {
    toast(title, {
        description,
        duration: 3000,
        class: 'bg-green-50 border border-green-300 text-green-800 rounded-lg',
        icon: h(CheckCircle, { class: 'text-green-600 m-2' }),
    });
}

export function showErrorMessage(title: string, description?: string) {
    toast(title, {
        description,
        duration: 3000,
        class: 'bg-red-50 border border-red-300 text-red-800 rounded-lg',
        icon: h(AlertTriangle, { class: 'text-red-600' }),
    });
}
