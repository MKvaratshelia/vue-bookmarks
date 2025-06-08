import { defineStore } from 'pinia';
import { type Profile } from '@/interfaces/profile.interface';
import { ref } from 'vue';
import { client, API_ROUTES } from '@/api';

export const useProfilestore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const { data } = await client().get<Profile>(API_ROUTES.auth.profile);
    profile.value = data;
  }
  return { profile, fetchProfile };
});
