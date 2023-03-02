import { defineStore } from "pinia";

export let useTeamStore = defineStore('team',  {
   state: () => {
       return {
           name: '',
           spots: 0,
           members: []
       }
   },

    actions: {
       async fill() {
           let res = await import('@/team.json');
           this.$state = res.default;
       }
    },

    getters: {
       spotsRemaining() {
           return this.spots - this.members.length;
       }
    }
});