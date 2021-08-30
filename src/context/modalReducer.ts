import { ModalState } from './ModalContext';

type ModalActions = 
{ type: 'setmodal', payload:boolean}


export const modalReducer = (state: ModalState, action: ModalActions): ModalState => {

    switch (action.type) {
        case "setmodal":
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default: return state
    }

}
