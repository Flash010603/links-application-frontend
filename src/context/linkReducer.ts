import { LinkState } from './LinkContext';
import { Data } from '../interfaces/index';

type LinkActions = 
{ type: 'setdata', payload:Data|null} |
{ type: 'setdataAll', payload:Data[]} 


export const linkReducer = (state: LinkState, action: LinkActions): LinkState => {

    switch (action.type) {
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
