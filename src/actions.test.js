import * as actions from './actions'
import { ADD_LISTING, REMOVE_LISTING, MARK_LISTING_SOLD } from './actions'

describe('actions', () => {
    it('should create an action to add a listing', () => {
        const listing = {
           title: "test listing" 
        }
        const expectedAction = {
            type: ADD_LISTING,
            listing
        }
        expect(actions.addListing(listing)).toEqual(expectedAction)     
    })

    it('should create an action to remove a listing', () => {
        const id = 13
        const expectedAction = {
            type: REMOVE_LISTING,
            id
        }
        expect(actions.removeListing(id)).toEqual(expectedAction)
    })

    it('should create an action to mark a listing as sold', () => {
        const id = 12
        const expectedAction = {
            type: MARK_LISTING_SOLD,
            id
        }
        expect(actions.markListingSold(id)).toEqual(expectedAction)
    })
})
