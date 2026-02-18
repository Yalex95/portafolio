import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('themeStore',()=>{
 const isDark = ref(false);
 return {isDark}
})