export const ADD_LISTING = 'ADD_LISTING'
export const REMOVE_LISTING = 'REMOVE_LISTING'
export const MARK_LISTING_SOLD = 'MARK_LISTING_SOLD'

export function addListing(listing) {
    return { type: ADD_LISTING, listing }
}

export function removeListing(id) {
    return { type: REMOVE_LISTING, id } 
}

export function markListingSold(id) {
    return { type: MARK_LISTING_SOLD, id }
}
