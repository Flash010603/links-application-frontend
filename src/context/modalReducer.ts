import { ModalState } from './ModalContext';
import { Data } from '../interfaces/index';

type ModalActions = 
{ type: 'setmodal', payload:boolean} |
{ type: 'setdata', payload:Data|null} |
{ type: 'setdataAll', payload:Data[]} 


export const modalReducer = (state: ModalState, action: ModalActions): ModalState => {

    switch (action.type) {
        case "setmodal":
            return {
                ...state,
                isOpen: !state.isOpen,
                isUpdated: action.payload
            }
        case "setdata":
            return {
                ...state,
                data: action.payload
            }

        case "setdataAll":
            return {
                ...state,
                dataAll: action.payload
            }
        default: return state
    }

}
