export const state = () => ({

  modal_open: false,


});

export const mutations={
    openBookingModal(state){
      state.modal_open = true
    },

    closeBookingModal(state){
      state.modal_open = false
    }

}

export const actions={

}

export const getters={
  //getLocation: state => {
    //return state.locations
  //},
}
