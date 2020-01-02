export const state = () => ({

  modal_open: false,
  selected: false,
  selected_unit: '',
  unit_selection: '3 Bedroom'
});

export const mutations={
    openBookingModal(state){
      state.modal_open = true
    },

    closeBookingModal(state){
      state.modal_open = false
      state.selected_unit = ''
      state.selected = false
    },

    setSelectedUnit(state, payload){
      if(payload){
        state.selected_unit = payload
        state.selected = true
      }
    },

    clearSelectedUnit(state){
      state.selected_unit = ''
      state.selected = false
    }

}

export const actions={

}

export const getters={
  //getLocation: state => {
    //return state.locations
  //},
}
