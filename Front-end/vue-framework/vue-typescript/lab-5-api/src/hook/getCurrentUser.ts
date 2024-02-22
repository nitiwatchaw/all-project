
import { ref, onMounted, type Ref } from 'vue';

import { type User } from '../types/index'


export function useCurrentUser(): Ref<User> {
    const currentUser = ref<User>(JSON.parse(localStorage.getItem('user-info') || 'null'));

    return currentUser;
}