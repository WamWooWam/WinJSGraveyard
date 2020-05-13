import { ShimProxyHandler } from "../../../../src/Windows.Foundation";

export class ABTestingOverridesConfiguration {
    videoSpotlightFeedUrl: string;
    videoPostRollNoTvMarketplace: number;
    videoPostRollNoMovieMarketplace: number;
    videoPostRoll: number;
    testABTests: number;
    musicUpsellBannerMessage: number;
    musicUpsellBannerAction: number;
    fileActivationPostRoll: number;
}
export class AdsConfiguration {
    videoTvAdUnitIds: string;
    videoMovieAdUnitIds: string;
    videoAdApplicationId: string;
    video2TvAdUnitIds: string;
    video2MovieFreeWithAdUnitId: string;
    video2MovieAdUnitIds: string;
    video2AdApplicationId: string;
    musicVideoAdUnitIdsUnAuth: string;
    musicVideoAdUnitIds: string;
    musicSpotlightSidebarAdUnitIds: string;
    musicPopularSidebarAdUnitIds: string;
    musicDashboardAdUnitIds: string;
    musicAudioAdUnitIdsUnAuth: string;
    musicAudioAdUnitIds: string;
    musicAdApplicationId: string;
}
export class AmsterdamConfiguration {
    videoThumbnailsEnabled: any;
    videoFileExtensions: string;
    videoContentTypes: string;
    usbEnabled: any;
    supportsMKV: any;
    sortingEnabled: any;
    photoThumbnailsEnabled: any;
    photoFileExtensions: string;
    onUsbErrorCodecRetrievalEnabled: any;
    musicThumbnailsEnabled: any;
    musicFileExtensions: string;
    musicContentTypes: string;
    minimumSetBackgroundImageSupportedBuild: number;
    minimumDlnaSupportedBuild: number;
    folderThumbnailsEnabled: any;
    filteringEnabled: any;
}
export class ConfigurationManager {

    constructor() {
        return new Proxy(this, new ShimProxyHandler());
    }

    abtestingOverrides: any = new Proxy(new ABTestingOverridesConfiguration, new ShimProxyHandler());
    ads: any = new Proxy(new AdsConfiguration, new ShimProxyHandler());
    amsterdam: any = new Proxy(new AmsterdamConfiguration, new ShimProxyHandler());
    drm: any = new Proxy(new DRMConfiguration, new ShimProxyHandler());
    fue: any = new Proxy(new FUEConfiguration, new ShimProxyHandler());
    features: any = new Proxy(new FeaturesConfiguration, new ShimProxyHandler());
    flighting: any = new Proxy(new FlightingConfiguration, new ShimProxyHandler());
    fulfillment: any = new Proxy(new FulfillmentConfiguration, new ShimProxyHandler());
    generalSettings: any = new Proxy(new GeneralSettingsConfiguration, new ShimProxyHandler());
    groveler: any = new Proxy(new GrovelerConfiguration, new ShimProxyHandler());
    mbr: any = new Proxy(new MBRConfiguration, new ShimProxyHandler());
    mdlc: any = new Proxy(new MDLCConfiguration, new ShimProxyHandler());
    marketplace: any = new Proxy(new MarketplaceConfiguration, new ShimProxyHandler());
    mediaStore: any = new Proxy(new MediaStoreConfiguration, new ShimProxyHandler());
    music: any = new Proxy(new MusicConfiguration, new ShimProxyHandler());
    playback: any = new Proxy(new PlaybackConfiguration, new ShimProxyHandler());
    queries: any = new Proxy(new QueriesConfiguration, new ShimProxyHandler());
    service: any = new Proxy(new ServiceConfiguration, new ShimProxyHandler());
    services: any = new Proxy(new ServicesConfiguration, new ShimProxyHandler());
    shell: any = new Proxy(new ShellConfiguration, new ShimProxyHandler());
    shipAsserts: any = new Proxy(new ShipAssertsConfiguration, new ShimProxyHandler());
    sync: any = new Proxy(new SyncConfiguration, new ShimProxyHandler());
    telemetry: any = new Proxy(new TelemetryConfiguration, new ShimProxyHandler());
    transfer: any = new Proxy(new TransferConfiguration, new ShimProxyHandler());
    unitTest: any = new Proxy(new UnitTestConfiguration, new ShimProxyHandler());
    video: any = new Proxy(new VideoConfiguration, new ShimProxyHandler());
}
export class DRMConfiguration {
    timeBetweenRefreshms: number;
    timeBetweenRefreshSessionsMins: number;
    syncLicenseMinHours: number;
    syncLicenseMinCount: number;
    silentDRMConfiguration: any;
    lastFullRefresh: any;
}
export class FeaturesConfiguration {
    musicSignInAvailable: string;
    musicShareToPhone: string;
    musicMarketplaceEditorial: string;
    musicMarketplace: string;
    musicFreePlayAnonymous: string;
    rottenTomatoes: string;
    musicFreePlay: string;
    musicFreeGiveAwayMarketplace: string;
    musicAudioAdsEnabled: string;
    moviesMarketplace: string;
    movieTrailersMarketplace: string;
    movieCriticRatingSort: string;
    metroGamesPurchase: string;
    metroGamesMarketplace: string;
    audioFingerprinter: string;
    metaCritic: string;
    logNetworkServiceRequests: string;
    keystoneRegionEnabled: string;
    formerMusicFreePlay: string;
    flightingEnabled: string;
    videoLiveTile: string;
    explicitMatchingEnabled: string;
    devicesEnabled: string;
    cloudCollectionV2Enabled: string;
    closedCaptionsEnabled: string;
    castAndCrew: string;
    metadataEdit: string;
    musicSubscription: string;
    tvMarketplace: string;
    xbox360GamesMarketplace: string;
    xbox360ConsoleRegions: string;
    videoWatchlist: string;
    videoSignInAvailable: string;
    videoShowMovieTrailers: string;
    fileLaunchToDashboard: string;
    videoFreeWithAds: string;
    videoFreePurchase: string;
    videoFeaturedSetsEnabled: string;
    videoAllQuerySupported: string;
    upgradeToBlue: string;
    xbox360GamesPurchase: string;
    tvLastNightQuery: string;
    tvCriticRatingSort: string;
    streamXbox360GameTrailers: string;
    streamMetroGameTrailers: string;
    storeSync: string;
    smartVJMarketplace: string;
    smartDJMarketplace: string;
    secureEDSEndpointsEnabled: string;
    musicFreePlayAnonAds: string;
    previewMovieTrailers: string;
    pinToStart: string;
    musicVideosMarketplace: string;
    musicVideosEnabled: string;
    musicVideosCollectionEnabled: string;
}
export class FlightingConfiguration {
    groupIds: string;
    experimentIds: string;
    deeplinkTunerConfigEnabled: any;
}
export class FUEConfiguration {
    showLXFUE: any;
    showFirstLaunchVideo: any;
    showFUE: any;
    settingsVersion: any;
    musicCloudContentV2FlyoutFilterShown: any;
    musicCloudContentV1CleanupDialogDismissed: any;
    musicAvailableOfflineFlyoutFilterShown: any;
    minVideoAppSupportedVersion: string;
    minVersionBlockAllAppUse: string;
    minMusicAppSupportedVersion: string = "1.0.0.0";
    freeStreamingIsGoneAnnouncementDismissed: any;
    acceptedPrivacyStatement: any;
    acceptedEula: any;
}
export class FulfillmentConfiguration {
    videoProductFilterTimeSpanForProductNotAvailableToDeviceInMinutes: number;
    videoProductFilterTimeSpanForEdsRequestFailedInMinutes: number;
    videoProductFilterTimeSpanForEdsOmittedItemInMinutes: number;
    videoProductFilterTimeSpanForDownloadOnlyInMinutes: number;
    videoOnlyFiltersRentalsWithDeviceName: any;
    videoLicensingClientTypeOverride: string;
    purchasedServiceProductSkus: string;
    purchasedCacheProductSkus: string;
    preferH264Content: any;
    maxInputVideoItemsInEdsDetailsRequest: number;
    logSuccessTelemetryDuringVideoIngestion: any;
    lastHandledIngestionRefreshSyncToken: string;
    forceVideoIngestionRefreshSyncToken: string;
    enableRentalFilteringHack: any;
}
export class GeneralSettingsConfiguration {
    isDogfoodBuild: any;
    initialRatingsDialogBuild: string;
    imageCleanupLastRun: any;
    imageCleanupIntervalTime: any;
    imageCleanupAccessTime: any;
    idleApplicationServiceTimeout: number;
    musicMatchDeferralTimeMS: number;
    forceChunkDownload: any;
    fileTransferProgressCheckTime: number;
    debugDRM: any;
    daysSinceFirstLaunchToShowRatingsDialog: number;
    databaseProductVersion: string;
    consecutiveDownloadsSucceeded: number;
    compactModeAlwaysOnTop: any;
    collectionBuildingUpsyncProgressThreshold: number;
    collectionBuildingProgressThreshold: number;
    avienabled: any;
    collectionBuildingMissingDataThesholdPercentage: number;
    collectionBuildingMDLCProgressThreshold: number;
    collectionBuildingMDLCProgressBatchSize: number;
    collectionBuildingEndDelaySec: number;
    cloudCollectionV2FirstTrackAdded: any;
    bandwidthTestTimeoutSec: number;
    totalDownloadsRequested: number;
    appLaunchesRequiredToShowRatingsDialog: number;
    appLaunchCount: number;
    appFirstLaunchDate: any;
    animationsEnabled: any;
    alwaysPromptOnPurchase: any;
    accessMediaHangTimeoutSec: number;
    collectionBuildingProgressBatchSize: number;
    isEnterpriseMachine: any;
    showDebugAssertDialogs: any;
    userResponseToRatingsDialog: number;
    useCellularData: any;
    upgradeToBlueUri: string;
    unctimeout: number;
    uncretryTimeout: number;
    totalDownloadsSucceeded: number;
    backgroundBackstopDueTimeSec: number;
    totalDownloadsQueued: number;
    totalDownloadsFailed: number;
    subServicesStartupDelaySecs: number;
    showTaskbarPlayerPrompt: any;
    showPromptOnPurchaseSetting: any;
    showPerfTrackLog: any;
    versionOfLastClose: string;
    resetRatingsDialogBuild: string;
    ratingsDialogLaunchDeferralTimeInSeconds: number;
    proxyAuthenticationEnabled: any;
    promptOnPurchaseFirstRun: any;
    productVersion: string;
    overrideIsInternetConnected: any;
    oneDriveDialogShown: any;
    musicMatchMaxDeferralTimeMS: number;
    forceChunkDownloadForWMV: any;
    minimumScoreForHCR: number;
    maxSimultaneousDownloads: number;
    maxParallelDownloadFileSizeKB: number;
    maxChunkDownloadSizeBytes: any;
    maxBackgroundSimultaneousDownloads: number;
    legacyConfigSettingsUserId: string;
}
export class GrovelerConfiguration {
    lastGrovelMusicCount: number;
    lastGrovelDate: any;
    isFirstTimeGrovel: any;
    hasMigratedToCloudCollectionV2: any;
    grovelBatchSize: number;
    fullGrovelIntervalSec: number;
    fullGrovelCompleted: any;
    fixStorageLocationsInDB: any;
    fixSortTitlesInDB: any;
    fixFuzzyMatchedTracksInDB: any;
    enabled: any;
    disableTrackDeduping: any;
    configuration: number;
    cleanUpUnistore: any;
    checkNetworkAfterResume: any;
    autoRefreshLicenseForWMA: any;
    allowDiscMedia: any;
    zmediaRevisionNumber: number;
    lastGrovelVideoCount: number;
    allowDVRMSOnMediaCenter: any;
    usePropertyPrefetch: any;
    totalImportedPlaylistCount: number;
    sendFuzzyMatchedTelemetry: any;
    scanRemovedFiles: any;
    runningSecondGrovel: any;
    ripDirectory: string;
    removedPlaceholderFiles: any;
    playlistImportCompleted: any;
    onlyUseIndexer: any;
    migrateToStrictMetadataGrouping: any;
    maxPlaylistsInCollection: number;
    maxPlaylistTitleLength: number;
    maxPlaylistItemCount: number;
    masterRatingFileDirty: any;
    masterPlaylistFileDirty: any;
    librarySync: number;
    legacyImportComplete: any;
}
export class MarketplaceConfiguration {
    marketplaceMappings: string;
    marketplaceDownloadSupported: any;
    marketplaceCulture: string;
}
export class MBRConfiguration {
    reportingPercentage: number;
    openTimeoutMs: number;
    maxMissingOrCorruptedChunks: number;
    initialBandwidthBps: number;
    excessiveBufferingTimeoutMs: number;
    excessiveBufferingPositionThresholdMs: number;
    excessiveBufferingMaxAttempts: number;
    enableMultiChannelAudio: any;
}
export class MDLCConfiguration {
    albumArtPrefetchEnabled: any;
    fileCountRecalculateIntervalHr: number;
    expirationIntervalNotFound: number;
    expirationIntervalFound: number;
    expirationIntervalError: any;
    enabled: any;
    connectToInternetForAlbumMetadata: any;
    bingIdRetrievalRequestIntervalMs: number;
    musicMatchPartialMatchThresholdBehavior: any;
    bingIdRetrievalEnabled: any;
    bingIdRetrievalBatchSize: number;
    bingIdNotFoundSearchRetryIntervalHr: number;
    bingIdFoundSearchRetryIntervalHr: number;
    artPrefetchInterval: any;
    albumsSuggestXblContractVersion: string;
    albumArtV2Enabled: any;
    firstMDLCDidWork: any;
    findAlbumInfoDurationMatchScore: number;
    findAlbumInfoAlbumWinningScoreThreshold: number;
    fingerprintingMaxParallelizableTasks: number;
    fingerprintRetryIntervalMinutes: number;
    findAlbumInfoUpdateTrackMetadataStateEnabled: any;
    findAlbumInfoRequestIntervalMs: number;
    findAlbumInfoPartiallyMatchingTrackScore: number;
    findAlbumInfoNonMatchingTrackScore: number;
    matchTracksXblContractVersion: string;
    findAlbumInfoNonMatchingAlbumScore: number;
    findAlbumInfoFuzzyStringMatchingDelimiters: string;
    findAlbumInfoFuzzyStringMatchThresholdPercentage: number;
    findAlbumInfoFuzzyMatchingTrackScore: number;
    findAlbumInfoExplicitAlbumScore: number;
    findAlbumInfoExactMatchingTrackScore: number;
    findAlbumInfoEnabled: any;
    findAlbumInfoDurationMaxDifferenceMs: number;
    firstMDLCFinished: any;
    metadataLookup_FAIAttempt: number;
    metadataLookup_ETMSuccess: number;
    metadataLookup_ETMAttempt: number;
    metadataLookup_EDSDetailsSuccess: number;
    metadataLookup_EDSDetailsAttempt: number;
    metadataLookup_AMGSuccess: number;
    metadataLookup_AMGAttempt: number;
    maximumTracksInMatchRequest: number;
    findAlbumInfoNonMatchingDurationScore: number;
    logWMISRequests: any;
    libraryCharacteristicsIntervalHr: number;
    lastTimeFileCountsRecalculated: any;
    lastTimeCollectionCharacteristicsCalculated: any;
    lastArtPrefetchDate: any;
    firstMDLCTracksComplete: number;
    metadataLookup_FAISuccess: number;
    sendTrackTitleEvenIfEmptyInFile: any;
    firstMDLCPercentageComplete: number;
    radioCollectionSize: number;
    preferExplicitMatching: any;
    performWMISRequestDelay: any;
    performWMISInNonMarketplace: any;
    musicVideosRefreshIntervalMin: number;
    musicMatchRequestTimeoutMs: number;
    musicMatchPartialMatchThresholdPercent: number;
    bingIdRetrievalOfTracksEnabled: any;
    minimumWorkPeriodBeforeSync: number;
    minimumWorkPeriodBeforeGrovel: number;
    metadataRetrievalRequestIntervalMs: number;
    metadataLookup_WMIDSuccess: number;
    metadataLookup_WMIDAttempt: number;
    metadataLookup_TOCSuccess: number;
    metadataLookup_TOCAttempt: number;
}
export class MediaStoreConfiguration {
    writeOutMetadata: any;
    overwriteAllMetadata: any;
    maxTrackDurationDeltaMS: number;
    lastOpenedDatabaseUserId: string;
    executeMediaRightTableCleanup: any;
    enableFuzzyMatching: any;
    dbMigrationProgress: number;
    currentDbSchemaVersion: number;
    bypassDbSchemaVersionCheck: any;
}
export class MusicConfiguration {
    monthlyFreeLimitExceeded: number;
    freeTrialCompleted: number;
    freePlayAnnounce: any;
    freeIndividualTrackAllowance: number;
    firstFreeStringsLaunch: any;
    fpspsli: number;
    fpaisli: number;
    exploreHubRefreshTime: number;
    ertMin: string;
    disableArtistBioLinks: any;
    defaultPivotIndex: number;
    backgroundAudioEnabled: any;
    anonymousLimitReachedVideoShown: any;
    anonymousLimitReached: any;
    allowArtistGrid: any;
    welcomeAcknowledged: any;
    monthlyFreeMinutesAllowance: number;
    aas: string;
    vas: string;
    useStickyPivots: any;
    useDXDashboard: any;
    trackFreeLimitsResetToken: string;
    totalVideoAdImpressions: number;
    totalUnauthenticatedTracksUsed: number;
    totalUnauthenticatedTrackAllowance: number;
    totalAudioAdImpressions: number;
    subscriptionFolderName: string;
    showWelcomeDialog: any;
    radioStringLocales: string;
    purchaseSubfolderName: string;
    pageLoadTimeUntilSpinner: number;
    nextMonthlyFreeLimitResetDate: string;
    musicPassDownloadEnabled: any;
}
export class PlaybackConfiguration {
    leqenabledForVideo: any;
    leqenabledForAudio: any;
    h264StreamingSendSamplesAfterDownloadCompletes: any;
    h264StreamingHealthyBufferPercentage: number;
    h264StreamingDownloadBufferSizeSecs: number;
    getPreferredStreamRetryDelayMS: number;
    modeShuffle: any;
    forceDeinterlaceMode: number;
    forceApproximateSeeking: any;
    fastStartForceKIDMismatch: any;
    fastStartForceAudioFormatMismatch: any;
    fsdkcloseReaderThresholdMs: number;
    enableVideoQualitySelector: any;
    enableVideo2SmoothStreamingTelemetry: any;
    allowApproximateSeeking: any;
    enableVideo2SmoothFastForwardRewind: any;
    enableMusicVisualization: any;
    enableLRC: any;
    dynamicRangeControl: number;
    dumpErrorInfo: any;
    disableMediaQueuing: any;
    verifyRightsDelayMS: number;
    dxvamaximumFPS: number;
    cdplayJitterCorrect: any;
    approximateSeekDuration: number;
    approximateSeekBitrate: number;
    allowLRCSubnetTransport: any;
    allowApproximateSeekingOnShinyDiscOnly: any;
    enableVideo2SmoothFastForwardRewindForH264: any;
    mcplayerAdapterSeekBackDeltaHNS: any;
    previewOnly: any;
    musicMuteState: any;
    xmediaEnvironment: string;
    videoRatingValues: string;
    videoRatingAvailable: string;
    videoPlaybackParentalRatingsListing: string;
    video2SmoothFastForwardRewindMaxRate: number;
    defaultStartBitrate: number;
    useTMFProdEnv: any;
    streamingPrerollMS: number;
    showTotalTime: any;
    showNowPlayingList: any;
    showNowPlayingClipAnimations: any;
    respectConstrainedMode: any;
    musicVolumeValue: number;
    offlineNetworkRequestDelay: number;
    notifyIncludeVideos: any;
    notifyIncludePodcasts: any;
    notifyIMClient: any;
    music2VolumeValue: number;
    music2MaxNowPlayingItemCount: number;
    getPreferredStreamRetries: number;
    modeLoop: any;
    maxWidthConstrained: number;
    maxHeightConstrained: number;
    maxBitrateConstrained: number;
    mp4DropFramesIfLateByInMilliseconds: number;
    mcplayerAdapterSeekForwardDeltaHNS: any;
}
export class QueriesConfiguration {
    showSongsWithNoRights: any;
    serviceCachingOverride: number;
    pageSize: number;
    dbQueryRefreshEnabled: any;
    dbQueryCachingEnabled: any;
    computeOneDriveFlags: any;
}
export class ServiceConfiguration {
    commercePaymentOptionsEndpoint: string;
    commerceEndpoint: string;
    commerceContactPreferencesEndpoint: string;
    commerceContactInfoEndpoint: string;
    commerceBillingHistoryEndpoint: string;
    commerceXdlcInventoryRelyingPartyEndpoint: string;
    cloudCollectionV2Endpoint: string;
    cloudCollectionRelyingPartyEndpoint: string;
    cloudCollectionPlaylistEndpoint: string;
    cloudCollectionEndpoint: string;
    cleanedUpDatabase: any;
    videoAppPostRollCreditsSuffix: string;
    ctppassportEndpoint: string;
    ctpauthEndpoint: string;
    blockVideoRentalsDuringGrovel: any;
    blockPurchaseOnServiceFailure: any;
    bingAutoSuggestEndpoint: string;
    edsrelyingPartyEndpoint: string;
    autoRefreshQueryFallback: number;
    authTransferEndpoint: string;
    alwaysShowUpgradeNotification: any;
    accountsTroubleshooterRelyingPartyEndpoint: string;
    accountsTroubleshooterEndpoint: string;
    maxInventoryFilterIds: number;
    esrelyingPartyEndpoint: string;
    configLastDownload: any;
    edsserviceAuthNoCultureEndpoint: string;
    edsserviceAuthEndpoint: string;
    edsserviceAnonNoCultureEndpoint: string;
    edsserviceAnonEndpoint: string;
    edssearchEndpoint: string;
    bigCatEndpoint: string;
    downloadQoSFrequency: number;
    defaultTargetDeviceTypeNative: string;
    defaultTargetDeviceType: string;
    defaultHeaderDeviceTypeNative: string;
    environmentName: string;
    eslistServiceEndpoint: string;
    configDownloadPeriod: number;
    configDownloadCheckTimer: number;
    commerceXdlcLicensingRelyingPartyEndpoint: string;
    commerceXdlcLicensingEndpoint: string;
    commerceBaseEndpoint: string;
    commerceXdlcInventoryEndpoint: string;
    commerceV3Endpoint: string;
    commerceV2Endpoint: string;
    commercePurchaseRelyingPartyEndpoint: string;
    commercePurchaseEndpoint: string;
    accountsAuthEndpoint: string;
    minVersionOnlyAllowLocalUse: string;
    lastSignedInUserAccountLocale: string;
    lastSignInAccountRegion: string;
    imageCatalogEndpoint: string;
    lastSignedInUserSignInName: string;
    graceNoteEndpoint: string;
    getAlbumDetailsByAlbumIdEndpoint: string;
    gamesCatalogNoCultureEndpoint: string;
    gamesCatalogEndpoint: string;
    flightAssignmentEndpoint: string;
    feedbackEndpoint: string;
    defaultHeaderDeviceType: string;
    echoNestApiKey: string;
    enableVideoZestSignIn: any;
    enableTimeTravel: any;
    enableSecureAuth: any;
    enableNativeSignIn: any;
    microsoftBillingEndpoint: string;
    enableFreeJustPlays: any;
    echoNestTextExtractMaxSize: number;
    echoNestTextExtractMaxChunks: number;
    echoNestDeveloperApiEndpoint: string;
    entitlementsCollectionsEndpoint: string;
    purchaseHistoryReattemptAfterFailureInSeconds: number;
    mediaDeliveryV2Endpoint: string;
    minVersionAllowSignInButNag: string;
    minSystemDiskSpaceBuffer: any;
    minMusicSignInSupportedVersion: string;
    minMusicServiceSupportedVersion: string = "1.0.0.0";
    enableMusicZestSignIn: any;
    mediaUsageRelyingPartyEndpoint: string;
    mediaUsageEndpoint: string;
    mediaDiscoveryEndpoint: string;
    mediaDeliveryV2RelyingPartyEndpoint: string;
    lastSignedInUserCid: string;
    mediaDeliveryV1RelyingPartyEndpoint: string;
    cdfXboxLiveDotComEndpoint: string;
    marketplaceLicensingEndpoint: string;
    localCurrencyFilters: string;
    liveTileEndpoint: string;
    lastSignedInUserXuid: string;
    lastSignedInUserSubscription: any;
    graceNoteSupportedLanguageStringMap: string;
    lastSignedInUserParentControl: any;
    lastSignedInUserMembership: string;
    lastSignedInUserGuid: string;
    lastSignedInUserGamerTag: string;
    minVideoServiceSupportedVersion: string;
    minVideoSignInSupportedVersion: string;
    purchaseHistoryFrequencyInSeconds: number;
    purchaseHD: any;
    purchaseFlowEndpoint: string;
    readBuyerUXEndpoint: string;
    pastPurchaseData: string;
    passportTicketEndpoint: string;
    passportEnvironment: string;
    passportEndpoint: string;
    pcmarketplaceEndpoint: string;
    nookStoreEndpoint: string;
    xboxLiveEndpoint: string;
    purchaseHistoryMinimumIncrementInSeconds: number;
    musicPassSignupPageEndpoint: string;
    musicMatchRequestsEndpoint: string;
    musicMatchRelyingPartyEndpoint: string;
    musicImageServiceEndpoint: string;
    sandboxId: string;
    musicAssetRequestsEndpoint: string;
    musicAppSpotlightVersion: string;
    modernWebBlendHeight: string;
    modernPurchaseEndpoint: string;
    nookGpbEndpoint: string;
    lastSignedInUserExplicitPrivilege: any;
    useRichPresenceService: any;
    storeChannelsEndpoint: string;
    skipDrmDuringRightsManagement: any;
    signInNetworkErrorRetryCount: number;
    signInAtStartupUser: string;
    musicAuthEndpoint: string;
    rootLicenseFirstRefreshDate: string;
    rootLicenseAcquired: any;
    rootCatalogEndpoint: string;
    richPresenceEndpoint: string;
    xboxSupportEndpoint: string;
    refreshSubscriptionLicenseDuration: number;
    refreshPCLicenseResult: number;
    refreshDeviceLicenseResult: number;
    recommendationsMaxTrackCount: number;
    readPurchaseEndpoint: string;
    readCommerceServiceEndpoint: string;
    readBuyerUXTOUEndpoint: string;
    postrollCreditsEndpoint: string;
    readAccountMergeEndpoint: string;
    ratingsRelyingPartyEndpoint: string;
    ratingsEndpoint: string;
    purchaseHistoryRentalWindowInDays: number;
    subscriptionProductId: string;
    commercePrivacyEndpoint: string;
    videoAppMovieHubSuffix: string;
    videoAppLiveTileSuffix: string;
    videoAppFlexHubSuffix: string;
    wmisendpointsEndpoint: string;
    userTokenAuthRequestEndpoint: string;
    userProfileEndpoint: string;
    userEngagementUrlEnd: string;
    userEngagementServiceEndpoint: string;
    useZuneCatalog: any;
    useUserEngagementService: any;
    useTestExpirationService: any;
    targetedProgrammingArchitecture: string;
    useLandingPageForMusicPassSignup: any;
    useEntCommonSignInRequests: any;
    uxservicesRelyingPartyEndpoint: string;
    tunersEndpoint: string;
    xblEnvironment: string;
    timeTravelStartDate: string;
    timeTravel: string;
    targetedProgrammingClientVersion: string;
    targetedProgrammingClientOs: string;
    reportUsageDataDuration: number;
    videoAppSpotlightSuffix: string;
    xboxLiveSSLEndpoint: string;
    xboxMusicEndpoint: string;
    xboxLiveDataRelyingPartyEndpoint: string;
    xboxLiveDataEndpoint: string;
    xblRelyingPartyEndpoint: string;
    tunerInfoWindowsMachineId: string;
    xtokenTargetEndpoint: string;
    xtokenAuthRequestEndpoint: string;
    xstsauthPassportEndpoint: string;
    xstsauthEndpoint: string;
    videoAppTvHubSuffix: string;
    nookProxyEndpoint: string;
    xboxEndpoint: string;
    xblauthEndpoint: string;
    winPhoneXboxDotComEndpoint: string;
    wmisredirEndpoint: string;
    wmispartner: string;
    wmisimageEndpoint: string;
    userTokenTargetEndpoint: string;
    videoDeliveryRelyingPartyEndpoint: string;
    videoDeliveryEndpoint: string;
    videoAppTvOnLastNightHubSuffix: string;
    submitAddFeedbackEndpoint: string;
}
export class ServicesConfiguration {
    introBarkerShown: any;
}
export class ShellConfiguration {
    showApplicationPivot: any;
    retailExperience: any;
    randomAccessCacheLifespanMS: number;
    previousSoftBlockVersion: string;
    preventSelectionManagerSettingSaves: any;
    notificationVersion: number;
    musicDeviceView: number;
    showRemoveInPreferences: any;
    musicCollectionView: number;
    music2DashboardRefreshTimer: number;
    mixIdleTimeoutMS: number;
    mixFixedRandom: any;
    loadClassicApp: any;
    lastUsedAppNavigationMonikerData: string;
    lastUpdateCheck: any;
    applyBackgroundOnAccountCreation: any;
    lastClientCulture: string;
    initializationSequence: any;
    ignoreLowPriorityAsserts: boolean = false;
    gamesDashboardRefreshTimer: number;
    enableWindowSnap: any;
    enableWebHostResizeMessage: any;
    dragAndDropEnabled: any;
    video2DashboardRefreshTimer: number;
    defaultLibraryChunkSize: number;
    cloudMatching: number;
    backgroundImage: string;
    backgroundColor: number;
    backgroundBackStackTrimmingDelay: number;
    attachLargeObjectToUnloadedControl: any;
    attachCookieToRemovedDomElements: any;
    lastMarketplaceCulture: string;
    showAppsCollectionNotification: any;
    topBarColor: number;
    whatsNewShownForRelease: string;
    whatsNewReleaseName: string;
    whatsNewNonLaunchCountData: string;
    webBlendResponseTimeoutMS: number;
    webBlendLoadTimeoutMS: number;
    videoDashboardRefreshTimer: number;
    videoCollectionView: number;
    dontPendControlUnloadCleanup: any;
    useUserEngagementService: any;
    useStickyPivots: any;
    useEDSForSearch: any;
    uirefresh: any;
    topBarSelectedHoveredColor: number;
    topBarSelectedColor: number;
    topBarHoveredColor: number;
    whatsNewStringIdsForMusic: string;
    suppressWhatsNewShownForRelease: any;
    startupPage: string;
    sounds: any;
    showWhatsNew: any;
    showTVPivot: any;
    showSongInfoInWindowTitle: any;
    musicDashboardRefreshTimer: number;
    showPreviewBranding: any;
    showPlayInfoInTaskbar: any;
    showNowPlayingBackgroundOnIdleTimeout: number;
    showMoviesPivot: any;
    showContentTypes: any;
    showAppsForZuneHDOnlyHeader: any;
    showAppsForWindowsPhoneOnlyHeader: any;
}
export class ShipAssertsConfiguration {
    updateFrequency: number;
    managedAssertsBreakInNative: any;
    lastPrompt: any;
    lastConfigDownload: any;
    disableRemoteTraceCollection: number;
    defaultWaitDays: number;
    defaultExpirationDays: number;
    deactivateLogging: any;
    configSerialNumber: number;
    configEndpoint: string;
    captureDumpTimeOutSec: number;
}
export class SyncConfiguration {
    latestSyncReason: number;
    lastSyncSessionState: any;
    keepCloudCollectionOffline: any;
    initialSyncCompleteSyncTypes: number;
    fullSyncStartTick: any;
    fullSync: any;
    enableVideoBookmarkSync: any;
    currentSyncRunStart: any;
    cloudMinSyncIntervalMS: number;
    cloudCollectionV2DeduplicationStrategyUI: any;
    cloudCollectionV2DeduplicationStrategyShadowCopy: number;
    cloudCollectionV2DeduplicationStrategy: number;
    cloudCollectionOfflineFolderName: string;
    cloudCollectionEnabled: any;
    backgroundLibrarySyncMaxBatchSize: number;
    videoSafetySyncIntervalInSeconds: number;
    librarySyncMaxBatchSize: number;
    accountMergeHandled: any;
    videoLibrarySyncMaxDeferralTimeMS: number;
    videoLibrarySyncDeferralTimeMS: number;
    videoBookmarkChangesWereEverTracked: any;
    tdsyncToken: string;
    syncMaxDeferralTimeMS: number;
    syncDeferralTimeMS: number;
    syncBlockedItems: any;
    skipAppModeCheck: any;
    readingNextSafetySyncTime: any;
    readingAlwaysAssumeSyncNotificationReceived: any;
    prefetchSyncBatch: any;
    phonePollIntervalSeconds: number;
    musicLibrarySyncMaxDeferralTimeMS: number;
    musicLibrarySyncDeferralTimeMS: number;
    maxTracksInCollection: number;
}
export class TelemetryConfiguration {
    musicPlaybackUnsnapped: number;
    musicPlaybackSnapped: number;
    musicPlaybackBackground: number;
    maxTelemetryEventGeneration: number;
    keystoneSendInterval: number;
    sendAllEventsImmediately: any;
    keystoneProvisioningServer: string;
    keystoneMaxBatchSizeInChars: number;
    keystoneMaxBackOffMs: number;
    keystoneHeartbeatInterval: number;
    keystoneEnabled: any;
    appStateHeartbeatInterval: any;
    keystoneDropHTTPContentTypes: string;
    keystoneDropEvents: string;
    immediateEventIds: string;
    flightNumber: number;
    flightId: string;
    umsenabled: any;
    enabled: any;
    cosmosSendInterval: number;
    cosmosOfflineCacheSize: number;
    cosmosMaxBatchSizeInChars: number;
    cosmosBackOffTimeMs: number;
    keystoneDropHTTPHostNames: string;
    notSnapped: number;
    submitIdSignedIn: string;
    videoPlaybackUnsnapped: number;
    videoPlaybackSnapped: number;
    videoPlaybackBackground: number;
    userTimeEventTimeout: number;
    umsisTestScenario: any;
    eventIdsToDrop: string;
    umsbatchSize: number;
    timeSpent: number;
    submitTelemetryEventFailed: any;
    submitSequenceNumberSignedIn: number;
    submitSequenceNumberAnonymous: number;
    visitorId: string;
    submitIdAnonymous: string;
    snappedMode: number;
    shipAssertParamIdsToDrop: string;
    sessionGuid: string;
    keystoneSamplingPercentage: any;
    selectivelyEnabledComponents: string;
    purchaseHistoryItemProcessTotalCount: any;
    purchaseHistoryItemProcessErrorCount: any;
    previousSessionGuid: string;
    persistTelemetryEventFailed: any;
}
export class TransferConfiguration {
    userEnabled: any;
    transferState: number;
}
export class UnitTestConfiguration {
    myStringValue: string;
    myIntValue: number;
    myInt64Value: any;
    myDoubleValue: any;
    myDateValue: any;
    myBoolValue: any;
}
export class VideoConfiguration {
    interactiveTVDeepLinkUrls: string;
    interactiveMovieMediaIDs: string;
    interactiveMovieDeepLinkUrls: string;
    interactiveAppTextIds: number;
    epgSecondaryColorR: number;
    lastNightOnTVTuesday: string;
    epgSecondaryColorB: number;
    epgSecondaryColorA: number;
    epgPrimaryColorR: number;
    epgPrimaryColorG: number;
    epgPrimaryColorB: number;
    epgPrimaryColorA: number;
    epgMaxItemsPerChannel: number;
    epgBackgroundTaskTimeTriggerInMinutes: number;
    actorSearchEnabled: any;
    downloadCopyFileTransferRate: number;
    defaultPivotIndex: number;
    customerRatingSort: any;
    contentRestrictionMaxEmptyFeaturedItems: number;
    actorSearchSlot8EditValue: number;
    supportsGraceNote: any;
    actorSearchSlot2EditValue: number;
    actorSearchSlot17EditValue: number;
    actorSearchSlot14EditValue: number;
    actorSearchSlot11EditValue: number;
    actorSearchSlot0EditValue: number;
    enablePresaleAndBundles: any;
    interactiveTVMediaIDs: string;
    requireGoldForInteractive: any;
    videoPostRollResetDate: any;
    videoPlaySeasonDeepLinkEnabled: any;
    videoLXDefaultToClassic: any;
    videoLXAutoResumePersonalVideos: any;
    videoDownloadQualityDialogUsesSizes: any;
    actorSearchSlot5EditValue: number;
    supportsEditorialTVEpisodes: any;
    showWelcomeDialog: any;
    showVideoPostRollMax: number;
    showVideoPostRollCount: number;
    showDownloadCopyingHelpLink: any;
    videoPostRollResetInterval: number;
    postRollPurchasesEnabled: any;
    postRollMinDurationForShortEpisodes: number;
    postRollEnabled: any;
    postRollCreditsServiceEnabled: any;
    postRollCreditsGapInSeconds: number;
    postRollCountdownTimeInSeconds: number;
    offerIdsVideoFreeWithAds: string;
    lastNightOnTVWednesday: string;
    epgSecondaryColorG: number;
    lastNightOnTVThursday: string;
    lastNightOnTVSunday: string;
    lastNightOnTVSaturday: string;
    lastNightOnTVMonday: string;
    lastNightOnTVFriday: string;
}