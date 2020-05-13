export class SignIn {
    startTime: Date =  new Date("30/12/1899 00:00:00 +00:00");
    isSignInSupported: any = false;
    canSignOut: any = false;
    cid: string = '';
    firstName: string = '';
    id: string = '';
    lastName: string = '';
    membershipLevel: string = '';
    signInName: string = '';
    subscriptionOfferID: string = '';
    userXuid: string = '';
    explicitPrivilege: any = false;
    gamerTag: string = '';
    isSubscription: any = false;
    isTunerActivatable: any = false;
    isTunerActivated: any = false;
    locale: string = '';
    meteringCertificate: string = '';
    name: string = '';
    parentallyControlled: any = false;
    usageCollectionAllowed: any = false;
    xuid: string = '';

    signInUser(ticket) {
        console.error('shimmed function SignIn.signInUser')
    }

    authenticateUser(ticket) {
        console.error('shimmed function SignIn.authenticateUser')
    }

    signOut(persistUserDB) {
        console.error('shimmed function SignIn.signOut')
    }

    forgetUserInformation() {
        console.error('shimmed function SignIn.forgetUserInformation')
    }

    getTicket(passportPolicy, targetService, ignoreSignInState, promptType) {
        console.error('shimmed function SignIn.getTicket')
    }

    getDeviceTicket(passportPolicy, targetService) {
        console.error('shimmed function SignIn.getDeviceTicket')
    }

    getAuthHeader() {
        console.error('shimmed function SignIn.getAuthHeader')
    }

    getAuthHeaderForEndpoint(iEndpointId, ignoreSignInState) {
        console.error('shimmed function SignIn.getAuthHeaderForEndpoint')
    }

    getXTokenAsyncOp(iEndpointId) {
        console.error('shimmed function SignIn.getXTokenAsyncOp')
    }

    getXTokenByRelyingPartyAsyncOp(relyingParty) {
        console.error('shimmed function SignIn.getXTokenByRelyingPartyAsyncOp')
    }

    isSignedIn(isSignedIn) {
        console.error('shimmed function SignIn.isSignedIn')
    }

    provisionUserAccount() {
        console.error('shimmed function SignIn.provisionUserAccount')
    }

    updatePartnerToken(partnerToken) {
        console.error('shimmed function SignIn.updatePartnerToken')
    }

    clearTokenMap() {
        console.error('shimmed function SignIn.clearTokenMap')
    }

    setUserProperties(cid, signInName, firstName, lastName, id) {
        console.error('shimmed function SignIn.setUserProperties')
    }

    getV3TokenFromMap(endpoint, token) {
        console.error('shimmed function SignIn.getV3TokenFromMap')
    }

    removeV3TokenEntry(endpoint) {
        console.error('shimmed function SignIn.removeV3TokenEntry')
    }

    setV3Token(endpoint, token, dateExpires) {
        console.error('shimmed function SignIn.setV3Token')
    }

    getTokenFromMap(iEndpointId) {
        console.error('shimmed function SignIn.getTokenFromMap')
    }

    setToken(iEndpointId, token) {
        console.error('shimmed function SignIn.setToken')
    }

    setSignInState(pIdentityInfo) {
        console.error('shimmed function SignIn.setSignInState')
    }

    raiseSignInCompleted(signInResult) {
        console.error('shimmed function SignIn.raiseSignInCompleted')
    }

    raiseSignOutCompleted(signOutResult) {
        console.error('shimmed function SignIn.raiseSignOutCompleted')
    }

    clearSignInState() {
        console.error('shimmed function SignIn.clearSignInState')
    }

}