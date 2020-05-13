export namespace Entertainment {
    export namespace Ads {
        export enum AdType {
            audio,
            video,
            adTypeCount,
        }
    }
    export namespace Application {
        export enum AppMode {
            music,
            music2,
            music3,
            video,
            video2,
            video3,
            test,
            amsterdam,
        }
        export enum ExecMode {
            background,
            backgroundResourceIntensive,
            foreground,
        }
    }
    export namespace ClosedCaptions {
        export enum ETTMLProcessorProgress {
            verifyingFile,
            verificationFailure,
            loadingXML,
            timeAnalysis,
            styleComputation,
            readyToRender,
        }
    }
    export namespace Common {
        export namespace Service {
            export namespace Requests {
                export namespace Mds {
                    export namespace Video {
                        export enum Encoding {
                            _Invalid = -1,
                            h264,
                            vc1,
                            _Count,
                        }
                        export enum IntendedUse {
                            _Invalid = -1,
                            stream,
                            download,
                            preview,
                            _Count,
                        }
                        export enum Resolution {
                            _Invalid = -1,
                            sd480p,
                            hd720p,
                            hd1080p,
                            _Count,
                        }
                        export enum SubtitleType {
                            _Invalid = -1,
                            closedCaption,
                            fullSubtitle,
                            forcedSubtitle,
                            _Count,
                        }
                    }
                }
            }
        }
    }
    export namespace FeatureEnablement {
        export enum FeatureItem {
            featureStart,
            musicSignInAvailable,
            videoSignInAvailable,
            storeSync,
            xbox360ConsoleRegions,
            xbox360GamesMarketplace,
            xbox360GamesPurchase,
            metroGamesMarketplace,
            metroGamesPurchase,
            musicVideosMarketplace,
            tvMarketplace,
            tvLastNightQuery,
            movieTrailersMarketplace,
            previewMovieTrailers,
            moviesMarketplace,
            musicMarketplace,
            musicMarketplaceEditorial,
            streamXbox360GameTrailers,
            streamMetroGameTrailers,
            smartDJMarketplace,
            smartVJMarketplace,
            musicSubscription,
            musicFreeGiveAwayMarketplace,
            musicFreePlay,
            formerMusicFreePlay,
            videoAllQuerySupported,
            closedCaptionsEnabled,
            secureEDSEndpointsEnabled,
            explicitMatchingEnabled,
            videoShowMovieTrailers,
            logNetworkServiceRequests,
            metaCritic,
            rottenTomatoes,
            movieCriticRatingSort,
            tvCriticRatingSort,
            castAndCrew,
            musicShareToPhone,
            videoFreePurchase,
            audioFingerprinter,
            musicFreePlayAnonymous,
            musicFreePlayAnonAds,
            fileLaunchToDashboard,
            pinToStart,
            upgradeToBlue,
            metadataEdit,
            videoFreeWithAds,
            videoLiveTile,
            cloudCollectionV2Enabled,
            devicesEnabled,
            videoFeaturedSetsEnabled,
            musicVideosEnabled,
            musicVideosCollectionEnabled,
            musicAudioAdsEnabled,
            cloudCollectionInterface,
            videoWatchlist,
            flightingEnabled,
            keystoneRegionEnabled,
            featureCount,
        }
    }
    export enum FileTransferRequestType {
        invalid,
        marketPlace,
        genericFile,
    }
    export enum FileTransferStatus {
        notStarted,
        running,
        paused,
        pausedCostedNetwork,
        pausedNoNetwork,
        completed,
        canceled,
        error,
        pending,
        copying,
    }
    export enum ImageCacheType {
        undefinedImageCacheType,
        permanent,
        temporary,
    }
    export enum ImageIdType {
        undefinedImageIdType,
        movie,
        artist,
        album,
        track,
        musicVideo,
        movieTrailer,
        playlist,
        podcast,
        network,
        series,
        episode,
        application,
        season,
        parentalRating,
        social,
        gamer,
        image,
        studio,
        xboxGame,
        url,
    }
    export enum ImageNamespace {
        music,
        video,
    }
    export enum ImageResizeMode {
        crop,
        scale,
        letterbox,
    }
    export enum ImageSourceFilterFlag {
        none,
        editorial,
        generated,
        label = 4,
        external = 8,
        userGeneratedContent = 16,
    }
    export namespace Marketplace {
        export enum ContentType {
            unknownContentType = -1,
            track,
            video,
        }
        export enum DownloadStyle {
            unknownDownloadStyle = -1,
            immediate,
            persistedAbort,
            none,
        }
        export enum MarketplaceMediaFormat {
            unknownMediaFormat = -1,
            mp3,
            wma,
            wmvHD,
            wmvSD,
            wmvXD,
            app,
        }
        export enum MarketplaceMediaRights {
            unknownMediaRight = -1,
            preview,
            subscriptionStream,
            subscriptionDownload,
            purchase,
            albumPurchase,
            subscriptionFreePurchase,
            sync,
            rental,
            purchaseStream,
            rentalStream,
            previewStream,
            trialPurchase,
            seasonPurchase,
            seasonPurchaseStream,
            freeStream,
            download,
        }
        export enum VideoEncoding {
            unknown = -1,
            vc1,
            h264,
        }
    }
    export enum NetworkUsage {
        undefinedNetworkUsage,
        normal,
        noNetworkRequestsAllowed,
    }
    export namespace Platform {
        export enum AcquisitionContext {
            collection = 1500,
            store,
            smartDJ,
            explorerFile,
            playTo,
        }
        export enum AcquisitionContextType {
            album = 1400,
            playlist,
            artist,
            track,
            playAll,
            genre,
            musicVideo,
            video,
            tvseries,
        }
        export enum CollectionBuildingError {
            errorNone,
            errorMissingMetadata,
            errorSyncError,
        }
        export enum CollectionBuildingSource {
            local,
            cloud,
        }
        export enum FieldMask {
            empty_BIT_MASK,
            artist_BIT_MASK,
            sort_ARTIST_BIT_MASK,
            title_BIT_MASK = 4,
            sort_TITLE_BIT_MASK = 8,
            genre_BIT_MASK = 16,
            release_DATE_BIT_MASK = 32,
            track_NUMBER_BIT_MASK = 64,
            disc_NUMBER_BIT_MASK = 128,
            actionable_MEDIAID_BIT_MASK = 256,
            track_MEDIAID_BIT_MASK = 512,
            track_BINGID_BIT_MASK = 1024,
            album_MEDIAID_BIT_MASK = 2048,
            album_BINGID_BIT_MASK = 4096,
            artist_MEDIAID_BIT_MASK = 8192,
            artist_BINGID_BIT_MASK = 16384,
            unique_FILEID_BIT_MASK = 32768,
            unblock_FROM_CLOUD_BIT_MASK = 65536,
            image_URL_BIT_MASK = 131072,
            track_COUNT_BIT_MASK = 524288,
            can_SMARTDJ_BIT_MASK = 1048576,
            label_BIT_MASK = 2097152,
            tracks_BIT_MASK = 4194304,
            artist_IMAGE_URL_BIT_MASK = 8388608,
            can_SMARTVJ_BIT_MASK = 16777216,
        }
        export enum FileUrlType {
            none,
            localFileUrl,
            serviceFileUrl,
            marketPlaceFileUrl,
            remoteMachineFileUrl,
        }
        export namespace Logging {
            export enum LoggingLevel {
                error,
                shipAssert,
                assert,
                telemetryClick,
                telemetryImpression,
                telemetry,
                exception,
                warning,
                info,
                bugHunting,
            }
            export enum TelemetryAuthMethod {
                dontCare,
                unauthenticated,
            }
            export enum TelemetryListener {
                etw,
                cosmos,
                mediaUsage,
                keystone,
            }
        }
        export enum MediaAvailability {
            undefined = 800,
            available,
            availableOffline,
            availableFromCloud,
            availableFromCloudDriveOnly,
            availableFromCloudOnly,
            availableOnRemovableDrive,
            availableOnInternalDrive,
            thisDeviceOnly,
            oneDrive,
            musicPass,
            purchased,
        }
        export enum MediaStorageLocation {
            internalDrive = 1600,
            removableDrive,
        }
        export enum PlaylistType {
            static,
            nowPlaying = 7,
            watchlist = 10,
            notCloudSynced,
        }
        export enum ProtectionState {
            unknown = 100,
            unprotected,
            protected,
        }
        export enum Rating {
            clear,
            oneStar,
            twoStars,
            threeStars,
            fourStars,
            fiveStars,
            like,
            dislike,
        }
        export enum RatingType {
            tvepisode,
            tvseries,
            movie,
        }
        export enum RequestType {
            tocrequest = 1,
            wmidrequest,
            etmrequest,
            singleTrackETMRequest,
            wmisalbumIDRequest,
            submitFeedbackRequest,
            userEditRequest,
        }
        export enum SmartDJState {
            unknown,
            canSmartDJ,
            cannotSmartDJ,
        }
        export enum SmartVJState {
            unknown,
            canSmartVJ,
            cannotSmartVJ,
        }
        export namespace Telemetry {
            export enum AppLaunchType {
                unknown,
                userLaunched,
                appContract,
                tombstone,
            }
            export enum Behavior {
                undefined,
                unknown,
                other,
            }
            export enum InputMethod {
                undefined,
                unknown,
                other,
                keyboard,
                mouse,
                touchpad,
                touchscreen,
                pen,
                gameController,
                voice,
                userMotion,
                nearFieldCommunication,
                deviceSensor,
                bluetooth,
            }
            export enum ScreenState {
                undefined,
                unknown,
                other,
                full,
                windowed,
                minimized,
                snappedOneHalf,
                snappedOneThird,
                snappedTwoThird,
                snappedOneFourth,
                snappedThreeFourth,
                snappedOther,
            }
        }
        export enum WatchlistItemType {
            movie,
            tvseason,
            bundle,
        }
    }
    export namespace Queries {
        export enum AlbumsSortBy {
            none = 10100,
            dateAddedAscending,
            dateAddedDescending,
            titleAscending,
            titleDescending,
            releaseYearAscendingTitleAscending,
            releaseYearDescendingTitleAscending,
            artistAscending,
            artistDescending,
            artistAscendingReleaseYearDescending,
            artistDescendingReleaseYearDescending,
            genreNameTitleAscending,
            genreNameTitleDescending,
            recentlyPlayedDescending,
        }
        export enum ArtistOf {
            undefined = 700,
            track,
            video,
            album,
        }
        export enum FoldersSortBy {
            none = 11100,
            dateAddedDescending,
            titleAscending,
            dateModifiedDescending,
        }
        export enum GameTitleType {
            system,
            standard,
            demo,
            arcade,
            application = 5,
        }
        export enum GameType {
            console,
            windows,
        }
        export enum GenresQueryMediaType {
            undefined = 600,
            album,
            track,
            video,
            playlist,
        }
        export enum GenresSortBy {
            none = 10500,
            nameAscending,
            nameDescending,
        }
        export enum ItemCollectionState {
            notInCollection = 1300,
            notInCollectionNoRights,
            notInCollectionTakenDown,
            notInCollectionValidRights,
            cloudOnlyNoRights,
            cloudOnlyTakenDown,
            cloudOnlyValidRights,
            oneDriveOnly,
            cloudOnlyPendingSync,
            cloudAndLocalNoRights,
            cloudAndLocalTakenDown,
            cloudAndLocalValidRights,
            oneDriveAndLocal,
            localOnly,
            localOnlyNoCatalogId,
            localOnlyPendingSync,
        }
        export enum ObjectType {
            video = 100,
            tvseries,
            tvseason,
            track,
            album,
            person,
            genre,
            playlist,
            review,
            bio,
            editorial,
            game,
            smartDJ,
            closedCaption,
            folder,
            smartVJ,
            bundle,
        }
        export enum PeopleSortBy {
            none = 10400,
            nameAscending,
            nameDescending,
        }
        export enum PersonType {
            actor = 300,
            artist,
            primaryArtist,
            director,
            writer,
            creator,
            producer,
            influencer,
        }
        export enum PlaylistItemsSortBy {
            none = 10900,
            ordinalAscending,
            ordinalDescending,
        }
        export enum PlaylistsSortBy {
            none = 10300,
            dateAddedAscending,
            dateAddedDescending,
            dateEditedAscending,
            dateEditedDescending,
            nameAscending,
            nameDescending,
            recentlyPlayedDescending,
        }
        export enum RequestType {
            first,
            head,
            get,
            post,
            put,
            delete,
            count,
        }
        export enum ReviewType {
            album = 500,
            movie,
            tvepisode,
        }
        export enum ServiceType {
            xmlService,
            jsonEDS,
            count,
        }
        export enum ServiceXMLQueryStatus {
            processingData,
            count,
        }
        export enum SmartDJObjectTypes {
            person = 10800,
            track,
            album,
        }
        export enum TracksSortBy {
            none = 10200,
            dateAddedAscending,
            dateAddedDescending,
            titleAscending,
            titleDescending,
            numberAscending,
            numberDescending,
            artistAscendingAlbumReleaseYearAscendingNumberAscending,
            artistAscendingAlbumReleaseYearDescendingNumberAscending,
            albumArtistAscendingAlbumReleaseYearAscendingNumberAscending,
            albumArtistAscendingAlbumReleaseYearDescendingNumberAscending,
            albumReleaseYearAscendingNumberAscending,
            albumReleaseYearDescendingNumberAscending,
            genreAscendingTitleAscending,
            genreDescendingTitleDescending,
            albumTitleDiscNumberNumberAscending,
            albumTitleDiscNumberNumberDescending,
            shuffle,
            recentlyPlayedDescending,
            albumDateAddedAscending,
            albumDateAddedDescending,
            albumTitleAscending,
            albumTitleDescending,
            albumReleaseYearAscendingTitleAscending,
            albumReleaseYearDescendingTitleAscending,
            albumArtistAscendingReleaseYearDescending,
            albumArtistDescendingReleaseYearDescending,
            albumGenreNameTitleAscending,
            albumGenreNameTitleDescending,
        }
        export enum TVSeasonsSortBy {
            none = 10600,
            titleAscending,
            titleDescending,
            dateAddedAscending,
            dateAddedDescending,
            numberAscending,
            numberDescending,
            dateAddedOfMostRecentEpisode,
            seriesTitleAndNumber,
        }
        export enum TVSeriesSortBy {
            none = 10700,
            titleAscending,
            titleDescending,
            dateLastEpisodeAddedAscending,
            dateLastEpisodeAddedDescending,
            dateLastEpisodePlayingOrAddedAscending,
            dateLastEpisodePlayingOrAddedDescending,
            latestActivityAscending,
            latestActivityDescending,
        }
        export enum VideosSortBy {
            none = 10000,
            dateAddedAscending,
            dateAddedDescending,
            durationAscending,
            durationDescending,
            titleAscending,
            titleDescending,
            releaseYearAscendingTitleAscending,
            releaseYearDescendingTitleAscending,
            artistAscending,
            artistDescending,
            studioAscending,
            studioDescending,
            seriesTitleSeasonNumberEpisodeNumber,
            dateAddedOrLastPlayingAscending,
            dateAddedOrLastPlayingDescending,
        }
        export enum VideoType {
            tvepisode = 200,
            musicVideo,
            movie,
            other,
        }
        export enum WatchlistItemsSortBy {
            none = 11300,
            nameAscending,
            nameDescending,
            dateCreatedAscending,
            dateCreatedDescending,
        }
        export enum WatchlistsSortBy {
            none = 11200,
            nameAscending,
            nameDescending,
            dateCreatedAscending,
            dateCreatedDescending,
        }
    }
    export enum RequestedImageType {
        undefinedRequestedImage,
        primaryImage,
        backgroundImage,
        xboxBackgroundImage,
        albumImage,
    }
    export enum ResolutionFallback {
        none,
        betterQuality,
        anyQuality,
    }
    export namespace Sync {
        export enum CollectionSyncError {
            maxPlaylistsReached = -1056898736,
            collectionFull,
            accountMerged = -1056898688,
            syncError = -1056898672,
        }
        export enum RequestSyncOption {
            checkIfDirty,
            syncOnlyIfAlreadyDirty,
            forceSync,
        }
    }
    export namespace Util {
        export namespace Endpoints {
            export enum EndpointId {
                seid_AccountsAuth = 1,
                seid_AccountsTroubleshooter,
                seid_AccountsTroubleshooterRelyingParty,
                seid_AuthTransfer,
                seid_BigCat,
                seid_BingAutoSuggest,
                seid_CTPAuth,
                seid_CTPPassport,
                seid_CdfXboxLiveDotCom,
                seid_CloudCollection,
                seid_CloudCollectionPlaylist,
                seid_CloudCollectionRelyingParty,
                seid_CloudCollectionV2,
                seid_Commerce,
                seid_CommerceBase,
                seid_CommerceBillingHistory,
                seid_CommerceContactInfo,
                seid_CommerceContactPreferences,
                seid_CommercePaymentOptions,
                seid_CommercePrivacy,
                seid_CommercePurchase,
                seid_CommercePurchaseRelyingParty,
                seid_CommerceV2,
                seid_CommerceV3,
                seid_CommerceXdlcInventory,
                seid_CommerceXdlcInventoryRelyingParty,
                seid_CommerceXdlcLicensing,
                seid_CommerceXdlcLicensingRelyingParty,
                seid_EDSRelyingParty,
                seid_EDSSearch,
                seid_EDSServiceAnon,
                seid_EDSServiceAnonNoCulture,
                seid_EDSServiceAuth,
                seid_EDSServiceAuthNoCulture,
                seid_ESListService,
                seid_ESRelyingParty,
                seid_EchoNestDeveloperApi,
                seid_EntitlementsCollections,
                seid_Feedback,
                seid_FlightAssignment,
                seid_GetAlbumDetailsByAlbumId,
                seid_GraceNote,
                seid_ImageCatalog,
                seid_LiveTile,
                seid_MarketplaceLicensing,
                seid_MediaDeliveryV1RelyingParty,
                seid_MediaDeliveryV2,
                seid_MediaDeliveryV2RelyingParty,
                seid_MediaDiscovery,
                seid_MediaUsage,
                seid_MediaUsageRelyingParty,
                seid_MicrosoftBilling,
                seid_ModernPurchase,
                seid_MusicAssetRequests,
                seid_MusicAuth,
                seid_MusicImageService,
                seid_MusicMatchRelyingParty,
                seid_MusicMatchRequests,
                seid_MusicPassSignupPage,
                seid_NookGpb,
                seid_NookProxy,
                seid_NookStore,
                seid_PCMarketplace,
                seid_Passport,
                seid_PassportTicket,
                seid_PostrollCredits,
                seid_PurchaseFlow,
                seid_Ratings,
                seid_RatingsRelyingParty,
                seid_ReadAccountMerge,
                seid_ReadBuyerUX,
                seid_ReadBuyerUXTOU,
                seid_ReadCommerceService,
                seid_ReadPurchase,
                seid_RichPresence,
                seid_RootCatalog,
                seid_StoreChannels,
                seid_SubmitAddFeedback,
                seid_Tuners,
                seid_UXServicesRelyingParty,
                seid_UserEngagementService,
                seid_UserProfile,
                seid_UserTokenAuthRequest,
                seid_UserTokenTarget,
                seid_VideoDelivery,
                seid_VideoDeliveryRelyingParty,
                seid_WMISEndpoints,
                seid_WMISImage,
                seid_WMISRedir,
                seid_WinPhoneXboxDotCom,
                seid_XBLAuth,
                seid_XBox,
                seid_XBoxLive,
                seid_XBoxLiveSSL,
                seid_XSTSAuth,
                seid_XSTSAuthPassport,
                seid_XTokenAuthRequest,
                seid_XTokenTarget,
                seid_XblRelyingParty,
                seid_XboxLiveData,
                seid_XboxLiveDataRelyingParty,
                seid_XboxMusic,
                seid_XboxSupport,
            }
        }
        export enum EStreamingActionType {
            eStreamingActionTypeStart,
            eStreamingActionTypeStop,
            eStreamingActionTypePause,
            eStreamingActionTypeResume,
            eStreamingActionTypeKeepAlive,
        }
        export enum SignInPromptType {
            promptIfNeeded,
            retypeCredentials,
            doNotPrompt,
        }
    }
}
