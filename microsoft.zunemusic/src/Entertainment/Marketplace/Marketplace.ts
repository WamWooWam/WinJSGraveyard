export class Marketplace {
    static addMedia(serviceMediaIds, mediaTypes, filterToOfferIds, mediaPropertyMap, addToCollection) {
        console.error('shimmed function Marketplace.addMedia')
    }

    static tryAddMedia(serviceMediaIds, mediaTypes, filterToOfferIds, mediaPropertyMap, addToCollection) {
        console.error('shimmed function Marketplace.tryAddMedia')
    }

    static download(ticket, mediaIds, mediaTypes, contextMediaId, contextMediaTypeId, fPreferStandardDef) {
        console.error('shimmed function Marketplace.download')
    }

    static getAssetLocationsAsync(ticket, serviceMediaIds, mediaInstanceIds, mediaInstanceLicenseRights, fulfillmentTickets, contexts, autoActivateMachine) {
        console.error('shimmed function Marketplace.getAssetLocationsAsync')
    }

    static getMediaEntitlementsAsync(serviceMediaIds) {
        console.error('shimmed function Marketplace.getMediaEntitlementsAsync')
    }

    static grovelPastPurchasedMusic(historyToken, aggressiveGrovel) {
        console.error('shimmed function Marketplace.grovelPastPurchasedMusic')
    }

    static sendPlaybackDurationAsync(trackingId, duration) {
        console.error('shimmed function Marketplace.sendPlaybackDurationAsync')
    }

    static purchaseFreeOfferAsync(hbiPassportTicket, offerId, currencyCode) {
        console.error('shimmed function Marketplace.purchaseFreeOfferAsync')
    }

    static getAlbumsSuggestAsync(albumLibraryId) {
        console.error('shimmed function Marketplace.getAlbumsSuggestAsync')
    }

    static getLatestSeasonMetadataAsync() {
        console.error('shimmed function Marketplace.getLatestSeasonMetadataAsync')
    }

    static generateGuid(guid) {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

}