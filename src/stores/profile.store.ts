import { defineStore } from 'pinia';
import { type Profile } from '@/interfaces/profile.interface';
import { ref } from 'vue';
import { API_ROUTES } from '@/api';

export const useProfilestore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const res = await fetch(API_ROUTES.profile);
    const data = (await res.json()) as Profile;

    profile.value = data;
  }
  return { profile, fetchProfile };
});
