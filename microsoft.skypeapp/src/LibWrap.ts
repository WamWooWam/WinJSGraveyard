import { EventTarget, ShimProxyHandler, IAsyncAction } from "../../src/Windows.Foundation";

export class AccessSession {
    static hotspottype_SUPPORTED: number = 6;
    static hotspottype_NONE: number = 5;
    static hotspottype_FIRSTPAGEREDIRECT: number = 4;
    static hotspottype_FORM: number = 3;
    static hotspottype_WISPR: number = 2;
    static hotspottype_OPEN: number = 1;
    static hotspottype_UNKNOWN: number = 0;
    static failurereason_SSID_QUERY_FAILURE: number = 16;
    static failurereason_TOKEN_QUERY_FAILURE: number = 15;
    static failurereason_NO_HTML_URL: number = 14;
    static failurereason_WISPR_LOGIN_ERROR: number = 13;
    static failurereason_WISPR_LOGIN_REJECTED: number = 12;
    static failurereason_WISPR_CONTENT_ERROR: number = 11;
    static failurereason_HTTP_FAILURE: number = 10;
    static failurereason_TOO_MANY_REDIRECTS: number = 9;
    static failurereason_ALREADY_ONLINE: number = 8;
    static failurereason_CONNECTION_ERROR: number = 7;
    static failurereason_LOGIN_ABORTED: number = 6;
    static failurereason_LOGOUT_FAILURE: number = 5;
    static failurereason_LOGIN_FAILURE: number = 4;
    static failurereason_NO_SUPPORT: number = 3;
    static failurereason_NO_SUBSCRIPTION: number = 2;
    static failurereason_NO_BALANCE: number = 1;
    static failurereason_NO_FAILURE: number = 0;
    static status_LOGGING_OUT: number = 6;
    static status_LOGIN_FAILED: number = 5;
    static status_LOGGED_OUT: number = 4;
    static status_LOGGED_IN: number = 3;
    static status_LOGGING_IN: number = 2;
    static status_AVAILABLE: number = 1;
    static status_UNAVAILABLE: number = 0;
    static sessionflags_SA_LOW_CREDIT: number = 65536;
    static sessionflags_SA_PRODUCT_CREDIT: number = 256;
    static sessionflags_SA_STAR_RATING_2: number = 128;
    static sessionflags_SA_STAR_RATING_1: number = 64;
    static sessionflags_SA_STAR_RATING_0: number = 32;
    static sessionflags_SA_ASK_TO_RATE: number = 8;
    static sessionflags_SA_NO_CURRENCY_CHANGE: number = 4;
    static sessionflags_SA_SHOW_PROMO_DIALOG: number = 2;
    static sessionflags_SA_OPEN_URL: number = 1;
    static connectionprogress_MAXSTEPS: number = 6;
    static connectionprogress_COMPLETED: number = 5;
    static connectionprogress_WAITING: number = 4;
    static connectionprogress_CHECKING: number = 3;
    static connectionprogress_SUBMITTING: number = 2;
    static connectionprogress_VERIFYING: number = 1;
    static connectionprogress_STARTING: number = 0;

    detectHotspot() {
        console.error('shimmed function AccessSession.detectHotspot')
    }

    notifyWifiChanged(accessPointMAC, accessPointSSID, deviceMAC, dnsServer) {
        console.error('shimmed function AccessSession.notifyWifiChanged')
    }

    sendLocation(latitude, longitude, accuracy) {
        console.error('shimmed function AccessSession.sendLocation')
    }

    loginWispr(username, password) {
        console.error('shimmed function AccessSession.loginWispr')
    }

    sendRating(rating) {
        console.error('shimmed function AccessSession.sendRating')
    }

    discard() {
        console.error('shimmed function AccessSession.discard')
    }

    dispose() {
        console.error('shimmed function AccessSession.dispose')
    }

    getObjectID() {
        console.error('shimmed function AccessSession.getObjectID')
    }

    getDbID() {
        console.error('shimmed function AccessSession.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function AccessSession.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function AccessSession.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function AccessSession.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function AccessSession.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function AccessSession.setExtendedIntProperty')
    }

    static connectionprogresstoString(val) {
        console.error('shimmed function AccessSession.connectionprogresstoString')
    }

    static sessionflagstoString(val) {
        console.error('shimmed function AccessSession.sessionflagstoString')
    }

    static statustoString(val) {
        console.error('shimmed function AccessSession.statustoString')
    }

    static failurereasontoString(val) {
        console.error('shimmed function AccessSession.failurereasontoString')
    }

    static hotspottypetoString(val) {
        console.error('shimmed function AccessSession.hotspottypetoString')
    }

    login() {
        console.error('shimmed function AccessSession.login')
    }

    logout() {
        console.error('shimmed function AccessSession.logout')
    }

    getLifetimeService() {
        console.error('shimmed function AccessSession.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function AccessSession.initializeLifetimeService')
    }
}
export class Account {
    static xmppstatus_XMPP_OFFLINE_EXPLICIT: number = 22;
    static xmppstatus_XMPP_OFFLINE_SKYPE: number = 21;
    static xmppstatus_XMPP_DISABLED: number = 20;
    static xmppstatus_XMPP_ERROR_OTHER: number = 11;
    static xmppstatus_XMPP_ERROR_AUTH: number = 10;
    static xmppstatus_XMPP_PAUSING: number = 3;
    static xmppstatus_XMPP_CONNECTING: number = 2;
    static xmppstatus_XMPP_ONLINE: number = 1;
    static xmppstatus_XMPP_UNLINKED: number = 0;
    static servicetype_ST_PREMIUMVIDEO: number = 2;
    static servicetype_ST_PSTN: number = 1;
    static servicetype_ST_NONE: number = 0;
    static packagetype_PT_FREETRIAL: number = 3;
    static packagetype_PT_DAYPASS: number = 2;
    static packagetype_PT_SUBSCRIPTION: number = 1;
    static packagetype_PT_NONE: number = 0;
    static subscriptionstatus_SS_SUSPENDED: number = 3;
    static subscriptionstatus_SS_CANCELLED: number = 2;
    static subscriptionstatus_SS_ACTIVE: number = 1;
    static subscriptionstatus_SS_NONE: number = 0;
    static capabilitystatus_FINAL_EXPIRY_WARNING: number = 4;
    static capabilitystatus_SECOND_EXPIRY_WARNING: number = 3;
    static capabilitystatus_FIRST_EXPIRY_WARNING: number = 2;
    static capabilitystatus_CAPABILITY_EXISTS: number = 1;
    static capabilitystatus_NO_CAPABILITY: number = 0;
    static federatedpresencepolicy_FEDERATED_DISABLE_FLAMINGO: number = 1;
    static shortcircuitsync_SHORTCIRCUITSYNC_ENABLED: number = 1;
    static shortcircuitsync_SHORTCIRCUITSYNC_DISABLED: number = 0;
    static adpolicy_ADS_ENABLED_NOTARGET: number = 4;
    static adpolicy_ADS_RESERVED3: number = 3;
    static adpolicy_ADS_RESERVED2: number = 2;
    static adpolicy_ADS_RESERVED1: number = 1;
    static adpolicy_ADS_ENABLED: number = 0;
    static authrequestpolicy_AUTHREQUEST_DISABLED: number = 9;
    static authrequestpolicy_CHAT_PARTICIPANTS_CAN_AUTHREQ: number = 5;
    static authrequestpolicy_AUTHREQUEST_ENABLED: number = 0;
    static voicemailpolicy_VOICEMAIL_DISABLED: number = 1;
    static voicemailpolicy_VOICEMAIL_ENABLED: number = 0;
    static phonenumberspolicy_PHONENUMBERS_VISIBLE_FOR_EVERYONE: number = 1;
    static phonenumberspolicy_PHONENUMBERS_VISIBLE_FOR_BUDDIES: number = 0;
    static webpresencepolicy_WEBPRESENCE_ENABLED: number = 1;
    static webpresencepolicy_WEBPRESENCE_DISABLED: number = 0;
    static timezonepolicy_TZ_UNDISCLOSED: number = 2;
    static timezonepolicy_TZ_MANUAL: number = 1;
    static timezonepolicy_TZ_AUTOMATIC: number = 0;
    static buddycountpolicy_DISCLOSE_TO_NOONE: number = 1;
    static buddycountpolicy_DISCLOSE_TO_AUTHORIZED: number = 0;
    static avatarpolicy_EVERYONE_CAN_SEE: number = 2;
    static avatarpolicy_BUDDIES_OR_AUTHORIZED_CAN_SEE: number = 0;
    static pstncallpolicy_BUDDY_NUMBERS_CAN_CALL: number = 2;
    static pstncallpolicy_DISCLOSED_NUMBERS_CAN_CALL: number = 1;
    static pstncallpolicy_ALL_NUMBERS_CAN_CALL: number = 0;
    static skypecallpolicy_BUDDIES_OR_AUTHORIZED_CAN_CALL: number = 2;
    static skypecallpolicy_EVERYONE_CAN_CALL: number = 0;
    static chatpolicy_BUDDIES_OR_AUTHORIZED_CAN_ADD: number = 2;
    static chatpolicy_EVERYONE_CAN_ADD: number = 0;
    static commitstatus_COMMIT_FAILED: number = 3;
    static commitstatus_COMMITTING_TO_SERVER: number = 2;
    static commitstatus_COMMITTED: number = 1;
    static pwdchangestatus_PWD_MUST_LOG_IN_TO_CHANGE: number = 7;
    static pwdchangestatus_PWD_INVALID_NEW_PWD: number = 6;
    static pwdchangestatus_PWD_MUST_DIFFER_FROM_OLD: number = 5;
    static pwdchangestatus_PWD_OK_BUT_CHANGE_SUGGESTED: number = 4;
    static pwdchangestatus_PWD_SERVER_CONNECT_FAILED: number = 3;
    static pwdchangestatus_PWD_INVALID_OLD_PASSWORD: number = 2;
    static pwdchangestatus_PWD_CHANGING: number = 1;
    static pwdchangestatus_PWD_OK: number = 0;
    static logoutreason_ACCESS_TOKEN_RENEWAL_FAILED: number = 27;
    static logoutreason_REMOTE_LOGOUT: number = 26;
    static logoutreason_ATO_BLOCKED: number = 25;
    static logoutreason_UNSUPPORTED_VERSION: number = 24;
    static logoutreason_APP_ID_FAILURE: number = 23;
    static logoutreason_INVALID_APP_ID: number = 22;
    static logoutreason_DB_FAILURE: number = 21;
    static logoutreason_DB_CORRUPT: number = 20;
    static logoutreason_DB_IO_ERROR: number = 19;
    static logoutreason_DB_DISK_FULL: number = 18;
    static logoutreason_PERIODIC_UIC_UPDATE_FAILED: number = 17;
    static logoutreason_PASSWORD_HAS_CHANGED: number = 16;
    static logoutreason_TOO_MANY_LOGIN_ATTEMPTS: number = 15;
    static logoutreason_INCORRECT_PASSWORD: number = 14;
    static logoutreason_NO_SUCH_IDENTITY: number = 13;
    static logoutreason_REJECTED_AS_UNDERAGE: number = 12;
    static logoutreason_SKYPENAME_TAKEN: number = 11;
    static logoutreason_UNACCEPTABLE_PASSWORD: number = 10;
    static logoutreason_INVALID_EMAIL: number = 9;
    static logoutreason_INVALID_SKYPENAME: number = 8;
    static logoutreason_DB_IN_USE: number = 7;
    static logoutreason_SERVER_OVERLOADED: number = 6;
    static logoutreason_SERVER_CONNECT_FAILED: number = 5;
    static logoutreason_P2P_CONNECT_FAILED: number = 4;
    static logoutreason_SOCKS_PROXY_AUTH_FAILED: number = 3;
    static logoutreason_HTTPS_PROXY_AUTH_FAILED: number = 2;
    static logoutreason_LOGOUT_CALLED: number = 1;
    static cblsyncstatus_CBL_REMOTE_SYNC_PENDING: number = 6;
    static cblsyncstatus_CBL_SYNC_FAILED: number = 5;
    static cblsyncstatus_CBL_IN_SYNC: number = 4;
    static cblsyncstatus_CBL_SYNC_IN_PROGRESS: number = 3;
    static cblsyncstatus_CBL_SYNC_PENDING: number = 2;
    static cblsyncstatus_CBL_INITIAL_SYNC_PENDING: number = 1;
    static cblsyncstatus_CBL_INITIALIZING: number = 0;
    static status_LOGGED_IN_PARTIALLY: number = 9;
    static status_LOGGING_OUT: number = 8;
    static status_LOGGED_IN: number = 7;
    static status_INITIALIZING: number = 6;
    static status_LOGGING_IN: number = 5;
    static status_CONNECTING_TO_SERVER: number = 4;
    static status_CONNECTING_TO_P2P: number = 3;
    static status_LOGGED_OUT_AND_PWD_SAVED: number = 2;
    static status_LOGGED_OUT: number = 1;

    getPartnerUID(partnerId) {
        console.error('shimmed function Account.getPartnerUID')
    }

    getLastPartnerId() {
        console.error('shimmed function Account.getLastPartnerId')
    }

    discard() {
        console.error('shimmed function Account.discard')
    }

    getStatus() {
        console.error('shimmed function Account.getStatus')
    }

    getStatusProgress() {
        console.error('shimmed function Account.getStatusProgress')
    }

    hasCapability(capability) {
        console.error('shimmed function Account.hasCapability')
    }

    getMoodTextHtml() {
        console.error('shimmed function Account.getMoodTextHtml')
    }

    dispose() {
        console.error('shimmed function Account.dispose')
    }

    static adpolicytoString(val) {
        console.error('shimmed function Account.adpolicytoString')
    }

    static shortcircuitsynctoString(val) {
        console.error('shimmed function Account.shortcircuitsynctoString')
    }

    static federatedpresencepolicytoString(val) {
        console.error('shimmed function Account.federatedpresencepolicytoString')
    }

    setIntProperty(propKey, value) {
        console.error('shimmed function Account.setIntProperty')
    }

    setStrProperty(propKey, value) {
        console.error('shimmed function Account.setStrProperty')
    }

    setBinProperty(propKey, value) {
        console.error('shimmed function Account.setBinProperty')
    }

    setAvailability(availability) {
        console.error('shimmed function Account.setAvailability')
    }

    setStandby(standby) {
        console.error('shimmed function Account.setStandby')
    }

    setProfileAttachment(attachmentID, attachment) {
        console.error('shimmed function Account.setProfileAttachment')
    }

    static capabilitystatustoString(val) {
        console.error('shimmed function Account.capabilitystatustoString')
    }

    // getCapabilityStatus(capability, expiryTimestamp) {
    //     console.error('shimmed function Account.getCapabilityStatus')
    // }

    // getCapabilityStatus(capability) {
    //     console.error('shimmed function Account.getCapabilityStatus')
    // }

    getSkypenameHash() {
        console.error('shimmed function Account.getSkypenameHash')
    }

    getContactObjectID() {
        console.error('shimmed function Account.getContactObjectID')
    }

    static subscriptionstatustoString(val) {
        console.error('shimmed function Account.subscriptionstatustoString')
    }

    static packagetypetoString(val) {
        console.error('shimmed function Account.packagetypetoString')
    }

    static servicetypetoString(val) {
        console.error('shimmed function Account.servicetypetoString')
    }

    getSubscriptionInfo(name, endtime, status, package_type, service_type) {
        console.error('shimmed function Account.getSubscriptionInfo')
    }

    static xmppstatustoString(val) {
        console.error('shimmed function Account.xmppstatustoString')
    }

    reconnectXMPP() {
        console.error('shimmed function Account.reconnectXMPP')
    }

    getPartnerChannelStatus() {
        console.error('shimmed function Account.getPartnerChannelStatus')
    }

    getVerifiedEmail() {
        console.error('shimmed function Account.getVerifiedEmail')
    }

    getVerifiedCompany() {
        console.error('shimmed function Account.getVerifiedCompany')
    }

    getDBPath() {
        console.error('shimmed function Account.getDBPath')
    }

    delete() {
        console.error('shimmed function Account.delete')
    }

    finishLogin() {
        console.error('shimmed function Account.finishLogin')
    }

    register(password, savePwd, saveDataLocally, email, allowSpam) {
        console.error('shimmed function Account.register')
    }

    logout(clearSavedPwd) {
        console.error('shimmed function Account.logout')
    }

    logoutEx(clearSavedPwd, localOnly) {
        console.error('shimmed function Account.logoutEx')
    }

    logoutOtherEndpoints() {
        console.error('shimmed function Account.logoutOtherEndpoints')
    }

    logoutOtherEndpoint(endpointID) {
        console.error('shimmed function Account.logoutOtherEndpoint')
    }

    getOwnEndpointsInfo(id, name, type) {
        console.error('shimmed function Account.getOwnEndpointsInfo')
    }

    externalLoginResponse(response) {
        console.error('shimmed function Account.externalLoginResponse')
    }

    static pwdchangestatustoString(val) {
        console.error('shimmed function Account.pwdchangestatustoString')
    }

    changePassword(oldPassword, newPassword, savePwd) {
        console.error('shimmed function Account.changePassword')
    }

    setPasswordSaved(savePwd) {
        console.error('shimmed function Account.setPasswordSaved')
    }

    setServersideIntProperty(propKey, value) {
        console.error('shimmed function Account.setServersideIntProperty')
    }

    setServersideStrProperty(propKey, value) {
        console.error('shimmed function Account.setServersideStrProperty')
    }

    static commitstatustoString(val) {
        console.error('shimmed function Account.commitstatustoString')
    }

    cancelServerCommit() {
        console.error('shimmed function Account.cancelServerCommit')
    }

    static chatpolicytoString(val) {
        console.error('shimmed function Account.chatpolicytoString')
    }

    static skypecallpolicytoString(val) {
        console.error('shimmed function Account.skypecallpolicytoString')
    }

    static pstncallpolicytoString(val) {
        console.error('shimmed function Account.pstncallpolicytoString')
    }

    static avatarpolicytoString(val) {
        console.error('shimmed function Account.avatarpolicytoString')
    }

    static buddycountpolicytoString(val) {
        console.error('shimmed function Account.buddycountpolicytoString')
    }

    static timezonepolicytoString(val) {
        console.error('shimmed function Account.timezonepolicytoString')
    }

    static webpresencepolicytoString(val) {
        console.error('shimmed function Account.webpresencepolicytoString')
    }

    static phonenumberspolicytoString(val) {
        console.error('shimmed function Account.phonenumberspolicytoString')
    }

    static voicemailpolicytoString(val) {
        console.error('shimmed function Account.voicemailpolicytoString')
    }

    static authrequestpolicytoString(val) {
        console.error('shimmed function Account.authrequestpolicytoString')
    }

    getObjectID() {
        console.error('shimmed function Account.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Account.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Account.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Account.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Account.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Account.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Account.setExtendedIntProperty')
    }

    static statustoString(val) {
        console.error('shimmed function Account.statustoString')
    }

    getStatusWithProgress() {
        console.error('shimmed function Account.getStatusWithProgress')
    }

    static cblsyncstatustoString(val) {
        console.error('shimmed function Account.cblsyncstatustoString')
    }

    static logoutreasontoString(val) {
        console.error('shimmed function Account.logoutreasontoString')
    }

    setUIVersion(uiVersionString) {
        console.error('shimmed function Account.setUIVersion')
    }

    login(setAvailabilityTo) {
        console.error('shimmed function Account.login')
    }

    beginLogin(setAvailabilityTo) {
        console.error('shimmed function Account.beginLogin')
    }

    loginWithPassword(password, savePwd, saveDataLocally) {
        console.error('shimmed function Account.loginWithPassword')
    }

    loginWithOAuth(partnerId, accessToken, refreshToken, savePwd, saveDataLocally) {
        console.error('shimmed function Account.loginWithOAuth')
    }

    getLifetimeService() {
        console.error('shimmed function Account.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Account.initializeLifetimeService')
    }
}
export class AccountGetCapabilityStatusResult {

    getLifetimeService() {
        console.error('shimmed function AccountGetCapabilityStatusResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function AccountGetCapabilityStatusResult.initializeLifetimeService')
    }
}
export class AccountGetStatusWithProgressResult {

    getLifetimeService() {
        console.error('shimmed function AccountGetStatusWithProgressResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function AccountGetStatusWithProgressResult.initializeLifetimeService')
    }
}
export class AccountManager {
    static local_SETTINGS_KEY_USER_CID: string = 'skype.liveuser.CID';

    static isTheSameLiveUser() {
        console.error('shimmed function AccountManager.isTheSameLiveUser')
    }

    static isTheSameSkypeUser(accountName) {
        console.error('shimmed function AccountManager.isTheSameSkypeUser')
    }

    static updateAccountName(accountName) {
        console.error('shimmed function AccountManager.updateAccountName')
    }

    getLifetimeService() {
        console.error('shimmed function AccountManager.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function AccountManager.initializeLifetimeService')
    }
}
export class Alert {
    static window_SIZE_LARGE: number = 2;
    static window_SIZE_PIC: number = 1;
    static window_SIZE_SMALL: number = 0;
    static type_AUTHREQ: number = 2;
    static type_INFO: number = 1;
    static type_NOTICE: number = 0;

    getObjectID() {
        console.error('shimmed function Alert.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Alert.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Alert.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Alert.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Alert.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Alert.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Alert.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function Alert.typetoString')
    }

    static window_SIZEToString(val) {
        console.error('shimmed function Alert.window_SIZEToString')
    }

    markSeen() {
        console.error('shimmed function Alert.markSeen')
    }

    delete() {
        console.error('shimmed function Alert.delete')
    }

    discard() {
        console.error('shimmed function Alert.discard')
    }

    dispose() {
        console.error('shimmed function Alert.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function Alert.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Alert.initializeLifetimeService')
    }
}
export class AvatarManager {

    static offlineAvatarURI(identity) {
        console.error('shimmed function AvatarManager.offlineAvatarURI')
    }

    static isDefaultAvatarURI(URI) {
        console.error('shimmed function AvatarManager.isDefaultAvatarURI')
    }

    getAvatarURI(identity) {
        console.error('shimmed function AvatarManager.getAvatarURI')
    }

    getLifetimeService() {
        console.error('shimmed function AvatarManager.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function AvatarManager.initializeLifetimeService')
    }
}
export class Binary {

    set(bytes) {
        console.error('shimmed function Binary.set')
    }

    getAsBase64() {
        console.error('shimmed function Binary.getAsBase64')
    }

    append(other) {
        console.error('shimmed function Binary.append')
    }

    dispose() {
        console.error('shimmed function Binary.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function Binary.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Binary.initializeLifetimeService')
    }
}
export class Build {
    static release: boolean = true;

    static getBuildType() {
        console.error('shimmed function Build.getBuildType')
    }

    getLifetimeService() {
        console.error('shimmed function Build.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Build.initializeLifetimeService')
    }
}
export enum BuildType {
    buildtype_REAL_ENV,
    buildtype_TEST_ENV,
}
export class Call {

    getLifetimeService() {
        console.error('shimmed function Call.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Call.initializeLifetimeService')
    }
}
export class CallMember {

    getLifetimeService() {
        console.error('shimmed function CallMember.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function CallMember.initializeLifetimeService')
    }
}
export class Chat {

    getLifetimeService() {
        console.error('shimmed function Chat.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Chat.initializeLifetimeService')
    }
}
export class ChatMember {

    getLifetimeService() {
        console.error('shimmed function ChatMember.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ChatMember.initializeLifetimeService')
    }
}
export class ChatMessage {

    getLifetimeService() {
        console.error('shimmed function ChatMessage.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ChatMessage.initializeLifetimeService')
    }
}
export class Contact {
    static capabilitystatus_CAPABILITY_EXISTS: number = 2;
    static capabilitystatus_CAPABILITY_MIXED: number = 1;
    static capabilitystatus_NO_CAPABILITY: number = 0;
    static capability_CAPABILITY_PUBLIC_CONTACT: number = 14;
    static capability_CAPABILITY_MOBILE_DEVICE: number = 13;
    static capability_CAPABILITY_VOICE_EVER: number = 12;
    static capability_CAPABILITY_TEXT_EVER: number = 11;
    static capability_CAPABILITY_PSTN_TRANSFER: number = 10;
    static capability_CAPABILITY_COMMERCIAL_CONTACT: number = 9;
    static capability_CAPABILITY_LARGE_CONFERENCE: number = 8;
    static capability_CAPABILITY_SERVICE_PROVIDER: number = 7;
    static capability_CAPABILITY_TEXT: number = 6;
    static capability_CAPABILITY_VIDEO: number = 5;
    static capability_CAPABILITY_CALL_FORWARD: number = 4;
    static capability_CAPABILITY_CAN_BE_SENT_VM: number = 3;
    static capability_CAPABILITY_SKYPEIN: number = 2;
    static capability_CAPABILITY_SKYPEOUT: number = 1;
    static capability_CAPABILITY_VOICEMAIL: number = 0;
    static extra_AUTHREQ_FIELDS_SEND_VERIFIED_COMPANY: number = 2;
    static extra_AUTHREQ_FIELDS_SEND_VERIFIED_EMAIL: number = 1;
    static availability_SKYPE_ME_FROM_MOBILE: number = 20;
    static availability_DO_NOT_DISTURB_FROM_MOBILE: number = 18;
    static availability_NOT_AVAILABLE_FROM_MOBILE: number = 17;
    static availability_AWAY_FROM_MOBILE: number = 16;
    static availability_ONLINE_FROM_MOBILE: number = 15;
    static availability_CONNECTING: number = 14;
    static availability_INVISIBLE: number = 6;
    static availability_SKYPE_ME: number = 7;
    static availability_DO_NOT_DISTURB: number = 5;
    static availability_NOT_AVAILABLE: number = 4;
    static availability_AWAY: number = 3;
    static availability_ONLINE: number = 2;
    static availability_OFFLINE_BUT_CF_ABLE: number = 13;
    static availability_OFFLINE_BUT_VM_ABLE: number = 12;
    static availability_OFFLINE: number = 1;
    static availability_SKYPEOUT: number = 10;
    static availability_BLOCKED_SKYPEOUT: number = 11;
    static availability_BLOCKED: number = 9;
    static availability_PENDINGAUTH: number = 8;
    static availability_UNKNOWN: number = 0;
    static authlevel_BLOCKED_BY_ME: number = 2;
    static authlevel_AUTHORIZED_BY_ME: number = 1;
    static authlevel_NONE: number = 0;
    static type_LYNC: number = 9;
    static type_PASSPORT: number = 8;
    static type_XMPP: number = 7;
    static type_EXTERNAL: number = 6;
    static type_UNDISCLOSED_PSTN: number = 5;
    static type_FREE_PSTN: number = 4;
    static type_EMERGENCY_PSTN: number = 3;
    static type_PSTN: number = 2;
    static type_SKYPE: number = 1;
    static type_UNRECOGNIZED: number = 0;

    setBuddyStatus(isMyBuddy, syncAuth) {
        console.error('shimmed function Contact.setBuddyStatus')
    }

    static extra_AUTHREQ_FIELDSToString(val) {
        console.error('shimmed function Contact.extra_AUTHREQ_FIELDSToString')
    }

    sendAuthRequest(message, extras_bitmask) {
        console.error('shimmed function Contact.sendAuthRequest')
    }

    hasAuthorizedMe() {
        console.error('shimmed function Contact.hasAuthorizedMe')
    }

    setPhoneNumber(num, label, number) {
        console.error('shimmed function Contact.setPhoneNumber')
    }

    copyLocalDataFrom(fromContactObjectID) {
        console.error('shimmed function Contact.copyLocalDataFrom')
    }

    openConversation(conversation) {
        console.error('shimmed function Contact.openConversation')
    }

    static capabilitytoString(val) {
        console.error('shimmed function Contact.capabilitytoString')
    }

    static capabilitystatustoString(val) {
        console.error('shimmed function Contact.capabilitystatustoString')
    }

    hasCapability(capability, queryServer) {
        console.error('shimmed function Contact.hasCapability')
    }

    getCapabilityStatus(capability, queryServer) {
        console.error('shimmed function Contact.getCapabilityStatus')
    }

    refreshProfile() {
        console.error('shimmed function Contact.refreshProfile')
    }

    getKnownRemoteVersions(versions, useMSNPPresence) {
        console.error('shimmed function Contact.getKnownRemoteVersions')
    }

    discard() {
        console.error('shimmed function Contact.discard')
    }

    getAuthRequestMessageHtml() {
        console.error('shimmed function Contact.getAuthRequestMessageHtml')
    }

    getDisplayNameHtml() {
        console.error('shimmed function Contact.getDisplayNameHtml')
    }

    getFullNameHtml() {
        console.error('shimmed function Contact.getFullNameHtml')
    }

    getMoodTextHtml() {
        console.error('shimmed function Contact.getMoodTextHtml')
    }

    dispose() {
        console.error('shimmed function Contact.dispose')
    }

    getObjectID() {
        console.error('shimmed function Contact.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Contact.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Contact.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Contact.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Contact.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Contact.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Contact.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function Contact.typetoString')
    }

    getContactType() {
        console.error('shimmed function Contact.getContactType')
    }

    static authleveltoString(val) {
        console.error('shimmed function Contact.authleveltoString')
    }

    static availabilitytoString(val) {
        console.error('shimmed function Contact.availabilitytoString')
    }

    getIdentity() {
        console.error('shimmed function Contact.getIdentity')
    }

    getAvatar(avatar) {
        console.error('shimmed function Contact.getAvatar')
    }

    getProfileAttachment(attachmentID, attachment) {
        console.error('shimmed function Contact.getProfileAttachment')
    }

    getVerifiedEmail() {
        console.error('shimmed function Contact.getVerifiedEmail')
    }

    getVerifiedCompany() {
        console.error('shimmed function Contact.getVerifiedCompany')
    }

    isMemberOf(groupObjectID) {
        console.error('shimmed function Contact.isMemberOf')
    }

    isMemberOfHardwiredGroup(groupType) {
        console.error('shimmed function Contact.isMemberOfHardwiredGroup')
    }

    getUnifiedMasters(masters) {
        console.error('shimmed function Contact.getUnifiedMasters')
    }

    getUnifiedServants(servants) {
        console.error('shimmed function Contact.getUnifiedServants')
    }

    setBlocked(blocked, abuse) {
        console.error('shimmed function Contact.setBlocked')
    }

    ignoreAuthRequest() {
        console.error('shimmed function Contact.ignoreAuthRequest')
    }

    giveDisplayName(name) {
        console.error('shimmed function Contact.giveDisplayName')
    }

    assignSpeedDial(dial) {
        console.error('shimmed function Contact.assignSpeedDial')
    }

    getLifetimeService() {
        console.error('shimmed function Contact.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Contact.initializeLifetimeService')
    }
}
export class ContactGroup {
    static type_SCD_CONTACTS: number = 19;
    static type_LYNC_CONTACTS: number = 18;
    static type_PASSPORT_CONTACTS: number = 17;
    static type_XMPP_CONTACTS: number = 16;
    static type_EXTERNAL_CONTACTS: number = 15;
    static type_SHARED_GROUP: number = 14;
    static type_PROPOSED_SHARED_GROUP: number = 13;
    static type_CUSTOM_GROUP: number = 12;
    static type_UNGROUPED_BUDDIES: number = 11;
    static type_CONTACTS_BLOCKED_BY_ME: number = 10;
    static type_CONTACTS_AUTHORIZED_BY_ME: number = 9;
    static type_CONTACTS_WAITING_MY_AUTHORIZATION: number = 8;
    static type_RECENTLY_CONTACTED_CONTACTS: number = 7;
    static type_UNKNOWN_OR_PENDINGAUTH_BUDDIES: number = 6;
    static type_ONLINE_BUDDIES: number = 5;
    static type_SKYPEOUT_BUDDIES: number = 4;
    static type_SKYPE_BUDDIES: number = 3;
    static type_ALL_BUDDIES: number = 2;
    static type_ALL_KNOWN_CONTACTS: number = 1;

    getObjectID() {
        console.error('shimmed function ContactGroup.getObjectID')
    }

    getDbID() {
        console.error('shimmed function ContactGroup.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function ContactGroup.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function ContactGroup.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function ContactGroup.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function ContactGroup.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function ContactGroup.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function ContactGroup.typetoString')
    }

    giveDisplayName(name) {
        console.error('shimmed function ContactGroup.giveDisplayName')
    }

    giveSortOrder(sortOrder) {
        console.error('shimmed function ContactGroup.giveSortOrder')
    }

    delete() {
        console.error('shimmed function ContactGroup.delete')
    }

    getConversations(conversations) {
        console.error('shimmed function ContactGroup.getConversations')
    }

    canAddConversation(conversationObjectID) {
        console.error('shimmed function ContactGroup.canAddConversation')
    }

    addConversation(conversationObjectID) {
        console.error('shimmed function ContactGroup.addConversation')
    }

    canRemoveConversation() {
        console.error('shimmed function ContactGroup.canRemoveConversation')
    }

    removeConversation(conversationObjectID) {
        console.error('shimmed function ContactGroup.removeConversation')
    }

    getContacts(contacts) {
        console.error('shimmed function ContactGroup.getContacts')
    }

    canAddContact(contactObjectID) {
        console.error('shimmed function ContactGroup.canAddContact')
    }

    addContact(contactObjectID) {
        console.error('shimmed function ContactGroup.addContact')
    }

    canRemoveContact() {
        console.error('shimmed function ContactGroup.canRemoveContact')
    }

    removeContact(contactObjectID) {
        console.error('shimmed function ContactGroup.removeContact')
    }

    discard() {
        console.error('shimmed function ContactGroup.discard')
    }

    dispose() {
        console.error('shimmed function ContactGroup.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function ContactGroup.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ContactGroup.initializeLifetimeService')
    }
}
export class ContactSearch {
    static contact_TYPE_LYNC: number = 2;
    static contact_TYPE_SKYPE: number = 1;
    static condition_CONTAINS_WORD_PREFIXES: number = 9;
    static condition_CONTAINS_WORDS: number = 8;
    static condition_PREFIX_LE: number = 7;
    static condition_PREFIX_GE: number = 6;
    static condition_PREFIX_EQ: number = 5;
    static condition_LE: number = 4;
    static condition_LT: number = 3;
    static condition_GE: number = 2;
    static condition_GT: number = 1;
    static condition_EQ: number = 0;
    static status_FAILED: number = 5;
    static status_FINISHED: number = 4;
    static status_EXTENDABLE: number = 3;
    static status_PENDING: number = 2;
    static status_CONSTRUCTION: number = 1;

    getObjectID() {
        console.error('shimmed function ContactSearch.getObjectID')
    }

    getDbID() {
        console.error('shimmed function ContactSearch.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function ContactSearch.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function ContactSearch.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function ContactSearch.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function ContactSearch.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function ContactSearch.setExtendedIntProperty')
    }

    static statustoString(val) {
        console.error('shimmed function ContactSearch.statustoString')
    }

    addMinAgeTerm(min_age_in_years, add_to_subs) {
        console.error('shimmed function ContactSearch.addMinAgeTerm')
    }

    addMaxAgeTerm(max_age_in_years, add_to_subs) {
        console.error('shimmed function ContactSearch.addMaxAgeTerm')
    }

    addEmailTerm(email, add_to_subs) {
        console.error('shimmed function ContactSearch.addEmailTerm')
    }

    addLanguageTerm(language, add_to_subs) {
        console.error('shimmed function ContactSearch.addLanguageTerm')
    }

    static conditiontoString(val) {
        console.error('shimmed function ContactSearch.conditiontoString')
    }

    addStrTerm(prop, cond, value, add_to_subs) {
        console.error('shimmed function ContactSearch.addStrTerm')
    }

    addIntTerm(prop, cond, value, add_to_subs) {
        console.error('shimmed function ContactSearch.addIntTerm')
    }

    addOr() {
        console.error('shimmed function ContactSearch.addOr')
    }

    isValid() {
        console.error('shimmed function ContactSearch.isValid')
    }

    submit() {
        console.error('shimmed function ContactSearch.submit')
    }

    extend() {
        console.error('shimmed function ContactSearch.extend')
    }

    _Release() {
        console.error('shimmed function ContactSearch._Release')
    }

    getResults(contacts, from, count) {
        console.error('shimmed function ContactSearch.getResults')
    }

    static contact_TYPEToString(val) {
        console.error('shimmed function ContactSearch.contact_TYPEToString')
    }

    setSupportedContactTypes(contactTypesBitmask) {
        console.error('shimmed function ContactSearch.setSupportedContactTypes')
    }

    discard() {
        console.error('shimmed function ContactSearch.discard')
    }

    search(text) {
        console.error('shimmed function ContactSearch.search')
    }

    dispose() {
        console.error('shimmed function ContactSearch.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function ContactSearch.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ContactSearch.initializeLifetimeService')
    }
}
export class ContactSearchMatch {

    asString() {
        console.error('shimmed function ContactSearchMatch.asString')
    }

    getLifetimeService() {
        console.error('shimmed function ContactSearchMatch.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ContactSearchMatch.initializeLifetimeService')
    }
}
export class ContactSearchMatchEvent {

    invoke(sender, match) {
        console.error('shimmed function ContactSearchMatchEvent.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function ContactSearchMatchEvent.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function ContactSearchMatchEvent.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function ContactSearchMatchEvent.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function ContactSearchMatchEvent.clone')
    }
}
export class ContentItem {

    getObjectID() {
        console.error('shimmed function ContentItem.getObjectID')
    }

    getDbID() {
        console.error('shimmed function ContentItem.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function ContentItem.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function ContentItem.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function ContentItem.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function ContentItem.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function ContentItem.setExtendedIntProperty')
    }

    discard() {
        console.error('shimmed function ContentItem.discard')
    }

    dispose() {
        console.error('shimmed function ContentItem.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function ContentItem.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ContentItem.initializeLifetimeService')
    }
}
export class Conversation {
    static subscription_CHECK_CONTEXT_USER_IS_ABOUT_TO_START_VIDEO: number = 1;
    static subscription_CHECK_CONTEXT_USER_IS_ABOUT_TO_START_SCREENSHARE: number = 0;
    static capability_CAPABILITY_COUNT: number = 24;
    static capability_CAN_SEND_STATIC_LOCATION_MESSAGE: number = 23;
    static capability_CAN_SEND_MEDIAMESSAGE: number = 22;
    static capability_CAN_SEND_VIDEOMESSAGE: number = 21;
    static capability_CAN_SPAWN: number = 20;
    static capability_CAN_KICK: number = 19;
    static capability_CAN_RETIRE: number = 18;
    static capability_CAN_ADD: number = 17;
    static capability_CAN_CHANGE_PICTURE: number = 16;
    static capability_CAN_CHANGE_TOPIC: number = 15;
    static capability_CAN_EDIT_OTHERS: number = 14;
    static capability_CAN_EDIT_MYSELF: number = 13;
    static capability_CAN_SEND_CONTACTS: number = 12;
    static capability_CAN_SEND_VOICEMAIL: number = 11;
    static capability_CAN_SEND_FILE: number = 10;
    static capability_CAN_SEND_TEXT: number = 9;
    static capability_CAN_SEND_SMS: number = 8;
    static capability_CAN_CHECK_QUALITY: number = 7;
    static capability_CAN_HOLD_LIVE_SESSION: number = 6;
    static capability_CAN_SHARE_SCREEN: number = 5;
    static capability_CAN_RING_PSTN: number = 4;
    static capability_CAN_RING_VIDEO: number = 3;
    static capability_CAN_RING_ALL: number = 2;
    static capability_CAN_RING: number = 1;
    static capability_CAN_GO_LIVE: number = 0;
    static list_TYPE_REALLY_ALL_CONVERSATIONS: number = 5;
    static list_TYPE_PINNED_CONVERSATIONS: number = 4;
    static list_TYPE_LIVE_CONVERSATIONS: number = 3;
    static list_TYPE_BOOKMARKED_CONVERSATIONS: number = 2;
    static list_TYPE_INBOX_CONVERSATIONS: number = 1;
    static list_TYPE_ALL_CONVERSATIONS: number = 0;
    static participantfilter_OTHER_CONSUMERS: number = 5;
    static participantfilter_MYSELF: number = 4;
    static participantfilter_CONSUMERS_AND_APPLICANTS: number = 3;
    static participantfilter_APPLICANTS: number = 2;
    static participantfilter_CONSUMERS: number = 1;
    static participantfilter_ALL: number = 0;
    static picture_FORMAT_PICTURE_SINGLE_URL: number = 1;
    static picture_FORMAT_PICTURE_DEFAULT: number = 0;
    static live_SESSION_EVENT_USER_REJECTED_BECAUSE_OF_CONF_PARTICIPANTS_LIMIT: number = 1;
    static live_SESSION_EVENT_DOWNGRADED_TO_AUDIO_BECAUSE_OF_VIDEO_PARTICIPANTS_LIMIT: number = 0;
    static premium_VIDEO_STATUS_RESULT_503_SERVICE_TIMEOUT: number = 16;
    static premium_VIDEO_STATUS_RESULT_500_GENERAL_SERVICE_ERROR: number = 15;
    static premium_VIDEO_STATUS_RESULT_430_GRACE_TIME_EXPIRED: number = 14;
    static premium_VIDEO_STATUS_RESULT_424_FAIR_USAGE_POLICY_VIOLATION_SPONSORS_MONTH_LIMIT_REACHED: number = 13;
    static premium_VIDEO_STATUS_RESULT_422_FAIR_USAGE_POLICY_VIOLATION_SPONSORS_DAY_LIMIT_REACHED: number = 12;
    static premium_VIDEO_STATUS_RESULT_420_FAIR_USAGE_POLICY_VIOLATION_CALL_LIMIT_REACHED: number = 11;
    static premium_VIDEO_STATUS_RESULT_416_SUBSCRIPTION_IS_ALREADY_IN_USE: number = 10;
    static premium_VIDEO_STATUS_RESULT_414_NO_SUBSCRIPTION: number = 9;
    static premium_VIDEO_STATUS_RESULT_412_SUBSCRIPTION_INSUFFICENT_FOR_THIS_CALL: number = 8;
    static premium_VIDEO_STATUS_RESULT_410_NO_VALID_SUBSCRIPTION_BUT_TRIAL_IS_AVAILABLE: number = 7;
    static premium_VIDEO_STATUS_RESULT_405_GROUP_TOO_LARGE: number = 6;
    static premium_VIDEO_STATUS_RESULT_404_CONVERSATION_ID_NOT_FOUND_OR_CALL_ALREADY_TERMINATED: number = 5;
    static premium_VIDEO_STATUS_RESULT_403_PAID_SERVICE_BLOCK: number = 4;
    static premium_VIDEO_STATUS_RESULT_401_P2P_BLOCK: number = 3;
    static premium_VIDEO_STATUS_RESULT_400_BAD_REQUEST_SOME_FIELDS_MISSING: number = 2;
    static premium_VIDEO_STATUS_RESULT_200_OK: number = 1;
    static premium_VIDEO_STATUS_NOT_MULTIPARTY_VIDEO: number = 0;
    static allowed_ACTIVITY_SPEAK_AND_WRITE: number = 8;
    static allowed_ACTIVITY_SPEAK: number = 4;
    static allowed_ACTIVITY_ADD_CONSUMERS: number = 2;
    static allowed_ACTIVITY_SET_META: number = 1;
    static local_LIVESTATUS_ACTIVATING: number = 13;
    static local_LIVESTATUS_TRANSFERRING: number = 12;
    static local_LIVESTATUS_RECENTLY_LIVE: number = 10;
    static local_LIVESTATUS_RECORDING_VOICE_MESSAGE: number = 9;
    static local_LIVESTATUS_PLAYING_VOICE_MESSAGE: number = 8;
    static local_LIVESTATUS_OTHERS_ARE_LIVE_FULL: number = 11;
    static local_LIVESTATUS_OTHERS_ARE_LIVE: number = 7;
    static local_LIVESTATUS_ON_HOLD_REMOTELY: number = 6;
    static local_LIVESTATUS_ON_HOLD_LOCALLY: number = 5;
    static local_LIVESTATUS_IM_LIVE: number = 3;
    static local_LIVESTATUS_RINGING_FOR_ME: number = 2;
    static local_LIVESTATUS_STARTING: number = 1;
    static local_LIVESTATUS_NONE: number = 0;
    static my_STATUS_RETIRED_VOLUNTARILY: number = 10;
    static my_STATUS_RETIRED_FORCEFULLY: number = 9;
    static my_STATUS_CONSUMER: number = 8;
    static my_STATUS_INVALID_ACCESS_TOKEN: number = 7;
    static my_STATUS_APPLICATION_DENIED: number = 6;
    static my_STATUS_APPLICANT: number = 5;
    static my_STATUS_QUEUED_TO_ENTER: number = 4;
    static my_STATUS_DOWNLOADING_MESSAGES: number = 3;
    static my_STATUS_RETRY_CONNECTING: number = 2;
    static my_STATUS_CONNECTING: number = 1;
    static type_LEGACY_SHAREDGROUP: number = 5;
    static type_LEGACY_VOICE_CONFERENCE: number = 4;
    static type_TERMINATED_CONFERENCE: number = 3;
    static type_CONFERENCE: number = 2;
    static type_DIALOG: number = 1;
    static setupkey_KEEP_IN_INBOX_WHEN_BLOCKING: string = 'Lib/Conversation/KeepInInboxWhenBlocking';
    static setupkey_INCOMING_AUTH_REQUEST_IN_CONV: string = 'Lib/Conversation/IncomingAuthRequestInConv';
    static setupkey_ENABLE_REACHBACK_CALLING: string = 'Lib/Reachback/Enable';
    static setupkey_HASH_LINK_URL: string = 'UI/General/HashLinkURL';
    static setupkey_ENABLE_DIFF_HIGHLIGHTING: string = 'Lib/Chat/HighlightDiffs';
    static setupkey_CALL_SEAMLESS_UPGRADE_CAPABLE: string = '*Lib/Call/SeamlessUpgradeCapable';
    static setupkey_CALL_EMERGENCY_COUNTRY: string = 'Lib/Call/EmergencyCountry';
    static setupkey_CALL_INCOMING_IN_ROUTING_STATUS: string = '*Lib/Call/IncomingInRoutingStatus';
    static setupkey_CALL_APPLY_CF: string = 'Lib/Call/ApplyCF';
    static setupkey_CALL_SEND_TO_VM: string = 'Lib/Call/SendToVM';
    static setupkey_CALL_NOANSWER_TIMEOUT: string = 'Lib/Call/NoAnswerTimeout';
    static setupkey_DISABLE_CHAT_ACTIVITY_INDICATION: string = 'Lib/Chat/DisableActivityIndication';
    static setupkey_CHATDB_LIMIT_KB: string = 'Lib/Chat/ChatDBLimitKb';
    static setupkey_CHAT_HISTORY_DAYS: string = 'Lib/Chat/HistoryDays';
    static setupkey_DISABLE_CHAT_HISTORY: string = 'Lib/Message/DisableHistory';
    static setupkey_DISABLE_P2P_CHAT: string = '*Lib/Chat/Disable';
    static setupkey_DISABLE_CHAT: string = 'Lib/Chat/DisableChat';
    static setupkey_QUIET_P2P_IN_CALL: string = '*Lib/Conversation/QuietP2PInCall';
    static setupkey_RECENTLY_LIVE_TIMEOUT: string = 'Lib/Conversation/RecentlyLiveTimeout';
    static setupkey_INBOX_LIMIT_DAYS: string = 'Lib/Conversation/InboxLimitDays';
    static setupkey_UPDATE_INBOX_MESSAGE_ID_METHOD: string = 'Lib/Conversation/UpdateInboxMessageIDMethod';
    static setupkey_DISABLE_INBOX_UPDATE_ON_TYPING: string = 'Lib/Conversation/DisableInboxUpdateOnTyping';
    static setupkey_INBOX_UPDATE_TIMEOUT: string = 'Lib/Conversation/InboxUpdateTimeout';
    static setupkey_ENABLE_EXTERNAL_CONTACTS: string = 'Lib/Contacts/EnableExternalContacts';
    static setupkey_ENABLE_BIRTHDAY_NOTIFICATION: string = 'Lib/Conversation/EnableBirthday';

    static capabilitytoString(val) {
        console.error('shimmed function Conversation.capabilitytoString')
    }

    getCapabilities() {
        console.error('shimmed function Conversation.getCapabilities')
    }

    static subscription_CHECK_CONTEXTToString(val) {
        console.error('shimmed function Conversation.subscription_CHECK_CONTEXTToString')
    }

    checkPremiumVideoSubscription(context) {
        console.error('shimmed function Conversation.checkPremiumVideoSubscription')
    }

    getChatNameFromThreadId() {
        console.error('shimmed function Conversation.getChatNameFromThreadId')
    }

    getThreadIdFromChatName() {
        console.error('shimmed function Conversation.getThreadIdFromChatName')
    }

    getIdentity() {
        console.error('shimmed function Conversation.getIdentity')
    }

    getDisplayNameHtml() {
        console.error('shimmed function Conversation.getDisplayNameHtml')
    }

    getTopicHtml() {
        console.error('shimmed function Conversation.getTopicHtml')
    }

    subscribePropChanges(propKeys) {
        console.error('shimmed function Conversation.subscribePropChanges')
    }

    discard() {
        console.error('shimmed function Conversation.discard')
    }

    dispose() {
        console.error('shimmed function Conversation.dispose')
    }

    postVoiceMessage(voicemailObjectID, body) {
        console.error('shimmed function Conversation.postVoiceMessage')
    }

    postSMS(smsObjectID, body) {
        console.error('shimmed function Conversation.postSMS')
    }

    postVideoMessage(videoMessageObjectID, legacyMessage) {
        console.error('shimmed function Conversation.postVideoMessage')
    }

    postMediaDocument(documentObjectID, legacyMessage) {
        console.error('shimmed function Conversation.postMediaDocument')
    }

    postExternalMessage(type, bodyXml) {
        console.error('shimmed function Conversation.postExternalMessage')
    }

    postLocationMessage(latitude, longitude, altitude, horizontalAccuracy, verticalAccuracy, speed, course, timeStamp, address, pointOfInterest, legacyMessage) {
        console.error('shimmed function Conversation.postLocationMessage')
    }

    postSystemMessage(text, isXML) {
        console.error('shimmed function Conversation.postSystemMessage')
    }

    getJoinBlob() {
        console.error('shimmed function Conversation.getJoinBlob')
    }

    getNonseWord() {
        console.error('shimmed function Conversation.getNonseWord')
    }

    setDeferredSetup(deferred) {
        console.error('shimmed function Conversation.setDeferredSetup')
    }

    join_() {
        console.error('shimmed function Conversation.join_')
    }

    enterPassword(password) {
        console.error('shimmed function Conversation.enterPassword')
    }

    setPassword(password, hint) {
        console.error('shimmed function Conversation.setPassword')
    }

    retireFrom() {
        console.error('shimmed function Conversation.retireFrom')
    }

    delete() {
        console.error('shimmed function Conversation.delete')
    }

    renameTo(name) {
        console.error('shimmed function Conversation.renameTo')
    }

    setBookmark(bookmark) {
        console.error('shimmed function Conversation.setBookmark')
    }

    setAlertString(alertString) {
        console.error('shimmed function Conversation.setAlertString')
    }

    removeFromInbox() {
        console.error('shimmed function Conversation.removeFromInbox')
    }

    addToInbox(timestamp) {
        console.error('shimmed function Conversation.addToInbox')
    }

    setConsumedHorizon(timestamp, also_unconsume) {
        console.error('shimmed function Conversation.setConsumedHorizon')
    }

    markUnread() {
        console.error('shimmed function Conversation.markUnread')
    }

    isMemberOf(groupObjectID) {
        console.error('shimmed function Conversation.isMemberOf')
    }

    pinFirst() {
        console.error('shimmed function Conversation.pinFirst')
    }

    pinAfter(previousConversationObjectID) {
        console.error('shimmed function Conversation.pinAfter')
    }

    unPin() {
        console.error('shimmed function Conversation.unPin')
    }

    static participantfiltertoString(val) {
        console.error('shimmed function Conversation.participantfiltertoString')
    }

    getParticipants(participants, filter) {
        console.error('shimmed function Conversation.getParticipants')
    }

    getLastMessages(contextMessages, unconsumedMessages, requireTimestamp) {
        console.error('shimmed function Conversation.getLastMessages')
    }

    loadMessages(timestampExcl, count, returnNewer, messages) {
        console.error('shimmed function Conversation.loadMessages')
    }

    findMessage(text, fromTimestampUp) {
        console.error('shimmed function Conversation.findMessage')
    }

    attachVideoToLiveSession(sendVideoObjectID) {
        console.error('shimmed function Conversation.attachVideoToLiveSession')
    }

    static list_TYPEToString(val) {
        console.error('shimmed function Conversation.list_TYPEToString')
    }

    static local_LIVESTATUSToString(val) {
        console.error('shimmed function Conversation.local_LIVESTATUSToString')
    }

    static allowed_ACTIVITYToString(val) {
        console.error('shimmed function Conversation.allowed_ACTIVITYToString')
    }

    static premium_VIDEO_STATUSToString(val) {
        console.error('shimmed function Conversation.premium_VIDEO_STATUSToString')
    }

    static live_SESSION_EVENTToString(val) {
        console.error('shimmed function Conversation.live_SESSION_EVENTToString')
    }

    static picture_FORMATToString(val) {
        console.error('shimmed function Conversation.picture_FORMATToString')
    }

    setOption(propKey, value) {
        console.error('shimmed function Conversation.setOption')
    }

    setTopic(topic, isXML) {
        console.error('shimmed function Conversation.setTopic')
    }

    setPicture(jpeg) {
        console.error('shimmed function Conversation.setPicture')
    }

    getChatname() {
        console.error('shimmed function Conversation.getChatname')
    }

    spawnConference(identitiesToAdd, autoRingAddedParticipantsIfLive) {
        console.error('shimmed function Conversation.spawnConference')
    }

    addConsumers(identities, autoRingAddedParticipantsIfLive) {
        console.error('shimmed function Conversation.addConsumers')
    }

    canAddConsumersOrSpawn(identities) {
        console.error('shimmed function Conversation.canAddConsumersOrSpawn')
    }

    assimilate(otherConversationObjectID) {
        console.error('shimmed function Conversation.assimilate')
    }

    joinLiveSession(accessToken) {
        console.error('shimmed function Conversation.joinLiveSession')
    }

    ringOthers(identities, videoCall, origin) {
        console.error('shimmed function Conversation.ringOthers')
    }

    ringSeamless(videoCall) {
        console.error('shimmed function Conversation.ringSeamless')
    }

    muteMyMicrophone() {
        console.error('shimmed function Conversation.muteMyMicrophone')
    }

    unmuteMyMicrophone() {
        console.error('shimmed function Conversation.unmuteMyMicrophone')
    }

    holdMyLiveSession() {
        console.error('shimmed function Conversation.holdMyLiveSession')
    }

    resumeMyLiveSession() {
        console.error('shimmed function Conversation.resumeMyLiveSession')
    }

    leaveLiveSession(postVoiceAutoresponse) {
        console.error('shimmed function Conversation.leaveLiveSession')
    }

    startVoiceMessage() {
        console.error('shimmed function Conversation.startVoiceMessage')
    }

    transferLiveSession(identities, transferTopic, context) {
        console.error('shimmed function Conversation.transferLiveSession')
    }

    canTransferLiveSession(identity) {
        console.error('shimmed function Conversation.canTransferLiveSession')
    }

    sendDTMF(dtmf, lengthInMS) {
        console.error('shimmed function Conversation.sendDTMF')
    }

    stopSendDTMF() {
        console.error('shimmed function Conversation.stopSendDTMF')
    }

    provideLiveSessionQualityFeedback(questionaryID, trackingReason, qualityRating, problemTokens, cdr_id) {
        console.error('shimmed function Conversation.provideLiveSessionQualityFeedback')
    }

    setMyTextStatusTo(status) {
        console.error('shimmed function Conversation.setMyTextStatusTo')
    }

    postText(text, isXML) {
        console.error('shimmed function Conversation.postText')
    }

    postContacts(contacts, altText) {
        console.error('shimmed function Conversation.postContacts')
    }

    postFiles(paths, body, error_file) {
        console.error('shimmed function Conversation.postFiles')
    }

    getObjectID() {
        console.error('shimmed function Conversation.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Conversation.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Conversation.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Conversation.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Conversation.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Conversation.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Conversation.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function Conversation.typetoString')
    }

    static my_STATUSToString(val) {
        console.error('shimmed function Conversation.my_STATUSToString')
    }

    getLifetimeService() {
        console.error('shimmed function Conversation.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Conversation.initializeLifetimeService')
    }
}
export class ConversationMatch {

    asString() {
        console.error('shimmed function ConversationMatch.asString')
    }

    compareTo(otherMatch) {
        console.error('shimmed function ConversationMatch.compareTo')
    }

    getLifetimeService() {
        console.error('shimmed function ConversationMatch.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ConversationMatch.initializeLifetimeService')
    }
}
export class ConversationMatchEvent {

    invoke(sender, serial, match) {
        console.error('shimmed function ConversationMatchEvent.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function ConversationMatchEvent.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function ConversationMatchEvent.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function ConversationMatchEvent.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function ConversationMatchEvent.clone')
    }
}
export class ConversationOnMessageType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function ConversationOnMessageType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function ConversationOnMessageType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function ConversationOnMessageType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function ConversationOnMessageType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function ConversationOnMessageType.clone')
    }
}
export class ConversationPostFilesResult {

    getLifetimeService() {
        console.error('shimmed function ConversationPostFilesResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ConversationPostFilesResult.initializeLifetimeService')
    }
}
export class ConversationSearch {

    start(term) {
        console.error('shimmed function ConversationSearch.start')
    }

    cancel() {
        console.error('shimmed function ConversationSearch.cancel')
    }

    dispose() {
        console.error('shimmed function ConversationSearch.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function ConversationSearch.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ConversationSearch.initializeLifetimeService')
    }
}
export class ConversationSearchEvent {

    invoke(sender, serial, results) {
        console.error('shimmed function ConversationSearchEvent.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function ConversationSearchEvent.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function ConversationSearchEvent.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function ConversationSearchEvent.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function ConversationSearchEvent.clone')
    }
}
export class CountChangedType {

    invoke(sender, count, conversationIdentity) {
        console.error('shimmed function CountChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function CountChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function CountChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function CountChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function CountChangedType.clone')
    }
}
export class EXTPROPKEY {
    static ft_LOCALSTATUS: number = 1001;
    static ft_LOCALFILENAME: number = 1000;

    getLifetimeService() {
        console.error('shimmed function EXTPROPKEY.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function EXTPROPKEY.initializeLifetimeService')
    }
}
export class Filename {

    setFromString(fromString) {
        console.error('shimmed function Filename.setFromString')
    }

    dispose() {
        console.error('shimmed function Filename.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function Filename.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Filename.initializeLifetimeService')
    }
}
export class IMCache {
    static name_: string = 'imcache';

    static save(cache) {
        console.error('shimmed function IMCache.save')
    }

    static load() {
        console.error('shimmed function IMCache.load')
    }

    getLifetimeService() {
        console.error('shimmed function IMCache.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function IMCache.initializeLifetimeService')
    }
}
export class MediaDocument {
    static network_ERROR_INTERNAL_ERROR: number = 5;
    static network_ERROR_PROTOCOL_ERROR: number = 4;
    static network_ERROR_CONNECTION_TIMEOUT: number = 3;
    static network_ERROR_SERVER_NOT_AVAILABLE: number = 2;
    static network_ERROR_SSL_ERROR: number = 1;
    static network_ERROR_HOST_NAME_NOT_RESOLVED: number = 0;
    static media_GET_POLICY_CANCEL_DOWNLOAD: number = 5;
    static media_GET_POLICY_DOWNLOAD_ONLY: number = 4;
    static media_GET_POLICY_LINK_ONLY: number = 3;
    static media_GET_POLICY_CACHE_THEN_DOWNLOAD: number = 2;
    static media_GET_POLICY_CACHE_THEN_LINK: number = 1;
    static media_GET_POLICY_CACHE_ONLY: number = 0;
    static media_STATUS_MEDIA_BAD_CONTENT: number = 5;
    static media_STATUS_MEDIA_PROCESSING: number = 4;
    static media_STATUS_MEDIA_NOT_AVAILABLE: number = 3;
    static media_STATUS_MEDIA_AVAILABLE_ONLINE: number = 2;
    static media_STATUS_MEDIA_LOADED: number = 1;
    static media_STATUS_MEDIA_LOADING: number = 0;
    static upload_STATUS_UPLOAD_FAILED: number = 4;
    static upload_STATUS_UPLOAD_COMPLETED: number = 3;
    static upload_STATUS_UPLOAD_IN_PROGRESS: number = 2;
    static upload_STATUS_UPLOAD_QUEUED: number = 1;
    static upload_STATUS_UPLOAD_NOT_STARTED: number = 0;
    static document_TYPE_MEDIA_PHOTO_WITH_AUDIO: number = 4;
    static document_TYPE_MEDIA_AUDIO: number = 3;
    static document_TYPE_MEDIA_PHOTO: number = 2;
    static document_TYPE_MEDIA_VIDEO: number = 1;
    static document_TYPE_MEDIA_UNKNOWN: number = 0;
    static storage_POLICY_STORAGE_POLICY_TAKE_OWNERSHIP: number = 3;
    static storage_POLICY_STORAGE_POLICY_WEAK_LINK: number = 2;
    static storage_POLICY_STORAGE_POLICY_MOVE_TO_CACHE: number = 1;
    static storage_POLICY_STORAGE_POLICY_COPY_TO_CACHE: number = 0;
    static status_FAILED: number = 6;
    static status_EXPIRED: number = 5;
    static status_DELETED: number = 4;
    static status_ACCESS_DENIED: number = 3;
    static status_AVAILABLE: number = 2;
    static status_NOT_AVAILABLE: number = 1;
    static status_NOT_CREATED: number = 0;

    upload(contentId) {
        console.error('shimmed function MediaDocument.upload')
    }

    getUploadStatus(contentId) {
        console.error('shimmed function MediaDocument.getUploadStatus')
    }

    discard() {
        console.error('shimmed function MediaDocument.discard')
    }

    dispose() {
        console.error('shimmed function MediaDocument.dispose')
    }

    getObjectID() {
        console.error('shimmed function MediaDocument.getObjectID')
    }

    getDbID() {
        console.error('shimmed function MediaDocument.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function MediaDocument.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function MediaDocument.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function MediaDocument.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function MediaDocument.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function MediaDocument.setExtendedIntProperty')
    }

    static statustoString(val) {
        console.error('shimmed function MediaDocument.statustoString')
    }

    static storage_POLICYToString(val) {
        console.error('shimmed function MediaDocument.storage_POLICYToString')
    }

    static document_TYPEToString(val) {
        console.error('shimmed function MediaDocument.document_TYPEToString')
    }

    static upload_STATUSToString(val) {
        console.error('shimmed function MediaDocument.upload_STATUSToString')
    }

    static media_STATUSToString(val) {
        console.error('shimmed function MediaDocument.media_STATUSToString')
    }

    static media_GET_POLICYToString(val) {
        console.error('shimmed function MediaDocument.media_GET_POLICYToString')
    }

    static network_ERRORToString(val) {
        console.error('shimmed function MediaDocument.network_ERRORToString')
    }

    sync() {
        console.error('shimmed function MediaDocument.sync')
    }

    getMediaLink(profile, policy) {
        console.error('shimmed function MediaDocument.getMediaLink')
    }

    setMediaByContentId(contentId, path, policy) {
        console.error('shimmed function MediaDocument.setMediaByContentId')
    }

    setMediaByProfileId(profileId, path, policy) {
        console.error('shimmed function MediaDocument.setMediaByProfileId')
    }

    linkProfileToContentId(profileId, contentId) {
        console.error('shimmed function MediaDocument.linkProfileToContentId')
    }

    linkProfiles(profileFrom, profileTo) {
        console.error('shimmed function MediaDocument.linkProfiles')
    }

    getLifetimeService() {
        console.error('shimmed function MediaDocument.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function MediaDocument.initializeLifetimeService')
    }
}
export class MediaDocumentGetMediaLinkResult {

    getLifetimeService() {
        console.error('shimmed function MediaDocumentGetMediaLinkResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function MediaDocumentGetMediaLinkResult.initializeLifetimeService')
    }
}
export class Message {
    static permissions_PERM_DELETABLE: number = 2;
    static permissions_PERM_EDITABLE: number = 1;
    static permissions_PERM_NONE: number = 0;
    static leavereason_INTERNAL_ERROR: number = 8;
    static leavereason_CHAT_FULL: number = 7;
    static leavereason_UNSUBSCRIBE: number = 6;
    static leavereason_DECLINE_ADD: number = 5;
    static leavereason_ADDER_MUST_BE_AUTHORIZED: number = 4;
    static leavereason_ADDER_MUST_BE_FRIEND: number = 3;
    static leavereason_USER_INCAPABLE: number = 2;
    static leavereason_USER_NOT_FOUND: number = 1;
    static set_OPTION_KEY_SET_OPTION_ADMIN_ONLY_ACTIVITIES: number = 3637;
    static set_OPTION_KEY_SET_OPTION_HISTORY_LIMIT_IN_DAYS: number = 3633;
    static set_OPTION_KEY_SET_OPTION_DISCLOSE_HISTORY: number = 3629;
    static set_OPTION_KEY_SET_OPTION_ENTRY_LEVEL_RANK: number = 3625;
    static set_OPTION_KEY_SET_OPTION_JOINING_ENABLED: number = 3689;
    static set_METADATA_KEY_SET_META_PICTURE: number = 3658;
    static set_METADATA_KEY_SET_META_GUIDELINES: number = 3652;
    static set_METADATA_KEY_SET_META_TOPIC: number = 3644;
    static set_METADATA_KEY_SET_META_NAME: number = 3640;
    static consumption_STATUS_UNCONSUMED_ELEVATED: number = 3;
    static consumption_STATUS_UNCONSUMED_NORMAL: number = 2;
    static consumption_STATUS_UNCONSUMED_SUPPRESSED: number = 1;
    static consumption_STATUS_CONSUMED: number = 0;
    static sending_STATUS_FAILED_TO_SEND: number = 3;
    static sending_STATUS_SENT: number = 2;
    static sending_STATUS_SENDING: number = 1;
    static sending_STATUS_SENDING_STATUS_UNKNOWN: number = 0;
    static type_RECEIVED_DELIVERY_FAILURE_NOTIFICATION: number = 80;
    static type_POSTED_DTMF: number = 62;
    static type_UNBLOCKED: number = 54;
    static type_REVOKED_AUTH: number = 52;
    static type_EJECTED_FROM_LIVESESSION: number = 38;
    static type_LEFT_LIVESESSION: number = 37;
    static type_HAD_VIDEO_ERROR: number = 36;
    static type_HAD_VOICE_ERROR: number = 35;
    static type_PAUSED_LIVESESSION: number = 34;
    static type_JOINED_LIVESESSION: number = 33;
    static type_STOPPED_RINGING: number = 32;
    static type_STARTED_RINGING_OTHERS: number = 31;
    static type_TERMINATED_CONVERSATION: number = 3;
    static type_POSTED_VOICE_AUTORESPONSE: number = 66;
    static type_REQUESTED_RANK: number = 20;
    static type_SET_OPTION: number = 1;
    static type_MESSAGE_EXPANSION_END: number = 250;
    static type_POSTED_SKYPECHAT_MESSAGE: number = 203;
    static type_POSTED_LOCATION: number = 202;
    static type_POSTED_MEDIA_MESSAGE: number = 201;
    static type_MESSAGE_EXPANSION_START: number = 200;
    static type_HAS_BIRTHDAY: number = 110;
    static type_LEGACY_MESSAGE: number = 100;
    static type_MISSING_MESSAGES: number = 90;
    static type_POSTED_VIDEO_MESSAGE: number = 70;
    static type_POSTED_INVOICE: number = 69;
    static type_POSTED_FILES: number = 68;
    static type_POSTED_VOICE_MESSAGE: number = 67;
    static type_POSTED_ALERT: number = 65;
    static type_POSTED_SMS: number = 64;
    static type_POSTED_CONTACTS: number = 63;
    static type_POSTED_EMOTE: number = 60;
    static type_POSTED_TEXT: number = 61;
    static type_BLOCKED: number = 53;
    static type_GRANTED_AUTH: number = 51;
    static type_REQUESTED_AUTH: number = 50;
    static type_ENDED_LIVESESSION: number = 39;
    static type_STARTED_LIVESESSION: number = 30;
    static type_SET_RANK: number = 21;
    static type_RETIRED: number = 13;
    static type_RETIRED_OTHERS: number = 12;
    static type_ADDED_APPLICANTS: number = 11;
    static type_ADDED_CONSUMERS: number = 10;
    static type_ADDED_LEGACY_CONSUMERS: number = 9;
    static type_LEGACY_MEMBER_UPGRADED: number = 8;
    static type_SPAWNED_CONFERENCE: number = 4;
    static type_SET_METADATA: number = 2;

    static consumption_STATUSToString(val) {
        console.error('shimmed function Message.consumption_STATUSToString')
    }

    static set_METADATA_KEYToString(val) {
        console.error('shimmed function Message.set_METADATA_KEYToString')
    }

    static set_OPTION_KEYToString(val) {
        console.error('shimmed function Message.set_OPTION_KEYToString')
    }

    static leavereasontoString(val) {
        console.error('shimmed function Message.leavereasontoString')
    }

    static permissionstoString(val) {
        console.error('shimmed function Message.permissionstoString')
    }

    canEdit() {
        console.error('shimmed function Message.canEdit')
    }

    getPermissions() {
        console.error('shimmed function Message.getPermissions')
    }

    edit(newText, isXML, undo, legacyPrefix) {
        console.error('shimmed function Message.edit')
    }

    getContacts(contacts) {
        console.error('shimmed function Message.getContacts')
    }

    getTransfers(transfers) {
        console.error('shimmed function Message.getTransfers')
    }

    getVoiceMessage(voicemail) {
        console.error('shimmed function Message.getVoiceMessage')
    }

    getSMS(sms) {
        console.error('shimmed function Message.getSMS')
    }

    deleteLocally() {
        console.error('shimmed function Message.deleteLocally')
    }

    getOtherLiveMessage() {
        console.error('shimmed function Message.getOtherLiveMessage')
    }

    getVideoMessage(videoMessage) {
        console.error('shimmed function Message.getVideoMessage')
    }

    getLocation() {
        console.error('shimmed function Message.getLocation')
    }

    getMediaDocument(document) {
        console.error('shimmed function Message.getMediaDocument')
    }

    discard() {
        console.error('shimmed function Message.discard')
    }

    getBodyHtml() {
        console.error('shimmed function Message.getBodyHtml')
    }

    getBodyText() {
        console.error('shimmed function Message.getBodyText')
    }

    getAuthorDisplayNameHtml() {
        console.error('shimmed function Message.getAuthorDisplayNameHtml')
    }

    getVideoMessageAsync() {
        console.error('shimmed function Message.getVideoMessageAsync')
    }

    dispose() {
        console.error('shimmed function Message.dispose')
    }

    getObjectID() {
        console.error('shimmed function Message.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Message.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Message.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Message.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Message.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Message.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Message.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function Message.typetoString')
    }

    static sending_STATUSToString(val) {
        console.error('shimmed function Message.sending_STATUSToString')
    }

    getLifetimeService() {
        console.error('shimmed function Message.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Message.initializeLifetimeService')
    }
}
export class MessageGetLocationResult {

    getLifetimeService() {
        console.error('shimmed function MessageGetLocationResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function MessageGetLocationResult.initializeLifetimeService')
    }
}
export class Metatag {
    static type_BINARY: number = 2;
    static type_STRING: number = 1;
    static type_INTEGER: number = 0;

    getLifetimeService() {
        console.error('shimmed function Metatag.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Metatag.initializeLifetimeService')
    }
}
export class NotifyEventType {

    invoke(sender) {
        console.error('shimmed function NotifyEventType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function NotifyEventType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function NotifyEventType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function NotifyEventType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function NotifyEventType.clone')
    }
}
export class ObjectInterface {

    getLifetimeService() {
        console.error('shimmed function ObjectInterface.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function ObjectInterface.initializeLifetimeService')
    }
}
export class OnAccessConnectedType {

    invoke(sender) {
        console.error('shimmed function OnAccessConnectedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccessConnectedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccessConnectedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccessConnectedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccessConnectedType.clone')
    }
}
export class OnAccessConnectionFailureType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnAccessConnectionFailureType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccessConnectionFailureType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccessConnectionFailureType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccessConnectionFailureType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccessConnectionFailureType.clone')
    }
}
export class OnAccessDetectFailureType {

    invoke(sender) {
        console.error('shimmed function OnAccessDetectFailureType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccessDetectFailureType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccessDetectFailureType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccessDetectFailureType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccessDetectFailureType.clone')
    }
}
export class OnAccessDetectingType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnAccessDetectingType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccessDetectingType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccessDetectingType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccessDetectingType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccessDetectingType.clone')
    }
}
export class OnAccessDisconnectedType {

    invoke(sender) {
        console.error('shimmed function OnAccessDisconnectedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccessDisconnectedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccessDisconnectedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccessDisconnectedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccessDisconnectedType.clone')
    }
}
export class OnAccessEventType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnAccessEventType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccessEventType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccessEventType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccessEventType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccessEventType.clone')
    }
}
export class OnAccountAvatarResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnAccountAvatarResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccountAvatarResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccountAvatarResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccountAvatarResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccountAvatarResultType.clone')
    }
}
export class OnAccountPartnerLinkResultType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnAccountPartnerLinkResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAccountPartnerLinkResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAccountPartnerLinkResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAccountPartnerLinkResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAccountPartnerLinkResultType.clone')
    }
}
export class OnApp2AppDatagramType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnApp2AppDatagramType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnApp2AppDatagramType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnApp2AppDatagramType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnApp2AppDatagramType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnApp2AppDatagramType.clone')
    }
}
export class OnApp2AppStreamListChangeType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004) {
        console.error('shimmed function OnApp2AppStreamListChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnApp2AppStreamListChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnApp2AppStreamListChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnApp2AppStreamListChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnApp2AppStreamListChangeType.clone')
    }
}
export class OnAuthTokenRequestType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnAuthTokenRequestType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAuthTokenRequestType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAuthTokenRequestType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAuthTokenRequestType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAuthTokenRequestType.clone')
    }
}
export class OnAuthTokenResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnAuthTokenResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAuthTokenResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAuthTokenResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAuthTokenResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAuthTokenResultType.clone')
    }
}
export class OnAuthTokenResultWithTimeoutType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004, __unnamed005) {
        console.error('shimmed function OnAuthTokenResultWithTimeoutType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAuthTokenResultWithTimeoutType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAuthTokenResultWithTimeoutType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAuthTokenResultWithTimeoutType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAuthTokenResultWithTimeoutType.clone')
    }
}
export class OnAvailableDeviceListChangeType {

    invoke(sender) {
        console.error('shimmed function OnAvailableDeviceListChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAvailableDeviceListChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAvailableDeviceListChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAvailableDeviceListChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAvailableDeviceListChangeType.clone')
    }
}
export class OnAvailableVideoDeviceListChangeType {

    invoke(sender) {
        console.error('shimmed function OnAvailableVideoDeviceListChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAvailableVideoDeviceListChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAvailableVideoDeviceListChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAvailableVideoDeviceListChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAvailableVideoDeviceListChangeType.clone')
    }
}
export class OnAvatarURIChangeType {

    invoke(sender, identity, URI) {
        console.error('shimmed function OnAvatarURIChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnAvatarURIChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnAvatarURIChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnAvatarURIChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnAvatarURIChangeType.clone')
    }
}
export class OnCallerIDOptionsChangeType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnCallerIDOptionsChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnCallerIDOptionsChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnCallerIDOptionsChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnCallerIDOptionsChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnCallerIDOptionsChangeType.clone')
    }
}
export class OnCapabilitiesChangedType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnCapabilitiesChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnCapabilitiesChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnCapabilitiesChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnCapabilitiesChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnCapabilitiesChangedType.clone')
    }
}
export class OnCaptureRequestCompletedType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004, __unnamed005) {
        console.error('shimmed function OnCaptureRequestCompletedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnCaptureRequestCompletedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnCaptureRequestCompletedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnCaptureRequestCompletedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnCaptureRequestCompletedType.clone')
    }
}
export class OnChangeConversationType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnChangeConversationType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnChangeConversationType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnChangeConversationType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnChangeConversationType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnChangeConversationType.clone')
    }
}
export class OnChangeType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnChangeType.clone')
    }
}
export class OnCheckUpgradeResultType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnCheckUpgradeResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnCheckUpgradeResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnCheckUpgradeResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnCheckUpgradeResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnCheckUpgradeResultType.clone')
    }
}
export class OnContactGoneOfflineType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnContactGoneOfflineType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnContactGoneOfflineType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnContactGoneOfflineType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnContactGoneOfflineType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnContactGoneOfflineType.clone')
    }
}
export class OnContactOnlineAppearanceType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnContactOnlineAppearanceType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnContactOnlineAppearanceType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnContactOnlineAppearanceType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnContactOnlineAppearanceType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnContactOnlineAppearanceType.clone')
    }
}
export class OnContentItemChangeType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnContentItemChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnContentItemChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnContentItemChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnContentItemChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnContentItemChangeType.clone')
    }
}
export class OnContentListingResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004) {
        console.error('shimmed function OnContentListingResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnContentListingResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnContentListingResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnContentListingResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnContentListingResultType.clone')
    }
}
export class OnConversationListChangeType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnConversationListChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnConversationListChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnConversationListChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnConversationListChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnConversationListChangeType.clone')
    }
}
export class OnDownloadErrorType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnDownloadErrorType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnDownloadErrorType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnDownloadErrorType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnDownloadErrorType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnDownloadErrorType.clone')
    }
}
export class OnEndpointsChangedType {

    invoke(sender) {
        console.error('shimmed function OnEndpointsChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnEndpointsChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnEndpointsChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnEndpointsChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnEndpointsChangedType.clone')
    }
}
export class OnExternalLoginRequestType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnExternalLoginRequestType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnExternalLoginRequestType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnExternalLoginRequestType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnExternalLoginRequestType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnExternalLoginRequestType.clone')
    }
}
export class OnFileTransferInitiatedType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnFileTransferInitiatedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnFileTransferInitiatedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnFileTransferInitiatedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnFileTransferInitiatedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnFileTransferInitiatedType.clone')
    }
}
export class OnH264ActivatedType {

    invoke(sender) {
        console.error('shimmed function OnH264ActivatedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnH264ActivatedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnH264ActivatedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnH264ActivatedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnH264ActivatedType.clone')
    }
}
export class OnHttpResponseType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004, __unnamed005) {
        console.error('shimmed function OnHttpResponseType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnHttpResponseType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnHttpResponseType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnHttpResponseType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnHttpResponseType.clone')
    }
}
export class OnHttpStreamResponseType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnHttpStreamResponseType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnHttpStreamResponseType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnHttpStreamResponseType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnHttpStreamResponseType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnHttpStreamResponseType.clone')
    }
}
export class OnIncomingAlertType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnIncomingAlertType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnIncomingAlertType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnIncomingAlertType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnIncomingAlertType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnIncomingAlertType.clone')
    }
}
export class OnIncomingDTMFType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnIncomingDTMFType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnIncomingDTMFType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnIncomingDTMFType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnIncomingDTMFType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnIncomingDTMFType.clone')
    }
}
export class OnIncomingPriceQuoteType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnIncomingPriceQuoteType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnIncomingPriceQuoteType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnIncomingPriceQuoteType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnIncomingPriceQuoteType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnIncomingPriceQuoteType.clone')
    }
}
export class OnInitialEasSyncDoneType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnInitialEasSyncDoneType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnInitialEasSyncDoneType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnInitialEasSyncDoneType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnInitialEasSyncDoneType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnInitialEasSyncDoneType.clone')
    }
}
export class OnLastFrameCaptureType {

    invoke(sender) {
        console.error('shimmed function OnLastFrameCaptureType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnLastFrameCaptureType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnLastFrameCaptureType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnLastFrameCaptureType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnLastFrameCaptureType.clone')
    }
}
export class OnLibPropChangeType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnLibPropChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnLibPropChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnLibPropChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnLibPropChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnLibPropChangeType.clone')
    }
}
export class OnLiveSessionEventType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnLiveSessionEventType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnLiveSessionEventType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnLiveSessionEventType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnLiveSessionEventType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnLiveSessionEventType.clone')
    }
}
export class OnLiveSessionMovedType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnLiveSessionMovedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnLiveSessionMovedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnLiveSessionMovedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnLiveSessionMovedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnLiveSessionMovedType.clone')
    }
}
export class OnLiveSessionVideosChangedType {

    invoke(sender) {
        console.error('shimmed function OnLiveSessionVideosChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnLiveSessionVideosChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnLiveSessionVideosChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnLiveSessionVideosChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnLiveSessionVideosChangedType.clone')
    }
}
export class OnMediaLinkProgressType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004) {
        console.error('shimmed function OnMediaLinkProgressType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnMediaLinkProgressType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnMediaLinkProgressType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnMediaLinkProgressType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnMediaLinkProgressType.clone')
    }
}
export class OnMediaLinkStatusChangeType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnMediaLinkStatusChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnMediaLinkStatusChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnMediaLinkStatusChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnMediaLinkStatusChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnMediaLinkStatusChangeType.clone')
    }
}
export class OnNewCustomContactGroupType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnNewCustomContactGroupType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnNewCustomContactGroupType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnNewCustomContactGroupType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnNewCustomContactGroupType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnNewCustomContactGroupType.clone')
    }
}
export class OnNewResultType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnNewResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnNewResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnNewResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnNewResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnNewResultType.clone')
    }
}
export class OnNrgLevelsChangeType {

    invoke(sender) {
        console.error('shimmed function OnNrgLevelsChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnNrgLevelsChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnNrgLevelsChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnNrgLevelsChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnNrgLevelsChangeType.clone')
    }
}
export class OnObjectDeleteType {

    invoke(sender, objectType, objectID) {
        console.error('shimmed function OnObjectDeleteType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnObjectDeleteType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnObjectDeleteType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnObjectDeleteType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnObjectDeleteType.clone')
    }
}
export class OnObjectPropertyChangeType {

    invoke(sender, objectID, propKey) {
        console.error('shimmed function OnObjectPropertyChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnObjectPropertyChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnObjectPropertyChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnObjectPropertyChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnObjectPropertyChangeType.clone')
    }
}
export class OnOperationModeChangedType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnOperationModeChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnOperationModeChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnOperationModeChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnOperationModeChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnOperationModeChangedType.clone')
    }
}
export class OnParticipantListChangeType {

    invoke(sender) {
        console.error('shimmed function OnParticipantListChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnParticipantListChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnParticipantListChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnParticipantListChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnParticipantListChangeType.clone')
    }
}
export class OnPartnerLinkInfoResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004, __unnamed005) {
        console.error('shimmed function OnPartnerLinkInfoResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnPartnerLinkInfoResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnPartnerLinkInfoResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnPartnerLinkInfoResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnPartnerLinkInfoResultType.clone')
    }
}
export class OnPartnerQueryResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnPartnerQueryResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnPartnerQueryResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnPartnerQueryResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnPartnerQueryResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnPartnerQueryResultType.clone')
    }
}
export class OnPremiumVideoSubscriptionCheckResultType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnPremiumVideoSubscriptionCheckResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnPremiumVideoSubscriptionCheckResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnPremiumVideoSubscriptionCheckResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnPremiumVideoSubscriptionCheckResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnPremiumVideoSubscriptionCheckResultType.clone')
    }
}
export class OnPromotedSCDContactsFoundType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnPromotedSCDContactsFoundType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnPromotedSCDContactsFoundType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnPromotedSCDContactsFoundType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnPromotedSCDContactsFoundType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnPromotedSCDContactsFoundType.clone')
    }
}
export class OnPropertyChangeType {

    invoke(sender, propKey) {
        console.error('shimmed function OnPropertyChangeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnPropertyChangeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnPropertyChangeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnPropertyChangeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnPropertyChangeType.clone')
    }
}
export class OnPublicAPINotificationType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnPublicAPINotificationType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnPublicAPINotificationType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnPublicAPINotificationType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnPublicAPINotificationType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnPublicAPINotificationType.clone')
    }
}
export class OnPushHandlingCompleteType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnPushHandlingCompleteType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnPushHandlingCompleteType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnPushHandlingCompleteType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnPushHandlingCompleteType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnPushHandlingCompleteType.clone')
    }
}
export class OnQualityTestResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004, __unnamed005) {
        console.error('shimmed function OnQualityTestResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnQualityTestResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnQualityTestResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnQualityTestResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnQualityTestResultType.clone')
    }
}
export class OnRegisterContextsCompleteType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnRegisterContextsCompleteType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnRegisterContextsCompleteType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnRegisterContextsCompleteType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnRegisterContextsCompleteType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnRegisterContextsCompleteType.clone')
    }
}
export class OnSeamlessCapableResultType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnSeamlessCapableResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnSeamlessCapableResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnSeamlessCapableResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnSeamlessCapableResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnSeamlessCapableResultType.clone')
    }
}
export class OnSearchMessagesResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnSearchMessagesResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnSearchMessagesResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnSearchMessagesResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnSearchMessagesResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnSearchMessagesResultType.clone')
    }
}
export class OnServerTimeAvailableType {

    invoke(sender) {
        console.error('shimmed function OnServerTimeAvailableType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnServerTimeAvailableType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnServerTimeAvailableType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnServerTimeAvailableType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnServerTimeAvailableType.clone')
    }
}
export class OnSpawnConferenceType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnSpawnConferenceType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnSpawnConferenceType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnSpawnConferenceType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnSpawnConferenceType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnSpawnConferenceType.clone')
    }
}
export class OnStatsReportedType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnStatsReportedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnStatsReportedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnStatsReportedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnStatsReportedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnStatsReportedType.clone')
    }
}
export class OnSuggestedAccountsResultType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004) {
        console.error('shimmed function OnSuggestedAccountsResultType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnSuggestedAccountsResultType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnSuggestedAccountsResultType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnSuggestedAccountsResultType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnSuggestedAccountsResultType.clone')
    }
}
export class OnThumbnailPathType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnThumbnailPathType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnThumbnailPathType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnThumbnailPathType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnThumbnailPathType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnThumbnailPathType.clone')
    }
}
export class OnUnifiedMastersChangedType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnUnifiedMastersChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnUnifiedMastersChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnUnifiedMastersChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnUnifiedMastersChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnUnifiedMastersChangedType.clone')
    }
}
export class OnUnifiedServantsChangedType {

    invoke(sender, __unnamed001) {
        console.error('shimmed function OnUnifiedServantsChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnUnifiedServantsChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnUnifiedServantsChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnUnifiedServantsChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnUnifiedServantsChangedType.clone')
    }
}
export class OnUpgradeNoticeType {

    invoke(sender) {
        console.error('shimmed function OnUpgradeNoticeType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnUpgradeNoticeType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnUpgradeNoticeType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnUpgradeNoticeType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnUpgradeNoticeType.clone')
    }
}
export class OnUploadErrorType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnUploadErrorType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnUploadErrorType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnUploadErrorType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnUploadErrorType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnUploadErrorType.clone')
    }
}
export class OnUploadProgressType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003) {
        console.error('shimmed function OnUploadProgressType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnUploadProgressType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnUploadProgressType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnUploadProgressType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnUploadProgressType.clone')
    }
}
export class OnUploadStatusChangedType {

    invoke(sender, __unnamed001, __unnamed002) {
        console.error('shimmed function OnUploadStatusChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnUploadStatusChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnUploadStatusChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnUploadStatusChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnUploadStatusChangedType.clone')
    }
}
export class OnVideoAspectRatioChanged {

    invoke(sender, videoObjectID) {
        console.error('shimmed function OnVideoAspectRatioChanged.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnVideoAspectRatioChanged.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnVideoAspectRatioChanged.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnVideoAspectRatioChanged.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnVideoAspectRatioChanged.clone')
    }
}
export class OnVideoMessagingEntitlementChangedType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004) {
        console.error('shimmed function OnVideoMessagingEntitlementChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function OnVideoMessagingEntitlementChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function OnVideoMessagingEntitlementChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function OnVideoMessagingEntitlementChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function OnVideoMessagingEntitlementChangedType.clone')
    }
}
export class Participant {
    static dtmf_DTMF_POUND: number = 11;
    static dtmf_DTMF_STAR: number = 10;
    static dtmf_DTMF_9: number = 9;
    static dtmf_DTMF_8: number = 8;
    static dtmf_DTMF_7: number = 7;
    static dtmf_DTMF_6: number = 6;
    static dtmf_DTMF_5: number = 5;
    static dtmf_DTMF_4: number = 4;
    static dtmf_DTMF_3: number = 3;
    static dtmf_DTMF_2: number = 2;
    static dtmf_DTMF_1: number = 1;
    static dtmf_DTMF_0: number = 0;
    static voice_STATUS_PLAYING_VOICE_AUTORESPONSE: number = 10;
    static voice_STATUS_VOICE_STOPPED: number = 9;
    static voice_STATUS_VOICE_ON_HOLD: number = 8;
    static voice_STATUS_SPEAKING: number = 7;
    static voice_STATUS_LISTENING: number = 6;
    static voice_STATUS_EARLY_MEDIA: number = 5;
    static voice_STATUS_RINGING: number = 4;
    static voice_STATUS_VOICE_CONNECTING: number = 3;
    static voice_STATUS_VOICE_AVAILABLE: number = 2;
    static voice_STATUS_VOICE_NA: number = 1;
    static voice_STATUS_VOICE_UNKNOWN: number = 0;
    static text_STATUS_WRITING_AS_CAT: number = 5;
    static text_STATUS_WRITING_AS_ANGRY: number = 4;
    static text_STATUS_WRITING: number = 3;
    static text_STATUS_READING: number = 2;
    static text_STATUS_TEXT_NA: number = 1;
    static text_STATUS_TEXT_UNKNOWN: number = 0;
    static rank_OUTLAW: number = 8;
    static rank_RETIRED: number = 7;
    static rank_APPLICANT: number = 6;
    static rank_SPECTATOR: number = 5;
    static rank_WRITER: number = 4;
    static rank_SPEAKER: number = 3;
    static rank_ADMIN: number = 2;
    static rank_CREATOR: number = 1;

    getDisplayNameHtml() {
        console.error('shimmed function Participant.getDisplayNameHtml')
    }

    discard() {
        console.error('shimmed function Participant.discard')
    }

    dispose() {
        console.error('shimmed function Participant.dispose')
    }

    getObjectID() {
        console.error('shimmed function Participant.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Participant.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Participant.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Participant.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Participant.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Participant.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Participant.setExtendedIntProperty')
    }

    static ranktoString(val) {
        console.error('shimmed function Participant.ranktoString')
    }

    static text_STATUSToString(val) {
        console.error('shimmed function Participant.text_STATUSToString')
    }

    static voice_STATUSToString(val) {
        console.error('shimmed function Participant.voice_STATUSToString')
    }

    static dtmftoString(val) {
        console.error('shimmed function Participant.dtmftoString')
    }

    canSetRankTo(rank) {
        console.error('shimmed function Participant.canSetRankTo')
    }

    setRankTo(rank) {
        console.error('shimmed function Participant.setRankTo')
    }

    ring(identityToUse, videoCall, nrofRedials, redialPeriod, autoStartVM, origin, nonseWord, callerConversationId) {
        console.error('shimmed function Participant.ring')
    }

    ringNodeInfo(identityToUse, videoCall, nodeInfo, nonseWord) {
        console.error('shimmed function Participant.ringNodeInfo')
    }

    ringIt(videoCall) {
        console.error('shimmed function Participant.ringIt')
    }

    setLiveIdentityToUse(identityToUse) {
        console.error('shimmed function Participant.setLiveIdentityToUse')
    }

    hangup() {
        console.error('shimmed function Participant.hangup')
    }

    retire() {
        console.error('shimmed function Participant.retire')
    }

    setPosition(position) {
        console.error('shimmed function Participant.setPosition')
    }

    getLiveSessionVideos(videos) {
        console.error('shimmed function Participant.getLiveSessionVideos')
    }

    getLifetimeService() {
        console.error('shimmed function Participant.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Participant.initializeLifetimeService')
    }
}
export class ParticipantListChangeEventType {

    invoke(sender) {
        console.error('shimmed function ParticipantListChangeEventType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function ParticipantListChangeEventType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function ParticipantListChangeEventType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function ParticipantListChangeEventType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function ParticipantListChangeEventType.clone')
    }
}
export class PriceQuote {
    static failurereason_CALL_NOT_IN_PROGRESS: number = 13;
    static failurereason_ACCOUNT_ON_HOLD: number = 12;
    static failurereason_TIMEOUT: number = 11;
    static failurereason_OUT_OF_FUNDS: number = 10;
    static failurereason_SECURITY_CHECK_FAILED: number = 9;
    static failurereason_PAYMENTS_STOPPED: number = 8;
    static failurereason_NOT_SUPPORTED_BY_BUYER: number = 7;
    static failurereason_PRICE_EXCEEDS_LIMIT: number = 6;
    static failurereason_SIGNUP_REQUIRED: number = 5;
    static failurereason_GW_AUTHENTICATION_FAILED: number = 4;
    static failurereason_INTERNAL_ERROR: number = 3;
    static failurereason_NETWORK_PROBLEM: number = 2;
    static failurereason_REJECTED_BY_BUYER: number = 1;
    static failurereason_NO_FAILURE: number = 0;
    static status_FINISHED: number = 4;
    static status_INPROGRESS: number = 3;
    static status_ACCEPTED: number = 2;
    static status_PENDING: number = 1;
    static type_CALL_EVENT: number = 2;
    static type_CALL_MINUTE: number = 1;

    getObjectID() {
        console.error('shimmed function PriceQuote.getObjectID')
    }

    getDbID() {
        console.error('shimmed function PriceQuote.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function PriceQuote.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function PriceQuote.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function PriceQuote.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function PriceQuote.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function PriceQuote.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function PriceQuote.typetoString')
    }

    static statustoString(val) {
        console.error('shimmed function PriceQuote.statustoString')
    }

    static failurereasontoString(val) {
        console.error('shimmed function PriceQuote.failurereasontoString')
    }

    getReferredObjectID() {
        console.error('shimmed function PriceQuote.getReferredObjectID')
    }

    accept() {
        console.error('shimmed function PriceQuote.accept')
    }

    reject() {
        console.error('shimmed function PriceQuote.reject')
    }

    discard() {
        console.error('shimmed function PriceQuote.discard')
    }

    dispose() {
        console.error('shimmed function PriceQuote.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function PriceQuote.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function PriceQuote.initializeLifetimeService')
    }
}
export class PropertiesChangedEventType {

    invoke(sender, props) {
        console.error('shimmed function PropertiesChangedEventType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function PropertiesChangedEventType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function PropertiesChangedEventType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function PropertiesChangedEventType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function PropertiesChangedEventType.clone')
    }
}
export class PROPKEY {
    static mediadocument_URI: number = 5208;
    static mediadocument_DOC_TYPE: number = 5205;
    static mediadocument_STATUS: number = 5201;
    static videomessage_TYPE: number = 4864;
    static videomessage_CREATION_TIMESTAMP: number = 4841;
    static videomessage_AUTHOR: number = 4836;
    static videomessage_DESCRIPTION: number = 4832;
    static videomessage_TITLE: number = 4828;
    static videomessage_PROGRESS: number = 4825;
    static videomessage_PUBLIC_LINK: number = 4820;
    static videomessage_LOCAL_PATH: number = 4816;
    static videomessage_VOD_PATH: number = 4812;
    static videomessage_VOD_STATUS: number = 4805;
    static videomessage_STATUS: number = 4801;
    static accesssession_ACCOUNT_ID: number = 4070;
    static accesssession_DNS_SERVER: number = 4064;
    static accesssession_HOTSPOT_RATING: number = 4061;
    static accesssession_CONNECTION_PROGRESS: number = 4057;
    static accesssession_PROMO_ID: number = 4053;
    static accesssession_SESSION_FLAGS: number = 4049;
    static accesssession_HOTSPOT_TYPE: number = 4045;
    static accesssession_PARTNER_ID: number = 4041;
    static accesssession_MINUTES_REMAINING: number = 4037;
    static accesssession_SESSION_DURATION: number = 4033;
    static accesssession_SESSION_TIMESTAMP: number = 4029;
    static accesssession_PRICE_CURRENCY: number = 4024;
    static accesssession_PRICE_PRECISION: number = 4021;
    static accesssession_PRICE_PER_MINUTE: number = 4017;
    static accesssession_AP_MAC: number = 4014;
    static accesssession_AP_SSID: number = 4008;
    static accesssession_FAILUREREASON: number = 4005;
    static accesssession_STATUS: number = 4001;
    static account_RICH_MOOD_TEXT: number = 820;
    static account_MOOD_TIMESTAMP: number = 733;
    static account_AVATAR_TIMESTAMP: number = 729;
    static account_ALERTSTRING: number = 724;
    static account_ASSIGNED_COMMENT: number = 720;
    static account_AUTHREQUEST_COUNT: number = 165;
    static account_LASTUSED_TIMESTAMP: number = 157;
    static account_ASSIGNED_SPEEDDIAL: number = 152;
    static account_AVATAR_IMAGE: number = 150;
    static account_CAPABILITIES: number = 146;
    static account_LASTONLINE_TIMESTAMP: number = 141;
    static account_AVAILABILITY: number = 137;
    static account_GIVEN_DISPLAYNAME: number = 132;
    static account_IPCOUNTRY: number = 116;
    static account_NROF_AUTHED_BUDDIES: number = 113;
    static account_TIMEZONE: number = 109;
    static account_MOOD_TEXT: number = 104;
    static account_AUTHREQ_TIMESTAMP: number = 101;
    static account_GIVEN_AUTHLEVEL: number = 93;
    static account_REFRESHING: number = 89;
    static account_DISPLAYNAME: number = 84;
    static account_RECEIVED_AUTHREQUEST: number = 80;
    static account_PROFILE_TIMESTAMP: number = 77;
    static account_ABOUT: number = 72;
    static account_HOMEPAGE: number = 68;
    static account_EMAILS: number = 64;
    static account_PHONE_MOBILE: number = 60;
    static account_PHONE_OFFICE: number = 56;
    static account_PHONE_HOME: number = 52;
    static account_CITY: number = 48;
    static account_PROVINCE: number = 44;
    static account_COUNTRY: number = 40;
    static account_LANGUAGES: number = 36;
    static account_GENDER: number = 33;
    static account_BIRTHDAY: number = 29;
    static account_FULLNAME: number = 20;
    static account_PSTNNUMBER: number = 24;
    static account_SKYPENAME: number = 16;
    static account_TYPE: number = 809;
    static account_ACCOUNT_PASSWORD: number = 12848;
    static account_SHORTCIRCUIT_SYNC: number = 3265;
    static account_COBRAND_ID: number = 3261;
    static account_ROAMING_HISTORY_ENABLED: number = 3237;
    static account_LIVEID_MEMBERNAME: number = 3232;
    static account_FEDERATED_PRESENCE_POLICY: number = 3229;
    static account_FLAMINGO_XMPP_STATUS: number = 3225;
    static account_PARTNER_CHANNEL_STATUS: number = 3212;
    static account_NR_OF_OTHER_INSTANCES: number = 3209;
    static account_REGISTRATION_TIMESTAMP: number = 3205;
    static account_SERVICE_PROVIDER_INFO: number = 3200;
    static account_PARTNER_OPTEDOUT: number = 3092;
    static account_AD_POLICY: number = 709;
    static account_AUTHREQUEST_POLICY: number = 705;
    static account_VOICEMAIL_POLICY: number = 677;
    static account_PHONENUMBERS_POLICY: number = 673;
    static account_WEBPRESENCE_POLICY: number = 665;
    static account_TIMEZONE_POLICY: number = 661;
    static account_BUDDYCOUNT_POLICY: number = 657;
    static account_AVATAR_POLICY: number = 653;
    static account_PSTN_CALL_POLICY: number = 649;
    static account_SKYPE_CALL_POLICY: number = 645;
    static account_CHAT_POLICY: number = 641;
    static account_OFFLINE_CALLFORWARD: number = 308;
    static account_CBLSYNCSTATUS: number = 317;
    static account_SUBSCRIPTIONS: number = 3220;
    static account_SKYPEIN_NUMBERS: number = 304;
    static account_SKYPEOUT_PRECISION: number = 3217;
    static account_SKYPEOUT_BALANCE: number = 301;
    static account_SKYPEOUT_BALANCE_CURRENCY: number = 296;
    static account_SUGGESTED_SKYPENAME: number = 288;
    static account_COMMITSTATUS: number = 313;
    static account_LOGOUTREASON: number = 293;
    static account_PWDCHANGESTATUS: number = 285;
    static account_STATUS: number = 281;
    static pricequote_MESSAGE_ID: number = 3177;
    static pricequote_USERTOUCHED_TIMESTAMP: number = 3161;
    static pricequote_FAILUREREASON: number = 3157;
    static pricequote_STATUS: number = 3153;
    static pricequote_AMOUNT_PAID: number = 3149;
    static pricequote_PRICE_CURRENCY: number = 3144;
    static pricequote_PRICE_PRECISION: number = 3141;
    static pricequote_PRICE: number = 3137;
    static pricequote_DESCRIPTION: number = 3132;
    static pricequote_TYPE: number = 3129;
    static pricequote_BUYER: number = 3124;
    static pricequote_PROVIDER: number = 3120;
    static pricequote_CONVO_ID: number = 3173;
    static alert_CHATMSG_GUID: number = 4046;
    static alert_WINDOW_SIZE: number = 3077;
    static alert_MESSAGE_TYPE: number = 3073;
    static alert_MESSAGE_BUTTON_URI: number = 3068;
    static alert_MESSAGE_BUTTON_CAPTION: number = 3064;
    static alert_MESSAGE_FOOTER: number = 3040;
    static alert_MESSAGE_CONTENT: number = 3036;
    static alert_MESSAGE_HEADER_LATER: number = 3060;
    static alert_MESSAGE_HEADER_CANCEL: number = 3056;
    static alert_MESSAGE_HEADER_SUBJECT: number = 3052;
    static alert_MESSAGE_HEADER_TITLE: number = 3048;
    static alert_MESSAGE_HEADER_CAPTION: number = 3044;
    static alert_META_EXPIRY: number = 3033;
    static alert_PARTNER_LOGO: number = 3028;
    static alert_PARTNER_HEADER: number = 3024;
    static alert_PARTNER_HISTORY: number = 3020;
    static alert_PARTNER_EVENT: number = 3016;
    static alert_PARTNER_ID: number = 3013;
    static alert_IS_UNSEEN: number = 3009;
    static alert_PARTNER_NAME: number = 3004;
    static alert_TIMESTAMP: number = 3001;
    static transfer_CONVO_ID: number = 393;
    static transfer_CHATMSG_INDEX: number = 373;
    static transfer_CHATMSG_GUID: number = 370;
    static transfer_BYTESPERSECOND: number = 365;
    static transfer_BYTESTRANSFERRED: number = 360;
    static transfer_FILESIZE: number = 356;
    static transfer_FILENAME: number = 352;
    static transfer_FILEPATH: number = 348;
    static transfer_FINISHTIME: number = 345;
    static transfer_STARTTIME: number = 341;
    static transfer_FAILUREREASON: number = 337;
    static transfer_STATUS: number = 333;
    static transfer_PARTNER_DISPNAME: number = 328;
    static transfer_PARTNER_HANDLE: number = 324;
    static transfer_TYPE: number = 321;
    static sms_CONVO_NAME: number = 4484;
    static sms_REPLY_ID_NUMBER: number = 4480;
    static sms_IDENTITY: number = 3992;
    static sms_CHATMSG_ID: number = 3361;
    static sms_BODY: number = 788;
    static sms_TARGET_STATUSES: number = 786;
    static sms_TARGET_NUMBERS: number = 780;
    static sms_REPLY_TO_NUMBER: number = 796;
    static sms_PRICE_CURRENCY: number = 776;
    static sms_PRICE_PRECISION: number = 197;
    static sms_PRICE: number = 773;
    static sms_TIMESTAMP: number = 793;
    static sms_IS_FAILED_UNSEEN: number = 193;
    static sms_ERROR_CATEGORY: number = 5221;
    static sms_FAILUREREASON: number = 769;
    static sms_STATUS: number = 765;
    static sms_OUTGOING_REPLY_TYPE: number = 4845;
    static sms_TYPE: number = 761;
    static voicemail_CHATMSG_GUID: number = 3326;
    static voicemail_CONVO_ID: number = 3321;
    static voicemail_PLAYBACK_PROGRESS: number = 437;
    static voicemail_ALLOWED_DURATION: number = 433;
    static voicemail_DURATION: number = 429;
    static voicemail_TIMESTAMP: number = 425;
    static voicemail_SUBJECT: number = 420;
    static voicemail_FAILUREREASON: number = 417;
    static voicemail_STATUS: number = 413;
    static voicemail_PARTNER_DISPNAME: number = 408;
    static voicemail_PARTNER_HANDLE: number = 404;
    static voicemail_TYPE: number = 401;
    static video_DEVICE_PATH: number = 4420;
    static video_CONVO_ID: number = 4417;
    static video_SS_TIMESTAMP: number = 4413;
    static video_DURATION_SS: number = 4409;
    static video_HQ_PRESENT: number = 4405;
    static video_TIMESTAMP: number = 4401;
    static video_DURATION_LTVGAD2: number = 557;
    static video_DURATION_VGAD2: number = 553;
    static video_DURATION_HQV: number = 549;
    static video_DURATION_720: number = 545;
    static video_DURATION_1080: number = 541;
    static video_MEDIA_TYPE: number = 537;
    static video_DIMENSIONS: number = 532;
    static video_DEBUGINFO: number = 528;
    static video_ERROR: number = 524;
    static video_STATUS: number = 521;
    static message_CALL_GUID: number = 3860;
    static message_PARTICIPANT_COUNT: number = 3929;
    static message_LEAVEREASON: number = 505;
    static message_REASON: number = 3864;
    static message_IDENTITIES: number = 500;
    static message_BODY_XML: number = 508;
    static message_PARAM_VALUE: number = 3857;
    static message_PARAM_KEY: number = 3853;
    static message_EDIT_TIMESTAMP: number = 893;
    static message_EDITED_BY: number = 888;
    static message_CONSUMPTION_STATUS: number = 3873;
    static message_SENDING_STATUS: number = 3849;
    static message_TYPE: number = 3845;
    static message_TIMESTAMP: number = 485;
    static message_ORIGINALLY_MEANT_FOR: number = 3160;
    static message_GUID: number = 3170;
    static message_AUTHOR_WAS_LIVE: number = 3877;
    static message_AUTHOR_DISPLAYNAME: number = 492;
    static message_AUTHOR: number = 488;
    static message_CONVO_GUID: number = 480;
    static message_CONVO_ID: number = 3841;
    static conversation_ALT_IDENTITY: number = 28;
    static conversation_MCR_CALLER: number = 4488;
    static conversation_PREMIUM_VIDEO_SPONSOR_LIST: number = 4468;
    static conversation_UNCONSUMED_MESSAGES_PRIO: number = 3717;
    static conversation_UNCONSUMED_MESSAGE_COUNT: number = 3693;
    static conversation_PREMIUM_VIDEO_IS_GRACE_PERIOD: number = 4453;
    static conversation_PREMIUM_VIDEO_STATUS: number = 4449;
    static conversation_IS_P2P_MIGRATED: number = 4513;
    static conversation_PICTURE: number = 4508;
    static conversation_META_PICTURE: number = 3658;
    static conversation_META_GUIDELINES: number = 3652;
    static conversation_META_TOPIC: number = 3644;
    static conversation_META_NAME: number = 3640;
    static conversation_PASSWORDHINT: number = 3920;
    static conversation_OPT_ADMIN_ONLY_ACTIVITIES: number = 3637;
    static conversation_OPT_DISCLOSE_HISTORY: number = 3629;
    static conversation_OPT_ENTRY_LEVEL_RANK: number = 3625;
    static conversation_OPT_JOINING_ENABLED: number = 3689;
    static conversation_MY_STATUS: number = 3677;
    static conversation_CREATION_TIMESTAMP: number = 3617;
    static conversation_CREATOR: number = 3612;
    static conversation_PINNED_ORDER: number = 3989;
    static conversation_SPAWNED_FROM_CONVO_ID: number = 3661;
    static conversation_ACTIVE_INVOICE_MESSAGE: number = 3981;
    static conversation_LAST_ACTIVITY_TIMESTAMP: number = 3925;
    static conversation_CONSUMPTION_HORIZON: number = 3917;
    static conversation_ACTIVE_VM_ID: number = 3885;
    static conversation_UNCONSUMED_MESSAGES_VOICE: number = 3881;
    static conversation_UNCONSUMED_ELEVATED_MESSAGES: number = 3909;
    static conversation_UNCONSUMED_NORMAL_MESSAGES: number = 3905;
    static conversation_UNCONSUMED_SUPPRESSED_MESSAGES: number = 3901;
    static conversation_LAST_MESSAGE_ID: number = 3997;
    static conversation_INBOX_MESSAGE_ID: number = 3893;
    static conversation_INBOX_TIMESTAMP: number = 3713;
    static conversation_LOCAL_LIVESTATUS: number = 3709;
    static conversation_DISPLAYNAME: number = 3696;
    static conversation_GIVEN_DISPLAYNAME: number = 3700;
    static conversation_IS_BLOCKED: number = 3761;
    static conversation_IS_BOOKMARKED: number = 3685;
    static conversation_ALERT_STRING: number = 3680;
    static conversation_LIVE_IS_MUTED: number = 3985;
    static conversation_LIVE_START_TIMESTAMP: number = 3897;
    static conversation_LIVE_HOST: number = 3672;
    static conversation_TYPE: number = 3609;
    static conversation_IDENTITY: number = 3888;
    static participant_IS_SEAMLESSLY_UPGRADED_CALL: number = 4861;
    static participant_IS_VIDEO_CODEC_COMPATIBLE: number = 4857;
    static participant_LIVE_IP_ADDRESS: number = 4852;
    static participant_IS_MULTIPARTY_VIDEO_UPDATABLE: number = 4849;
    static participant_LIVESESSION_RECOVERY_IN_PROGRESS: number = 4465;
    static participant_LIVE_IDENTITY_TO_USE: number = 4456;
    static participant_IS_MULTIPARTY_VIDEO_CAPABLE: number = 4445;
    static participant_IS_PREMIUM_VIDEO_SPONSOR: number = 4441;
    static participant_LAST_LEAVEREASON: number = 3821;
    static participant_ADDER: number = 3816;
    static participant_TRANSFERRED_TO: number = 3812;
    static participant_TRANSFERRED_BY: number = 3808;
    static participant_LIVE_COUNTRY: number = 3804;
    static participant_LIVE_TYPE: number = 3801;
    static participant_QUALITY_PROBLEMS: number = 3796;
    static participant_LAST_VOICE_ERROR: number = 3788;
    static participant_DEBUGINFO: number = 3768;
    static participant_SOUND_LEVEL: number = 3765;
    static participant_LIVE_START_TIMESTAMP: number = 3757;
    static participant_LIVE_FWD_IDENTITIES: number = 3792;
    static participant_LIVE_PRICE_FOR_ME: number = 3752;
    static participant_LIVE_IDENTITY: number = 3772;
    static participant_VOICE_STATUS: number = 3741;
    static participant_TEXT_STATUS: number = 3737;
    static participant_REQUESTED_RANK: number = 3733;
    static participant_RANK: number = 3729;
    static participant_IDENTITY: number = 3724;
    static participant_CONVO_ID: number = 3721;
    static contactsearch_CONTACT_SEARCH_STATUS: number = 801;
    static contactsearch_STATUS: number = 13;
    static contact_EXTERNAL_SYSTEM_ID: number = 764;
    static contact_EXTERNAL_ID: number = 760;
    static contact_POPULARITY_ORD: number = 169;
    static contact_ASSIGNED_PHONE3_LABEL: number = 756;
    static contact_ASSIGNED_PHONE3: number = 752;
    static contact_ASSIGNED_PHONE2_LABEL: number = 748;
    static contact_ASSIGNED_PHONE2: number = 744;
    static contact_ASSIGNED_PHONE1_LABEL: number = 740;
    static contact_ASSIGNED_PHONE1: number = 736;
    static contact_AUTHREQUEST_COUNT: number = 165;
    static contact_LASTUSED_TIMESTAMP: number = 157;
    static contact_ALERTSTRING: number = 724;
    static contact_ASSIGNED_COMMENT: number = 720;
    static contact_ASSIGNED_SPEEDDIAL: number = 152;
    static contact_GIVEN_DISPLAYNAME: number = 132;
    static contact_GIVEN_AUTHLEVEL: number = 93;
    static contact_REFRESHING: number = 89;
    static contact_DISPLAYNAME: number = 84;
    static contact_AVAILABILITY: number = 137;
    static contact_LASTONLINE_TIMESTAMP: number = 141;
    static contact_AUTHREQ_TIMESTAMP: number = 101;
    static contact_RECEIVED_AUTHREQUEST: number = 80;
    static contact_MOOD_TIMESTAMP: number = 733;
    static contact_AVATAR_TIMESTAMP: number = 729;
    static contact_IPCOUNTRY: number = 116;
    static contact_NROF_AUTHED_BUDDIES: number = 113;
    static contact_PROFILE_TIMESTAMP: number = 77;
    static contact_CAPABILITIES: number = 146;
    static contact_TIMEZONE: number = 109;
    static contact_RICH_MOOD_TEXT: number = 820;
    static contact_MOOD_TEXT: number = 104;
    static contact_AVATAR_IMAGE: number = 150;
    static contact_ABOUT: number = 72;
    static contact_HOMEPAGE: number = 68;
    static contact_HASHED_EMAILS: number = 768;
    static contact_EMAILS: number = 64;
    static contact_PHONE_MOBILE: number = 60;
    static contact_PHONE_OFFICE: number = 56;
    static contact_PHONE_HOME: number = 52;
    static contact_CITY: number = 48;
    static contact_PROVINCE: number = 44;
    static contact_COUNTRY: number = 40;
    static contact_LANGUAGES: number = 36;
    static contact_GENDER: number = 33;
    static contact_BIRTHDAY: number = 29;
    static contact_FULLNAME: number = 20;
    static contact_PSTNNUMBER: number = 24;
    static contact_SKYPENAME: number = 16;
    static contact_TYPE: number = 809;
    static contactgroup_GIVEN_SORTORDER: number = 685;
    static contactgroup_NROFCONTACTS_ONLINE: number = 613;
    static contactgroup_NROFCONTACTS: number = 609;
    static contactgroup_GIVEN_DISPLAYNAME: number = 604;
    static contactgroup_CUSTOM_GROUP_ID: number = 617;
    static contactgroup_TYPE: number = 621;

    static valueToString(val) {
        console.error('shimmed function PROPKEY.valueToString')
    }

    getLifetimeService() {
        console.error('shimmed function PROPKEY.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function PROPKEY.initializeLifetimeService')
    }
}
export class RecentsCountChangedType {

    invoke(sender, count) {
        console.error('shimmed function RecentsCountChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function RecentsCountChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function RecentsCountChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function RecentsCountChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function RecentsCountChangedType.clone')
    }
}
export class RecentsQueryItemAddedType {

    invoke(sender, id, pos) {
        console.error('shimmed function RecentsQueryItemAddedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function RecentsQueryItemAddedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function RecentsQueryItemAddedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function RecentsQueryItemAddedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function RecentsQueryItemAddedType.clone')
    }
}
export class RecentsQueryItemMovedType {

    invoke(sender, id, newPos, oldPos) {
        console.error('shimmed function RecentsQueryItemMovedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function RecentsQueryItemMovedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function RecentsQueryItemMovedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function RecentsQueryItemMovedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function RecentsQueryItemMovedType.clone')
    }
}
export class RecentsQueryItemRemovedType {

    invoke(sender, id, pos) {
        console.error('shimmed function RecentsQueryItemRemovedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function RecentsQueryItemRemovedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function RecentsQueryItemRemovedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function RecentsQueryItemRemovedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function RecentsQueryItemRemovedType.clone')
    }
}
export class RecentsQueryResetType {

    invoke(sender, conversations) {
        console.error('shimmed function RecentsQueryResetType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function RecentsQueryResetType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function RecentsQueryResetType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function RecentsQueryResetType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function RecentsQueryResetType.clone')
    }
}
export class Search {

    getLifetimeService() {
        console.error('shimmed function Search.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Search.initializeLifetimeService')
    }
}
export class Setup {

    isDefined(key) {
        console.error('shimmed function Setup.isDefined')
    }

    delete(key) {
        console.error('shimmed function Setup.delete')
    }

    getSubKey(key, index) {
        console.error('shimmed function Setup.getSubKey')
    }

    getStr(key) {
        console.error('shimmed function Setup.getStr')
    }

    getInt(key, defaultValue) {
        console.error('shimmed function Setup.getInt')
    }

    setInt(key, value) {
        console.error('shimmed function Setup.setInt')
    }

    setStr(key, value) {
        console.error('shimmed function Setup.setStr')
    }
}
export class SkyLibAccessPaymentGetIntResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibAccessPaymentGetIntResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibAccessPaymentGetIntResult.initializeLifetimeService')
    }
}
export class SkyLibAccessPaymentGetStringResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibAccessPaymentGetStringResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibAccessPaymentGetStringResult.initializeLifetimeService')
    }
}
export class SkyLibCanUnifyContactsResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibCanUnifyContactsResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibCanUnifyContactsResult.initializeLifetimeService')
    }
}
export class SkyLibContentEncodeResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibContentEncodeResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibContentEncodeResult.initializeLifetimeService')
    }
}
export class SkyLibContentGetEditableResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibContentGetEditableResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibContentGetEditableResult.initializeLifetimeService')
    }
}
export class SkyLibContentGetRichEditableResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibContentGetRichEditableResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibContentGetRichEditableResult.initializeLifetimeService')
    }
}
export class SkyLibContentItemGetChildItemResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibContentItemGetChildItemResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibContentItemGetChildItemResult.initializeLifetimeService')
    }
}
export class SkyLibContentItemGetResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibContentItemGetResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibContentItemGetResult.initializeLifetimeService')
    }
}
export class SkyLibContentStripXMLResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibContentStripXMLResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibContentStripXMLResult.initializeLifetimeService')
    }
}
export class SkyLibFindContactByPstnNumberResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibFindContactByPstnNumberResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibFindContactByPstnNumberResult.initializeLifetimeService')
    }
}
export class SkyLibGetAudioDeviceCapabilitiesResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibGetAudioDeviceCapabilitiesResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibGetAudioDeviceCapabilitiesResult.initializeLifetimeService')
    }
}
export class SkyLibGetCallerIDOptionsResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibGetCallerIDOptionsResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibGetCallerIDOptionsResult.initializeLifetimeService')
    }
}
export class SkyLibGetDefaultContentIdResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibGetDefaultContentIdResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibGetDefaultContentIdResult.initializeLifetimeService')
    }
}
export class SkyLibGetNrgLevelsResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibGetNrgLevelsResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibGetNrgLevelsResult.initializeLifetimeService')
    }
}
export class SkyLibGetVideoMessagingEntitlementResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibGetVideoMessagingEntitlementResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibGetVideoMessagingEntitlementResult.initializeLifetimeService')
    }
}
export class SkyLibIsMicrophoneMutedResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibIsMicrophoneMutedResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibIsMicrophoneMutedResult.initializeLifetimeService')
    }
}
export class SkyLibIsSpeakerMutedResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibIsSpeakerMutedResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibIsSpeakerMutedResult.initializeLifetimeService')
    }
}
export class SkyLibNormalizeIdentityResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibNormalizeIdentityResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibNormalizeIdentityResult.initializeLifetimeService')
    }
}
export class SkyLibNormalizePSTNWithCountryResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibNormalizePSTNWithCountryResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibNormalizePSTNWithCountryResult.initializeLifetimeService')
    }
}
export class SkyLibOnMessageType {

    invoke(sender, __unnamed001, __unnamed002, __unnamed003, __unnamed004, __unnamed005) {
        console.error('shimmed function SkyLibOnMessageType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function SkyLibOnMessageType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function SkyLibOnMessageType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function SkyLibOnMessageType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function SkyLibOnMessageType.clone')
    }
}
export class SkyLibQueryContentListingResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibQueryContentListingResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibQueryContentListingResult.initializeLifetimeService')
    }
}
export class SkyLibUnifyContactsResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibUnifyContactsResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibUnifyContactsResult.initializeLifetimeService')
    }
}
export class SkyLibValidateAvatarResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibValidateAvatarResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibValidateAvatarResult.initializeLifetimeService')
    }
}
export class SkyLibValidateProfileStringResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibValidateProfileStringResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibValidateProfileStringResult.initializeLifetimeService')
    }
}
export class SkyLibVerifyAndUnpackResult {

    getLifetimeService() {
        console.error('shimmed function SkyLibVerifyAndUnpackResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyLibVerifyAndUnpackResult.initializeLifetimeService')
    }
}
export class SkyMetadata {

    getLifetimeService() {
        console.error('shimmed function SkyMetadata.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SkyMetadata.initializeLifetimeService')
    }
}
export class Sms {
    static confirm_TYPE_ID_SKYPEIN: number = 3;
    static confirm_TYPE_ID_MOBILE: number = 2;
    static confirm_TYPE_ID_SMS: number = 1;
    static setbodyresult_BODY_LASTCHAR_IGNORED: number = 3;
    static setbodyresult_BODY_OK: number = 2;
    static setbodyresult_BODY_TRUNCATED: number = 1;
    static setbodyresult_BODY_INVALID: number = 0;
    static handset_DELIVERY_REPORT_HANDSET_DELIVERY_REPORT_UNKNOWN: number = 2;
    static handset_DELIVERY_REPORT_HANDSET_DELIVERY_REPORT_CAPABLE: number = 1;
    static handset_DELIVERY_REPORT_HANDSET_DELIVERY_REPORT_NOT_CAPABLE: number = 0;
    static cli_USED_CLI_USE_UNKNOWN: number = 2;
    static cli_USED_CLI_CAN_BE_USED: number = 1;
    static cli_USED_CLI_CANNOT_BE_USED: number = 0;
    static reply_CAPABILITY_CAPABLE_LOCALLY: number = 2;
    static reply_CAPABILITY_CAPABLE_GLOBALLY: number = 1;
    static reply_CAPABILITY_NOT_CAPABLE: number = 0;
    static targetstatus_TARGET_DELIVERY_FAILED: number = 7;
    static targetstatus_TARGET_DELIVERY_SUCCESSFUL: number = 6;
    static targetstatus_TARGET_DELIVERY_PENDING: number = 5;
    static targetstatus_TARGET_NOT_ROUTABLE: number = 4;
    static targetstatus_TARGET_ACCEPTABLE: number = 3;
    static targetstatus_TARGET_UNDEFINED: number = 2;
    static targetstatus_TARGET_ANALYZING: number = 1;
    static error_CATEGORY_ERROR_CATEGORY_PERMANENT_SERVICE_ERROR: number = 301;
    static error_CATEGORY_ERROR_CATEGORY_TRANSIENT_SERVICE_ERROR: number = 300;
    static error_CATEGORY_ERROR_CATEGORY_MESSAGE_EXPIRED_BACKEND: number = 201;
    static error_CATEGORY_ERROR_CATEGORY_MESSAGE_EXPIRED_OPERATOR: number = 200;
    static error_CATEGORY_ERROR_CATEGORY_NUMBER_UNREACHABLE: number = 105;
    static error_CATEGORY_ERROR_CATEGORY_NUMBER_BLOCKED: number = 104;
    static error_CATEGORY_ERROR_CATEGORY_NUMBER_DOES_NOT_EXIST: number = 103;
    static error_CATEGORY_ERROR_CATEGORY_DESTINATION_NOT_SUPPORTED: number = 102;
    static error_CATEGORY_ERROR_CATEGORY_INVALID_DST_ADDRESS: number = 101;
    static error_CATEGORY_ERROR_CATEGORY_INVALID_SRC_ADDRESS: number = 100;
    static error_CATEGORY_ERROR_CATEGORY_SMS_VELOCITY_DST_REACHED: number = 19;
    static error_CATEGORY_ERROR_CATEGORY_SYSTEM_ID_BLOCKED: number = 18;
    static error_CATEGORY_ERROR_CATEGORY_BROKEN_DELIVERY_REPORT: number = 17;
    static error_CATEGORY_ERROR_CATEGORY_NO_DELIVERY_REPORT: number = 16;
    static error_CATEGORY_ERROR_CATEGORY_SPAM_DETECTED: number = 15;
    static error_CATEGORY_ERROR_CATEGORY_SPAM_VELOCITY_REACHED: number = 14;
    static error_CATEGORY_ERROR_CATEGORY_SMS_VELOCITY_REACHED: number = 13;
    static error_CATEGORY_ERROR_CATEGORY_SENDER_BLOCKED: number = 12;
    static error_CATEGORY_ERROR_CATEGORY_SENDER_BLOCKED_BY_RECIPIENT: number = 11;
    static error_CATEGORY_ERROR_CATEGORY_RECIPIENT_BLOCKED: number = 10;
    static error_CATEGORY_ERROR_CATEGORY_NO_SENDERID_CAPABILITY: number = 9;
    static error_CATEGORY_ERROR_CATEGORY_NODE_BLOCKED: number = 8;
    static error_CATEGORY_ERROR_CATEGORY_IP_BLOCKED: number = 7;
    static error_CATEGORY_ERROR_CATEGORY_USER_BLOCKED: number = 6;
    static error_CATEGORY_ERROR_CATEGORY_INVALID_CONFIRMATION_CODE: number = 5;
    static error_CATEGORY_ERROR_CATEGORY_INSUFFICIENT_FUNDS: number = 4;
    static error_CATEGORY_ERROR_CATEGORY_NO_SMS_CAPABILITY: number = 3;
    static error_CATEGORY_ERROR_CATEGORY_SERVER_CONNECT_FAILED: number = 2;
    static error_CATEGORY_ERROR_CATEGORY_MISC_ERROR: number = 1;
    static error_CATEGORY_ERROR_CATEGORY_NO_ERROR: number = 0;
    static failurereason_NO_SENDERID_CAPABILITY: number = 9;
    static failurereason_NODE_BLOCKED: number = 8;
    static failurereason_IP_BLOCKED: number = 7;
    static failurereason_USER_BLOCKED: number = 6;
    static failurereason_INVALID_CONFIRMATION_CODE: number = 5;
    static failurereason_INSUFFICIENT_FUNDS: number = 4;
    static failurereason_NO_SMS_CAPABILITY: number = 3;
    static failurereason_SERVER_CONNECT_FAILED: number = 2;
    static failurereason_MISC_ERROR: number = 1;
    static status_FAILED: number = 8;
    static status_SOME_TARGETS_FAILED: number = 7;
    static status_DELIVERED: number = 6;
    static status_SENT_TO_SERVER: number = 5;
    static status_SENDING_TO_SERVER: number = 4;
    static status_COMPOSING: number = 3;
    static status_READ: number = 2;
    static status_RECEIVED: number = 1;
    static outgoing_REPLY_TYPE_REPLY_TYPE_MIXED: number = 4;
    static outgoing_REPLY_TYPE_REPLY_2WAY_AUTOASSIGNED_NR: number = 3;
    static outgoing_REPLY_TYPE_REPLY_USER_PHONE_NR: number = 2;
    static outgoing_REPLY_TYPE_REPLY_SKYPENAME: number = 1;
    static type_CONFIRMATION_CODE_SUBMIT: number = 4;
    static type_CONFIRMATION_CODE_REQUEST: number = 3;
    static type_OUTGOING: number = 2;
    static type_INCOMING: number = 1;

    static error_CATEGORYToString(val) {
        console.error('shimmed function Sms.error_CATEGORYToString')
    }

    static targetstatustoString(val) {
        console.error('shimmed function Sms.targetstatustoString')
    }

    static reply_CAPABILITYToString(val) {
        console.error('shimmed function Sms.reply_CAPABILITYToString')
    }

    static cli_USEDToString(val) {
        console.error('shimmed function Sms.cli_USEDToString')
    }

    static handset_DELIVERY_REPORTToString(val) {
        console.error('shimmed function Sms.handset_DELIVERY_REPORTToString')
    }

    getTargetStatus(target) {
        console.error('shimmed function Sms.getTargetStatus')
    }

    getTargetReplyNumber(target) {
        console.error('shimmed function Sms.getTargetReplyNumber')
    }

    getTargetReplyType(target) {
        console.error('shimmed function Sms.getTargetReplyType')
    }

    getTargetPrice(target) {
        console.error('shimmed function Sms.getTargetPrice')
    }

    getTargetCLIUsed(target) {
        console.error('shimmed function Sms.getTargetCLIUsed')
    }

    getTargetHandsetDeliveryReport(target) {
        console.error('shimmed function Sms.getTargetHandsetDeliveryReport')
    }

    getTargetErrorCategory(target) {
        console.error('shimmed function Sms.getTargetErrorCategory')
    }

    canTargetReply(target) {
        console.error('shimmed function Sms.canTargetReply')
    }

    static setbodyresulttoString(val) {
        console.error('shimmed function Sms.setbodyresulttoString')
    }

    setReplyTo(number) {
        console.error('shimmed function Sms.setReplyTo')
    }

    setReplyId(callerId) {
        console.error('shimmed function Sms.setReplyId')
    }

    setTargets(numbers) {
        console.error('shimmed function Sms.setTargets')
    }

    setBody(text, chunks) {
        console.error('shimmed function Sms.setBody')
    }

    getBodyChunks(textChunks) {
        console.error('shimmed function Sms.getBodyChunks')
    }

    send() {
        console.error('shimmed function Sms.send')
    }

    setOrigin(origin) {
        console.error('shimmed function Sms.setOrigin')
    }

    static confirm_TYPEToString(val) {
        console.error('shimmed function Sms.confirm_TYPEToString')
    }

    setConfirmationType(type) {
        console.error('shimmed function Sms.setConfirmationType')
    }

    discard() {
        console.error('shimmed function Sms.discard')
    }

    dispose() {
        console.error('shimmed function Sms.dispose')
    }

    getObjectID() {
        console.error('shimmed function Sms.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Sms.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Sms.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Sms.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Sms.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Sms.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Sms.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function Sms.typetoString')
    }

    static outgoing_REPLY_TYPEToString(val) {
        console.error('shimmed function Sms.outgoing_REPLY_TYPEToString')
    }

    static statustoString(val) {
        console.error('shimmed function Sms.statustoString')
    }

    static failurereasontoString(val) {
        console.error('shimmed function Sms.failurereasontoString')
    }

    getLifetimeService() {
        console.error('shimmed function Sms.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Sms.initializeLifetimeService')
    }
}
export class SmsGetBodyChunksResult {

    getLifetimeService() {
        console.error('shimmed function SmsGetBodyChunksResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SmsGetBodyChunksResult.initializeLifetimeService')
    }
}
export class SmsSetBodyResult {

    getLifetimeService() {
        console.error('shimmed function SmsSetBodyResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SmsSetBodyResult.initializeLifetimeService')
    }
}
export enum StatsClickStreamEvents {
    event_ID = 1,
    value,
    last_EVENT_ID,
    sec_FROM_LAST_EVENT,
}
export class StatsEventAttributeContainer {

    deserialize(binary) {
        console.error('shimmed function StatsEventAttributeContainer.deserialize')
    }

    send(eventType) {
        console.error('shimmed function StatsEventAttributeContainer.send')
    }

    addIntegerValue(key, value) {
        console.error('shimmed function StatsEventAttributeContainer.addIntegerValue')
    }

    addStringValue(key, value) {
        console.error('shimmed function StatsEventAttributeContainer.addStringValue')
    }

    dispose() {
        console.error('shimmed function StatsEventAttributeContainer.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function StatsEventAttributeContainer.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function StatsEventAttributeContainer.initializeLifetimeService')
    }
}
export enum StatsHardwareInventoryInfo {
    trigger_TYPE = 1,
    relation_ID,
    inventory_STRING,
    os_NAME,
    os_VERSION,
    device_MANUFACTURER,
    device_NAME,
    inventory_STRING_EXTRAS,
}
export enum StatsWin8Events {
    event_ID = 1,
    value,
    event_COUNTER,
}
export class SubstringFinder {

    set_MarkupTag(value) {
        console.error('shimmed function SubstringFinder.set_MarkupTag')
    }

    set_RequiredMatch(value) {
        console.error('shimmed function SubstringFinder.set_RequiredMatch')
    }

    markupMatches(source) {
        console.error('shimmed function SubstringFinder.markupMatches')
    }

    getLifetimeService() {
        console.error('shimmed function SubstringFinder.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function SubstringFinder.initializeLifetimeService')
    }
}
export class Transfer {
    static failurereason_PLACEHOLDER_TIMEOUT: number = 10;
    static failurereason_TOO_MANY_PARALLEL: number = 9;
    static failurereason_REMOTE_OFFLINE_FOR_TOO_LONG: number = 8;
    static failurereason_REMOTE_DOES_NOT_SUPPORT_FT: number = 7;
    static failurereason_FAILED_REMOTE_WRITE: number = 6;
    static failurereason_FAILED_WRITE: number = 5;
    static failurereason_FAILED_REMOTE_READ: number = 4;
    static failurereason_FAILED_READ: number = 3;
    static failurereason_REMOTELY_CANCELLED: number = 2;
    static failurereason_SENDER_NOT_AUTHORISED: number = 1;
    static status_CANCELLED_BY_REMOTE: number = 12;
    static status_OFFER_FROM_OTHER_INSTANCE: number = 11;
    static status_PLACEHOLDER: number = 10;
    static status_FAILED: number = 9;
    static status_COMPLETED: number = 8;
    static status_CANCELLED: number = 7;
    static status_REMOTELY_PAUSED: number = 6;
    static status_PAUSED: number = 5;
    static status_TRANSFERRING_OVER_RELAY: number = 4;
    static status_TRANSFERRING: number = 3;
    static status_WAITING_FOR_ACCEPT: number = 2;
    static status_CONNECTING: number = 1;
    static status_NEW: number = 0;
    static type_OUTGOING: number = 2;
    static type_INCOMING: number = 1;

    getObjectID() {
        console.error('shimmed function Transfer.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Transfer.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Transfer.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Transfer.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Transfer.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Transfer.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Transfer.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function Transfer.typetoString')
    }

    static statustoString(val) {
        console.error('shimmed function Transfer.statustoString')
    }

    static failurereasontoString(val) {
        console.error('shimmed function Transfer.failurereasontoString')
    }

    accept(filenameWithPath) {
        console.error('shimmed function Transfer.accept')
    }

    pause() {
        console.error('shimmed function Transfer.pause')
    }

    resume() {
        console.error('shimmed function Transfer.resume')
    }

    cancel() {
        console.error('shimmed function Transfer.cancel')
    }

    isController() {
        console.error('shimmed function Transfer.isController')
    }

    discard() {
        console.error('shimmed function Transfer.discard')
    }

    dispose() {
        console.error('shimmed function Transfer.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function Transfer.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Transfer.initializeLifetimeService')
    }
}
export enum UIEventContext {
    ui,
    background,
}
export class UIEventRunner {

    static _instance: UIEventRunner;

    static instance() {
        return UIEventRunner._instance ?? (UIEventRunner._instance = new UIEventRunner());
    }

    run(context, durationThreshold) {

    }

    dispose() {
        console.error('shimmed function UIEventRunner.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function UIEventRunner.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function UIEventRunner.initializeLifetimeService')
    }
}
export class UnreadCountChangedType {

    invoke(sender, count) {
        console.error('shimmed function UnreadCountChangedType.invoke')
    }

    getObjectData(info, context) {
        console.error('shimmed function UnreadCountChangedType.getObjectData')
    }

    getInvocationList() {
        console.error('shimmed function UnreadCountChangedType.getInvocationList')
    }

    dynamicInvoke(args) {
        console.error('shimmed function UnreadCountChangedType.dynamicInvoke')
    }

    clone() {
        console.error('shimmed function UnreadCountChangedType.clone')
    }
}
export class VectBool {

    getCount() {
        console.error('shimmed function VectBool.getCount')
    }

    append(val) {
        console.error('shimmed function VectBool.append')
    }

    get(index) {
        console.error('shimmed function VectBool.get')
    }

    dispose() {
        console.error('shimmed function VectBool.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function VectBool.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function VectBool.initializeLifetimeService')
    }
}
export class VectGIFilename {

    getCount() {
        console.error('shimmed function VectGIFilename.getCount')
    }

    append(fileName) {
        console.error('shimmed function VectGIFilename.append')
    }

    dispose() {
        console.error('shimmed function VectGIFilename.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function VectGIFilename.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function VectGIFilename.initializeLifetimeService')
    }
}
export class VectGIString {

    getCount() {
        console.error('shimmed function VectGIString.getCount')
    }

    append(val) {
        console.error('shimmed function VectGIString.append')
    }

    get(index) {
        console.error('shimmed function VectGIString.get')
    }

    dispose() {
        console.error('shimmed function VectGIString.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function VectGIString.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function VectGIString.initializeLifetimeService')
    }
}
export class VectInt {

    getCount() {
        console.error('shimmed function VectInt.getCount')
    }

    append(val) {
        console.error('shimmed function VectInt.append')
    }

    get(index) {
        console.error('shimmed function VectInt.get')
    }

    dispose() {
        console.error('shimmed function VectInt.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function VectInt.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function VectInt.initializeLifetimeService')
    }
}
export class VectUnsignedInt {

    getCount() {
        console.error('shimmed function VectUnsignedInt.getCount')
    }

    append(val) {
        console.error('shimmed function VectUnsignedInt.append')
    }

    get(index) {
        console.error('shimmed function VectUnsignedInt.get')
    }

    dispose() {
        console.error('shimmed function VectUnsignedInt.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function VectUnsignedInt.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function VectUnsignedInt.initializeLifetimeService')
    }
}
export class Video {
    static orientation_TRANSPOSE_MASK: number = 4;
    static orientation_FLIP_V_MASK: number = 2;
    static orientation_FLIP_H_MASK: number = 1;
    static orientation_TRANSPOSE_FLIP_H_V: number = 7;
    static orientation_TRANSPOSE_FLIP_V: number = 6;
    static orientation_TRANSPOSE_FLIP_H: number = 5;
    static orientation_TRANSPOSE: number = 4;
    static orientation_FLIP_H_V: number = 3;
    static orientation_FLIP_V: number = 2;
    static orientation_FLIP_H: number = 1;
    static orientation_NONE: number = 0;
    static video_DEVICE_CAPABILITY_VIDEOCAP_USB_HIGHSPEED: number = 3;
    static video_DEVICE_CAPABILITY_VIDEOCAP_REQ_DRIVERUPDATE: number = 2;
    static video_DEVICE_CAPABILITY_VIDEOCAP_HQ_CERTIFIED: number = 1;
    static video_DEVICE_CAPABILITY_VIDEOCAP_HQ_CAPABLE: number = 0;
    static mediatype_MEDIA_VIDEO: number = 0;
    static mediatype_MEDIA_SCREENSHARING: number = 1;
    static status_UNATTACHED: number = 13;
    static status_SWITCHING_DEVICE: number = 12;
    static status_CHECKING_SUBSCRIPTION: number = 11;
    static status_UNKNOWN: number = 9;
    static status_HINT_IS_VIDEOCALL_RECEIVED: number = 8;
    static status_NOT_STARTED: number = 7;
    static status_PAUSED: number = 6;
    static status_STOPPING: number = 5;
    static status_RUNNING: number = 4;
    static status_REJECTED: number = 3;
    static status_STARTING: number = 2;
    static status_AVAILABLE: number = 1;
    static status_NOT_AVAILABLE: number = 0;
    static setupkey_VIDEO_ADVERTPOLICY: string = 'Lib/Video/AdvertPolicy';
    static setupkey_VIDEO_RECVPOLICY: string = 'Lib/Video/RecvPolicy';
    static setupkey_VIDEO_DISABLE: string = '*Lib/Video/Disable';
    static setupkey_VIDEO_AUTOSEND: string = 'Lib/Video/AutoSend';
    static setupkey_VIDEO_DEVICE_PATH: string = 'Lib/Video/DevicePath';
    static setupkey_VIDEO_DEVICE: string = 'Lib/Video/Device';

    getVideoSrc() {
        console.error('shimmed function Video.getVideoSrc')
    }

    getVideoDeviceHandle() {
        console.error('shimmed function Video.getVideoDeviceHandle')
    }

    getAspectRatio() {
        console.error('shimmed function Video.getAspectRatio')
    }

    getOrientation() {
        console.error('shimmed function Video.getOrientation')
    }

    getWidth() {
        console.error('shimmed function Video.getWidth')
    }

    getHeight() {
        console.error('shimmed function Video.getHeight')
    }

    setVisible(visible) {
        console.error('shimmed function Video.setVisible')
    }

    dispose() {
        console.error('shimmed function Video.dispose')
    }

    getObjectID() {
        console.error('shimmed function Video.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Video.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Video.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Video.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Video.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Video.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Video.setExtendedIntProperty')
    }

    static statustoString(val) {
        console.error('shimmed function Video.statustoString')
    }

    static mediatypetoString(val) {
        console.error('shimmed function Video.mediatypetoString')
    }

    static video_DEVICE_CAPABILITYToString(val) {
        console.error('shimmed function Video.video_DEVICE_CAPABILITYToString')
    }

    start() {
        console.error('shimmed function Video.start')
    }

    stop() {
        console.error('shimmed function Video.stop')
    }

    setIncomingTransmissionsDesired(desire) {
        console.error('shimmed function Video.setIncomingTransmissionsDesired')
    }

    setScreenCaptureRectangle(x0, y0, width, height, monitorNumber, windowHandle) {
        console.error('shimmed function Video.setScreenCaptureRectangle')
    }

    setRemoteRendererId(id) {
        console.error('shimmed function Video.setRemoteRendererId')
    }

    setVideoConsumptionProperties(renderedWidth, renderedHeight) {
        console.error('shimmed function Video.setVideoConsumptionProperties')
    }

    getCurrentVideoDevice() {
        console.error('shimmed function Video.getCurrentVideoDevice')
    }

    discard() {
        console.error('shimmed function Video.discard')
    }

    getLifetimeService() {
        console.error('shimmed function Video.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Video.initializeLifetimeService')
    }
}
export class VideoGetCurrentVideoDeviceResult {

    getLifetimeService() {
        console.error('shimmed function VideoGetCurrentVideoDeviceResult.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function VideoGetCurrentVideoDeviceResult.initializeLifetimeService')
    }
}
export class VideoMessage {
    static vod_STATUS_VOD_PLAYABLE_LOCAL: number = 3;
    static vod_STATUS_VOD_PLAYABLE: number = 2;
    static vod_STATUS_VOD_CONVERTING: number = 1;
    static vod_STATUS_VOD_NOT_AVAILABLE: number = 0;
    static status_EXPIRED: number = 8;
    static status_DELETED: number = 7;
    static status_INVALID: number = 6;
    static status_CANCELED: number = 5;
    static status_FAILED: number = 4;
    static status_UPLOADED: number = 3;
    static status_UPLOADING: number = 2;
    static status_RECORDED: number = 1;
    static status_BLANK: number = 0;

    getObjectID() {
        console.error('shimmed function VideoMessage.getObjectID')
    }

    getDbID() {
        console.error('shimmed function VideoMessage.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function VideoMessage.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function VideoMessage.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function VideoMessage.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function VideoMessage.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function VideoMessage.setExtendedIntProperty')
    }

    static statustoString(val) {
        console.error('shimmed function VideoMessage.statustoString')
    }

    static vod_STATUSToString(val) {
        console.error('shimmed function VideoMessage.vod_STATUSToString')
    }

    prepareForPlay(allowLocalPath) {
        console.error('shimmed function VideoMessage.prepareForPlay')
    }

    getThumbnail() {
        console.error('shimmed function VideoMessage.getThumbnail')
    }

    discard() {
        console.error('shimmed function VideoMessage.discard')
    }

    getThumbnailAsync() {
        console.error('shimmed function VideoMessage.getThumbnailAsync')
    }

    dispose() {
        console.error('shimmed function VideoMessage.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function VideoMessage.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function VideoMessage.initializeLifetimeService')
    }
}
export namespace VM {
    export class RecentsQuery {

        reload(max_items) {
            console.error('shimmed function RecentsQuery.reload')
        }

        resize(max_items) {
            console.error('shimmed function RecentsQuery.resize')
        }

        handleConversationPropertiesChange(conversation, props) {
            console.error('shimmed function RecentsQuery.handleConversationPropertiesChange')
        }

        handleConversationListChange(sender, id, filterType, added) {
            console.error('shimmed function RecentsQuery.handleConversationListChange')
        }

        getLifetimeService() {
            console.error('shimmed function RecentsQuery.getLifetimeService')
        }

        initializeLifetimeService() {
            console.error('shimmed function RecentsQuery.initializeLifetimeService')
        }
    }
    export class UnreadCountQuery {

        reload() {
            console.error('shimmed function UnreadCountQuery.reload')
        }

        handleConversationPropertiesChange(conversation, props) {
            console.error('shimmed function UnreadCountQuery.handleConversationPropertiesChange')
        }

        handleConversationListChange(sender, id, filterType, added) {
            console.error('shimmed function UnreadCountQuery.handleConversationListChange')
        }

        getLifetimeService() {
            console.error('shimmed function UnreadCountQuery.getLifetimeService')
        }

        initializeLifetimeService() {
            console.error('shimmed function UnreadCountQuery.initializeLifetimeService')
        }
    }
}
export class Voicemail {
    static failurereason_SENDER_BLOCKED: number = 12;
    static failurereason_SENDER_NOT_AUTHORIZED: number = 11;
    static failurereason_RECEIVER_DISABLED_VOICEMAIL: number = 10;
    static failurereason_NO_PERMISSION: number = 9;
    static failurereason_PLAYBACK_ERROR: number = 8;
    static failurereason_RECORDING_ERROR: number = 7;
    static failurereason_FILE_WRITE_ERROR: number = 6;
    static failurereason_FILE_READ_ERROR: number = 5;
    static failurereason_NO_SUCH_VOICEMAIL: number = 4;
    static failurereason_NO_VOICEMAIL_CAPABILITY: number = 3;
    static failurereason_CONNECT_ERROR: number = 2;
    static failurereason_MISC_ERROR: number = 1;
    static status_CANCELLED: number = 16;
    static status_CHECKING: number = 15;
    static status_DELETING_FAILED: number = 14;
    static status_FAILED: number = 13;
    static status_DELETING: number = 12;
    static status_UPLOADED: number = 11;
    static status_UPLOADING: number = 10;
    static status_RECORDED: number = 9;
    static status_RECORDING: number = 8;
    static status_BLANK: number = 7;
    static status_PLAYED: number = 6;
    static status_PLAYING: number = 5;
    static status_BUFFERING: number = 4;
    static status_UNPLAYED: number = 3;
    static status_DOWNLOADING: number = 2;
    static status_NOTDOWNLOADED: number = 1;
    static type_OUTGOING: number = 3;
    static type_CUSTOM_GREETING: number = 2;
    static type_DEFAULT_GREETING: number = 4;
    static type_INCOMING: number = 1;

    getObjectID() {
        console.error('shimmed function Voicemail.getObjectID')
    }

    getDbID() {
        console.error('shimmed function Voicemail.getDbID')
    }

    getStrProperty(propKey) {
        console.error('shimmed function Voicemail.getStrProperty')
    }

    getStrPropertyWithXmlStripped(propKey) {
        console.error('shimmed function Voicemail.getStrPropertyWithXmlStripped')
    }

    getIntProperty(propKey) {
        console.error('shimmed function Voicemail.getIntProperty')
    }

    setExtendedStrProperty(propKey, value) {
        console.error('shimmed function Voicemail.setExtendedStrProperty')
    }

    setExtendedIntProperty(propKey, value) {
        console.error('shimmed function Voicemail.setExtendedIntProperty')
    }

    static typetoString(val) {
        console.error('shimmed function Voicemail.typetoString')
    }

    static statustoString(val) {
        console.error('shimmed function Voicemail.statustoString')
    }

    static failurereasontoString(val) {
        console.error('shimmed function Voicemail.failurereasontoString')
    }

    startRecording() {
        console.error('shimmed function Voicemail.startRecording')
    }

    stopRecording() {
        console.error('shimmed function Voicemail.stopRecording')
    }

    startPlayback() {
        console.error('shimmed function Voicemail.startPlayback')
    }

    stopPlayback() {
        console.error('shimmed function Voicemail.stopPlayback')
    }

    delete() {
        console.error('shimmed function Voicemail.delete')
    }

    cancel() {
        console.error('shimmed function Voicemail.cancel')
    }

    forwardToContacts(contacts) {
        console.error('shimmed function Voicemail.forwardToContacts')
    }

    forwardToGroups(groups) {
        console.error('shimmed function Voicemail.forwardToGroups')
    }

    getEventId() {
        console.error('shimmed function Voicemail.getEventId')
    }

    checkPermission() {
        console.error('shimmed function Voicemail.checkPermission')
    }

    discard() {
        console.error('shimmed function Voicemail.discard')
    }

    dispose() {
        console.error('shimmed function Voicemail.dispose')
    }

    getLifetimeService() {
        console.error('shimmed function Voicemail.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function Voicemail.initializeLifetimeService')
    }
}
export class WrSkyLib extends EventTarget {

    constructor() {
        super();
        return new Proxy(this, new ShimProxyHandler());
    }

    get loggedIn(): boolean {
        return true;
    }

    static libstatus_FATAL_ERROR: number = 5;
    static libstatus_STOPPED: number = 4;
    static libstatus_STOPPING: number = 3;
    static libstatus_RUNNING: number = 2;
    static libstatus_STARTING: number = 1;
    static libstatus_CONSTRUCTED: number = 0;
    static objecttype_MEDIADOCUMENT: number = 22;
    static objecttype_VIDEOMESSAGE: number = 21;
    static objecttype_ACCESSSESSION: number = 20;
    static objecttype_ACCOUNT: number = 5;
    static objecttype_PRICEQUOTE: number = 17;
    static objecttype_ALERT: number = 16;
    static objecttype_CONTENTITEM: number = 14;
    static objecttype_TRANSFER: number = 6;
    static objecttype_SMS: number = 12;
    static objecttype_VOICEMAIL: number = 7;
    static objecttype_VIDEO: number = 11;
    static objecttype_MESSAGE: number = 9;
    static objecttype_CONVERSATION: number = 18;
    static objecttype_PARTICIPANT: number = 19;
    static objecttype_CONTACTSEARCH: number = 1;
    static objecttype_CONTACT: number = 2;
    static objecttype_CONTACTGROUP: number = 10;
    static debug_STRING_DEBUG_STRING_MSNP_LOG: number = 2;
    static debug_STRING_DEBUG_STRING_MSNP_SUMMARY: number = 1;
    static debug_STRING_DEBUG_STRING_DEFAULT: number = 0;
    static localized_STRING_LOCALIZED_COUNT: number = 1;
    static localized_STRING_LOCALIZED_UPGRADE_MESSAGE_IN_P2P: number = 0;
    static pnm_REGISTER_CONTEXTS_RESULT_REGISTER_CONTEXTS_FAILED: number = 1;
    static pnm_REGISTER_CONTEXTS_RESULT_REGISTER_CONTEXTS_SUCCEEDED: number = 0;
    static pushhandlingresult_CALL_SETUP_FAILED: number = 2;
    static pushhandlingresult_CALL_SETUP_SUCCEEDED: number = 1;
    static pushhandlingresult_BAD_NOTIFICATION_PAYLOAD: number = 0;
    static service_TYPE_NNA: number = 10;
    static service_TYPE_ADM: number = 9;
    static service_TYPE_GRIFFIN: number = 8;
    static service_TYPE_TROUTER: number = 7;
    static service_TYPE_GOOGLE_AC2DM: number = 6;
    static service_TYPE_HOTMAIL: number = 5;
    static service_TYPE_GOOGLE_AGCM: number = 4;
    static service_TYPE_APPLE_APN: number = 3;
    static service_TYPE_MICROSOFT_WP7NS: number = 2;
    static service_TYPE_MICROSOFT_WNS: number = 1;
    static service_TYPE_TESTING: number = 0;
    static auth_RESULT_AUTH_PARTNER_TIMEOUT: number = 9;
    static auth_RESULT_AUTH_PARTNER_INTERNAL_ERROR: number = 8;
    static auth_RESULT_AUTH_USER_IS_UNDERAGE: number = 7;
    static auth_RESULT_AUTH_INVALID_OAUTH_AUTHENTICATION: number = 6;
    static auth_RESULT_AUTH_INVALID_SKYPE_AUTHENTICATION: number = 5;
    static auth_RESULT_AUTH_ANOTHER_MAPPING_EXISTS: number = 4;
    static auth_RESULT_AUTH_INVALID_PARAMETER: number = 3;
    static auth_RESULT_AUTH_MISSING_PARAMETER: number = 2;
    static auth_RESULT_AUTH_INTERNAL_ERROR: number = 1;
    static auth_RESULT_AUTH_OK: number = 0;
    static app2APP_STREAMS_RECEIVED_STREAMS: number = 2;
    static app2APP_STREAMS_SENDING_STREAMS: number = 1;
    static app2APP_STREAMS_ALL_STREAMS: number = 0;
    static unpack_RESULT_UNPACK_SIGNATURE_ERROR: number = 3;
    static unpack_RESULT_UNPACK_BLOB_ERROR: number = 2;
    static unpack_RESULT_UNPACK_FILE_ERROR: number = 1;
    static unpack_RESULT_UNPACK_OK: number = 0;
    static unpack_TYPE_UP_SKYPEHOME_BUNDLE: number = 4106;
    static unpack_TYPE_UP_MAC_UPGRADE: number = 4103;
    static upgraderesult_UPGRADE_CHECK_FAILED: number = 20;
    static upgraderesult_GOLD_AND_BETA_AVAILABLE: number = 12;
    static upgraderesult_BETA_AVAILABLE: number = 11;
    static upgraderesult_GOLD_AVAILABLE: number = 10;
    static upgraderesult_DISCONTINUED: number = 5;
    static upgraderesult_FORCED_STEALTH_UPGRADE: number = 4;
    static upgraderesult_FORCED_UPGRADE: number = 3;
    static upgraderesult_RECOMMENDED_STEALTH_UPGRADE: number = 2;
    static upgraderesult_RECOMMENDED_UPGRADE: number = 1;
    static upgraderesult_NO_UPGRADE: number = 0;
    static libprop_LIBPROP_NRT_CAPABILITIES: number = 44;
    static libprop_LIBPROP_API_ALLOWLIST_LOCK: number = 43;
    static libprop_LIBPROP_LOGIN_STATS_SAMPLING: number = 42;
    static libprop_LIBPROP_DISABLE_VIRAL_UPGRADES: number = 41;
    static libprop_LIBPROP_VIDEO_MESSAGE_SENDING_ENABLED: number = 40;
    static libprop_LIBPROP_DISABLED_AUTH_PARTNERS: number = 39;
    static libprop_LIBPROP_AD_ALLOWED_RICH: number = 38;
    static libprop_LIBPROP_AD_ALLOWED_BASIC: number = 37;
    static libprop_LIBPROP_BILLING_TYPE: number = 36;
    static libprop_LIBPROP_NETCONF_IS_LATEST: number = 35;
    static libprop_LIBPROP_USER_LIKENESS: number = 34;
    static libprop_LIBPROP_SKYPEMANAGER_MEMBER_STATUS: number = 33;
    static libprop_LIBPROP_POLICY_DISABLE_VIDEO: number = 32;
    static libprop_LIBPROP_SKYPEHOME_CHANNEL_DISABLED: number = 31;
    static libprop_LIBPROP_MESH_PROBLEMS: number = 30;
    static libprop_LIBPROP_CURCALL_TBYB_SECONDS_REMAINING: number = 29;
    static libprop_LIBPROP_UPGRADE_SIGNER_NAME: number = 27;
    static libprop_LIBPROP_ALL_LASTCALL_PROPERTIES_SET: number = 26;
    static libprop_LIBPROP_POSTCALL_JUNCTION_DISABLED: number = 25;
    static libprop_LIBPROP_LASTCALL_END_DETAILS: number = 24;
    static libprop_LIBPROP_AUTO_TOPUP_STATUS: number = 23;
    static libprop_LIBPROP_MPV_ENABLED: number = 22;
    static libprop_LIBPROP_DISABLE_WEB_SEARCH: number = 21;
    static libprop_LIBPROP_3G_FREE_TRIAL_IS_OVER: number = 20;
    static libprop_LIBPROP_MAX_VIDEOCONFCALL_PARTICIPANTS: number = 19;
    static libprop_LIBPROP_POLICY_DISABLE_FLAMINGO_CHANNEL: number = 18;
    static libprop_LIBPROP_LASTCALL_REMOTE_PROBLEMS: number = 17;
    static libprop_LIBPROP_LASTCALL_LOCAL_PROBLEMS: number = 16;
    static libprop_LIBPROP_POLICY_DISABLE_LOGOUT: number = 15;
    static libprop_LIBPROP_OLD_CAMERA_DRIVER: number = 14;
    static libprop_LIBPROP_POLICY_DISABLE_SCREENSHARING: number = 13;
    static libprop_LIBPROP_POLICY_DISABLE_DRAGONFLY: number = 12;
    static libprop_LIBPROP_POLICY_DISABLE_MICROPAYMENTS: number = 11;
    static libprop_LIBPROP_DISABLE_SENDMONEY: number = 10;
    static libprop_LIBPROP_POLICY_DISABLE_LANGUAGE_EDIT: number = 9;
    static libprop_LIBPROP_POLICY_DISABLE_PERSONALISE: number = 8;
    static libprop_LIBPROP_POLICY_DISABLE_VERSION_CHECK: number = 7;
    static libprop_LIBPROP_POLICY_DISABLE_CONTACT_IMPORT: number = 6;
    static libprop_LIBPROP_POLICY_DISABLE_FILE_TRANSFER: number = 5;
    static libprop_LIBPROP_POLICY_DISABLE_PUBLIC_API: number = 4;
    static libprop_LIBPROP_BW_CUROUT_KB: number = 3;
    static libprop_LIBPROP_BW_CURIN_KB: number = 2;
    static libprop_LIBPROP_IS_HTTPFE_ENABLED: number = 1;
    static libprop_LIBPROP_MAX_CONFCALL_PARTICIPANTS: number = 0;
    static nrt_CAPABILITIES_NRT_LYNC_PHASE2_ENABLED: number = 2;
    static nrt_CAPABILITIES_NRT_ENABLED: number = 1;
    static nrt_CAPABILITIES_NRT_DISABLED: number = 0;
    static uiprop_UIPROP_POLICY_LISTEN_RANGE_END: number = 19;
    static uiprop_UIPROP_POLICY_LISTEN_RANGE_BEGIN: number = 18;
    static uiprop_UIPROP_NOTIFICATIONS_LANGUAGE: number = 17;
    static uiprop_UIPROP_CALL_QUALITY_FEEDBACK_EXPECTED_WITH_NEXT_CALL: number = 16;
    static uiprop_UIPROP_IS_MOBILE_DEVICE: number = 15;
    static uiprop_UIPROP_SELECTED_CONTACT_IDENTITY: number = 14;
    static uiprop_UIPROP_POLICY_PROXY_USERNAME: number = 13;
    static uiprop_UIPROP_POLICY_PROXY_ADDRESS: number = 12;
    static uiprop_UIPROP_POLICY_PROXY_SETTING: number = 11;
    static uiprop_UIPROP_POLICY_LISTEN_HTTP_PORTS: number = 10;
    static uiprop_UIPROP_POLICY_LISTEN_PORT: number = 9;
    static uiprop_UIPROP_EXPRESSIVECONTENT_ITEMS: number = 8;
    static uiprop_UIPROP_LAST_CALL_ORIGIN: number = 7;
    static uiprop_UIPROP_TOOLBARITEM_USED_IN_LAST_MINUTE: number = 6;
    static uiprop_UIPROP_MENUITEM_USED_IN_LAST_MINUTE: number = 5;
    static uiprop_UIPROP_IC_LAST_YIELD: number = 4;
    static uiprop_UIPROP_IC_TOTAL_YIELD: number = 3;
    static uiprop_UIPROP_IC_RUN_COMPLETED_COUNT: number = 2;
    static uiprop_UIPROP_IC_RUN_STARTUP_COUNT: number = 1;
    static uiprop_UIPROP_LANGUAGE: number = 0;
    static user_LIKENESSES_USERLIKE_BUSINESS: number = 1;
    static user_LIKENESSES_USERLIKE_REGULAR: number = 0;
    static skypemanager_MEMBER_STATUSES_SM_ADMIN: number = 3;
    static skypemanager_MEMBER_STATUSES_SM_MANAGED: number = 2;
    static skypemanager_MEMBER_STATUSES_SM_MEMBER: number = 1;
    static skypemanager_MEMBER_STATUSES_SM_NONE: number = 0;
    static policy_DISABLE_VIDEO_OPTIONS_POLICY_VIDEO_DISABLED: number = 3;
    static policy_DISABLE_VIDEO_OPTIONS_POLICY_VIDEO_RECEIVE_DISABLED: number = 2;
    static policy_DISABLE_VIDEO_OPTIONS_POLICY_VIDEO_SEND_DISABLED: number = 1;
    static policy_DISABLE_VIDEO_OPTIONS_POLICY_VIDEO_ENABLED: number = 0;
    static livesession_END_DETAILS_LED_HOST_WENT_OFFLINE: number = 64;
    static livesession_END_DETAILS_LED_ENDED_NORMALLY_WITH_SUCCESSFUL_RECOVERY: number = 32;
    static livesession_END_DETAILS_LED_REMOTE_USER_TERMINATED_DURING_RECOVERY: number = 16;
    static livesession_END_DETAILS_LED_LOCAL_USER_TERMINATED_DURING_RECOVERY: number = 8;
    static livesession_END_DETAILS_LED_RECOVERY_UNSUCCESSFUL: number = 4;
    static livesession_END_DETAILS_LED_NO_REMOTE_CONNECTIVITY: number = 2;
    static livesession_END_DETAILS_LED_NO_LOCAL_CONNECTIVITY: number = 1;
    static content_LIST_CONTEXT_CL_CONTEXT_SDK_ALLOWLIST: number = 8;
    static content_LIST_CONTEXT_CL_CONTEXT_SDK_BLOCKLIST: number = 7;
    static content_LIST_CONTEXT_CL_CONTEXT_SF_BLOCKLIST: number = 6;
    static content_LIST_CONTEXT_CL_CONTEXT_PLUGIN_ALLOWLIST: number = 5;
    static content_LIST_CONTEXT_CL_CONTEXT_API_BLOCKLIST: number = 4;
    static content_LIST_CONTEXT_CL_CONTEXT_API_ALLOWLIST: number = 3;
    static content_LIST_CONTEXT_CL_CONTEXT_HTTPS_DIRECT: number = 2;
    static content_LIST_CONTEXT_CL_CONTEXT_DF_BLOCKED: number = 1;
    static content_LIST_RESULT_CL_FILE_ERROR: number = 4;
    static content_LIST_RESULT_CL_QUERY_FAILED: number = 3;
    static content_LIST_RESULT_CL_QUERY_PENDING: number = 2;
    static content_LIST_RESULT_CL_NOT_LISTED: number = 1;
    static content_LIST_RESULT_CL_LISTED: number = 0;
    static webgw_RESULT_WG_COOKIE_ERROR: number = 10;
    static webgw_RESULT_WG_REDIRECT_ERROR: number = 9;
    static webgw_RESULT_WG_INVALID_HOST: number = 8;
    static webgw_RESULT_WG_INVALID_URI_FORMAT: number = 7;
    static webgw_RESULT_WG_INVALID_URI_SCHEME: number = 6;
    static webgw_RESULT_WG_NO_ROUTES: number = 5;
    static webgw_RESULT_WG_WEB_TIMEOUT: number = 4;
    static webgw_RESULT_WG_TRANSFER_FAILED: number = 3;
    static webgw_RESULT_WG_ERROR: number = 2;
    static webgw_RESULT_WG_LOCAL_ERROR: number = 1;
    static webgw_RESULT_WG_SUCCESS: number = 0;
    static httpfe_METHOD_HTTPFE_POST: number = 1;
    static httpfe_METHOD_HTTPFE_GET: number = 0;
    static setupkey_HTTPFE_ACCEPT_DEFLATE: string = 'Lib/Pic/AcceptDeflate';
    static setupkey_HTTPFE_DISABLE_COOKIES: string = 'Lib/Pic/DisableCookies';
    static sa_PAYMENT_IID_SA_PAYMENT_IID_ATU: number = 5;
    static sa_PAYMENT_IID_SA_PAYMENT_IID_EXPDATE_YEAR: number = 4;
    static sa_PAYMENT_IID_SA_PAYMENT_IID_EXPDATE_MON: number = 3;
    static sa_PAYMENT_IID_SA_PAYMENT_IID_CARDTYPE: number = 2;
    static sa_PAYMENT_IID_SA_PAYMENT_IID_PRODUCT: number = 1;
    static sa_PAYMENT_IID_SA_PAYMENT_IID_AMOUNT_NUM: number = 0;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_ORDER_ID: number = 8;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_COUNTRY: number = 7;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_CURRENCY: number = 6;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_AMOUNT_STR: number = 5;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_CARD_VAL_NO: number = 4;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_CARD_NO: number = 3;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_CARDHOLDER: number = 2;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_SKYPERPWD: number = 1;
    static sa_PAYMENT_SID_SA_PAYMENT_SID_SKYPENAME: number = 0;
    static sa_PAYMENT_CARDTYPE_SA_PAYMENT_CARDTYPE_AMEX: number = 3;
    static sa_PAYMENT_CARDTYPE_SA_PAYMENT_CARDTYPE_MC: number = 2;
    static sa_PAYMENT_CARDTYPE_SA_PAYMENT_CARDTYPE_VISA: number = 1;
    static sa_PAYMENT_CARDTYPE_SA_PAYMENT_CARDTYPE_UNKNOWN: number = 0;
    static sa_PAYMENT_PRODUCT_SA_PAYMENT_PRODUCT_SKYPE_CREDIT: number = 0;
    static accesseventtype_EV_IS_HOTSPOT: number = 2003;
    static accesseventtype_EV_IS_ONLINE: number = 2002;
    static accesseventtype_EV_DISABLE_TEST_MODE: number = 2001;
    static accesseventtype_EV_ENABLE_TEST_MODE: number = 2000;
    static accesseventtype_EV_DISABLE_ACCESS: number = 1013;
    static accesseventtype_EV_ENABLE_ACCESS: number = 1012;
    static accesseventtype_EV_SET_SESSION_LENGTH: number = 1011;
    static accesseventtype_EV_LOGIN_OPERATOR: number = 1010;
    static accesseventtype_EV_REPORT_LOCATION: number = 1009;
    static accesseventtype_EV_RATE_HOTSPOT: number = 1008;
    static accesseventtype_EV_WIFI_CHANGED_DISABLED: number = 1007;
    static accesseventtype_EV_WIFI_CHANGED_UNSUPPORTED: number = 1006;
    static accesseventtype_EV_WIFI_CHANGED_SUPPORTED: number = 1005;
    static accesseventtype_EV_START_PAYMENT: number = 1004;
    static accesseventtype_EV_EXTEND: number = 1003;
    static accesseventtype_EV_REDETECT: number = 1002;
    static accesseventtype_EV_LOGOUT: number = 1001;
    static accesseventtype_EV_LOGIN: number = 1000;
    static accesseventtype_SA_SESSION_RECOVERABLE: number = 3;
    static accesseventtype_SA_SESSION_LOST: number = 2;
    static accesseventtype_SA_SESSION_AUTO_END: number = 1;
    static accesseventtype_SA_OBJECT_INVALIDATED: number = 0;
    static setupkey_ACCESS_SESSION_LEN: string = '*Lib/Access/SessionLen';
    static setupkey_ACCESS_ENABLED: string = '*Lib/Access/Enabled';
    static validateresult_STARTS_WITH_INVALID_CHAR: number = 10;
    static validateresult_TOO_SIMPLE: number = 9;
    static validateresult_CONTAINS_INVALID_WORD: number = 8;
    static validateresult_INVALID_FORMAT: number = 7;
    static validateresult_SAME_AS_USERNAME: number = 6;
    static validateresult_CONTAINS_SPACE: number = 5;
    static validateresult_CONTAINS_INVALID_CHAR: number = 4;
    static validateresult_TOO_LONG: number = 3;
    static validateresult_TOO_SHORT: number = 2;
    static validateresult_VALIDATED_OK: number = 1;
    static validateresult_NOT_VALIDATED: number = 0;
    static partner_ID_PARTNER_MICROSOFT: number = 999;
    static partner_ID_PARTNER_FACEBOOK: number = 95;
    static partner_ID_PARTNER_SKYPE: number = 1;
    static partner_ID_PARTNER_NONE: number = 0;
    static setupkey_ENDPOINT_NAME: string = 'Lib/MSNP/EndpointName';
    static setupkey_DISABLE_XMPP: string = '*Lib/XMPP/Disable';
    static setupkey_PRIVATE_SKYPE_MODE: string = 'Lib/Account/PrivateSkypeMode';
    static setupkey_IDLE_TIME_FOR_NA: string = 'Lib/Account/IdleTimeForNA';
    static setupkey_IDLE_TIME_FOR_AWAY: string = 'Lib/Account/IdleTimeForAway';
    static partner_QUERY_ERROR_PQ_SERVER_NOCONNECT: number = 2;
    static partner_QUERY_ERROR_PQ_SERVER_NOSUCCESS: number = 1;
    static partner_QUERY_ERROR_PQ_SUCCESS: number = 0;
    static partner_QUERY_ID_PQ_MANDALAY: number = 0;
    static partner_QUERY_PARAMS_PQ_USERID: number = 35;
    static partner_QUERY_PARAMS_PQ_PASSWORD: number = 34;
    static partner_QUERY_PARAMS_PQ_EMAIL: number = 33;
    static partner_QUERY_PARAMS_PQ_PARTNER_ID: number = 32;
    static partner_QUERY_TYPE_PQ_USERID_QUERY: number = 3;
    static partner_QUERY_TYPE_PQ_PROFILE_URL: number = 2;
    static partner_QUERY_TYPE_PQ_PICTURE_URL: number = 1;
    static partner_QUERY_TYPE_PQ_SESSIONTOKEN: number = 0;
    static setupkey_DC_NOPERSONAL: string = 'Lib/DynContent/DisablePersonal';
    static setupkey_DC_NOPROMO: string = 'Lib/DynContent/DisablePromo';
    static setupkey_DC_NOTIPS: string = 'Lib/DynContent/DisableTip';
    static setupkey_FT_INCOMING_LIMIT: string = 'Lib/FileTransfer/IncomingLimit';
    static setupkey_FT_SAVEPATH: string = 'Lib/FileTransfer/SavePath';
    static setupkey_FT_AUTOACCEPT: string = 'Lib/FileTransfer/AutoAccept';
    static callerid_STATE_CLI_BLOCKED: number = 5;
    static callerid_STATE_CLI_FAILED: number = 4;
    static callerid_STATE_CLI_ACTIVE: number = 3;
    static callerid_STATE_CLI_VERIFIED: number = 2;
    static callerid_STATE_CLI_PENDING: number = 1;
    static callerid_OPTIONS_CHANGE_CLI_LOADED_NEW: number = 3;
    static callerid_OPTIONS_CHANGE_CLI_SET_FAILED: number = 2;
    static callerid_OPTIONS_CHANGE_CLI_SET_SUCCESS: number = 1;
    static callerid_IDCONFIG_AUTOSELECT_CLI: number = 4;
    static callerid_IDCONFIG_USE_SMS_FOR_CLI: number = 2;
    static callerid_IDCONFIG_USE_CLI_FOR_SMS: number = 1;
    static callerid_TYPE_CLI_T_SKYPEIN: number = 3;
    static callerid_TYPE_CLI_T_MOBILE: number = 2;
    static callerid_TYPE_CLI_T_SMS: number = 1;
    static mobile_DATA_USAGE_LEVEL_UNLIMITED: number = 100;
    static mobile_DATA_USAGE_LEVEL_MEDIUM: number = 20;
    static mobile_DATA_USAGE_LEVEL_LOW: number = 10;
    static operating_MEDIA_OM_4G: number = 4;
    static operating_MEDIA_OM_3G: number = 3;
    static operating_MEDIA_OM_FREE_WIRELESS: number = 2;
    static operating_MEDIA_OM_FREE: number = 1;
    static operating_MEDIA_OM_UNKNOWN: number = 0;
    static audiodevice_CAPABILITIES_HAS_BLUETOOTH_INTERFACE: number = 4096;
    static audiodevice_CAPABILITIES_HAS_VIDEO_RENDERING: number = 2048;
    static audiodevice_CAPABILITIES_POSSIBLY_WEBCAM: number = 256;
    static audiodevice_CAPABILITIES_IS_HEADSET: number = 128;
    static audiodevice_CAPABILITIES_IS_WEBCAM: number = 64;
    static audiodevice_CAPABILITIES_HAS_LOWBANDWIDTH_CAPTURE: number = 32;
    static audiodevice_CAPABILITIES_HAS_AUDIO_RENDERING: number = 16;
    static audiodevice_CAPABILITIES_HAS_AUDIO_CAPTURE: number = 8;
    static audiodevice_CAPABILITIES_POSSIBLY_HEADSET: number = 4;
    static audiodevice_CAPABILITIES_HAS_USB_INTERFACE: number = 2;
    static audiodevice_CAPABILITIES_HAS_VIDEO_CAPTURE: number = 1;
    static preparesoundresult_PREPARESOUND_PLAYBACK_NOT_SUPPORTED: number = 6;
    static preparesoundresult_PREPARESOUND_UNSUPPORTED_FILE_FORMAT: number = 5;
    static preparesoundresult_PREPARESOUND_FILE_READ_ERROR: number = 4;
    static preparesoundresult_PREPARESOUND_FILE_TOO_BIG: number = 3;
    static preparesoundresult_PREPARESOUND_FILE_NOT_FOUND: number = 2;
    static preparesoundresult_PREPARESOUND_MISC_ERROR: number = 1;
    static preparesoundresult_PREPARESOUND_SUCCESS: number = 0;
    static setupkey_DISABLE_AUDIO_DEVICE_PROBING: string = '*Lib/QualityMonitor/DisableAudioDeviceProbing';
    static setupkey_BEAMFORMER_MIC_SPACING: string = '*Lib/Audio/BeamformerMicSpacing';
    static setupkey_DISABLE_DIGITAL_FAR_END_AGC: string = '*Lib/Audio/DisableDigitalFarEndAGC';
    static setupkey_DISABLE_DIGITAL_NEAR_END_AGC: string = '*Lib/Audio/DisableDigitalNearEndAGC';
    static setupkey_DISABLE_AGC: string = '*Lib/Audio/DisableAGC';
    static setupkey_DISABLE_NOISE_SUPPRESSOR: string = '*Lib/Audio/DisableNS';
    static setupkey_DISABLE_AEC: string = '*Lib/Audio/DisableAEC';
    static setupkey_DISABLED_CODECS: string = '*Lib/Audio/DisableCodecs';
    static qualitytestresult_QTR_EXCELLENT: number = 5;
    static qualitytestresult_QTR_GOOD: number = 4;
    static qualitytestresult_QTR_AVERAGE: number = 3;
    static qualitytestresult_QTR_POOR: number = 2;
    static qualitytestresult_QTR_CRITICAL: number = 1;
    static qualitytestresult_QTR_UNDEFINED: number = 0;
    static qualitytesttype_QTT_VIDEO_IN: number = 5;
    static qualitytesttype_QTT_NETWORK: number = 4;
    static qualitytesttype_QTT_CPU: number = 3;
    static qualitytesttype_QTT_VIDEO_OUT: number = 2;
    static qualitytesttype_QTT_AUDIO_OUT: number = 1;
    static qualitytesttype_QTT_AUDIO_IN: number = 0;
    static video_DEVICE_TYPE_VIDEO_DEVICE_VIRTUAL: number = 2;
    static video_DEVICE_TYPE_VIDEO_DEVICE_CAPTURE_ADAPTER: number = 1;
    static video_DEVICE_TYPE_VIDEO_DEVICE_USB_CAMERA: number = 0;
    static codec_COMPATIBILITY_CODEC_NOT_COMPATIBLE: number = 2;
    static codec_COMPATIBILITY_CODEC_NOT_COMPATIBLE_BUT_PLATFORM_IS_GVC_SUPPORTED: number = 1;
    static codec_COMPATIBILITY_CODEC_COMPATIBLE: number = 0;
    static livesession_QUALITYRATING_VERY_GOOD: number = 4;
    static livesession_QUALITYRATING_GOOD: number = 3;
    static livesession_QUALITYRATING_AVERAGE: number = 2;
    static livesession_QUALITYRATING_BAD: number = 1;
    static livesession_QUALITYRATING_VERY_BAD: number = 0;
    static leave_REASON_LIVE_PARTICIPANT_COUNT_LIMIT_REACHED: number = 131;
    static leave_REASON_LIVE_TOO_MANY_IDENTITIES: number = 130;
    static leave_REASON_LIVE_PLUGIN_INSTALL_NEEDED: number = 129;
    static leave_REASON_LIVE_EMERGENCY_CALL_DENIED: number = 128;
    static leave_REASON_LIVE_BLOCKED_BY_US: number = 127;
    static leave_REASON_LIVE_TRANSFER_INSUFFICIENT_FUNDS: number = 126;
    static leave_REASON_LIVE_TRANSFER_FAILED: number = 125;
    static leave_REASON_LIVE_ERROR: number = 124;
    static leave_REASON_LIVE_BLOCKED_BY_PRIVACY_SETTINGS: number = 123;
    static leave_REASON_LIVE_LEGACY_ERROR: number = 122;
    static leave_REASON_LIVE_PLAYBACK_ERROR: number = 121;
    static leave_REASON_LIVE_RECORDING_FAILED: number = 120;
    static leave_REASON_LIVE_UNABLE_TO_CONNECT: number = 119;
    static leave_REASON_LIVE_INTERNAL_ERROR: number = 118;
    static leave_REASON_LIVE_PSTN_MISC_ERROR: number = 117;
    static leave_REASON_LIVE_PSTN_CALL_REJECTED: number = 116;
    static leave_REASON_LIVE_NUMBER_UNAVAILABLE: number = 115;
    static leave_REASON_LIVE_PSTN_NETWORK_ERROR: number = 114;
    static leave_REASON_LIVE_PSTN_CALL_TERMINATED: number = 113;
    static leave_REASON_LIVE_PSTN_BUSY: number = 112;
    static leave_REASON_LIVE_PSTN_CALL_TIMED_OUT: number = 111;
    static leave_REASON_LIVE_PSTN_NUMBER_FORBIDDEN: number = 110;
    static leave_REASON_LIVE_PSTN_INVALID_NUMBER: number = 109;
    static leave_REASON_LIVE_PSTN_COULD_NOT_CONNECT_TO_SKYPE_PROXY: number = 108;
    static leave_REASON_LIVE_SKYPEOUT_ACCOUNT_BLOCKED: number = 107;
    static leave_REASON_LIVE_INTERNET_CONNECTION_LOST: number = 106;
    static leave_REASON_LIVE_INSUFFICIENT_FUNDS: number = 105;
    static leave_REASON_LIVE_NO_SKYPEOUT_SUBSCRIPTION: number = 104;
    static leave_REASON_LIVE_CONNECTION_DROPPED: number = 103;
    static leave_REASON_LIVE_BUSY: number = 102;
    static leave_REASON_LIVE_MANUAL: number = 101;
    static leave_REASON_LIVE_NO_ANSWER: number = 100;
    static leave_REASON_RETIRED_INTERNAL_ERROR: number = 8;
    static leave_REASON_RETIRED_CHAT_FULL: number = 7;
    static leave_REASON_RETIRED_UNSUBSCRIBE: number = 6;
    static leave_REASON_RETIRED_DECLINE_ADD: number = 5;
    static leave_REASON_RETIRED_ADDER_MUST_BE_AUTHORIZED: number = 4;
    static leave_REASON_RETIRED_ADDER_MUST_BE_FRIEND: number = 3;
    static leave_REASON_RETIRED_USER_INCAPABLE: number = 2;
    static leave_REASON_LEAVE_REASON_NONE: number = 0;
    static transfer_SENDFILE_ERROR_TRANSFER_TOO_MANY_PARALLEL: number = 3;
    static transfer_SENDFILE_ERROR_TRANSFER_OPEN_FAILED: number = 2;
    static transfer_SENDFILE_ERROR_TRANSFER_BAD_FILENAME: number = 1;
    static transfer_SENDFILE_ERROR_TRANSFER_OPEN_SUCCESS: number = 0;
    static contact_SYNC_TYPE_CONTACT_SCD: number = 0;
    static unifyresult_UNIFY_TOO_MANY_OUTLOOK: number = 4;
    static unifyresult_UNIFY_TOO_MANY_SKYPE: number = 3;
    static unifyresult_UNIFY_ALREADY_UNIFIED: number = 2;
    static unifyresult_UNIFY_INVALID_IDENTITY: number = 1;
    static unifyresult_UNIFY_OK: number = 0;
    static normalizeresult_SKYPENAME_SHORTER_THAN_6_CHARS: number = 7;
    static normalizeresult_SKYPENAME_STARTS_WITH_NONALPHA: number = 6;
    static normalizeresult_PSTN_NUMBER_HAS_INVALID_PREFIX: number = 5;
    static normalizeresult_PSTN_NUMBER_TOO_SHORT: number = 4;
    static normalizeresult_IDENTITY_CONTAINS_INVALID_CHAR: number = 3;
    static normalizeresult_IDENTITY_TOO_LONG: number = 2;
    static normalizeresult_IDENTITY_EMPTY: number = 1;
    static normalizeresult_IDENTITY_OK: number = 0;
    static identitytype_LYNC: number = 12;
    static identitytype_PASSPORT: number = 11;
    static identitytype_XMPP: number = 10;
    static identitytype_EXTERNAL: number = 9;
    static identitytype_CONFERENCE: number = 8;
    static identitytype_PSTN_UNDISCLOSED: number = 7;
    static identitytype_PSTN_FREE: number = 6;
    static identitytype_PSTN_EMERGENCY: number = 5;
    static identitytype_PSTN: number = 4;
    static identitytype_SKYPE_UNDISCLOSED: number = 3;
    static identitytype_SKYPE_MYSELF: number = 2;
    static identitytype_SKYPE: number = 1;
    static identitytype_UNRECOGNIZED: number = 0;
    static setupkey_ALLOW_INCOMING_LYNC_ID: string = '*Lib/Call/AllowIncomingLyncId';
    static setupkey_ALLOW_DEBUG_DATA_COLLECTION: string = 'Lib/Sherlock/AllowDebugDataCollection';
    static setupkey_DB_PAGE_SIZE: string = '*Lib/DbManager/PageSize';
    static setupkey_DB_STORAGE_QUOTA_KB: string = '*Lib/DbManager/StorageQuotaKb';

    private status: number = WrSkyLib.libstatus_CONSTRUCTED;

    setup: Setup = new Setup();
    account: Account = new Account();

    set_DefaultVideoDeviceHandle(value) {
        console.error('shimmed function WrSkyLib.set_DefaultVideoDeviceHandle')
    }

    static wrapCodeCheckPublic() {
        console.error('shimmed function WrSkyLib.wrapCodeCheckPublic')
    }

    registerContextsWin8(platform, templateKey, uri, ttl) {
        console.error('shimmed function WrSkyLib.registerContextsWin8')
    }

    handleCallNotification(eventType, nodeSpecificPayload, genericPayload) {
        console.error('shimmed function WrSkyLib.handleCallNotification')
    }

    handleNotification(notificationContent) {
        console.error('shimmed function WrSkyLib.handleNotification')
    }

    declareExtendedProp(objectType, columnName, propKey, valueType) {
        console.error('shimmed function WrSkyLib.declareExtendedProp', objectType, columnName, propKey, valueType)
    }

    getLibStatus() {
        return this.status;
    }

    start(block) {
        this.status = WrSkyLib.libstatus_RUNNING;
        this.dispatchEvent(new CustomEvent("libready"));
        this.dispatchEvent(new CustomEvent("partiallogin"));
    }

    getSpeakerLevel() {
        console.error('shimmed function WrSkyLib.getSpeakerLevel')
    }

    getMicLevel() {
        console.error('shimmed function WrSkyLib.getMicLevel')
    }

    getVideoDevicePath(deviceHandle) {
        console.error('shimmed function WrSkyLib.getVideoDevicePath')
    }

    getVideoDeviceHandles() {
        console.error('shimmed function WrSkyLib.getVideoDeviceHandles')
    }

    getActiveVideoDeviceHandle() {
        console.error('shimmed function WrSkyLib.getActiveVideoDeviceHandle')
    }

    getAvailableOutputDevicesAsync(handleList, nameList, productIdList) {
        console.error('shimmed function WrSkyLib.getAvailableOutputDevicesAsync')
    }

    getAvailableRecordingDevicesAsync(handleList, nameList, productIdList) {
        console.error('shimmed function WrSkyLib.getAvailableRecordingDevicesAsync')
    }

    dispose() {
        console.error('shimmed function WrSkyLib.dispose')
    }

    static debug_STRINGToString(val) {
        console.error('shimmed function WrSkyLib.debug_STRINGToString')
    }

    getDebugString(debugString) {
        console.error('shimmed function WrSkyLib.getDebugString')
    }

    static objecttypetoString(val) {
        console.error('shimmed function WrSkyLib.objecttypetoString')
    }

    findObjectByDbID(type, dbID) {
        console.error('shimmed function WrSkyLib.findObjectByDbID')
    }

    getObjectType(objectID) {
        console.error('shimmed function WrSkyLib.getObjectType')
    }

    static getInstance() {
        console.error('shimmed function WrSkyLib.getInstance')
    }

    static initPlatform() {
        return new IAsyncAction((res, rej) => { res() });
    }

    static log(subsystem, message) {
        console.log(`[${subsystem}] ${message}`)
    }

    static contentEncode(source, raw_xml) {
        console.error('shimmed function WrSkyLib.contentEncode')
    }

    getAccountByIdentity(identity) {
        console.error('shimmed function WrSkyLib.getAccountByIdentity')
    }

    getContact(objectID) {
        console.error('shimmed function WrSkyLib.getContact')
    }

    getContactByIdentity(identity) {
        console.error('shimmed function WrSkyLib.getContactByIdentity')
    }

    getConversationByConvoId(convoID) {
        console.error('shimmed function WrSkyLib.getConversationByConvoId')
    }

    getConversationByIdentity(identity) {
        console.error('shimmed function WrSkyLib.getConversationByIdentity')
    }

    getConversation(objectID) {
        console.error('shimmed function WrSkyLib.getConversation')
    }

    getConversationTable(type, properties) {
        console.error('shimmed function WrSkyLib.getConversationTable')
    }

    isMe(identity) {
        console.error('shimmed function WrSkyLib.isMe')
    }

    loginWithOAuth(partnerId, accessToken, refreshToken, savePwd, saveDataLocally) {
        console.error('shimmed function WrSkyLib.loginWithOAuth')
    }

    finishLogin() {
        this.dispatchEvent(new CustomEvent("login"));
    }

    logoutUser(clearCachedCredentials) {
        console.error('shimmed function WrSkyLib.logoutUser')
    }

    invalidateUserLogin() {
        console.error('shimmed function WrSkyLib.invalidateUserLogin')
    }

    subscribePropChange(props) {
        console.error('shimmed function WrSkyLib.subscribePropChange')
    }

    static validateIdentity(identity, isNewUser) {
        console.error('shimmed function WrSkyLib.validateIdentity')
    }

    static normalizeIdentity(identity) {
        console.error('shimmed function WrSkyLib.normalizeIdentity')
    }

    static normalizePSTNWithCountry(original, countryPrefix) {
        console.error('shimmed function WrSkyLib.normalizePSTNWithCountry')
    }

    putAuthTokens(partnerId, scopes, accessToken, expirationTime, refreshToken) {
        console.error('shimmed function WrSkyLib.putAuthTokens')
    }

    linkAccountWithPartner(partnerId, accessToken, skypename, password, reason, allowSpam, allowSms) {
        console.error('shimmed function WrSkyLib.linkAccountWithPartner')
    }

    getSkypeLinkInfo(partnerId, accessToken) {
        console.error('shimmed function WrSkyLib.getSkypeLinkInfo')
    }

    getPartnerLinkInfo(partnerId, skypename, password) {
        console.error('shimmed function WrSkyLib.getPartnerLinkInfo')
    }

    getSuggestedAccounts(partnerId, accessToken) {
        console.error('shimmed function WrSkyLib.getSuggestedAccounts')
    }

    getAccountAvatar(partnerId, accessToken, username, password, skypename) {
        console.error('shimmed function WrSkyLib.getAccountAvatar')
    }

    static service_TYPEToString(val) {
        console.error('shimmed function WrSkyLib.service_TYPEToString')
    }

    handlePushNotification(eventType, nodeSpecificNotificationPayload, genericNotificationPayload) {
        console.error('shimmed function WrSkyLib.handlePushNotification')
    }

    registerContexts(serviceType, platform, templateKey, contexts, registrationTokens, registrationTTLs) {
        console.error('shimmed function WrSkyLib.registerContexts')
    }

    unregisterContexts(contexts) {
        console.error('shimmed function WrSkyLib.unregisterContexts')
    }

    reregisterContexts() {
        console.error('shimmed function WrSkyLib.reregisterContexts')
    }

    static pushhandlingresulttoString(val) {
        console.error('shimmed function WrSkyLib.pushhandlingresulttoString')
    }

    static pnm_REGISTER_CONTEXTS_RESULTToString(val) {
        console.error('shimmed function WrSkyLib.pnm_REGISTER_CONTEXTS_RESULTToString')
    }

    static localized_STRINGToString(val) {
        console.error('shimmed function WrSkyLib.localized_STRINGToString')
    }

    setLocalizedString(localizedString, value) {
        console.error('shimmed function WrSkyLib.setLocalizedString')
    }

    getServerTime() {
        console.error('shimmed function WrSkyLib.getServerTime')
    }

    getSeamlessCapable(identity) {
        console.error('shimmed function WrSkyLib.getSeamlessCapable')
    }

    setSeamlessCapable(capable) {
        console.error('shimmed function WrSkyLib.setSeamlessCapable')
    }

    setUserActive(isActive) {
        console.error('shimmed function WrSkyLib.setUserActive')
    }

    fetchLocal(key, value) {
        console.error('shimmed function WrSkyLib.fetchLocal')
    }

    static unpack_TYPEToString(val) {
        console.error('shimmed function WrSkyLib.unpack_TYPEToString')
    }

    static unpack_RESULTToString(val) {
        console.error('shimmed function WrSkyLib.unpack_RESULTToString')
    }

    static verifyAndUnpack(sourcePath, destPath, key_id) {
        console.error('shimmed function WrSkyLib.verifyAndUnpack')
    }

    app2AppCreate(appname) {
        console.error('shimmed function WrSkyLib.app2AppCreate')
    }

    app2AppDelete(appname) {
        console.error('shimmed function WrSkyLib.app2AppDelete')
    }

    app2AppConnect(appname, skypename) {
        console.error('shimmed function WrSkyLib.app2AppConnect')
    }

    app2AppDisconnect(appname, stream) {
        console.error('shimmed function WrSkyLib.app2AppDisconnect')
    }

    app2AppWrite(appname, stream, data) {
        console.error('shimmed function WrSkyLib.app2AppWrite')
    }

    app2AppDatagram(appname, stream, data) {
        console.error('shimmed function WrSkyLib.app2AppDatagram')
    }

    app2AppRead(appname, stream, data) {
        console.error('shimmed function WrSkyLib.app2AppRead')
    }

    app2AppGetConnectableUsers(appname, users) {
        console.error('shimmed function WrSkyLib.app2AppGetConnectableUsers')
    }

    static app2APP_STREAMSToString(val) {
        console.error('shimmed function WrSkyLib.app2APP_STREAMSToString')
    }

    app2AppGetStreamsList(appname, listType, streams, receivedSizes) {
        console.error('shimmed function WrSkyLib.app2AppGetStreamsList')
    }

    getVideoMessage(objectId) {
        console.error('shimmed function WrSkyLib.getVideoMessage')
    }

    createVideoMessageWithFile(filename, title, description, result, thumbnail, type) {
        console.error('shimmed function WrSkyLib.createVideoMessageWithFile')
    }

    getVideoMessagingEntitlement(ids, values) {
        console.error('shimmed function WrSkyLib.getVideoMessagingEntitlement')
    }

    getMediaDocument(objectId) {
        console.error('shimmed function WrSkyLib.getMediaDocument')
    }

    createMediaDocument(type, mediaDocument) {
        console.error('shimmed function WrSkyLib.createMediaDocument')
    }

    getDefaultContentId(type) {
        console.error('shimmed function WrSkyLib.getDefaultContentId')
    }

    static auth_RESULTToString(val) {
        console.error('shimmed function WrSkyLib.auth_RESULTToString')
    }

    requestSSOToken() {
        console.error('shimmed function WrSkyLib.requestSSOToken')
    }

    requestWebSession() {
        console.error('shimmed function WrSkyLib.requestWebSession')
    }

    requestWebSessionWithPassword(skypename, password) {
        console.error('shimmed function WrSkyLib.requestWebSessionWithPassword')
    }

    requestSkypeToken() {
        console.error('shimmed function WrSkyLib.requestSkypeToken')
    }

    requestAccessToken(partnerId, scope, bypassCache) {
        console.error('shimmed function WrSkyLib.requestAccessToken')
    }

    static libproptoString(val) {
        console.error('shimmed function WrSkyLib.libproptoString')
    }

    setUIIntProp(key, value) {
        console.error('shimmed function WrSkyLib.setUIIntProp')
    }

    setUIStrProp(key, value) {
        console.error('shimmed function WrSkyLib.setUIStrProp')
    }

    getUIIntProp(key) {
        console.error('shimmed function WrSkyLib.getUIIntProp')
    }

    getUIStrProp(key, defaultValue) {
        console.error('shimmed function WrSkyLib.getUIStrProp')
    }

    deleteUIProp(key) {
        console.error('shimmed function WrSkyLib.deleteUIProp')
    }

    getIntLibProp(key) {
        console.error('shimmed function WrSkyLib.getIntLibProp')
    }

    getStrLibProp(key, defaultValue) {
        console.error('shimmed function WrSkyLib.getStrLibProp')
    }

    getStrLibPropInternal(lib_key, defaultValue) {
        console.error('shimmed function WrSkyLib.getStrLibPropInternal')
    }

    getTotalOnlineUserCount() {
        console.error('shimmed function WrSkyLib.getTotalOnlineUserCount')
    }

    reportStatsEvent(statsType, attributes, samplingValue) {
        console.error('shimmed function WrSkyLib.reportStatsEvent')
    }

    static upgraderesulttoString(val) {
        console.error('shimmed function WrSkyLib.upgraderesulttoString')
    }

    checkClientUpgrade() {
        console.error('shimmed function WrSkyLib.checkClientUpgrade')
    }

    changeBackgroundMode(inBackground) {
        console.error('shimmed function WrSkyLib.changeBackgroundMode')
    }

    setNetworkActivityLevel(level) {
        console.error('shimmed function WrSkyLib.setNetworkActivityLevel')
    }

    executeBackgroundTask() {
        console.error('shimmed function WrSkyLib.executeBackgroundTask')
    }

    changeOperationMode(level) {
        console.error('shimmed function WrSkyLib.changeOperationMode')
    }

    getISOLanguageInfo(languageCodeList, languageNameList) {
        console.error('shimmed function WrSkyLib.getISOLanguageInfo')
    }

    getISOCountryInfo(countryCodeList, countryNameList, countryPrefixList, countryDialExampleList) {
        console.error('shimmed function WrSkyLib.getISOCountryInfo')
    }

    getSupportedUILanguageList(uiLanguageCodeList) {
        console.error('shimmed function WrSkyLib.getSupportedUILanguageList')
    }

    getISOFormattedCurrency(amount, precision, countryCode) {
        console.error('shimmed function WrSkyLib.getISOFormattedCurrency')
    }

    getISOCountryCodebyPhoneNo(number) {
        console.error('shimmed function WrSkyLib.getISOCountryCodebyPhoneNo')
    }

    storeLocal(key, value) {
        console.error('shimmed function WrSkyLib.storeLocal')
    }

    static skypemanager_MEMBER_STATUSESToString(val) {
        console.error('shimmed function WrSkyLib.skypemanager_MEMBER_STATUSESToString')
    }

    static user_LIKENESSESToString(val) {
        console.error('shimmed function WrSkyLib.user_LIKENESSESToString')
    }

    static uiproptoString(val) {
        console.error('shimmed function WrSkyLib.uiproptoString')
    }

    static nrt_CAPABILITIESToString(val) {
        console.error('shimmed function WrSkyLib.nrt_CAPABILITIESToString')
    }

    static webgw_RESULTToString(val) {
        console.error('shimmed function WrSkyLib.webgw_RESULTToString')
    }

    sendHttpRequest(method, uri, payload, headers, userdata) {
        console.error('shimmed function WrSkyLib.sendHttpRequest')
    }

    createHttpStream(method, uri, headers, userdata) {
        console.error('shimmed function WrSkyLib.createHttpStream')
    }

    sendHttpStream(streamID, payload) {
        console.error('shimmed function WrSkyLib.sendHttpStream')
    }

    clearHttpCookies() {
        console.error('shimmed function WrSkyLib.clearHttpCookies')
    }

    getVCard(vcard) {
        console.error('shimmed function WrSkyLib.getVCard')
    }

    getVCardOwner(vcard) {
        console.error('shimmed function WrSkyLib.getVCardOwner')
    }

    importProfile(vcard) {
        console.error('shimmed function WrSkyLib.importProfile')
    }

    importBuddylist(vcard) {
        console.error('shimmed function WrSkyLib.importBuddylist')
    }

    parseVCard(vcard, dest) {
        console.error('shimmed function WrSkyLib.parseVCard')
    }

    contactToVCard(contactObjectID) {
        console.error('shimmed function WrSkyLib.contactToVCard')
    }

    vcardToContact(vcard) {
        console.error('shimmed function WrSkyLib.vcardToContact')
    }

    attachPublicAPIClient(allowFilterCommand) {
        console.error('shimmed function WrSkyLib.attachPublicAPIClient')
    }

    detachPublicAPIClient(clientID) {
        console.error('shimmed function WrSkyLib.detachPublicAPIClient')
    }

    publicAPIRequest(clientID, request) {
        console.error('shimmed function WrSkyLib.publicAPIRequest')
    }

    static content_LIST_RESULTToString(val) {
        console.error('shimmed function WrSkyLib.content_LIST_RESULTToString')
    }

    static content_LIST_CONTEXTToString(val) {
        console.error('shimmed function WrSkyLib.content_LIST_CONTEXTToString')
    }

    queryContentListing(src, clc) {
        console.error('shimmed function WrSkyLib.queryContentListing')
    }

    static livesession_END_DETAILSToString(val) {
        console.error('shimmed function WrSkyLib.livesession_END_DETAILSToString')
    }

    static policy_DISABLE_VIDEO_OPTIONSToString(val) {
        console.error('shimmed function WrSkyLib.policy_DISABLE_VIDEO_OPTIONSToString')
    }

    static accesseventtypetoString(val) {
        console.error('shimmed function WrSkyLib.accesseventtypetoString')
    }

    static sa_PAYMENT_PRODUCTToString(val) {
        console.error('shimmed function WrSkyLib.sa_PAYMENT_PRODUCTToString')
    }

    static sa_PAYMENT_CARDTYPEToString(val) {
        console.error('shimmed function WrSkyLib.sa_PAYMENT_CARDTYPEToString')
    }

    static sa_PAYMENT_SIDToString(val) {
        console.error('shimmed function WrSkyLib.sa_PAYMENT_SIDToString')
    }

    static sa_PAYMENT_IIDToString(val) {
        console.error('shimmed function WrSkyLib.sa_PAYMENT_IIDToString')
    }

    accessPaymentSubmit() {
        console.error('shimmed function WrSkyLib.accessPaymentSubmit')
    }

    accessPaymentPoll() {
        console.error('shimmed function WrSkyLib.accessPaymentPoll')
    }

    accessPaymentReset() {
        console.error('shimmed function WrSkyLib.accessPaymentReset')
    }

    accessPaymentSetString(id, value) {
        console.error('shimmed function WrSkyLib.accessPaymentSetString')
    }

    accessPaymentGetString(id) {
        console.error('shimmed function WrSkyLib.accessPaymentGetString')
    }

    accessPaymentSetInt(id, value) {
        console.error('shimmed function WrSkyLib.accessPaymentSetInt')
    }

    accessPaymentGetInt(id) {
        console.error('shimmed function WrSkyLib.accessPaymentGetInt')
    }

    static httpfe_METHODToString(val) {
        console.error('shimmed function WrSkyLib.httpfe_METHODToString')
    }

    static partner_QUERY_ERRORToString(val) {
        console.error('shimmed function WrSkyLib.partner_QUERY_ERRORToString')
    }

    partnerQueryData(qt, partner, params) {
        console.error('shimmed function WrSkyLib.partnerQueryData')
    }

    static partner_IDToString(val) {
        console.error('shimmed function WrSkyLib.partner_IDToString')
    }

    getAccount(objectId) {
        console.error('shimmed function WrSkyLib.getAccount')
    }

    getAccount_(identity, account) {
        console.error('shimmed function WrSkyLib.getAccount_')
    }

    getExistingAccounts(accountNameList) {
        console.error('shimmed function WrSkyLib.getExistingAccounts')
    }

    getDefaultAccountName() {
        console.error('shimmed function WrSkyLib.getDefaultAccountName')
    }

    static getSuggestedSkypename(fullname) {
        console.error('shimmed function WrSkyLib.getSuggestedSkypename')
    }

    static validateresulttoString(val) {
        console.error('shimmed function WrSkyLib.validateresulttoString')
    }

    static validateAvatar(value) {
        console.error('shimmed function WrSkyLib.validateAvatar')
    }

    static validateProfileString(propKey, strValue, forRegistration) {
        console.error('shimmed function WrSkyLib.validateProfileString')
    }

    static validatePassword(username, password) {
        console.error('shimmed function WrSkyLib.validatePassword')
    }

    getAccessSession(objectId) {
        console.error('shimmed function WrSkyLib.getAccessSession')
    }

    createAccessSession(session) {
        console.error('shimmed function WrSkyLib.createAccessSession')
    }

    static callerid_OPTIONS_CHANGEToString(val) {
        console.error('shimmed function WrSkyLib.callerid_OPTIONS_CHANGEToString')
    }

    static callerid_STATEToString(val) {
        console.error('shimmed function WrSkyLib.callerid_STATEToString')
    }

    setCallerIDOptions(smsID, callerID, idconfig) {
        console.error('shimmed function WrSkyLib.setCallerIDOptions')
    }

    getCallerIDOptions() {
        console.error('shimmed function WrSkyLib.getCallerIDOptions')
    }

    getTransfer(objectId) {
        console.error('shimmed function WrSkyLib.getTransfer')
    }

    contentItemGet(uri, block) {
        console.error('shimmed function WrSkyLib.contentItemGet')
    }

    contentItemDelete(Id) {
        console.error('shimmed function WrSkyLib.contentItemDelete')
    }

    contentItemGetType(Id) {
        console.error('shimmed function WrSkyLib.contentItemGetType')
    }

    contentItemGetUri(Id) {
        console.error('shimmed function WrSkyLib.contentItemGetUri')
    }

    contentItemGetBody(Id, body) {
        console.error('shimmed function WrSkyLib.contentItemGetBody')
    }

    contentItemGetMeta(Id) {
        console.error('shimmed function WrSkyLib.contentItemGetMeta')
    }

    contentItemExposingNow(Id, yes) {
        console.error('shimmed function WrSkyLib.contentItemExposingNow')
    }

    contentItemExecuted(Id) {
        console.error('shimmed function WrSkyLib.contentItemExecuted')
    }

    contentItemClosed(Id, count) {
        console.error('shimmed function WrSkyLib.contentItemClosed')
    }

    contentItemGetChildNames(Id, list) {
        console.error('shimmed function WrSkyLib.contentItemGetChildNames')
    }

    contentItemGetChildItem(Id, suburi) {
        console.error('shimmed function WrSkyLib.contentItemGetChildItem')
    }

    contentItemRunBytecode(Id) {
        console.error('shimmed function WrSkyLib.contentItemRunBytecode')
    }

    contentItemGetChildCount(Id, suburi, any) {
        console.error('shimmed function WrSkyLib.contentItemGetChildCount')
    }

    setInstallContentBundleName(filename) {
        console.error('shimmed function WrSkyLib.setInstallContentBundleName')
    }

    getAlert(objectId) {
        console.error('shimmed function WrSkyLib.getAlert')
    }

    getRecentAlerts(maxPageResults, Page, alerts) {
        console.error('shimmed function WrSkyLib.getRecentAlerts')
    }

    getRecentAlertsOfType(maxPageResults, Page, types, alerts) {
        console.error('shimmed function WrSkyLib.getRecentAlertsOfType')
    }

    getPriceQuote(objectId) {
        console.error('shimmed function WrSkyLib.getPriceQuote')
    }

    issuePriceQuote(buyer, type, description, price, precision, currency, referredObjectID, priceQuote) {
        console.error('shimmed function WrSkyLib.issuePriceQuote')
    }

    createSignedToken(target, token) {
        console.error('shimmed function WrSkyLib.createSignedToken')
    }

    static partner_QUERY_TYPEToString(val) {
        console.error('shimmed function WrSkyLib.partner_QUERY_TYPEToString')
    }

    static partner_QUERY_PARAMSToString(val) {
        console.error('shimmed function WrSkyLib.partner_QUERY_PARAMSToString')
    }

    static partner_QUERY_IDToString(val) {
        console.error('shimmed function WrSkyLib.partner_QUERY_IDToString')
    }

    static audiodevice_CAPABILITIESToString(val) {
        console.error('shimmed function WrSkyLib.audiodevice_CAPABILITIESToString')
    }

    playStart(soundid, sound, loop, useCallOutDevice) {
        console.error('shimmed function WrSkyLib.playStart')
    }

    playStartFromFile(soundid, datafile, loop, useCallOutDevice) {
        console.error('shimmed function WrSkyLib.playStartFromFile')
    }

    playStop(soundid) {
        console.error('shimmed function WrSkyLib.playStop')
    }

    startRecordingTest(recordAndPlaybackData) {
        console.error('shimmed function WrSkyLib.startRecordingTest')
    }

    stopRecordingTest() {
        console.error('shimmed function WrSkyLib.stopRecordingTest')
    }

    stopPlayDTMF() {
        console.error('shimmed function WrSkyLib.stopPlayDTMF')
    }

    getAvailableOutputDevices(handleList, nameList, productIdList) {
        console.error('shimmed function WrSkyLib.getAvailableOutputDevices')
    }

    getAvailableRecordingDevices(handleList, nameList, productIdList) {
        console.error('shimmed function WrSkyLib.getAvailableRecordingDevices')
    }

    selectSoundDevices(callInDevice, callOutDevice, waveOutDevice) {
        console.error('shimmed function WrSkyLib.selectSoundDevices')
    }

    getAudioDeviceCapabilities(deviceHandle) {
        console.error('shimmed function WrSkyLib.getAudioDeviceCapabilities')
    }

    getNrgLevels() {
        console.error('shimmed function WrSkyLib.getNrgLevels')
    }

    voiceCommand(command) {
        console.error('shimmed function WrSkyLib.voiceCommand')
    }

    getSpeakerVolume() {
        console.error('shimmed function WrSkyLib.getSpeakerVolume')
    }

    setSpeakerVolume(volume) {
        console.error('shimmed function WrSkyLib.setSpeakerVolume')
    }

    getMicVolume() {
        console.error('shimmed function WrSkyLib.getMicVolume')
    }

    setMicVolume(volume) {
        console.error('shimmed function WrSkyLib.setMicVolume')
    }

    isSpeakerMuted() {
        console.error('shimmed function WrSkyLib.isSpeakerMuted')
    }

    isMicrophoneMuted() {
        console.error('shimmed function WrSkyLib.isMicrophoneMuted')
    }

    muteSpeakers(mute) {
        console.error('shimmed function WrSkyLib.muteSpeakers')
    }

    muteMicrophone(mute) {
        console.error('shimmed function WrSkyLib.muteMicrophone')
    }

    static operating_MEDIAToString(val) {
        console.error('shimmed function WrSkyLib.operating_MEDIAToString')
    }

    setOperatingMedia(media, maxUplinkBps, maxDownlinkBps) {
        console.error('shimmed function WrSkyLib.setOperatingMedia')
    }

    static mobile_DATA_USAGE_LEVELToString(val) {
        console.error('shimmed function WrSkyLib.mobile_DATA_USAGE_LEVELToString')
    }

    setMobileDataUsageLevel(usage) {
        console.error('shimmed function WrSkyLib.setMobileDataUsageLevel')
    }

    getSms(objectId) {
        console.error('shimmed function WrSkyLib.getSms')
    }

    requestConfirmationCode(type, number, sms) {
        console.error('shimmed function WrSkyLib.requestConfirmationCode')
    }

    submitConfirmationCode(number, code, sms) {
        console.error('shimmed function WrSkyLib.submitConfirmationCode')
    }

    createOutgoingSms(sms) {
        console.error('shimmed function WrSkyLib.createOutgoingSms')
    }

    getValidatedSmsNumbers(numbers) {
        console.error('shimmed function WrSkyLib.getValidatedSmsNumbers')
    }

    getLastConfirmationNumber() {
        console.error('shimmed function WrSkyLib.getLastConfirmationNumber')
    }

    static callerid_TYPEToString(val) {
        console.error('shimmed function WrSkyLib.callerid_TYPEToString')
    }

    static callerid_IDCONFIGToString(val) {
        console.error('shimmed function WrSkyLib.callerid_IDCONFIGToString')
    }

    getVideoDeviceType(deviceName, devicePath) {
        console.error('shimmed function WrSkyLib.getVideoDeviceType')
    }

    hasVideoDeviceCapability(deviceName, devicePath, cap) {
        console.error('shimmed function WrSkyLib.hasVideoDeviceCapability')
    }

    displayVideoDeviceTuningDialog(deviceName, devicePath) {
        console.error('shimmed function WrSkyLib.displayVideoDeviceTuningDialog')
    }

    createLocalVideo(deviceHandle) {
        console.error('shimmed function WrSkyLib.createLocalVideo')
    }

    createLocalVideo2(type, deviceName, devicePath) {
        console.error('shimmed function WrSkyLib.createLocalVideo')
    }

    createPreviewVideo(deviceHandle) {
        console.error('shimmed function WrSkyLib.createPreviewVideo')
    }

    createPreviewVideo2(type, deviceName, devicePath) {
        console.error('shimmed function WrSkyLib.createPreviewVideo')
    }

    videoCommand(command) {
        console.error('shimmed function WrSkyLib.videoCommand')
    }

    static qualitytesttypetoString(val) {
        console.error('shimmed function WrSkyLib.qualitytesttypetoString')
    }

    static qualitytestresulttoString(val) {
        console.error('shimmed function WrSkyLib.qualitytestresulttoString')
    }

    startMonitoringQuality(withUser, excludeNetworkTest) {
        console.error('shimmed function WrSkyLib.startMonitoringQuality')
    }

    stopMonitoringQuality(withUser, justStop) {
        console.error('shimmed function WrSkyLib.stopMonitoringQuality')
    }

    getVoicemail(objectId) {
        console.error('shimmed function WrSkyLib.getVoicemail')
    }

    getGreeting(skypeName, greeting) {
        console.error('shimmed function WrSkyLib.getGreeting')
    }

    static preparesoundresulttoString(val) {
        console.error('shimmed function WrSkyLib.preparesoundresulttoString')
    }

    prepareSound(data, sound) {
        console.error('shimmed function WrSkyLib.prepareSound')
    }

    prepareSoundFromFile(datafile, sound) {
        console.error('shimmed function WrSkyLib.prepareSoundFromFile')
    }

    static leave_REASONToString(val) {
        console.error('shimmed function WrSkyLib.leave_REASONToString')
    }

    static livesession_QUALITYRATINGToString(val) {
        console.error('shimmed function WrSkyLib.livesession_QUALITYRATINGToString')
    }

    static codec_COMPATIBILITYToString(val) {
        console.error('shimmed function WrSkyLib.codec_COMPATIBILITYToString')
    }

    getParticipant(objectId) {
        console.error('shimmed function WrSkyLib.getParticipant')
    }

    createConference1() {
        console.error('shimmed function WrSkyLib.createConference')
    }

    createConference2(conference) {
        console.error('shimmed function WrSkyLib.createConference')
    }

    getConversationByConvoID_(convoID, conversation) {
        console.error('shimmed function WrSkyLib.getConversationByConvoID_')
    }

    getConversationByIdentity_(convoIdentity, conversation, matchPSTN) {
        console.error('shimmed function WrSkyLib.getConversationByIdentity_')
    }

    getConversationByParticipants(participantIdentities, conversation, createIfNonExisting, ignoreBookmarkedOrNamed) {
        console.error('shimmed function WrSkyLib.getConversationByParticipants')
    }

    getConversationByBlob1(joinBlob, alsoJoin) {
        console.error('shimmed function WrSkyLib.getConversationByBlob')
    }

    getConversationByBlob2(joinBlob, conversation, alsoJoin) {
        console.error('shimmed function WrSkyLib.getConversationByBlob')
    }

    getConversationByCallGUID1(callGUID) {
        console.error('shimmed function WrSkyLib.getConversationByCallGUID')
    }

    getConversationByCallGUID2(callGUID, conversation) {
        console.error('shimmed function WrSkyLib.getConversationByCallGUID')
    }

    getConversationList(conversations, type) {
        console.error('shimmed function WrSkyLib.getConversationList')
    }

    getUnconsumedConversationsCount(type) {
        console.error('shimmed function WrSkyLib.getUnconsumedConversationsCount')
    }

    joinExistingConferenceCall(hostIdentity, accessToken) {
        console.error('shimmed function WrSkyLib.joinExistingConferenceCall')
    }

    callExistingConference(participants, conversationIdentity, conversation, accessToken, callId) {
        console.error('shimmed function WrSkyLib.callExistingConference')
    }

    getConversationMessage(objectId) {
        console.error('shimmed function WrSkyLib.getConversationMessage')
    }

    getMessageByGuid(guid, message) {
        console.error('shimmed function WrSkyLib.getMessageByGuid')
    }

    getMessageList(messages, fromTimestampInc, toTimestampExc) {
        console.error('shimmed function WrSkyLib.getMessageList')
    }

    getMessageListByType(type, latestPerConvOnly, messages, fromTimestampInc, toTimestampExc) {
        console.error('shimmed function WrSkyLib.getMessageListByType')
    }

    searchMessages(text, limit) {
        console.error('shimmed function WrSkyLib.searchMessages')
    }

    hasCalled(identity) {
        console.error('shimmed function WrSkyLib.hasCalled')
    }

    clearInbox(upToTimestamp) {
        console.error('shimmed function WrSkyLib.clearInbox')
    }

    fillInbox(lookBackTimestamp, dryRun) {
        console.error('shimmed function WrSkyLib.fillInbox')
    }

    consumeAllConversations() {
        console.error('shimmed function WrSkyLib.consumeAllConversations')
    }

    deleteAllMessages() {
        console.error('shimmed function WrSkyLib.deleteAllMessages')
    }

    static contentEncode_(source, raw_xml) {
        console.error('shimmed function WrSkyLib.contentEncode_')
    }

    static contentStripXML(source) {
        console.error('shimmed function WrSkyLib.contentStripXML')
    }

    static contentGetEditable(xml_source) {
        console.error('shimmed function WrSkyLib.contentGetEditable')
    }

    static contentGetRichEditable(xml_source, preserve_tags) {
        console.error('shimmed function WrSkyLib.contentGetRichEditable')
    }

    getChatMemberCountLimit() {
        console.error('shimmed function WrSkyLib.getChatMemberCountLimit')
    }

    getVideo(objectId) {
        console.error('shimmed function WrSkyLib.getVideo')
    }

    getAvailableVideoDevices(deviceNames, devicePaths) {
        console.error('shimmed function WrSkyLib.getAvailableVideoDevices')
    }

    static video_DEVICE_TYPEToString(val) {
        console.error('shimmed function WrSkyLib.video_DEVICE_TYPEToString')
    }

    forceEasContactsSync() {
        console.error('shimmed function WrSkyLib.forceEasContactsSync')
    }

    getContactSearch(objectId) {
        console.error('shimmed function WrSkyLib.getContactSearch')
    }

    static getOptimalAgeRanges(rangeList) {
        console.error('shimmed function WrSkyLib.getOptimalAgeRanges')
    }

    createContactSearch(search) {
        console.error('shimmed function WrSkyLib.createContactSearch')
    }

    createBasicContactSearch(text, search) {
        console.error('shimmed function WrSkyLib.createBasicContactSearch')
    }

    createIdentitySearch(identity, search) {
        console.error('shimmed function WrSkyLib.createIdentitySearch')
    }

    findPromotedSCDContacts(updatesOnly) {
        console.error('shimmed function WrSkyLib.findPromotedSCDContacts')
    }

    static contact_SYNC_TYPEToString(val) {
        console.error('shimmed function WrSkyLib.contact_SYNC_TYPEToString')
    }

    static transfer_SENDFILE_ERRORToString(val) {
        console.error('shimmed function WrSkyLib.transfer_SENDFILE_ERRORToString')
    }

    setIMEI(imei) {
        console.error('shimmed function WrSkyLib.setIMEI')
    }

    setAndroidId(androidId) {
        console.error('shimmed function WrSkyLib.setAndroidId')
    }

    getContactGroup(objectId) {
        console.error('shimmed function WrSkyLib.getContactGroup')
    }

    getHardwiredContactGroup(type) {
        console.error('shimmed function WrSkyLib.getHardwiredContactGroup')
    }

    getCustomContactGroups(groups) {
        console.error('shimmed function WrSkyLib.getCustomContactGroups')
    }

    createCustomContactGroup(group) {
        console.error('shimmed function WrSkyLib.createCustomContactGroup')
    }

    getContactType(identity) {
        console.error('shimmed function WrSkyLib.getContactType')
    }

    getContact__(identity, contact) {
        console.error('shimmed function WrSkyLib.getContact__')
    }

    findContactBySpeedDial(dial, contact) {
        console.error('shimmed function WrSkyLib.findContactBySpeedDial')
    }

    findContactByPstnNumber(number, contact) {
        console.error('shimmed function WrSkyLib.findContactByPstnNumber')
    }

    findContactsByEmail(email, contacts) {
        console.error('shimmed function WrSkyLib.findContactsByEmail')
    }

    static identitytypetoString(val) {
        console.error('shimmed function WrSkyLib.identitytypetoString')
    }

    getIdentityType(identity) {
        console.error('shimmed function WrSkyLib.getIdentityType')
    }

    static normalizeresulttoString(val) {
        console.error('shimmed function WrSkyLib.normalizeresulttoString')
    }

    static identitiesMatch(identityA, identityB) {
        console.error('shimmed function WrSkyLib.identitiesMatch')
    }

    static normalizeIdentity_(original, isNewSkypeName) {
        console.error('shimmed function WrSkyLib.normalizeIdentity_')
    }

    static normalizePSTNWithCountry_(original, countryPrefix) {
        console.error('shimmed function WrSkyLib.normalizePSTNWithCountry_')
    }

    static unifyresulttoString(val) {
        console.error('shimmed function WrSkyLib.unifyresulttoString')
    }

    canUnifyContacts(contacts) {
        console.error('shimmed function WrSkyLib.canUnifyContacts')
    }

    unifyContacts(contacts) {
        console.error('shimmed function WrSkyLib.unifyContacts')
    }

    unUnifyContact(masterObjectID, servantObjectID) {
        console.error('shimmed function WrSkyLib.unUnifyContact')
    }

    getLifetimeService() {
        console.error('shimmed function WrSkyLib.getLifetimeService')
    }

    initializeLifetimeService() {
        console.error('shimmed function WrSkyLib.initializeLifetimeService')
    }
}
