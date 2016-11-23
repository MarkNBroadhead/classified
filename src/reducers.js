const initialState = {
    listings: []
}

function classifiedApp(state = initialState, action) {
    switch (action.type) {
        case ADD_LISTING:
            return Object.assign({}, state, {
                listings: action.listing
            })
        case REMOVE_LISTING:
        break
        case MARK_LISTING_SOLD:
            break
        default:
            return state
    }
}

