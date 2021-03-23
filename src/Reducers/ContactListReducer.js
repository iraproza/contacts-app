const initialState = {
    List: [],
    searchList: []
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                List: action.payload
            }
        case "ADD_NEW_CONTACT":
            return {
                List: [
                    ...state.List,
                    action.payload
                ]
            }
        case "DELETE_CONTACT":
            return{
                List: action.payload
            }
        case "UPDATE_STATUS":
            return{
                List: action.payload
            }
        case "SEARCH_CONTACT":
            console.log("REDUCER => ", action.payload);
            if (action.payload === 0) {
                return state;
            }
            const tmpList = state.List.slice();
            let newList = tmpList.filter((item) => {
                return item.Name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            if (newList.length === 0) {
                return {
                    ...state,
                    searchList: []
                }
            } else {
                return {
                    ...state,
                    searchList: newList
                }
            }

        default:
            return state;
    }
}
export default ContactListReducer;