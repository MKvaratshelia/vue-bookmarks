import { defineStore } from 'pinia';
import { type Profile } from '@/interfaces/profile.interface';
import { ref } from 'vue';
import { api, API_ROUTES } from '@/api';

export const useProfilestore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const { data } = await api.get<Profile>(API_ROUTES.profile);
    profile.value = data;
  }
  return { profile, fetchProfile };
});
