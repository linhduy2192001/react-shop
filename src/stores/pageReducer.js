const initialState = {
    openSearchModal:false
}

const TOGGLE_SEARCH_MODAL = 'page/toggleSearch'

export const toggleSearchDrawerAction = () => ({
    type:TOGGLE_SEARCH_MODAL
})

export default function pageReducer( state = initialState, action ){
    switch ( action.type){
        case  TOGGLE_SEARCH_MODAL:
            return {
                ...state,
                openSearchModal: !state.openSearchModal
            }

    }
    return state
}