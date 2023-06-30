import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import userService from "@/api/user"
import router from '../router';

export const useUserStore = defineStore('user', {
  state: () => ({
    loggedIn: useStorage( "loggedIn", false),
    user: useStorage("user", {}),
  }),
  actions: {
    async login(user) {
      try{
        const data = await userService.login(user);
        this.loggedIn = true
        router.push('/')
        this.user = {
          username: data.username,
          email: data.email,
          id: data.id,
        }
        console.log(data)
      } catch(e) {
        console.log(e)
      }
    },
    async register(user) {  
      try {
        const data = await userService.register(user);
        this.loggedIn = true;
        this.user = {
          username: data.username,
          email: data.email,
          id: data.id,
        }
        router.push('/');
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
    logout() {
      this.loggedIn = false;
      this.user = {};
      router.push('/login');
    },
    forgetPassword(email){
      try {
        const data = userService.forgetPassword(email);
        console.log(data)
      } catch(e) {
        console.log(e)
      }
      
    }
  }
})
