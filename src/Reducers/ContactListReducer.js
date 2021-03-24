const initialState = {
    List: [],
    searchList: [],
    valueSearch: ''
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                ...state,
                List: action.payload
            }
        case "ADD_NEW_CONTACT":
            return {
                ...state,
                List: [
                    ...state.List,
                    action.payload
                ]
            }
        case "DELETE_CONTACT":
            const listAfterDelete = state.List.filter((contact_item) => {
                return contact_item.Id !== action.payload;
            });
            const searchNewList = state.searchList.filter((contact_item) => {
                return contact_item.Id !== action.payload;
            });
            return{
                ...state,
                List: listAfterDelete,
                searchList: searchNewList
            }
        case "UPDATE_STATUS":
            return{
                ...state,
                List: action.payload
            }
        case "SEARCH_CONTACT":
            const tmpList = state.List.slice();
            let newList = tmpList.filter((item) => {
                return item.Name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            
            if (newList.length === 0) {
                return {
                    ...state,
                    searchList: [],
                    valueSearch: action.payload
                }
            } else {
                return {
                    ...state,
                    searchList: newList,
                    valueSearch: action.payload
                }
            }

        default:
            return state;
    }
}
export default ContactListReducer;