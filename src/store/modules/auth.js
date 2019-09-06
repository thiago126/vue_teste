export default {
    namespaced: true,
    state:{
        userAuthenticated:false
    },
    getters:{
        userAuthenticated: (state) => state.userAuthenticated,
    },
    actions:{
        teste({ commit }){
            commit('teste');
            console.log('auth no Vuex mlllk');
        }
    },
    mutations:{
      teste (state){
          console.log('auth no Vuex mlllk - mutations');
      }
    },
};

