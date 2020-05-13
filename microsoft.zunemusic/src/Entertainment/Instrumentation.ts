
export namespace Instrumentation {
    export namespace Providers {
        export class Common {
            isAppVisibilityChangedEnabled: Boolean = false;
            isBusinessIntelligenceScalarDataPointEnabled: Boolean = false;
            isBusinessIntelligenceStreamBooleanParameterEnabled: Boolean = false;
            isBusinessIntelligenceStreamDataPointEnabled: Boolean = false;
            isBusinessIntelligenceStreamIntParameterEnabled: Boolean = false;
            isBusinessIntelligenceStreamStringParameterEnabled: Boolean = false;
            isClientLaunchEnabled: Boolean = false;
            isClientShutdownEnabled: Boolean = false;
            isClosedCaptionDownloadCompletedEnabled: Boolean = false;
            isClosedCaptionDownloadFailedEnabled: Boolean = false;
            isClosedCaptionDownloadStartedEnabled: Boolean = false;
            isEventSystemErrorEnabled: Boolean = false;
            isFileTransferBackgroundTransferAttachFailedEnabled: Boolean = false;
            isFileTransferBackgroundTransferCanceledEnabled: Boolean = false;
            isFileTransferBackgroundTransferCompletedEnabled: Boolean = false;
            isFileTransferBackgroundTransferErrorEnabled: Boolean = false;
            isFileTransferBackgroundTransferStartFailedEnabled: Boolean = false;
            isFileTransferClosedEnabled: Boolean = false;
            isFileTransferCompletedEnabled: Boolean = false;
            isFileTransferDownloadInfoFailedEnabled: Boolean = false;
            isFileTransferFailedEnabled: Boolean = false;
            isFileTransferManagerInitializationStartEnabled: Boolean = false;
            isFileTransferManagerInitializationStopEnabled: Boolean = false;
            isFileTransferMoveToLibraryFailedEnabled: Boolean = false;
            isFileTransferQueuedEnabled: Boolean = false;
            isFileTransferStart_FailedEnabled: Boolean = false;
            isFileTransferStart_SuccessedEnabled: Boolean = false;
            isLogFileUploadedToWatsonEnabled: Boolean = false;
            isProcessInitializeEventStartEnabled: Boolean = false;
            isProcessInitializeEventStopEnabled: Boolean = false;
            isProcessResumeEventSingletonStartEnabled: Boolean = false;
            isProcessResumeEventSingletonStopEnabled: Boolean = false;
            isProcessResumeEventStartEnabled: Boolean = false;
            isProcessResumeEventStopEnabled: Boolean = false;
            isProcessResumeTelemetryStartEnabled: Boolean = false;
            isProcessResumeTelemetryStopEnabled: Boolean = false;
            isProcessSuspendEventSingletonStartEnabled: Boolean = false;
            isProcessSuspendEventSingletonStopEnabled: Boolean = false;
            isProcessSuspendEventStartEnabled: Boolean = false;
            isProcessSuspendEventStopEnabled: Boolean = false;
            isProcessSuspendTelemetryStartEnabled: Boolean = false;
            isProcessSuspendTelemetryStopEnabled: Boolean = false;
            isSingletonInitializationCompletedEnabled: Boolean = false;
            isSingletonInitializationStartedEnabled: Boolean = false;
            isZuneHostLaunchEnabled: Boolean = false;
            isZuneHostShutdownEnabled: Boolean = false;
            is_ShipAssertEnabled: Boolean = false;
            traceProcessResumeTelemetryStop(): void {
                console.warn('shimmed function Common.traceProcessResumeTelemetryStop');
            }

            traceSingletonInitializationStarted(singletonEnumValue: number): void {
                console.warn('shimmed function Common.traceSingletonInitializationStarted');
            }

            traceSingletonInitializationCompleted(singletonEnumValue: number): void {
                console.warn('shimmed function Common.traceSingletonInitializationCompleted');
            }

            traceFileTransferManagerInitializationStart(): void {
                console.warn('shimmed function Common.traceFileTransferManagerInitializationStart');
            }

            traceFileTransferManagerInitializationStop(): void {
                console.warn('shimmed function Common.traceFileTransferManagerInitializationStop');
            }

            traceFileTransferBackgroundTransferStartFailed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferBackgroundTransferStartFailed');
            }

            traceFileTransferBackgroundTransferAttachFailed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferBackgroundTransferAttachFailed');
            }

            traceFileTransferBackgroundTransferCompleted(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferBackgroundTransferCompleted');
            }

            traceFileTransferBackgroundTransferError(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferBackgroundTransferError');
            }

            traceFileTransferBackgroundTransferCanceled(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferBackgroundTransferCanceled');
            }

            traceFileTransferMoveToLibraryFailed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferMoveToLibraryFailed');
            }

            traceFileTransferDownloadInfoFailed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferDownloadInfoFailed');
            }

            traceFileTransferQueued(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferQueued');
            }

            traceFileTransferFailed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferFailed');
            }

            traceFileTransferStart_Successed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferStart_Successed');
            }

            traceFileTransferStart_Failed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferStart_Failed');
            }

            traceFileTransferCompleted(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferCompleted');
            }

            traceFileTransferClosed(hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function Common.traceFileTransferClosed');
            }

            traceClosedCaptionDownloadStarted(hresult: number, path: string, url: string, isXHR: Boolean): void {
                console.warn('shimmed function Common.traceClosedCaptionDownloadStarted');
            }

            traceClosedCaptionDownloadFailed(hresult: number, path: string, url: string, isXHR: Boolean): void {
                console.warn('shimmed function Common.traceClosedCaptionDownloadFailed');
            }

            traceClosedCaptionDownloadCompleted(hresult: number, path: string, url: string, isXHR: Boolean): void {
                console.warn('shimmed function Common.traceClosedCaptionDownloadCompleted');
            }

            traceAppVisibilityChanged(appVisible: Boolean): void {
                console.warn('shimmed function Common.traceAppVisibilityChanged');
            }

            trace_ShipAssert(id: number, param: number, message: string, hresult: number, functionName: string, file: string, line: number): void {
                console.warn('shimmed function Common.trace_ShipAssert');
            }

            traceBusinessIntelligenceScalarDataPoint(id: number, userId: string, timestamp: number, classId: number, typeId: number, allowedByPrivacySettings: Boolean, parameterName: string, parameterValue: number): void {
                console.warn('shimmed function Common.traceBusinessIntelligenceScalarDataPoint');
            }

            traceBusinessIntelligenceStreamDataPoint(id: number, userId: string, timestamp: number, classId: number, typeId: number, allowedByPrivacySettings: Boolean, parameterCount: number): void {
                console.warn('shimmed function Common.traceBusinessIntelligenceStreamDataPoint');
            }

            traceBusinessIntelligenceStreamIntParameter(id: number, parameterName: string, parameterValue: number): void {
                console.warn('shimmed function Common.traceBusinessIntelligenceStreamIntParameter');
            }

            traceBusinessIntelligenceStreamBooleanParameter(id: number, parameterName: string, parameterValue: Boolean): void {
                console.warn('shimmed function Common.traceBusinessIntelligenceStreamBooleanParameter');
            }

            traceBusinessIntelligenceStreamStringParameter(id: number, parameterName: string, parameterValue: string): void {
                console.warn('shimmed function Common.traceBusinessIntelligenceStreamStringParameter');
            }

            traceClientLaunch(): void {
                console.warn('shimmed function Common.traceClientLaunch');
            }

            traceClientShutdown(code: number): void {
                console.warn('shimmed function Common.traceClientShutdown');
            }

            traceEventSystemError(errorCode: number, provider: string, eventChannel: number, eventId: number, eventKeywords: number, eventLevel: number, eventOpcode: number, eventTask: number, eventVersion: number): void {
                console.warn('shimmed function Common.traceEventSystemError');
            }

            traceZuneHostLaunch(isElevated: Boolean, parameter: string): void {
                console.warn('shimmed function Common.traceZuneHostLaunch');
            }

            traceZuneHostShutdown(code: number): void {
                console.warn('shimmed function Common.traceZuneHostShutdown');
            }

            traceLogFileUploadedToWatson(filePath: string): void {
                console.warn('shimmed function Common.traceLogFileUploadedToWatson');
            }

            traceProcessInitializeEventStart(): void {
                console.warn('shimmed function Common.traceProcessInitializeEventStart');
            }

            traceProcessInitializeEventStop(durationMsec: number): void {
                console.warn('shimmed function Common.traceProcessInitializeEventStop');
            }

            traceProcessSuspendEventStart(): void {
                console.warn('shimmed function Common.traceProcessSuspendEventStart');
            }

            traceProcessSuspendEventStop(durationMsec: number): void {
                console.warn('shimmed function Common.traceProcessSuspendEventStop');
            }

            traceProcessResumeEventStart(): void {
                console.warn('shimmed function Common.traceProcessResumeEventStart');
            }

            traceProcessResumeEventStop(durationMsec: number): void {
                console.warn('shimmed function Common.traceProcessResumeEventStop');
            }

            traceProcessSuspendEventSingletonStart(singletonEnumValue: number): void {
                console.warn('shimmed function Common.traceProcessSuspendEventSingletonStart');
            }

            traceProcessSuspendEventSingletonStop(singletonEnumValue: number): void {
                console.warn('shimmed function Common.traceProcessSuspendEventSingletonStop');
            }

            traceProcessResumeEventSingletonStart(singletonEnumValue: number): void {
                console.warn('shimmed function Common.traceProcessResumeEventSingletonStart');
            }

            traceProcessResumeEventSingletonStop(singletonEnumValue: number): void {
                console.warn('shimmed function Common.traceProcessResumeEventSingletonStop');
            }

            traceProcessSuspendTelemetryStart(): void {
                console.warn('shimmed function Common.traceProcessSuspendTelemetryStart');
            }

            traceProcessSuspendTelemetryStop(): void {
                console.warn('shimmed function Common.traceProcessSuspendTelemetryStop');
            }

            traceProcessResumeTelemetryStart(): void {
                console.warn('shimmed function Common.traceProcessResumeTelemetryStart');
            }

        }
        export class CommonTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function CommonTemplate.eventEnabled');
            }

            traceTemplate_qqzdzzq(_MCGEN_EventIndex: number, id: number, param: number, message: string, hresult: number, functionName: string, file: string, line: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_qqzdzzq');
            }

            traceTemplate_qjiqqtzq(_MCGEN_EventIndex: number, id: number, userId: string, timestamp: number, classId: number, typeId: number, allowedByPrivacySettings: Boolean, parameterName: string, parameterValue: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_qjiqqtzq');
            }

            traceTemplate_qjiqqtq(_MCGEN_EventIndex: number, id: number, userId: string, timestamp: number, classId: number, typeId: number, allowedByPrivacySettings: Boolean, parameterCount: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_qjiqqtq');
            }

            traceTemplate_qzq(_MCGEN_EventIndex: number, id: number, parameterName: string, parameterValue: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_qzq');
            }

            traceTemplate_qzt(_MCGEN_EventIndex: number, id: number, parameterName: string, parameterValue: Boolean): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_qzt');
            }

            traceTemplate_qzz(_MCGEN_EventIndex: number, id: number, parameterName: string, parameterValue: string): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_qzz');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_d(_MCGEN_EventIndex: number, code: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_d');
            }

            traceTemplate_qjqqxqqqq(_MCGEN_EventIndex: number, errorCode: number, provider: string, eventChannel: number, eventId: number, eventKeywords: number, eventLevel: number, eventOpcode: number, eventTask: number, eventVersion: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_qjqqxqqqq');
            }

            traceTemplate_tz(_MCGEN_EventIndex: number, isElevated: Boolean, parameter: string): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_tz');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, filePath: string): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_z');
            }

            traceTemplate_q(_MCGEN_EventIndex: number, durationMsec: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_q');
            }

            traceTemplate_ddjxxdddjzzd(_MCGEN_EventIndex: number, hresult: number, taskId: number, backgroundTransferId: string, bytes: number, totalBytes: number, fileId: number, libraryId: number, libraryTypeId: number, mediaId: string, isolatedStoragePath: string, targetPath: string, status: number): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_ddjxxdddjzzd');
            }

            traceTemplate_dzzt(_MCGEN_EventIndex: number, hresult: number, path: string, url: string, isXHR: Boolean): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_dzzt');
            }

            traceTemplate_t(_MCGEN_EventIndex: number, appVisible: Boolean): void {
                console.warn('shimmed function CommonTemplate.traceTemplate_t');
            }

        }
        export class LegacyPerfTrace {
            isLegacyPerfTraceClientEventEnabled: Boolean;
            isLegacyPerfTraceCollectionEventEnabled: Boolean;
            isLegacyPerfTraceDBMutexEventEnabled: Boolean;
            isLegacyPerfTraceDownloadEventEnabled: Boolean;
            isLegacyPerfTraceDriverEventEnabled: Boolean;
            isLegacyPerfTraceGenericEventEnabled: Boolean;
            isLegacyPerfTraceHttpEventEnabled: Boolean;
            isLegacyPerfTraceLaunchEventEnabled: Boolean;
            isLegacyPerfTraceQRSEventEnabled: Boolean;
            isLegacyPerfTraceQuickMixEventEnabled: Boolean;
            isLegacyPerfTraceSyncEventEnabled: Boolean;
            isLegacyPerfTraceWMPPlaybackEventEnabled: Boolean;
            traceLegacyPerfTraceHttpEvent(httpEvent: number, url: string): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceHttpEvent');
            }

            traceLegacyPerfTraceClientEvent(reporterTag: number, actionType: number, reason: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceClientEvent');
            }

            traceLegacyPerfTraceWMPPlaybackEvent(type: number, fileName: string, graphType: number, lastHR: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceWMPPlaybackEvent');
            }

            traceLegacyPerfTraceDBMutexEvent(dbmutexEvent: number, threadId: number, time: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceDBMutexEvent');
            }

            traceLegacyPerfTraceLaunchEvent(launchEvent: number, launchEventData: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceLaunchEvent');
            }

            traceLegacyPerfTraceSyncEvent(syncEvent: number, syncEventData: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceSyncEvent');
            }

            traceLegacyPerfTraceQRSEvent(qrsevent: number, qrseventData: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceQRSEvent');
            }

            traceLegacyPerfTraceGenericEvent(reporterTag: number, type: number, action: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceGenericEvent');
            }

            traceLegacyPerfTraceDriverEvent(driverEvent: number, driverEventData: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceDriverEvent');
            }

            traceLegacyPerfTraceCollectionEvent(collectionEvent: number, detail: string): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceCollectionEvent');
            }

            traceLegacyPerfTraceQuickMixEvent(quickMixEvent: number, quickMixEventData: number): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceQuickMixEvent');
            }

            traceLegacyPerfTraceDownloadEvent(downloadEvent: number, id: string): void {
                console.warn('shimmed function LegacyPerfTrace.traceLegacyPerfTraceDownloadEvent');
            }

        }
        export class LegacyPerfTraceTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function LegacyPerfTraceTemplate.eventEnabled');
            }

            traceTemplate_qz(_MCGEN_EventIndex: number, httpEvent: number, url: string): void {
                console.warn('shimmed function LegacyPerfTraceTemplate.traceTemplate_qz');
            }

            traceTemplate_qqq(_MCGEN_EventIndex: number, reporterTag: number, actionType: number, reason: number): void {
                console.warn('shimmed function LegacyPerfTraceTemplate.traceTemplate_qqq');
            }

            traceTemplate_qzqd(_MCGEN_EventIndex: number, type: number, fileName: string, graphType: number, lastHR: number): void {
                console.warn('shimmed function LegacyPerfTraceTemplate.traceTemplate_qzqd');
            }

            traceTemplate_qq(_MCGEN_EventIndex: number, launchEvent: number, launchEventData: number): void {
                console.warn('shimmed function LegacyPerfTraceTemplate.traceTemplate_qq');
            }

        }
        export class Library {
            isBackgroundWorkLock_AcquiredEnabled: Boolean = false;
            isBackgroundWorkLock_ReleasedEnabled: Boolean = false;
            isBackgroundWorkLock_RequestedEnabled: Boolean = false;
            isCollectionBuildingBeginEnabled: Boolean = false;
            isCollectionBuildingCloudCollectionV2FirstTrackAddedEnabled: Boolean = false;
            isCollectionBuildingEndEnabled: Boolean = false;
            isCollectionBuildingMDLCProgressEnabled: Boolean = false;
            isCollectionBuildingMediaSyncedEnabled: Boolean = false;
            isCollectionBuildingMissingMetadataEnabled: Boolean = false;
            isCollectionBuildingProgressEnabled: Boolean = false;
            isDatabaseCloseCompletedEnabled: Boolean = false;
            isDatabaseCloseStartedEnabled: Boolean = false;
            isDatabaseOpenCompletedEnabled: Boolean = false;
            isDatabaseOpenStartedEnabled: Boolean = false;
            isDbCleanupOnUserSignedOutCompletedEnabled: Boolean = false;
            isDbCleanupOnUserSignedOutStartedEnabled: Boolean = false;
            isEasyTransferAddingPathsEnabled: Boolean = false;
            isEasyTransferBeginImportingMetadataEnabled: Boolean = false;
            isEasyTransferBeginImportingPlaylistsEnabled: Boolean = false;
            isEasyTransferCompleteEnabled: Boolean = false;
            isEasyTransferCompletedImportingMetadataEnabled: Boolean = false;
            isEasyTransferCompletedImportingPlaylistsEnabled: Boolean = false;
            isEasyTransferConfigParseFailedEnabled: Boolean = false;
            isEasyTransferConfigParseSucceededEnabled: Boolean = false;
            isEasyTransferFailedToLocateMediaItemEnabled: Boolean = false;
            isEasyTransferFoundConfigEnabled: Boolean = false;
            isEasyTransferImportedMetadataEnabled: Boolean = false;
            isEasyTransferImportedPlaylistEnabled: Boolean = false;
            isEasyTransferIterationCompleteEnabled: Boolean = false;
            isEasyTransferIterationFailedEnabled: Boolean = false;
            isEasyTransferIterationStartedEnabled: Boolean = false;
            isEasyTransferLocatedMediaItemEnabled: Boolean = false;
            isEasyTransferLocatingMediaItemEnabled: Boolean = false;
            isEasyTransferMatchedByFileUrlEnabled: Boolean = false;
            isEasyTransferNoConfigEnabled: Boolean = false;
            isEasyTransferNoPathsToAddEnabled: Boolean = false;
            isEasyTransferParseErrorEnabled: Boolean = false;
            isEasyTransferParsingConfigEnabled: Boolean = false;
            isEasyTransferStateChangeEnabled: Boolean = false;
            isFileProcessedEnabled: Boolean = false;
            isFingerprintComputedEnabled: Boolean = false;
            isFingerprintGeneration_EndOfStreamReachedEnabled: Boolean = false;
            isFingerprintGeneration_FingerprintRetrievedEnabled: Boolean = false;
            isFingerprintGeneration_InternalErrorEnabled: Boolean = false;
            isFingerprintGeneration_SourceReaderErrorEnabled: Boolean = false;
            isFingerprintIdFoundEnabled: Boolean = false;
            isFingerprintingCompleteEnabled: Boolean = false;
            isFingerprintingStartedEnabled: Boolean = false;
            isGetImmediateFingerprintsCompleteEnabled: Boolean = false;
            isGetImmediateFingerprintsStartEnabled: Boolean = false;
            isGrovelerAddFileEnabled: Boolean = false;
            isGrovelerAdditionScanCompletedEnabled: Boolean = false;
            isGrovelerAdditionScanStartedEnabled: Boolean = false;
            isGrovelerDefinitionChangedNotificationReceivedEnabled: Boolean = false;
            isGrovelerDeleteScanCompletedEnabled: Boolean = false;
            isGrovelerDeleteScanStartedEnabled: Boolean = false;
            isGrovelerFullScanSkippedEnabled: Boolean = false;
            isGrovelerGetEmptyItemListEnabled: Boolean = false;
            isGrovelerGetFilesAsyncRetryEnabled: Boolean = false;
            isGrovelerGetResultsErrorEnabled: Boolean = false;
            isGrovelerIsQuickGrovelNeededEnabled: Boolean = false;
            isGrovelerMasterRatingFileDirtySetEnabled: Boolean = false;
            isGrovelerNetworkConnectedEnabled: Boolean = false;
            isGrovelerNetworkShareAccessedEnabled: Boolean = false;
            isGrovelerNotificationReceivedEnabled: Boolean = false;
            isGrovelerPlaylistScanCompletedEnabled: Boolean = false;
            isGrovelerPlaylistScanStartedEnabled: Boolean = false;
            isGrovelerQueryIndexerDiffEnabled: Boolean = false;
            isGrovelerQuickScanCompletedEnabled: Boolean = false;
            isGrovelerQuickScanStartedEnabled: Boolean = false;
            isGrovelerReadMasterRatingFileCompletedEnabled: Boolean = false;
            isGrovelerReadMasterRatingFileStartedEnabled: Boolean = false;
            isGrovelerReadMasterRatingFileTriggeredEnabled: Boolean = false;
            isGrovelerRefreshLicenseCompletedEnabled: Boolean = false;
            isGrovelerRefreshLicenseStartedEnabled: Boolean = false;
            isGrovelerRetriesExhaustedEnabled: Boolean = false;
            isGrovelerScanCompletedEnabled: Boolean = false;
            isGrovelerScanStartedEnabled: Boolean = false;
            isGrovelerSecondScanCompletedEnabled: Boolean = false;
            isGrovelerSecondScanStartedEnabled: Boolean = false;
            isGrovelerSetFileAvailableEnabled: Boolean = false;
            isGrovelerSetFileUnavailableEnabled: Boolean = false;
            isGrovelerTopLevelFolderAddedEnabled: Boolean = false;
            isGrovelerWaitForCompletionRetryEnabled: Boolean = false;
            isGrovelerWriteMasterRatingFileCompletedEnabled: Boolean = false;
            isGrovelerWriteMasterRatingFileStartedEnabled: Boolean = false;
            isGrovelerWriteMasterRatingFileTriggeredEnabled: Boolean = false;
            isImmediateFingerprintRetrievedEnabled: Boolean = false;
            isMDLCCompletedEnabled: Boolean = false;
            isMDLCStartedEnabled: Boolean = false;
            isPlaylistIOCompletedEnabled: Boolean = false;
            isPlaylistIOStartedEnabled: Boolean = false;
            isProcessRemainingFilesCompleteEnabled: Boolean = false;
            isProcessRemainingFilesStartedEnabled: Boolean = false;
            isQueryCompletedEnabled: Boolean = false;
            isQueryStartedEnabled: Boolean = false;
            traceCollectionBuildingEnd(eventSource: number, itemsAdded: number, itemsTotal: number, errorState: number): void {
                console.warn('shimmed function Library.traceCollectionBuildingEnd');
            }

            traceCollectionBuildingProgress(itemsProcessed: number): void {
                console.warn('shimmed function Library.traceCollectionBuildingProgress');
            }

            traceCollectionBuildingMediaSynced(): void {
                console.warn('shimmed function Library.traceCollectionBuildingMediaSynced');
            }

            traceCollectionBuildingMissingMetadata(): void {
                console.warn('shimmed function Library.traceCollectionBuildingMissingMetadata');
            }

            traceCollectionBuildingMDLCProgress(itemsProcessed: number): void {
                console.warn('shimmed function Library.traceCollectionBuildingMDLCProgress');
            }

            traceCollectionBuildingCloudCollectionV2FirstTrackAdded(): void {
                console.warn('shimmed function Library.traceCollectionBuildingCloudCollectionV2FirstTrackAdded');
            }

            traceFingerprintingStarted(): void {
                console.warn('shimmed function Library.traceFingerprintingStarted');
            }

            traceFingerprintingComplete(hresult: number, canceled: Boolean, processedFileCount: number, remainingFileCount: number, failedFileCount: number): void {
                console.warn('shimmed function Library.traceFingerprintingComplete');
            }

            traceProcessRemainingFilesStarted(): void {
                console.warn('shimmed function Library.traceProcessRemainingFilesStarted');
            }

            traceProcessRemainingFilesComplete(hresult: number): void {
                console.warn('shimmed function Library.traceProcessRemainingFilesComplete');
            }

            traceFileProcessed(fileId: number, foreground: Boolean, allowGracenoteId: Boolean, hresult: number): void {
                console.warn('shimmed function Library.traceFileProcessed');
            }

            traceFingerprintIdFound(fileId: number, fileUrl: string): void {
                console.warn('shimmed function Library.traceFingerprintIdFound');
            }

            traceFingerprintComputed(fileId: number, fileUrl: string): void {
                console.warn('shimmed function Library.traceFingerprintComputed');
            }

            traceFingerprintGeneration_InternalError(fileUrl: string, error: number): void {
                console.warn('shimmed function Library.traceFingerprintGeneration_InternalError');
            }

            traceFingerprintGeneration_EndOfStreamReached(fileUrl: string): void {
                console.warn('shimmed function Library.traceFingerprintGeneration_EndOfStreamReached');
            }

            traceFingerprintGeneration_SourceReaderError(fileUrl: string, flags: number): void {
                console.warn('shimmed function Library.traceFingerprintGeneration_SourceReaderError');
            }

            traceFingerprintGeneration_FingerprintRetrieved(fileUrl: string, qualities: number): void {
                console.warn('shimmed function Library.traceFingerprintGeneration_FingerprintRetrieved');
            }

            traceGetImmediateFingerprintsStart(): void {
                console.warn('shimmed function Library.traceGetImmediateFingerprintsStart');
            }

            traceGetImmediateFingerprintsComplete(processedFileCount: number): void {
                console.warn('shimmed function Library.traceGetImmediateFingerprintsComplete');
            }

            traceImmediateFingerprintRetrieved(fileId: number, hresult: number, resultType: number): void {
                console.warn('shimmed function Library.traceImmediateFingerprintRetrieved');
            }

            traceGrovelerGetEmptyItemList(hresult: number): void {
                console.warn('shimmed function Library.traceGrovelerGetEmptyItemList');
            }

            traceGrovelerRefreshLicenseStarted(): void {
                console.warn('shimmed function Library.traceGrovelerRefreshLicenseStarted');
            }

            traceGrovelerRefreshLicenseCompleted(hresult: number): void {
                console.warn('shimmed function Library.traceGrovelerRefreshLicenseCompleted');
            }

            traceGrovelerDefinitionChangedNotificationReceived(): void {
                console.warn('shimmed function Library.traceGrovelerDefinitionChangedNotificationReceived');
            }

            traceGrovelerRetriesExhausted(hresult: number, fileCount: number): void {
                console.warn('shimmed function Library.traceGrovelerRetriesExhausted');
            }

            traceGrovelerAddFile(hresult: number, fileUrl: string): void {
                console.warn('shimmed function Library.traceGrovelerAddFile');
            }

            traceGrovelerSetFileAvailable(fileUrl: string): void {
                console.warn('shimmed function Library.traceGrovelerSetFileAvailable');
            }

            traceGrovelerSetFileUnavailable(fileUrl: string): void {
                console.warn('shimmed function Library.traceGrovelerSetFileUnavailable');
            }

            traceGrovelerSecondScanStarted(): void {
                console.warn('shimmed function Library.traceGrovelerSecondScanStarted');
            }

            traceGrovelerSecondScanCompleted(fileCount: number, unindexedFileCount: number, unknownFileCount: number): void {
                console.warn('shimmed function Library.traceGrovelerSecondScanCompleted');
            }

            traceMDLCStarted(): void {
                console.warn('shimmed function Library.traceMDLCStarted');
            }

            traceMDLCCompleted(): void {
                console.warn('shimmed function Library.traceMDLCCompleted');
            }

            traceDatabaseOpenStarted(): void {
                console.warn('shimmed function Library.traceDatabaseOpenStarted');
            }

            traceDatabaseOpenCompleted(): void {
                console.warn('shimmed function Library.traceDatabaseOpenCompleted');
            }

            traceDatabaseCloseStarted(): void {
                console.warn('shimmed function Library.traceDatabaseCloseStarted');
            }

            traceDatabaseCloseCompleted(): void {
                console.warn('shimmed function Library.traceDatabaseCloseCompleted');
            }

            traceDbCleanupOnUserSignedOutStarted(): void {
                console.warn('shimmed function Library.traceDbCleanupOnUserSignedOutStarted');
            }

            traceDbCleanupOnUserSignedOutCompleted(): void {
                console.warn('shimmed function Library.traceDbCleanupOnUserSignedOutCompleted');
            }

            traceQueryStarted(queryObjectInstanceId: number, queryType: string, actionName: string): void {
                console.warn('shimmed function Library.traceQueryStarted');
            }

            traceQueryCompleted(queryObjectInstanceId: number, queryType: string, actionName: string): void {
                console.warn('shimmed function Library.traceQueryCompleted');
            }

            tracePlaylistIOStarted(): void {
                console.warn('shimmed function Library.tracePlaylistIOStarted');
            }

            tracePlaylistIOCompleted(readFileCount: number): void {
                console.warn('shimmed function Library.tracePlaylistIOCompleted');
            }

            traceBackgroundWorkLock_Requested(requestor: string): void {
                console.warn('shimmed function Library.traceBackgroundWorkLock_Requested');
            }

            traceBackgroundWorkLock_Acquired(requestor: string): void {
                console.warn('shimmed function Library.traceBackgroundWorkLock_Acquired');
            }

            traceBackgroundWorkLock_Released(requestor: string): void {
                console.warn('shimmed function Library.traceBackgroundWorkLock_Released');
            }

            traceCollectionBuildingBegin(eventSource: number): void {
                console.warn('shimmed function Library.traceCollectionBuildingBegin');
            }

            traceGrovelerQuickScanStarted(): void {
                console.warn('shimmed function Library.traceGrovelerQuickScanStarted');
            }

            traceGrovelerQuickScanCompleted(receivedFileCount: number, modifiedFileCount: number): void {
                console.warn('shimmed function Library.traceGrovelerQuickScanCompleted');
            }

            traceGrovelerDeleteScanStarted(): void {
                console.warn('shimmed function Library.traceGrovelerDeleteScanStarted');
            }

            traceGrovelerDeleteScanCompleted(fileCount: number): void {
                console.warn('shimmed function Library.traceGrovelerDeleteScanCompleted');
            }

            traceGrovelerPlaylistScanStarted(): void {
                console.warn('shimmed function Library.traceGrovelerPlaylistScanStarted');
            }

            traceGrovelerPlaylistScanCompleted(fileCount: number): void {
                console.warn('shimmed function Library.traceGrovelerPlaylistScanCompleted');
            }

            traceGrovelerAdditionScanStarted(): void {
                console.warn('shimmed function Library.traceGrovelerAdditionScanStarted');
            }

            traceGrovelerAdditionScanCompleted(fileCount: number): void {
                console.warn('shimmed function Library.traceGrovelerAdditionScanCompleted');
            }

            traceGrovelerFullScanSkipped(): void {
                console.warn('shimmed function Library.traceGrovelerFullScanSkipped');
            }

            traceGrovelerTopLevelFolderAdded(): void {
                console.warn('shimmed function Library.traceGrovelerTopLevelFolderAdded');
            }

            traceGrovelerNotificationReceived(): void {
                console.warn('shimmed function Library.traceGrovelerNotificationReceived');
            }

            traceGrovelerNetworkConnected(): void {
                console.warn('shimmed function Library.traceGrovelerNetworkConnected');
            }

            traceGrovelerNetworkShareAccessed(): void {
                console.warn('shimmed function Library.traceGrovelerNetworkShareAccessed');
            }

            traceGrovelerMasterRatingFileDirtySet(): void {
                console.warn('shimmed function Library.traceGrovelerMasterRatingFileDirtySet');
            }

            traceGrovelerWriteMasterRatingFileTriggered(): void {
                console.warn('shimmed function Library.traceGrovelerWriteMasterRatingFileTriggered');
            }

            traceGrovelerWriteMasterRatingFileStarted(): void {
                console.warn('shimmed function Library.traceGrovelerWriteMasterRatingFileStarted');
            }

            traceGrovelerWriteMasterRatingFileCompleted(hresult: number, ratingCount: number): void {
                console.warn('shimmed function Library.traceGrovelerWriteMasterRatingFileCompleted');
            }

            traceGrovelerReadMasterRatingFileTriggered(): void {
                console.warn('shimmed function Library.traceGrovelerReadMasterRatingFileTriggered');
            }

            traceGrovelerReadMasterRatingFileStarted(): void {
                console.warn('shimmed function Library.traceGrovelerReadMasterRatingFileStarted');
            }

            traceGrovelerReadMasterRatingFileCompleted(hresult: number, ratingCount: number): void {
                console.warn('shimmed function Library.traceGrovelerReadMasterRatingFileCompleted');
            }

            traceGrovelerQueryIndexerDiff(timestamp: string): void {
                console.warn('shimmed function Library.traceGrovelerQueryIndexerDiff');
            }

            traceGrovelerIsQuickGrovelNeeded(currentCount: number, changedCount: number, quickScanNeeded: Boolean): void {
                console.warn('shimmed function Library.traceGrovelerIsQuickGrovelNeeded');
            }

            traceGrovelerGetFilesAsyncRetry(hresult: number, retryCount: number): void {
                console.warn('shimmed function Library.traceGrovelerGetFilesAsyncRetry');
            }

            traceGrovelerWaitForCompletionRetry(hresult: number, retryCount: number): void {
                console.warn('shimmed function Library.traceGrovelerWaitForCompletionRetry');
            }

            traceGrovelerGetResultsError(hresult: number): void {
                console.warn('shimmed function Library.traceGrovelerGetResultsError');
            }

            traceEasyTransferIterationStarted(): void {
                console.warn('shimmed function Library.traceEasyTransferIterationStarted');
            }

            traceEasyTransferFoundConfig(): void {
                console.warn('shimmed function Library.traceEasyTransferFoundConfig');
            }

            traceEasyTransferNoConfig(): void {
                console.warn('shimmed function Library.traceEasyTransferNoConfig');
            }

            traceEasyTransferParsingConfig(): void {
                console.warn('shimmed function Library.traceEasyTransferParsingConfig');
            }

            traceEasyTransferConfigParseFailed(): void {
                console.warn('shimmed function Library.traceEasyTransferConfigParseFailed');
            }

            traceEasyTransferConfigParseSucceeded(): void {
                console.warn('shimmed function Library.traceEasyTransferConfigParseSucceeded');
            }

            traceEasyTransferAddingPaths(): void {
                console.warn('shimmed function Library.traceEasyTransferAddingPaths');
            }

            traceEasyTransferNoPathsToAdd(): void {
                console.warn('shimmed function Library.traceEasyTransferNoPathsToAdd');
            }

            traceEasyTransferBeginImportingMetadata(): void {
                console.warn('shimmed function Library.traceEasyTransferBeginImportingMetadata');
            }

            traceEasyTransferCompletedImportingMetadata(): void {
                console.warn('shimmed function Library.traceEasyTransferCompletedImportingMetadata');
            }

            traceEasyTransferBeginImportingPlaylists(): void {
                console.warn('shimmed function Library.traceEasyTransferBeginImportingPlaylists');
            }

            traceEasyTransferCompletedImportingPlaylists(): void {
                console.warn('shimmed function Library.traceEasyTransferCompletedImportingPlaylists');
            }

            traceEasyTransferIterationComplete(): void {
                console.warn('shimmed function Library.traceEasyTransferIterationComplete');
            }

            traceEasyTransferComplete(): void {
                console.warn('shimmed function Library.traceEasyTransferComplete');
            }

            traceEasyTransferIterationFailed(): void {
                console.warn('shimmed function Library.traceEasyTransferIterationFailed');
            }

            traceEasyTransferParseError(line: number, column: number, message: string): void {
                console.warn('shimmed function Library.traceEasyTransferParseError');
            }

            traceEasyTransferImportedMetadata(mediaId: number, rating: number, playCount: number): void {
                console.warn('shimmed function Library.traceEasyTransferImportedMetadata');
            }

            traceEasyTransferImportedPlaylist(name: string, trackCount: number, imported: Boolean): void {
                console.warn('shimmed function Library.traceEasyTransferImportedPlaylist');
            }

            traceEasyTransferLocatingMediaItem(location: string): void {
                console.warn('shimmed function Library.traceEasyTransferLocatingMediaItem');
            }

            traceEasyTransferLocatedMediaItem(mediaId: number, created: Boolean): void {
                console.warn('shimmed function Library.traceEasyTransferLocatedMediaItem');
            }

            traceEasyTransferStateChange(oldState: number, newState: number): void {
                console.warn('shimmed function Library.traceEasyTransferStateChange');
            }

            traceEasyTransferFailedToLocateMediaItem(hresult: number): void {
                console.warn('shimmed function Library.traceEasyTransferFailedToLocateMediaItem');
            }

            traceEasyTransferMatchedByFileUrl(): void {
                console.warn('shimmed function Library.traceEasyTransferMatchedByFileUrl');
            }

            traceGrovelerScanStarted(): void {
                console.warn('shimmed function Library.traceGrovelerScanStarted');
            }

            traceGrovelerScanCompleted(fileCount: number): void {
                console.warn('shimmed function Library.traceGrovelerScanCompleted');
            }

        }
        export class LibraryTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function LibraryTemplate.eventEnabled');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_qqz(_MCGEN_EventIndex: number, line: number, column: number, message: string): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qqz');
            }

            traceTemplate_qqq(_MCGEN_EventIndex: number, mediaId: number, rating: number, playCount: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qqq');
            }

            traceTemplate_zqt(_MCGEN_EventIndex: number, name: string, trackCount: number, imported: Boolean): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_zqt');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, location: string): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_z');
            }

            traceTemplate_qt(_MCGEN_EventIndex: number, mediaId: number, created: Boolean): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qt');
            }

            traceTemplate_qq(_MCGEN_EventIndex: number, oldState: number, newState: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qq');
            }

            traceTemplate_d(_MCGEN_EventIndex: number, hresult: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_d');
            }

            traceTemplate_q(_MCGEN_EventIndex: number, fileCount: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_q');
            }

            traceTemplate_dq(_MCGEN_EventIndex: number, hresult: number, ratingCount: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_dq');
            }

            traceTemplate_qqt(_MCGEN_EventIndex: number, currentCount: number, changedCount: number, quickScanNeeded: Boolean): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qqt');
            }

            traceTemplate_dz(_MCGEN_EventIndex: number, hresult: number, fileUrl: string): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_dz');
            }

            traceTemplate_dzz(_MCGEN_EventIndex: number, queryObjectInstanceId: number, queryType: string, actionName: string): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_dzz');
            }

            traceTemplate_qqqq(_MCGEN_EventIndex: number, eventSource: number, itemsAdded: number, itemsTotal: number, errorState: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qqqq');
            }

            traceTemplate_dtqqq(_MCGEN_EventIndex: number, hresult: number, canceled: Boolean, processedFileCount: number, remainingFileCount: number, failedFileCount: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_dtqqq');
            }

            traceTemplate_qttd(_MCGEN_EventIndex: number, fileId: number, foreground: Boolean, allowGracenoteId: Boolean, hresult: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qttd');
            }

            traceTemplate_qz(_MCGEN_EventIndex: number, fileId: number, fileUrl: string): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qz');
            }

            traceTemplate_zd(_MCGEN_EventIndex: number, fileUrl: string, error: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_zd');
            }

            traceTemplate_zq(_MCGEN_EventIndex: number, fileUrl: string, flags: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_zq');
            }

            traceTemplate_qdd(_MCGEN_EventIndex: number, fileId: number, hresult: number, resultType: number): void {
                console.warn('shimmed function LibraryTemplate.traceTemplate_qdd');
            }

        }
        export class Pipeline {
            isClosedCaptions_DroppedFrameEnabled: Boolean = false;
            isClosedCaptions_EnterRenderingLoopEnabled: Boolean = false;
            isClosedCaptions_ExitRenderingLoopEnabled: Boolean = false;
            isClosedCaptions_OnEnabled: Boolean = false;
            isClosedCaptions_RendererGetTTMLFilepathEnabled: Boolean = false;
            isClosedCaptions_RendererLoadTTMLFileEnabled: Boolean = false;
            isDRM_DeleteLicense_CompletedEnabled: Boolean = false;
            isDRM_DeleteLicense_InvokedEnabled: Boolean = false;
            isDRM_ReportMetering_AccountEnabled: Boolean = false;
            isDRM_ReportMetering_CompletedEnabled: Boolean = false;
            isDRM_ReportMetering_InvokedEnabled: Boolean = false;
            isDRM_ReportMetering_NoDataToReportEnabled: Boolean = false;
            isDRM_RootLicenseRefresh_AccountEnabled: Boolean = false;
            isDRM_RootLicenseRefresh_CompletedEnabled: Boolean = false;
            isDRM_RootLicenseRefresh_DetailsEnabled: Boolean = false;
            isDRM_RootLicenseRefresh_InvokedEnabled: Boolean = false;
            isFastStartMediaSource_CreatedEnabled: Boolean = false;
            isFastStartMediaSource_PlaybackStartEnabled: Boolean = false;
            isFastStartMediaSource_ReceivedUrlEnabled: Boolean = false;
            isLEQ_EnabledEnabled: Boolean = false;
            isLEQ_Process_CompleteEnabled: Boolean = false;
            isLEQ_Process_StartEnabled: Boolean = false;
            isLEQ_SetFormatEnabled: Boolean = false;
            isMBR_BufferStatusEnabled: Boolean = false;
            isMBR_DMO_ProcessInput_ReturnEnabled: Boolean = false;
            isMBR_DMO_ProcessOutput_ReturnEnabled: Boolean = false;
            isMBR_DropFrameEnabled: Boolean = false;
            isMBR_EOSEnabled: Boolean = false;
            isMBR_GotNewSampleEnabled: Boolean = false;
            isMBR_ManifestStreamEnabled: Boolean = false;
            isMBR_NextChunkEnabled: Boolean = false;
            isMBR_Pause_EnterEnabled: Boolean = false;
            isMBR_Pause_ExitEnabled: Boolean = false;
            isMBR_PinBeginFlush_EnterEnabled: Boolean = false;
            isMBR_PinBeginFlush_ExitEnabled: Boolean = false;
            isMBR_PinDecompress_BeginEnabled: Boolean = false;
            isMBR_PinDecompress_CallEnabled: Boolean = false;
            isMBR_PinDecompress_EndEnabled: Boolean = false;
            isMBR_PinDecompress_ReturnEnabled: Boolean = false;
            isMBR_PinEndFlush_EnterEnabled: Boolean = false;
            isMBR_PinEndFlush_ExitEnabled: Boolean = false;
            isMBR_PinPumpState_ChangedEnabled: Boolean = false;
            isMBR_Preroll_ExitEnabled: Boolean = false;
            isMBR_Preroll_Forced_ExitEnabled: Boolean = false;
            isMBR_Run_EnterEnabled: Boolean = false;
            isMBR_Run_ExitEnabled: Boolean = false;
            isMBR_Run_LockEnabled: Boolean = false;
            isMBR_SamplePushedDownStream_BeginEnabled: Boolean = false;
            isMBR_SamplePushedDownStream_EndEnabled: Boolean = false;
            isMBR_SamplePushedToPinPumpEnabled: Boolean = false;
            isMBR_Seek_EnterEnabled: Boolean = false;
            isMBR_Seek_ExitEnabled: Boolean = false;
            isMBR_SourceState_ChangedEnabled: Boolean = false;
            isMBR_Stop_EnterEnabled: Boolean = false;
            isMBR_Stop_ExitEnabled: Boolean = false;
            isMBR_Transcrypt_BeginEnabled: Boolean = false;
            isMBR_Transcrypt_EndEnabled: Boolean = false;
            isPlaybackInterop_PlayerStateChangedEnabled: Boolean = false;
            isPlaybackInterop_PositionChangedEnabled: Boolean = false;
            isPlaybackInterop_TransportStateChangedEnabled: Boolean = false;
            isPlaybackInterop_TrickPlayStateChangedEnabled: Boolean = false;
            isPlayback_ControlInitializedEnabled: Boolean = false;
            isPlayback_CurrentMediaLoadedEnabled: Boolean = false;
            isPlayback_DisableTimeUpdateEnabled: Boolean = false;
            isPlayback_EnableTimeUpdateEnabled: Boolean = false;
            isPlayback_ErrorOccurredEnabled: Boolean = false;
            isPlayback_ForceTimeUpdateEnabled: Boolean = false;
            isPlayback_MCPlayerAdapter_CreateInstanceEnabled: Boolean = false;
            isPlayback_MFPlayer_CreateInstanceEnabled: Boolean = false;
            isPlayback_NextMediaLoadedEnabled: Boolean = false;
            isPlayback_NextMediaStartedEnabled: Boolean = false;
            isPlayback_PBMSoundLevelChangedEnabled: Boolean = false;
            isPlayback_PlayerStateChangedEnabled: Boolean = false;
            isPlayback_SessionInitializedEnabled: Boolean = false;
            isPlayback_SetMediaEnabled: Boolean = false;
            isPlayback_SetNextMediaEnabled: Boolean = false;
            isPlayback_SwitchingToNextMediaEnabled: Boolean = false;
            isPlayback_TargetTransportStateSetEnabled: Boolean = false;
            isPlayback_TransportStateChangedEnabled: Boolean = false;
            isPlayback_WPPEnabled: Boolean = false;
            isPlaylist_ActivateEnabled: Boolean = false;
            isPlaylist_CreatedEnabled: Boolean = false;
            isPlaylist_InterpretingDataEnabled: Boolean = false;
            isPlaylist_SetDataSourceBeginEnabled: Boolean = false;
            isPlaylist_SetDataSourceEndEnabled: Boolean = false;
            isPlaylist_SetMediaEnabled: Boolean = false;
            isPlaylist_SetNextMediaEnabled: Boolean = false;
            isPlaylog_BookmarkLoadEnabled: Boolean = false;
            isPlaylog_BookmarkSaveEnabled: Boolean = false;
            isPlaylog_PlayCountLoadEnabled: Boolean = false;
            isPlaylog_PlayCountSaveEnabled: Boolean = false;
            isPlaylog_PlayedLoadEnabled: Boolean = false;
            isPlaylog_PlayedSaveEnabled: Boolean = false;
            isPresenter_Display_Video_SizeEnabled: Boolean = false;
            isPresenter_DownresEnabled: Boolean = false;
            isPresenter_FrameDroppedEnabled: Boolean = false;
            isPresenter_FrameTimesEnabled: Boolean = false;
            isPresenter_Native_Video_SizeEnabled: Boolean = false;
            isPresenter_OperationEnabled: Boolean = false;
            isPresenter_Target_Video_SizeEnabled: Boolean = false;
            isTranscoding_CompleteEnabled: Boolean = false;
            isTranscoding_Crash_StatusEnabled: Boolean = false;
            isTranscoding_Disable_HW_AccelerationEnabled: Boolean = false;
            isTranscoding_JobTypeEnabled: Boolean = false;
            isTranscoding_MF_DShow_FallbackEnabled: Boolean = false;
            isTranscoding_MF_HW_SW_FallbackEnabled: Boolean = false;
            isTranscoding_MF_HW_StatusEnabled: Boolean = false;
            isTranscoding_Reenable_HW_AccelerationEnabled: Boolean = false;
            isTranscoding_SW_Retranscode_After_CrashEnabled: Boolean = false;
            isTranscoding_StartEnabled: Boolean = false;
            traceClosedCaptions_RendererLoadTTMLFile(state: string, filepath: string): void {
                console.warn('shimmed function Pipeline.traceClosedCaptions_RendererLoadTTMLFile');
            }

            traceClosedCaptions_EnterRenderingLoop(currentPosition: number, transportState: string): void {
                console.warn('shimmed function Pipeline.traceClosedCaptions_EnterRenderingLoop');
            }

            traceClosedCaptions_ExitRenderingLoop(currentPosition: number, transportState: string, closedCaptionsOn: Boolean): void {
                console.warn('shimmed function Pipeline.traceClosedCaptions_ExitRenderingLoop');
            }

            traceClosedCaptions_On(enabled: Boolean): void {
                console.warn('shimmed function Pipeline.traceClosedCaptions_On');
            }

            traceClosedCaptions_DroppedFrame(generatedAt: number, validUntil: number, currentPosition: number): void {
                console.warn('shimmed function Pipeline.traceClosedCaptions_DroppedFrame');
            }

            traceFastStartMediaSource_Created(): void {
                console.warn('shimmed function Pipeline.traceFastStartMediaSource_Created');
            }

            traceFastStartMediaSource_ReceivedUrl(info: string): void {
                console.warn('shimmed function Pipeline.traceFastStartMediaSource_ReceivedUrl');
            }

            traceFastStartMediaSource_PlaybackStart(): void {
                console.warn('shimmed function Pipeline.traceFastStartMediaSource_PlaybackStart');
            }

            tracePlayback_WPP(info: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_WPP');
            }

            tracePlayback_TargetTransportStateSet(wannaBe: string, current: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_TargetTransportStateSet');
            }

            tracePlaylist_SetDataSourceBegin(): void {
                console.warn('shimmed function Pipeline.tracePlaylist_SetDataSourceBegin');
            }

            tracePlaylist_SetDataSourceEnd(): void {
                console.warn('shimmed function Pipeline.tracePlaylist_SetDataSourceEnd');
            }

            tracePlaylist_InterpretingData(): void {
                console.warn('shimmed function Pipeline.tracePlaylist_InterpretingData');
            }

            tracePlaylist_Activate(index: number, startPosition: number, shuffle: Boolean, repeat: Boolean): void {
                console.warn('shimmed function Pipeline.tracePlaylist_Activate');
            }

            tracePlaylist_SetMedia(source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number): void {
                console.warn('shimmed function Pipeline.tracePlaylist_SetMedia');
            }

            tracePlaylist_SetNextMedia(source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number): void {
                console.warn('shimmed function Pipeline.tracePlaylist_SetNextMedia');
            }

            tracePlaylist_Created(): void {
                console.warn('shimmed function Pipeline.tracePlaylist_Created');
            }

            tracePlaylog_BookmarkLoad(positionMS: number, playFromBookmark: Boolean): void {
                console.warn('shimmed function Pipeline.tracePlaylog_BookmarkLoad');
            }

            tracePlaylog_BookmarkSave(positionMS: number): void {
                console.warn('shimmed function Pipeline.tracePlaylog_BookmarkSave');
            }

            tracePlaylog_PlayCountLoad(playCount: number): void {
                console.warn('shimmed function Pipeline.tracePlaylog_PlayCountLoad');
            }

            tracePlaylog_PlayCountSave(playCount: number): void {
                console.warn('shimmed function Pipeline.tracePlaylog_PlayCountSave');
            }

            tracePlaylog_PlayedLoad(played: Boolean): void {
                console.warn('shimmed function Pipeline.tracePlaylog_PlayedLoad');
            }

            tracePlaylog_PlayedSave(played: Boolean): void {
                console.warn('shimmed function Pipeline.tracePlaylog_PlayedSave');
            }

            traceDRM_RootLicenseRefresh_Account(subscription: Boolean, tunerActivated: Boolean): void {
                console.warn('shimmed function Pipeline.traceDRM_RootLicenseRefresh_Account');
            }

            traceDRM_RootLicenseRefresh_Details(now: string, lastRefresh: string, spanMs: number): void {
                console.warn('shimmed function Pipeline.traceDRM_RootLicenseRefresh_Details');
            }

            traceDRM_RootLicenseRefresh_Invoked(): void {
                console.warn('shimmed function Pipeline.traceDRM_RootLicenseRefresh_Invoked');
            }

            traceDRM_RootLicenseRefresh_Completed(status: string): void {
                console.warn('shimmed function Pipeline.traceDRM_RootLicenseRefresh_Completed');
            }

            traceDRM_ReportMetering_Account(subscription: Boolean, tunerActivated: Boolean, meteringCertificate: string): void {
                console.warn('shimmed function Pipeline.traceDRM_ReportMetering_Account');
            }

            traceDRM_ReportMetering_Invoked(): void {
                console.warn('shimmed function Pipeline.traceDRM_ReportMetering_Invoked');
            }

            traceDRM_ReportMetering_Completed(status: string): void {
                console.warn('shimmed function Pipeline.traceDRM_ReportMetering_Completed');
            }

            traceDRM_ReportMetering_NoDataToReport(): void {
                console.warn('shimmed function Pipeline.traceDRM_ReportMetering_NoDataToReport');
            }

            traceDRM_DeleteLicense_Invoked(kid: string): void {
                console.warn('shimmed function Pipeline.traceDRM_DeleteLicense_Invoked');
            }

            traceDRM_DeleteLicense_Completed(kid: string, hresult: number): void {
                console.warn('shimmed function Pipeline.traceDRM_DeleteLicense_Completed');
            }

            traceClosedCaptions_RendererGetTTMLFilepath(state: string, smid: string, miid: string, lcid: number, filepath: string): void {
                console.warn('shimmed function Pipeline.traceClosedCaptions_RendererGetTTMLFilepath');
            }

            tracePresenter_Operation(op: string, lastPTS: number, splashOwnedFrameCount: number, stepCount: number, state: number, connectedState: number): void {
                console.warn('shimmed function Pipeline.tracePresenter_Operation');
            }

            traceLEQ_Enabled(enabled: Boolean): void {
                console.warn('shimmed function Pipeline.traceLEQ_Enabled');
            }

            traceLEQ_SetFormat(format: number, channels: number, samplesPerChannel: number, action: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceLEQ_SetFormat');
            }

            traceLEQ_Process_Start(): void {
                console.warn('shimmed function Pipeline.traceLEQ_Process_Start');
            }

            traceLEQ_Process_Complete(passthrough: Boolean, hresult: number): void {
                console.warn('shimmed function Pipeline.traceLEQ_Process_Complete');
            }

            tracePlaybackInterop_PlayerStateChanged(state: number): void {
                console.warn('shimmed function Pipeline.tracePlaybackInterop_PlayerStateChanged');
            }

            tracePlaybackInterop_PositionChanged(position: number, minSeekPosition: number, maxSeekPosition: number, endOfMedia: Boolean, canSeek: Boolean): void {
                console.warn('shimmed function Pipeline.tracePlaybackInterop_PositionChanged');
            }

            tracePlaybackInterop_TransportStateChanged(state: number): void {
                console.warn('shimmed function Pipeline.tracePlaybackInterop_TransportStateChanged');
            }

            tracePlaybackInterop_TrickPlayStateChanged(state: number): void {
                console.warn('shimmed function Pipeline.tracePlaybackInterop_TrickPlayStateChanged');
            }

            tracePlayback_MCPlayerAdapter_CreateInstance(hresult: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_MCPlayerAdapter_CreateInstance');
            }

            tracePlayback_MFPlayer_CreateInstance(hresult: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_MFPlayer_CreateInstance');
            }

            tracePlayback_ControlInitialized(): void {
                console.warn('shimmed function Pipeline.tracePlayback_ControlInitialized');
            }

            tracePlayback_SessionInitialized(): void {
                console.warn('shimmed function Pipeline.tracePlayback_SessionInitialized');
            }

            tracePlayback_PlayerStateChanged(newState: string, oldState: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_PlayerStateChanged');
            }

            tracePlayback_TransportStateChanged(newState: string, oldState: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_TransportStateChanged');
            }

            tracePlayback_SetMedia(source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number, durationMsec: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_SetMedia');
            }

            tracePlayback_SetNextMedia(readyForNext: Boolean, source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_SetNextMedia');
            }

            tracePlayback_CurrentMediaLoaded(source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number, durationMsec: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_CurrentMediaLoaded');
            }

            tracePlayback_NextMediaLoaded(source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number, durationMsec: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_NextMediaLoaded');
            }

            tracePlayback_SwitchingToNextMedia(source: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_SwitchingToNextMedia');
            }

            tracePlayback_NextMediaStarted(source: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_NextMediaStarted');
            }

            tracePlayback_ErrorOccurred(errorCode: number, extendedCode: number, context: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_ErrorOccurred');
            }

            tracePlayback_EnableTimeUpdate(currentPositionMsec: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_EnableTimeUpdate');
            }

            tracePlayback_DisableTimeUpdate(currentPositionMsec: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_DisableTimeUpdate');
            }

            tracePlayback_ForceTimeUpdate(currentPositionMsec: number): void {
                console.warn('shimmed function Pipeline.tracePlayback_ForceTimeUpdate');
            }

            tracePlayback_PBMSoundLevelChanged(soundLevel: string, currentTransportState: string): void {
                console.warn('shimmed function Pipeline.tracePlayback_PBMSoundLevelChanged');
            }

            traceMBR_PinDecompress_End(streamType: number, frameSizeInBytes: number, durationHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinDecompress_End');
            }

            traceMBR_PinDecompress_Call(streamType: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinDecompress_Call');
            }

            traceMBR_PinDecompress_Return(streamType: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinDecompress_Return');
            }

            traceMBR_Transcrypt_Begin(streamType: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Transcrypt_Begin');
            }

            traceMBR_Transcrypt_End(streamType: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Transcrypt_End');
            }

            traceMBR_DMO_ProcessInput_Return(streamType: number, sampleTimeHns: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceMBR_DMO_ProcessInput_Return');
            }

            traceMBR_DMO_ProcessOutput_Return(streamType: number, hresult: number, durationHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_DMO_ProcessOutput_Return');
            }

            traceMBR_NextChunk(streamType: number, chunkIndex: number, bitrateBps: number, sampleTimeHns: number, durationHns: number, sizeInBytes: number, quality: number, targetQuality: number, totalBandwidthBps: number, targetBandwidthBps: number, bufferSizeMs: number): void {
                console.warn('shimmed function Pipeline.traceMBR_NextChunk');
            }

            traceMBR_ManifestStream(streamType: number, id: number, bitrate: number, width: number, height: number, channels: number): void {
                console.warn('shimmed function Pipeline.traceMBR_ManifestStream');
            }

            traceTranscoding_JobType(jobType: number): void {
                console.warn('shimmed function Pipeline.traceTranscoding_JobType');
            }

            traceTranscoding_Start(): void {
                console.warn('shimmed function Pipeline.traceTranscoding_Start');
            }

            traceTranscoding_Complete(hresult: number): void {
                console.warn('shimmed function Pipeline.traceTranscoding_Complete');
            }

            traceTranscoding_MF_DShow_Fallback(): void {
                console.warn('shimmed function Pipeline.traceTranscoding_MF_DShow_Fallback');
            }

            traceTranscoding_MF_HW_SW_Fallback(): void {
                console.warn('shimmed function Pipeline.traceTranscoding_MF_HW_SW_Fallback');
            }

            traceTranscoding_MF_HW_Status(hw_Status: Boolean): void {
                console.warn('shimmed function Pipeline.traceTranscoding_MF_HW_Status');
            }

            traceTranscoding_Crash_Status(crashCount: number, maxCrashCount: number, hw_Status: Boolean, isConfirmed: Boolean, hresult: number): void {
                console.warn('shimmed function Pipeline.traceTranscoding_Crash_Status');
            }

            traceTranscoding_Disable_HW_Acceleration(): void {
                console.warn('shimmed function Pipeline.traceTranscoding_Disable_HW_Acceleration');
            }

            traceTranscoding_Reenable_HW_Acceleration(): void {
                console.warn('shimmed function Pipeline.traceTranscoding_Reenable_HW_Acceleration');
            }

            traceTranscoding_SW_Retranscode_After_Crash(): void {
                console.warn('shimmed function Pipeline.traceTranscoding_SW_Retranscode_After_Crash');
            }

            tracePresenter_Downres(width: number, height: number): void {
                console.warn('shimmed function Pipeline.tracePresenter_Downres');
            }

            tracePresenter_Native_Video_Size(width: number, height: number): void {
                console.warn('shimmed function Pipeline.tracePresenter_Native_Video_Size');
            }

            tracePresenter_Target_Video_Size(width: number, height: number): void {
                console.warn('shimmed function Pipeline.tracePresenter_Target_Video_Size');
            }

            tracePresenter_Display_Video_Size(width: number, height: number): void {
                console.warn('shimmed function Pipeline.tracePresenter_Display_Video_Size');
            }

            tracePresenter_FrameTimes(frameNumber: number, timestampStream: number, timestampQPC: number, systime100ns: number, streamtime100ns: number, freqQPC: number): void {
                console.warn('shimmed function Pipeline.tracePresenter_FrameTimes');
            }

            tracePresenter_FrameDropped(framesDropped: number): void {
                console.warn('shimmed function Pipeline.tracePresenter_FrameDropped');
            }

            traceMBR_Pause_Enter(currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Pause_Enter');
            }

            traceMBR_Pause_Exit(currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Pause_Exit');
            }

            traceMBR_Run_Enter(startTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Run_Enter');
            }

            traceMBR_Run_Lock(currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Run_Lock');
            }

            traceMBR_Run_Exit(currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Run_Exit');
            }

            traceMBR_Seek_Enter(possitionHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Seek_Enter');
            }

            traceMBR_Seek_Exit(currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Seek_Exit');
            }

            traceMBR_Stop_Enter(currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Stop_Enter');
            }

            traceMBR_Stop_Exit(currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Stop_Exit');
            }

            traceMBR_SourceState_Changed(filterState: number, oldState: number, newState: number): void {
                console.warn('shimmed function Pipeline.traceMBR_SourceState_Changed');
            }

            traceMBR_PinPumpState_Changed(streamType: number, oldState: number, newState: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinPumpState_Changed');
            }

            traceMBR_EOS(streamType: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_EOS');
            }

            traceMBR_Preroll_Exit(streamType: number, initialAudioTimeHns: number, initialVideoTimeHns: number, newStartBaseTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Preroll_Exit');
            }

            traceMBR_Preroll_Forced_Exit(streamType: number, initialAudioTimeHns: number, initialVideoTimeHns: number, newStartBaseTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_Preroll_Forced_Exit');
            }

            traceMBR_PinBeginFlush_Enter(streamType: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinBeginFlush_Enter');
            }

            traceMBR_PinBeginFlush_Exit(streamType: number, currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinBeginFlush_Exit');
            }

            traceMBR_PinEndFlush_Enter(streamType: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinEndFlush_Enter');
            }

            traceMBR_PinEndFlush_Exit(streamType: number, currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinEndFlush_Exit');
            }

            traceMBR_GotNewSample(streamType: number, sampleTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_GotNewSample');
            }

            traceMBR_SamplePushedToPinPump(streamType: number, sampleTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_SamplePushedToPinPump');
            }

            traceMBR_SamplePushedDownStream_Begin(streamType: number, sampleTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_SamplePushedDownStream_Begin');
            }

            traceMBR_SamplePushedDownStream_End(streamType: number, sampleTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_SamplePushedDownStream_End');
            }

            traceMBR_BufferStatus(currentStreamTimeHns: number, bufferSizeMs: number): void {
                console.warn('shimmed function Pipeline.traceMBR_BufferStatus');
            }

            traceMBR_DropFrame(totalFramesDropped: number, sampleTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_DropFrame');
            }

            traceMBR_PinDecompress_Begin(streamType: number, sampleTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function Pipeline.traceMBR_PinDecompress_Begin');
            }

        }
        export class PipelineTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function PipelineTemplate.eventEnabled');
            }

            traceTemplate_x(_MCGEN_EventIndex: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_x');
            }

            traceTemplate_xd(_MCGEN_EventIndex: number, currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_xd');
            }

            traceTemplate_xx(_MCGEN_EventIndex: number, startTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_xx');
            }

            traceTemplate_ix(_MCGEN_EventIndex: number, possitionHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_ix');
            }

            traceTemplate_ddd(_MCGEN_EventIndex: number, filterState: number, oldState: number, newState: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_ddd');
            }

            traceTemplate_qdd(_MCGEN_EventIndex: number, streamType: number, oldState: number, newState: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qdd');
            }

            traceTemplate_qx(_MCGEN_EventIndex: number, streamType: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qx');
            }

            traceTemplate_dxxx(_MCGEN_EventIndex: number, streamType: number, initialAudioTimeHns: number, initialVideoTimeHns: number, newStartBaseTimeHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_dxxx');
            }

            traceTemplate_qxd(_MCGEN_EventIndex: number, streamType: number, currentStreamTimeHns: number, hresult: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qxd');
            }

            traceTemplate_qxx(_MCGEN_EventIndex: number, streamType: number, sampleTimeHns: number, currentStreamTimeHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qxx');
            }

            traceTemplate_qqx(_MCGEN_EventIndex: number, streamType: number, frameSizeInBytes: number, durationHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qqx');
            }

            traceTemplate_q(_MCGEN_EventIndex: number, streamType: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_q');
            }

            traceTemplate_qdx(_MCGEN_EventIndex: number, streamType: number, hresult: number, durationHns: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qdx');
            }

            traceTemplate_qdqxxqqqqqq(_MCGEN_EventIndex: number, streamType: number, chunkIndex: number, bitrateBps: number, sampleTimeHns: number, durationHns: number, sizeInBytes: number, quality: number, targetQuality: number, totalBandwidthBps: number, targetBandwidthBps: number, bufferSizeMs: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qdqxxqqqqqq');
            }

            traceTemplate_qqqqqq(_MCGEN_EventIndex: number, streamType: number, id: number, bitrate: number, width: number, height: number, channels: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qqqqqq');
            }

            traceTemplate_d(_MCGEN_EventIndex: number, jobType: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_d');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_t(_MCGEN_EventIndex: number, hw_Status: Boolean): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_t');
            }

            traceTemplate_qqttd(_MCGEN_EventIndex: number, crashCount: number, maxCrashCount: number, hw_Status: Boolean, isConfirmed: Boolean, hresult: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qqttd');
            }

            traceTemplate_qq(_MCGEN_EventIndex: number, width: number, height: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qq');
            }

            traceTemplate_xxxxxx(_MCGEN_EventIndex: number, frameNumber: number, timestampStream: number, timestampQPC: number, systime100ns: number, streamtime100ns: number, freqQPC: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_xxxxxx');
            }

            traceTemplate_zxqqdd(_MCGEN_EventIndex: number, op: string, lastPTS: number, splashOwnedFrameCount: number, stepCount: number, state: number, connectedState: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_zxqqdd');
            }

            traceTemplate_qqqqd(_MCGEN_EventIndex: number, format: number, channels: number, samplesPerChannel: number, action: number, hresult: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qqqqd');
            }

            traceTemplate_td(_MCGEN_EventIndex: number, passthrough: Boolean, hresult: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_td');
            }

            traceTemplate_xxxtt(_MCGEN_EventIndex: number, position: number, minSeekPosition: number, maxSeekPosition: number, endOfMedia: Boolean, canSeek: Boolean): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_xxxtt');
            }

            traceTemplate_zz(_MCGEN_EventIndex: number, newState: string, oldState: string): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_zz');
            }

            traceTemplate_zzzqqq(_MCGEN_EventIndex: number, source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number, durationMsec: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_zzzqqq');
            }

            traceTemplate_tzzzqq(_MCGEN_EventIndex: number, readyForNext: Boolean, source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_tzzzqq');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, source: string): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_z');
            }

            traceTemplate_qqz(_MCGEN_EventIndex: number, errorCode: number, extendedCode: number, context: string): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qqz');
            }

            traceTemplate_qqtt(_MCGEN_EventIndex: number, index: number, startPosition: number, shuffle: Boolean, repeat: Boolean): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qqtt');
            }

            traceTemplate_zzzqq(_MCGEN_EventIndex: number, source: string, mediaType: string, protectionState: string, startPosition: number, cookie: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_zzzqq');
            }

            traceTemplate_qt(_MCGEN_EventIndex: number, positionMS: number, playFromBookmark: Boolean): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qt');
            }

            traceTemplate_tt(_MCGEN_EventIndex: number, subscription: Boolean, tunerActivated: Boolean): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_tt');
            }

            traceTemplate_zzx(_MCGEN_EventIndex: number, now: string, lastRefresh: string, spanMs: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_zzx');
            }

            traceTemplate_ttz(_MCGEN_EventIndex: number, subscription: Boolean, tunerActivated: Boolean, meteringCertificate: string): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_ttz');
            }

            traceTemplate_zd(_MCGEN_EventIndex: number, kid: string, hresult: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_zd');
            }

            traceTemplate_zzzqz(_MCGEN_EventIndex: number, state: string, smid: string, miid: string, lcid: number, filepath: string): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_zzzqz');
            }

            traceTemplate_qz(_MCGEN_EventIndex: number, currentPosition: number, transportState: string): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qz');
            }

            traceTemplate_qzt(_MCGEN_EventIndex: number, currentPosition: number, transportState: string, closedCaptionsOn: Boolean): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qzt');
            }

            traceTemplate_qqq(_MCGEN_EventIndex: number, generatedAt: number, validUntil: number, currentPosition: number): void {
                console.warn('shimmed function PipelineTemplate.traceTemplate_qqq');
            }

        }
        export class Providers {
            isAddAlbumAndFindTrackIdBasedOnMetadataEndEnabled: Boolean;
            isAddAlbumAndFindTrackIdBasedOnMetadataStartEnabled: Boolean;
            isAddAlbumAndFindTrackIdEndEnabled: Boolean;
            isAddAlbumAndFindTrackIdStartEnabled: Boolean;
            isAddAlbumWithTitleArtistEnabled: Boolean;
            isAddAudioAlbumEndEnabled: Boolean;
            isAddAudioAlbumStartEnabled: Boolean;
            isAddFileEndEnabled: Boolean;
            isAddFileStartEnabled: Boolean;
            isAddFolderEndEnabled: Boolean;
            isAddFolderStartEnabled: Boolean;
            isAddMediaEndEnabled: Boolean;
            isAddMediaStartEnabled: Boolean;
            isAddPersonEndEnabled: Boolean;
            isAddPersonLinkEndEnabled: Boolean;
            isAddPersonLinkStartEnabled: Boolean;
            isAddPersonLinksEndEnabled: Boolean;
            isAddPersonLinksStartEnabled: Boolean;
            isAddPersonStartEnabled: Boolean;
            isAddTrackEndEnabled: Boolean;
            isAddTrackFileEndEnabled: Boolean;
            isAddTrackFileStartEnabled: Boolean;
            isAddTrackStartEnabled: Boolean;
            isAddingAlbumEnabled: Boolean;
            isAddingFileEnabled: Boolean;
            isAddingFolderEnabled: Boolean;
            isAddingPersonEnabled: Boolean;
            isAddingPersonLinkEnabled: Boolean;
            isAddingTrackEnabled: Boolean;
            isAddingTrackEntryEnabled: Boolean;
            isAddingUnknownArtistEnabled: Boolean;
            isAlbumAsVariousArtistsEnabled: Boolean;
            isFindAndGetAudioTrackEndEnabled: Boolean;
            isFindAndGetAudioTrackStartEnabled: Boolean;
            isFindArtistAndAlbumEndEnabled: Boolean;
            isFindArtistAndAlbumStartEnabled: Boolean;
            isFindTrackIdAndAlbumBasedOnTrackSmidEndEnabled: Boolean;
            isFindTrackIdAndAlbumBasedOnTrackSmidStartEnabled: Boolean;
            isFoundExistingTrackEnabled: Boolean;
            isFoundTrackAndAlbumEnabled: Boolean;
            isFoundTrackBySmidEnabled: Boolean;
            isPromotingTrackArtistEnabled: Boolean;
            isRecomputeAlbumReleaseYearEndEnabled: Boolean;
            isRecomputeAlbumReleaseYearStartEnabled: Boolean;
            isReflectTrackFilesStateEndEnabled: Boolean;
            isReflectTrackFilesStateStartEnabled: Boolean;
            isSetTrackRatingFromFileEnabled: Boolean;
            isSetUnknownGenreEnabled: Boolean;
            isSplitExistingFileEnabled: Boolean;
            isTrackIsAudioBookEnabled: Boolean;
            isUpdateAlbumSetGenreEnabled: Boolean;
            isUpdateAlbumVisibilityEnabled: Boolean;
            isUpdateCurrentAudioAlbumEndEnabled: Boolean;
            isUpdateCurrentAudioAlbumStartEnabled: Boolean;
            isUpdateCurrentTrackEndEnabled: Boolean;
            isUpdateCurrentTrackStartEnabled: Boolean;
            isUpdateFileEndEnabled: Boolean;
            isUpdateFileStartEnabled: Boolean;
            isUpdateOldAlbumVisibilityEnabled: Boolean;
            isUpdatePlaylistContentsEndEnabled: Boolean;
            isUpdatePlaylistContentsStartEnabled: Boolean;
            isUpdatingAlbumAcquisitionDateEnabled: Boolean;
            isUpdatingAlbumEnabled: Boolean;
            isUpdatingFileCountsEnabled: Boolean;
            isUpdatingFileEnabled: Boolean;
            isUpdatingPersonEnabled: Boolean;
            isUpdatingPlaylistItemWithMediaIdEnabled: Boolean;
            isUpdatingTrackAcquisitionDateEnabled: Boolean;
            isUpdatingTrackEnabled: Boolean;
            traceAddingTrackEntry(albumId: number, trackTitle: string, trackNumber: number): void {
                console.warn('shimmed function Providers.traceAddingTrackEntry');
            }

            traceTrackIsAudioBook(): void {
                console.warn('shimmed function Providers.traceTrackIsAudioBook');
            }

            traceFoundExistingTrack(trackId: number): void {
                console.warn('shimmed function Providers.traceFoundExistingTrack');
            }

            traceAddingUnknownArtist(): void {
                console.warn('shimmed function Providers.traceAddingUnknownArtist');
            }

            traceUpdateAlbumSetGenre(genreId: number): void {
                console.warn('shimmed function Providers.traceUpdateAlbumSetGenre');
            }

            traceSetUnknownGenre(): void {
                console.warn('shimmed function Providers.traceSetUnknownGenre');
            }

            traceAddingTrack(trackName: string): void {
                console.warn('shimmed function Providers.traceAddingTrack');
            }

            traceUpdatingTrack(trackName: string): void {
                console.warn('shimmed function Providers.traceUpdatingTrack');
            }

            traceSetTrackRatingFromFile(trackTitle: string, rating: number): void {
                console.warn('shimmed function Providers.traceSetTrackRatingFromFile');
            }

            traceSplitExistingFile(oldTrackId: number, newTrackId: number): void {
                console.warn('shimmed function Providers.traceSplitExistingFile');
            }

            traceAddingFolder(folderPath: string): void {
                console.warn('shimmed function Providers.traceAddingFolder');
            }

            traceAddingFile(filename: string): void {
                console.warn('shimmed function Providers.traceAddingFile');
            }

            traceUpdatingFile(filename: string): void {
                console.warn('shimmed function Providers.traceUpdatingFile');
            }

            traceUpdatingFileCounts(): void {
                console.warn('shimmed function Providers.traceUpdatingFileCounts');
            }

            traceUpdateOldAlbumVisibility(albumId: number): void {
                console.warn('shimmed function Providers.traceUpdateOldAlbumVisibility');
            }

            traceUpdateAlbumVisibility(albumId: number): void {
                console.warn('shimmed function Providers.traceUpdateAlbumVisibility');
            }

            traceUpdatingTrackAcquisitionDate(trackId: number): void {
                console.warn('shimmed function Providers.traceUpdatingTrackAcquisitionDate');
            }

            traceUpdatingAlbumAcquisitionDate(albumId: number): void {
                console.warn('shimmed function Providers.traceUpdatingAlbumAcquisitionDate');
            }

            traceUpdatingPlaylistItemWithMediaId(playlistContentId: number, mediaId: number): void {
                console.warn('shimmed function Providers.traceUpdatingPlaylistItemWithMediaId');
            }

            traceUpdateCurrentTrackEnd(): void {
                console.warn('shimmed function Providers.traceUpdateCurrentTrackEnd');
            }

            traceRecomputeAlbumReleaseYearStart(): void {
                console.warn('shimmed function Providers.traceRecomputeAlbumReleaseYearStart');
            }

            traceRecomputeAlbumReleaseYearEnd(): void {
                console.warn('shimmed function Providers.traceRecomputeAlbumReleaseYearEnd');
            }

            traceAddTrackFileStart(): void {
                console.warn('shimmed function Providers.traceAddTrackFileStart');
            }

            traceAddTrackFileEnd(): void {
                console.warn('shimmed function Providers.traceAddTrackFileEnd');
            }

            traceReflectTrackFilesStateStart(): void {
                console.warn('shimmed function Providers.traceReflectTrackFilesStateStart');
            }

            traceReflectTrackFilesStateEnd(): void {
                console.warn('shimmed function Providers.traceReflectTrackFilesStateEnd');
            }

            traceAddFileStart(): void {
                console.warn('shimmed function Providers.traceAddFileStart');
            }

            traceAddFileEnd(): void {
                console.warn('shimmed function Providers.traceAddFileEnd');
            }

            traceUpdateFileStart(): void {
                console.warn('shimmed function Providers.traceUpdateFileStart');
            }

            traceUpdateFileEnd(): void {
                console.warn('shimmed function Providers.traceUpdateFileEnd');
            }

            traceAddFolderStart(): void {
                console.warn('shimmed function Providers.traceAddFolderStart');
            }

            traceAddFolderEnd(): void {
                console.warn('shimmed function Providers.traceAddFolderEnd');
            }

            traceUpdatePlaylistContentsStart(): void {
                console.warn('shimmed function Providers.traceUpdatePlaylistContentsStart');
            }

            traceUpdatePlaylistContentsEnd(): void {
                console.warn('shimmed function Providers.traceUpdatePlaylistContentsEnd');
            }

            traceFoundTrackBySmid(): void {
                console.warn('shimmed function Providers.traceFoundTrackBySmid');
            }

            traceFoundTrackAndAlbum(albumId: number, artistId: number, trackId: number): void {
                console.warn('shimmed function Providers.traceFoundTrackAndAlbum');
            }

            tracePromotingTrackArtist(albumTitle: string): void {
                console.warn('shimmed function Providers.tracePromotingTrackArtist');
            }

            traceAlbumAsVariousArtists(): void {
                console.warn('shimmed function Providers.traceAlbumAsVariousArtists');
            }

            traceAddingAlbum(albumName: string): void {
                console.warn('shimmed function Providers.traceAddingAlbum');
            }

            traceAddAlbumWithTitleArtist(albumTitle: string, artistId: number): void {
                console.warn('shimmed function Providers.traceAddAlbumWithTitleArtist');
            }

            traceUpdatingAlbum(): void {
                console.warn('shimmed function Providers.traceUpdatingAlbum');
            }

            traceAddingPerson(personName: string): void {
                console.warn('shimmed function Providers.traceAddingPerson');
            }

            traceUpdatingPerson(personName: string): void {
                console.warn('shimmed function Providers.traceUpdatingPerson');
            }

            traceAddingPersonLink(personId: number, mediaId: number): void {
                console.warn('shimmed function Providers.traceAddingPersonLink');
            }

            traceAddMediaStart(): void {
                console.warn('shimmed function Providers.traceAddMediaStart');
            }

            traceAddMediaEnd(): void {
                console.warn('shimmed function Providers.traceAddMediaEnd');
            }

            traceAddTrackStart(): void {
                console.warn('shimmed function Providers.traceAddTrackStart');
            }

            traceAddTrackEnd(): void {
                console.warn('shimmed function Providers.traceAddTrackEnd');
            }

            traceAddAlbumAndFindTrackIdStart(): void {
                console.warn('shimmed function Providers.traceAddAlbumAndFindTrackIdStart');
            }

            traceAddAlbumAndFindTrackIdEnd(): void {
                console.warn('shimmed function Providers.traceAddAlbumAndFindTrackIdEnd');
            }

            traceFindTrackIdAndAlbumBasedOnTrackSmidStart(): void {
                console.warn('shimmed function Providers.traceFindTrackIdAndAlbumBasedOnTrackSmidStart');
            }

            traceFindTrackIdAndAlbumBasedOnTrackSmidEnd(): void {
                console.warn('shimmed function Providers.traceFindTrackIdAndAlbumBasedOnTrackSmidEnd');
            }

            traceAddAlbumAndFindTrackIdBasedOnMetadataStart(): void {
                console.warn('shimmed function Providers.traceAddAlbumAndFindTrackIdBasedOnMetadataStart');
            }

            traceAddAlbumAndFindTrackIdBasedOnMetadataEnd(): void {
                console.warn('shimmed function Providers.traceAddAlbumAndFindTrackIdBasedOnMetadataEnd');
            }

            traceAddAudioAlbumStart(): void {
                console.warn('shimmed function Providers.traceAddAudioAlbumStart');
            }

            traceAddAudioAlbumEnd(): void {
                console.warn('shimmed function Providers.traceAddAudioAlbumEnd');
            }

            traceFindArtistAndAlbumStart(): void {
                console.warn('shimmed function Providers.traceFindArtistAndAlbumStart');
            }

            traceFindArtistAndAlbumEnd(): void {
                console.warn('shimmed function Providers.traceFindArtistAndAlbumEnd');
            }

            traceUpdateCurrentAudioAlbumStart(): void {
                console.warn('shimmed function Providers.traceUpdateCurrentAudioAlbumStart');
            }

            traceUpdateCurrentAudioAlbumEnd(): void {
                console.warn('shimmed function Providers.traceUpdateCurrentAudioAlbumEnd');
            }

            traceAddPersonLinksStart(): void {
                console.warn('shimmed function Providers.traceAddPersonLinksStart');
            }

            traceAddPersonLinksEnd(): void {
                console.warn('shimmed function Providers.traceAddPersonLinksEnd');
            }

            traceAddPersonStart(): void {
                console.warn('shimmed function Providers.traceAddPersonStart');
            }

            traceAddPersonEnd(): void {
                console.warn('shimmed function Providers.traceAddPersonEnd');
            }

            traceAddPersonLinkStart(): void {
                console.warn('shimmed function Providers.traceAddPersonLinkStart');
            }

            traceAddPersonLinkEnd(): void {
                console.warn('shimmed function Providers.traceAddPersonLinkEnd');
            }

            traceFindAndGetAudioTrackStart(): void {
                console.warn('shimmed function Providers.traceFindAndGetAudioTrackStart');
            }

            traceFindAndGetAudioTrackEnd(): void {
                console.warn('shimmed function Providers.traceFindAndGetAudioTrackEnd');
            }

            traceUpdateCurrentTrackStart(): void {
                console.warn('shimmed function Providers.traceUpdateCurrentTrackStart');
            }

        }
        export class ProvidersTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function ProvidersTemplate.eventEnabled');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function ProvidersTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_qqq(_MCGEN_EventIndex: number, albumId: number, artistId: number, trackId: number): void {
                console.warn('shimmed function ProvidersTemplate.traceTemplate_qqq');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, albumTitle: string): void {
                console.warn('shimmed function ProvidersTemplate.traceTemplate_z');
            }

            traceTemplate_zq(_MCGEN_EventIndex: number, albumTitle: string, artistId: number): void {
                console.warn('shimmed function ProvidersTemplate.traceTemplate_zq');
            }

            traceTemplate_qq(_MCGEN_EventIndex: number, personId: number, mediaId: number): void {
                console.warn('shimmed function ProvidersTemplate.traceTemplate_qq');
            }

            traceTemplate_qzq(_MCGEN_EventIndex: number, albumId: number, trackTitle: string, trackNumber: number): void {
                console.warn('shimmed function ProvidersTemplate.traceTemplate_qzq');
            }

            traceTemplate_q(_MCGEN_EventIndex: number, trackId: number): void {
                console.warn('shimmed function ProvidersTemplate.traceTemplate_q');
            }

        }
        export class ServiceEventProvider {
            isFamilyUserPropertyEnabled: Boolean = false;
            isPurchaseHistoryGrovelCompletedEnabled: Boolean = false;
            isPurchaseHistoryGrovelErrorEnabled: Boolean = false;
            isPurchaseHistoryGrovelStartedEnabled: Boolean = false;
            isServiceAuthHeaderEnabled: Boolean = false;
            isServiceAuthHeaderErrorEnabled: Boolean = false;
            isServiceFamilyUserCompletedEnabled: Boolean = false;
            isServiceFamilyUserStartedEnabled: Boolean = false;
            isServiceForgetUserInformationCompletedEnabled: Boolean = false;
            isServiceForgetUserInformationStartedEnabled: Boolean = false;
            isServiceGetTicketCompletedEnabled: Boolean = false;
            isServiceGetTicketErrorEnabled: Boolean = false;
            isServiceGetTicketStartedEnabled: Boolean = false;
            isServiceRefreshSignInCompletedEnabled: Boolean = false;
            isServiceRefreshSignInStartedEnabled: Boolean = false;
            isServiceSignInCompletedEnabled: Boolean = false;
            isServiceSignInErrorEnabled: Boolean = false;
            isServiceSignInStartedEnabled: Boolean = false;
            isServiceSignOutCompletedEnabled: Boolean = false;
            isServiceSignOutStartedEnabled: Boolean = false;
            isServiceSubscriptionInfoCompletedEnabled: Boolean = false;
            isServiceSubscriptionInfoStartedEnabled: Boolean = false;
            isServiceUserChangedEnabled: Boolean = false;
            isServiceUserProfileCompletedEnabled: Boolean = false;
            isServiceUserProfilePropertyEnabled: Boolean = false;
            isServiceUserProfileStartedEnabled: Boolean = false;
            isServiceZestSignInCompletedEnabled: Boolean = false;
            isServiceZestSignInStartedEnabled: Boolean = false;
            isSubscriptionInfoPropertyEnabled: Boolean = false;
            traceServiceAuthHeaderError(hresult: number): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceAuthHeaderError');
            }

            tracePurchaseHistoryGrovelStarted(): void {
                console.warn('shimmed function ServiceEventProvider.tracePurchaseHistoryGrovelStarted');
            }

            tracePurchaseHistoryGrovelCompleted(hresult: number): void {
                console.warn('shimmed function ServiceEventProvider.tracePurchaseHistoryGrovelCompleted');
            }

            tracePurchaseHistoryGrovelError(hresult: number): void {
                console.warn('shimmed function ServiceEventProvider.tracePurchaseHistoryGrovelError');
            }

            traceServiceSignInError(hresult: number): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceSignInError');
            }

            traceServiceGetTicketStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceGetTicketStarted');
            }

            traceServiceGetTicketCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceGetTicketCompleted');
            }

            traceServiceGetTicketError(hresult: number): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceGetTicketError');
            }

            traceServiceSignOutStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceSignOutStarted');
            }

            traceServiceSignOutCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceSignOutCompleted');
            }

            traceServiceZestSignInStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceZestSignInStarted');
            }

            traceServiceZestSignInCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceZestSignInCompleted');
            }

            traceServiceRefreshSignInStarted(): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceRefreshSignInStarted');
            }

            traceServiceRefreshSignInCompleted(): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceRefreshSignInCompleted');
            }

            traceServiceAuthHeader(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceAuthHeader');
            }

            traceServiceUserProfileProperty(name: string, value: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceUserProfileProperty');
            }

            traceServiceUserProfileStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceUserProfileStarted');
            }

            traceServiceUserProfileCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceUserProfileCompleted');
            }

            traceFamilyUserProperty(name: string, value: string): void {
                console.warn('shimmed function ServiceEventProvider.traceFamilyUserProperty');
            }

            traceServiceFamilyUserStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceFamilyUserStarted');
            }

            traceServiceFamilyUserCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceFamilyUserCompleted');
            }

            traceSubscriptionInfoProperty(name: string, value: string): void {
                console.warn('shimmed function ServiceEventProvider.traceSubscriptionInfoProperty');
            }

            traceServiceSubscriptionInfoStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceSubscriptionInfoStarted');
            }

            traceServiceSubscriptionInfoCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceSubscriptionInfoCompleted');
            }

            traceServiceUserChanged(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceUserChanged');
            }

            traceServiceForgetUserInformationStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceForgetUserInformationStarted');
            }

            traceServiceForgetUserInformationCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceForgetUserInformationCompleted');
            }

            traceServiceSignInStarted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceSignInStarted');
            }

            traceServiceSignInCompleted(message: string): void {
                console.warn('shimmed function ServiceEventProvider.traceServiceSignInCompleted');
            }

        }
        export class ServiceEventProviderTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function ServiceEventProviderTemplate.eventEnabled');
            }

            traceTemplate_d(_MCGEN_EventIndex: number, hresult: number): void {
                console.warn('shimmed function ServiceEventProviderTemplate.traceTemplate_d');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, message: string): void {
                console.warn('shimmed function ServiceEventProviderTemplate.traceTemplate_z');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function ServiceEventProviderTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_zz(_MCGEN_EventIndex: number, name: string, value: string): void {
                console.warn('shimmed function ServiceEventProviderTemplate.traceTemplate_zz');
            }

        }
        export class Shell {
            isAcceptTermsOfService_CancelEnabled: Boolean = false;
            isAcceptTermsOfService_FinishEnabled: Boolean = false;
            isAcceptTermsOfService_StartEnabled: Boolean = false;
            isActionListControl_ItemAddedEnabled: Boolean = false;
            isActionListControl_ItemRemovedEnabled: Boolean = false;
            isActionListControl_ItemsChangedEnabled: Boolean = false;
            isAction_InvokedEnabled: Boolean = false;
            isAdControl_RefreshedEnabled: Boolean = false;
            isAdService_AudioAdPlayedEnabled: Boolean = false;
            isAdService_AudioAdPlayingEnabled: Boolean = false;
            isAdService_AudioAdRefreshedEnabled: Boolean = false;
            isAdService_AudioAdRefreshingEnabled: Boolean = false;
            isAdService_InitializedEnabled: Boolean = false;
            isAdService_StreamingTrackPlayedEnabled: Boolean = false;
            isAdService_StreamingTrackPlayingEnabled: Boolean = false;
            isAdService_TrackPlayingEnabled: Boolean = false;
            isAdService_UnloadedEnabled: Boolean = false;
            isAdService_VideoAdRefreshedEnabled: Boolean = false;
            isAdService_VideoAdRefreshingEnabled: Boolean = false;
            isAd_Companion_HiddenEnabled: Boolean = false;
            isAd_Companion_ShownEnabled: Boolean = false;
            isControlFramework_ControlCompleteInitializationDequeuedForRootEnabled: Boolean = false;
            isControlFramework_ControlCompleteInitializationQueuedEnabled: Boolean = false;
            isControlFramework_ControlCompleteInitializationQueuedForRootEnabled: Boolean = false;
            isControlFramework_ControlCompleteInitializationRequeuedEnabled: Boolean = false;
            isControlFramework_ControlConstructedEnabled: Boolean = false;
            isControlFramework_ControlInitializationCompletedEnabled: Boolean = false;
            isControlFramework_ControlInitializationStartedEnabled: Boolean = false;
            isControlFramework_ControlTemplateLoadCompletedEnabled: Boolean = false;
            isControlFramework_ControlTemplateLoadStartedEnabled: Boolean = false;
            isControlFramework_TemplateLoadCompletedEnabled: Boolean = false;
            isControlFramework_TemplateLoadCompletedFromCacheEnabled: Boolean = false;
            isControlFramework_TemplateLoadFragmentCompletedEnabled: Boolean = false;
            isControlFramework_TemplateLoadFragmentStartedEnabled: Boolean = false;
            isControlFramework_TemplateLoadStartedEnabled: Boolean = false;
            isControlFramework_TemplateLoadTemplateExtractedEnabled: Boolean = false;
            isControlFramework_UserInitializationCompletedEnabled: Boolean = false;
            isControlFramework_UserInitializationStartedEnabled: Boolean = false;
            isCreateAccount_CancelEnabled: Boolean = false;
            isCreateAccount_ErrorEnabled: Boolean = false;
            isCreateAccount_FinishEnabled: Boolean = false;
            isCreateAccount_StartEnabled: Boolean = false;
            isDeepLink_Protocol_FailedEnabled: Boolean = false;
            isDeepLink_Protocol_InvokedEnabled: Boolean = false;
            isDeepLink_Tile_FailedEnabled: Boolean = false;
            isDeepLink_Tile_InvokedEnabled: Boolean = false;
            isDom_Content_LoadedEnabled: Boolean = false;
            isFinish_ProcessAllEnabled: Boolean = false;
            isGalleryControl_InLine_CloseEnabled: Boolean = false;
            isGalleryControl_InLine_Open_EndEnabled: Boolean = false;
            isGalleryControl_InLine_Open_ErrorEnabled: Boolean = false;
            isGalleryControl_InLine_Open_StartEnabled: Boolean = false;
            isGalleryControl_Load_EndEnabled: Boolean = false;
            isGalleryControl_Load_StartEnabled: Boolean = false;
            isGalleryControl_LoadingState_ChangedEnabled: Boolean = false;
            isHomeHub_Load_EndEnabled: Boolean = false;
            isHomeHub_Load_StartEnabled: Boolean = false;
            isHomeHub_ReadyEnabled: Boolean = false;
            isHubStrip_Load_EndEnabled: Boolean = false;
            isHubStrip_Load_StartEnabled: Boolean = false;
            isHubStrip_MoveToCompleteEnabled: Boolean = false;
            isHubStrip_ReadyEnabled: Boolean = false;
            isHub_Load_EndEnabled: Boolean = false;
            isHub_Load_StartEnabled: Boolean = false;
            isHub_ReadyEnabled: Boolean = false;
            isJavascript_Load_EndEnabled: Boolean = false;
            isJavascript_Load_StartEnabled: Boolean = false;
            isLocation_ChangedEnabled: Boolean = false;
            isMarketplaceBrowse_PageLoadStartEnabled: Boolean = false;
            isMediaStateEngine_ActionsChangedEnabled: Boolean = false;
            isMediaStateEngine_ButtonsChangedEnabled: Boolean = false;
            isMediaStateEngine_InitializedEnabled: Boolean = false;
            isMediaStateEngine_UnloadedEnabled: Boolean = false;
            isMediaStateEngine_UpdateStateEnabled: Boolean = false;
            isModifierControl_PopupClosedEnabled: Boolean = false;
            isModifierControl_PopupOpenedEnabled: Boolean = false;
            isModifierControl_SelectionChangedEnabled: Boolean = false;
            isNavigable_Loading_DoneEnabled: Boolean = false;
            isNavigation_StartedEnabled: Boolean = false;
            isNotification_NotificationArrivedEnabled: Boolean = false;
            isNotification_NotificationClickedEnabled: Boolean = false;
            isNotification_PageSelectedEnabled: Boolean = false;
            isOverlay_DismissedEnabled: Boolean = false;
            isOverlay_ShownEnabled: Boolean = false;
            isPanel_Load_EndEnabled: Boolean = false;
            isPanel_Load_StartEnabled: Boolean = false;
            isPanel_ReadyEnabled: Boolean = false;
            isPerfTrack_Trigger_AlbumDetailsRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchCompletedEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchPlayNonProtectedContentEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchPlayProtectedContentEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToCollectionCompletedEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToExploreCompleteEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToMoviesStoreEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToOOBECompleteEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToRadioCompleteEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToShopBooksCompleteEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToShopMagsCompleteEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToTvStoreEnabled: Boolean = false;
            isPerfTrack_Trigger_AppLaunchToVideoCollectionEnabled: Boolean = false;
            isPerfTrack_Trigger_ArtistDetailsRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_BNDeviceRegistrationRequestSucceededEnabled: Boolean = false;
            isPerfTrack_Trigger_BNLoginRequestSucceededEnabled: Boolean = false;
            isPerfTrack_Trigger_BookDetailsRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_CategoryGalleryRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_CollectionGalleryRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_DevicesPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_ExplorePageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_FeaturedMoviesPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_FeaturedTvPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_FlexHubPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_IssuesGalleryRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_LastNightsTvPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_MagDetailsRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_MarketplaceGalleryRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_MovieDetailsRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_MoviesCollectionPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_MoviesStorePageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_NewMoviesPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_NewTvPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_NowPlayingPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_PersonalCollectionPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_PlayNonProtectedInAppPlaybackStartedEnabled: Boolean = false;
            isPerfTrack_Trigger_PlayProtectedInAppPlaybackStartedEnabled: Boolean = false;
            isPerfTrack_Trigger_PlaylistDetailsRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_PopoverRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_RadioPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_SearchAutoCompleteResultsReceivedEnabled: Boolean = false;
            isPerfTrack_Trigger_SearchCatalogRequestToQueryResultsEnabled: Boolean = false;
            isPerfTrack_Trigger_SearchGalleryRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_SearchLibraryRequestToQueryResultsEnabled: Boolean = false;
            isPerfTrack_Trigger_ShopBooksPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_ShopMagsPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_StandardGalleryRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_TVDetailsRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_TopSellingMoviesPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_TopSellingTvPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_TvCollectionPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_TvStorePageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_VideoCollectionPageRequestToLoadEnabled: Boolean = false;
            isPerfTrack_Trigger_WebBlendRequestToLoadEnabled: Boolean = false;
            isPurchaseFlowGames_CancelEnabled: Boolean = false;
            isPurchaseFlowGames_ErrorEnabled: Boolean = false;
            isPurchaseFlowGames_FinishEnabled: Boolean = false;
            isPurchaseFlowGames_RejectionEnabled: Boolean = false;
            isPurchaseFlowGames_StartEnabled: Boolean = false;
            isPurchaseFlowMusic_CancelEnabled: Boolean = false;
            isPurchaseFlowMusic_ErrorEnabled: Boolean = false;
            isPurchaseFlowMusic_FinishEnabled: Boolean = false;
            isPurchaseFlowMusic_RejectionEnabled: Boolean = false;
            isPurchaseFlowMusic_StartEnabled: Boolean = false;
            isPurchaseFlowVideo_CancelEnabled: Boolean = false;
            isPurchaseFlowVideo_DoneEnabled: Boolean = false;
            isPurchaseFlowVideo_DownloadEnabled: Boolean = false;
            isPurchaseFlowVideo_ErrorEnabled: Boolean = false;
            isPurchaseFlowVideo_FinishEnabled: Boolean = false;
            isPurchaseFlowVideo_RejectionEnabled: Boolean = false;
            isPurchaseFlowVideo_StartEnabled: Boolean = false;
            isPurchaseFlowVideo_Start_Bandwidth_TestEnabled: Boolean = false;
            isPurchaseFlowVideo_StreamEnabled: Boolean = false;
            isQueries_BeginEnabled: Boolean = false;
            isQueries_CompleteEnabled: Boolean = false;
            isSearch_CompletedEnabled: Boolean = false;
            isSearch_StartEnabled: Boolean = false;
            isServiceQuery_ParseCompleteEnabled: Boolean = false;
            isServiceQuery_QueryReturnEnabled: Boolean = false;
            isServiceQuery_QueryStartEnabled: Boolean = false;
            isSettingsAbout_LaunchCompleteEnabled: Boolean = false;
            isSettingsAbout_LaunchEnabled: Boolean = false;
            isSettingsAccount_ErrorEnabled: Boolean = false;
            isSettingsAccount_FinishEnabled: Boolean = false;
            isSettingsAccount_LaunchCompleteEnabled: Boolean = false;
            isSettingsAccount_LaunchEnabled: Boolean = false;
            isSettingsCaptions_LaunchCompleteEnabled: Boolean = false;
            isSettingsCaptions_LaunchEnabled: Boolean = false;
            isSettingsFeedback_LaunchCompleteEnabled: Boolean = false;
            isSettingsFeedback_LaunchEnabled: Boolean = false;
            isSettingsHome_FinishEnabled: Boolean = false;
            isSettingsHome_StartEnabled: Boolean = false;
            isSettingsPopulate_EndEnabled: Boolean = false;
            isSettingsPopulate_StartEnabled: Boolean = false;
            isSettingsPreferences_LaunchCompleteEnabled: Boolean = false;
            isSettingsPreferences_LaunchEnabled: Boolean = false;
            isSettingsWinJSPopulate_StartEnabled: Boolean = false;
            isSettings_BackToHomeEnabled: Boolean = false;
            isShrinkAndStayHeader_DismissedEnabled: Boolean = false;
            isShrinkAndStayHeader_ShownEnabled: Boolean = false;
            isSignInResultEnabled: Boolean = false;
            isSplashScreen_RemovedEnabled: Boolean = false;
            isSubscriptionSignup_CancelEnabled: Boolean = false;
            isSubscriptionSignup_ErrorEnabled: Boolean = false;
            isSubscriptionSignup_FinishEnabled: Boolean = false;
            isSubscriptionSignup_StartEnabled: Boolean = false;
            isTest_Event_ErrorEnabled: Boolean = false;
            isTest_Event_ResultEnabled: Boolean = false;
            isTest_Event_TraceEnabled: Boolean = false;
            isVideo_Ad_CompletedEnabled: Boolean = false;
            isVideo_Ad_ErrorEnabled: Boolean = false;
            isVideo_Ad_SkippedEnabled: Boolean = false;
            isVideo_Ad_StartedEnabled: Boolean = false;
            isVideo_Ad_UpSellEnabled: Boolean = false;
            isWebExperience_CancelEnabled: Boolean = false;
            isWebExperience_ErrorEnabled: Boolean = false;
            isWebExperience_FinishEnabled: Boolean = false;
            isWebExperience_PageLoadEnabled: Boolean = false;
            isWebExperience_StartEnabled: Boolean = false;
            isWinJSNavigation_ContentCompleteEnabled: Boolean = false;
            tracePerfTrack_Trigger_NewTvPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_NewTvPageRequestToLoad');
            }

            tracePerfTrack_Trigger_LastNightsTvPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_LastNightsTvPageRequestToLoad');
            }

            tracePerfTrack_Trigger_TopSellingTvPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_TopSellingTvPageRequestToLoad');
            }

            tracePerfTrack_Trigger_FlexHubPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_FlexHubPageRequestToLoad');
            }

            tracePerfTrack_Trigger_ShopBooksPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_ShopBooksPageRequestToLoad');
            }

            tracePerfTrack_Trigger_ShopMagsPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_ShopMagsPageRequestToLoad');
            }

            tracePerfTrack_Trigger_AppLaunchToShopBooksComplete(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToShopBooksComplete');
            }

            tracePerfTrack_Trigger_AppLaunchToShopMagsComplete(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToShopMagsComplete');
            }

            tracePerfTrack_Trigger_AppLaunchToOOBEComplete(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToOOBEComplete');
            }

            tracePerfTrack_Trigger_CategoryGalleryRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_CategoryGalleryRequestToLoad');
            }

            tracePerfTrack_Trigger_IssuesGalleryRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_IssuesGalleryRequestToLoad');
            }

            tracePerfTrack_Trigger_StandardGalleryRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_StandardGalleryRequestToLoad');
            }

            tracePerfTrack_Trigger_BookDetailsRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_BookDetailsRequestToLoad');
            }

            tracePerfTrack_Trigger_MagDetailsRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_MagDetailsRequestToLoad');
            }

            tracePerfTrack_Trigger_SearchLibraryRequestToQueryResults(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_SearchLibraryRequestToQueryResults');
            }

            tracePerfTrack_Trigger_SearchCatalogRequestToQueryResults(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_SearchCatalogRequestToQueryResults');
            }

            tracePerfTrack_Trigger_SearchAutoCompleteResultsReceived(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_SearchAutoCompleteResultsReceived');
            }

            tracePerfTrack_Trigger_BNDeviceRegistrationRequestSucceeded(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_BNDeviceRegistrationRequestSucceeded');
            }

            tracePerfTrack_Trigger_BNLoginRequestSucceeded(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_BNLoginRequestSucceeded');
            }

            tracePerfTrack_Trigger_AppLaunchToMoviesStore(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToMoviesStore');
            }

            tracePerfTrack_Trigger_AppLaunchToTvStore(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToTvStore');
            }

            tracePerfTrack_Trigger_AppLaunchToVideoCollection(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToVideoCollection');
            }

            tracePerfTrack_Trigger_MoviesCollectionPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_MoviesCollectionPageRequestToLoad');
            }

            tracePerfTrack_Trigger_TvCollectionPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_TvCollectionPageRequestToLoad');
            }

            tracePerfTrack_Trigger_PersonalCollectionPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_PersonalCollectionPageRequestToLoad');
            }

            tracePerfTrack_Trigger_FeaturedMoviesPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_FeaturedMoviesPageRequestToLoad');
            }

            tracePerfTrack_Trigger_NewMoviesPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_NewMoviesPageRequestToLoad');
            }

            tracePerfTrack_Trigger_TopSellingMoviesPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_TopSellingMoviesPageRequestToLoad');
            }

            tracePerfTrack_Trigger_FeaturedTvPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_FeaturedTvPageRequestToLoad');
            }

            traceShrinkAndStayHeader_Dismissed(): void {
                console.warn('shimmed function Shell.traceShrinkAndStayHeader_Dismissed');
            }

            tracePerfTrack_Trigger_AppLaunchCompleted(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchCompleted');
            }

            tracePerfTrack_Trigger_AppLaunchToCollectionCompleted(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToCollectionCompleted');
            }

            tracePerfTrack_Trigger_AppLaunchPlayNonProtectedContent(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchPlayNonProtectedContent');
            }

            tracePerfTrack_Trigger_AppLaunchPlayProtectedContent(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchPlayProtectedContent');
            }

            tracePerfTrack_Trigger_PlayProtectedInAppPlaybackStarted(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_PlayProtectedInAppPlaybackStarted');
            }

            tracePerfTrack_Trigger_PlayNonProtectedInAppPlaybackStarted(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_PlayNonProtectedInAppPlaybackStarted');
            }

            tracePerfTrack_Trigger_CollectionGalleryRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_CollectionGalleryRequestToLoad');
            }

            tracePerfTrack_Trigger_SearchGalleryRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_SearchGalleryRequestToLoad');
            }

            tracePerfTrack_Trigger_PopoverRequestToLoad(name: string, durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_PopoverRequestToLoad');
            }

            tracePerfTrack_Trigger_MarketplaceGalleryRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_MarketplaceGalleryRequestToLoad');
            }

            tracePerfTrack_Trigger_WebBlendRequestToLoad(url: string, durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_WebBlendRequestToLoad');
            }

            tracePerfTrack_Trigger_ExplorePageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_ExplorePageRequestToLoad');
            }

            tracePerfTrack_Trigger_RadioPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_RadioPageRequestToLoad');
            }

            tracePerfTrack_Trigger_AppLaunchToExploreComplete(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToExploreComplete');
            }

            tracePerfTrack_Trigger_AppLaunchToRadioComplete(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AppLaunchToRadioComplete');
            }

            tracePerfTrack_Trigger_TVDetailsRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_TVDetailsRequestToLoad');
            }

            tracePerfTrack_Trigger_MovieDetailsRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_MovieDetailsRequestToLoad');
            }

            tracePerfTrack_Trigger_AlbumDetailsRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_AlbumDetailsRequestToLoad');
            }

            tracePerfTrack_Trigger_ArtistDetailsRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_ArtistDetailsRequestToLoad');
            }

            tracePerfTrack_Trigger_PlaylistDetailsRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_PlaylistDetailsRequestToLoad');
            }

            tracePerfTrack_Trigger_DevicesPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_DevicesPageRequestToLoad');
            }

            tracePerfTrack_Trigger_NowPlayingPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_NowPlayingPageRequestToLoad');
            }

            tracePerfTrack_Trigger_MoviesStorePageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_MoviesStorePageRequestToLoad');
            }

            tracePerfTrack_Trigger_TvStorePageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_TvStorePageRequestToLoad');
            }

            tracePerfTrack_Trigger_VideoCollectionPageRequestToLoad(durationMsec: number): void {
                console.warn('shimmed function Shell.tracePerfTrack_Trigger_VideoCollectionPageRequestToLoad');
            }

            traceAd_Companion_Hidden(linkUrl: string, imageUrl: string): void {
                console.warn('shimmed function Shell.traceAd_Companion_Hidden');
            }

            traceVideo_Ad_Started(videoUrl: string, clickUrl: string): void {
                console.warn('shimmed function Shell.traceVideo_Ad_Started');
            }

            traceVideo_Ad_Completed(videoUrl: string, clickUrl: string): void {
                console.warn('shimmed function Shell.traceVideo_Ad_Completed');
            }

            traceVideo_Ad_Skipped(videoUrl: string, clickUrl: string): void {
                console.warn('shimmed function Shell.traceVideo_Ad_Skipped');
            }

            traceVideo_Ad_Error(videoUrl: string, clickUrl: string): void {
                console.warn('shimmed function Shell.traceVideo_Ad_Error');
            }

            traceVideo_Ad_UpSell(videoUrl: string, clickUrl: string): void {
                console.warn('shimmed function Shell.traceVideo_Ad_UpSell');
            }

            traceAdControl_Refreshed(applicationId: string, unitId: string): void {
                console.warn('shimmed function Shell.traceAdControl_Refreshed');
            }

            traceAdService_Initialized(): void {
                console.warn('shimmed function Shell.traceAdService_Initialized');
            }

            traceAdService_Unloaded(): void {
                console.warn('shimmed function Shell.traceAdService_Unloaded');
            }

            traceAdService_AudioAdRefreshing(): void {
                console.warn('shimmed function Shell.traceAdService_AudioAdRefreshing');
            }

            traceAdService_AudioAdRefreshed(): void {
                console.warn('shimmed function Shell.traceAdService_AudioAdRefreshed');
            }

            traceAdService_VideoAdRefreshing(): void {
                console.warn('shimmed function Shell.traceAdService_VideoAdRefreshing');
            }

            traceAdService_VideoAdRefreshed(): void {
                console.warn('shimmed function Shell.traceAdService_VideoAdRefreshed');
            }

            traceAdService_AudioAdPlaying(): void {
                console.warn('shimmed function Shell.traceAdService_AudioAdPlaying');
            }

            traceAdService_AudioAdPlayed(): void {
                console.warn('shimmed function Shell.traceAdService_AudioAdPlayed');
            }

            traceAdService_StreamingTrackPlaying(): void {
                console.warn('shimmed function Shell.traceAdService_StreamingTrackPlaying');
            }

            traceAdService_StreamingTrackPlayed(): void {
                console.warn('shimmed function Shell.traceAdService_StreamingTrackPlayed');
            }

            traceAdService_TrackPlaying(): void {
                console.warn('shimmed function Shell.traceAdService_TrackPlaying');
            }

            traceMediaStateEngine_Initialized(mediaType: string, serviceId: string, libraryId: string): void {
                console.warn('shimmed function Shell.traceMediaStateEngine_Initialized');
            }

            traceMediaStateEngine_Unloaded(mediaType: string, serviceId: string, libraryId: string): void {
                console.warn('shimmed function Shell.traceMediaStateEngine_Unloaded');
            }

            traceMediaStateEngine_UpdateState(mediaType: string, serviceId: string, libraryId: string): void {
                console.warn('shimmed function Shell.traceMediaStateEngine_UpdateState');
            }

            traceMediaStateEngine_ButtonsChanged(mediaType: string, serviceId: string, libraryId: string): void {
                console.warn('shimmed function Shell.traceMediaStateEngine_ButtonsChanged');
            }

            traceMediaStateEngine_ActionsChanged(mediaType: string, serviceId: string, libraryId: string): void {
                console.warn('shimmed function Shell.traceMediaStateEngine_ActionsChanged');
            }

            traceWinJSNavigation_ContentComplete(location: string): void {
                console.warn('shimmed function Shell.traceWinJSNavigation_ContentComplete');
            }

            traceShrinkAndStayHeader_Shown(): void {
                console.warn('shimmed function Shell.traceShrinkAndStayHeader_Shown');
            }

            traceActionListControl_ItemsChanged(templateId: string): void {
                console.warn('shimmed function Shell.traceActionListControl_ItemsChanged');
            }

            traceControlFramework_ControlConstructed(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlConstructed');
            }

            traceControlFramework_ControlCompleteInitializationQueued(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlCompleteInitializationQueued');
            }

            traceControlFramework_ControlCompleteInitializationRequeued(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlCompleteInitializationRequeued');
            }

            traceControlFramework_ControlInitializationStarted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlInitializationStarted');
            }

            traceControlFramework_UserInitializationStarted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_UserInitializationStarted');
            }

            traceControlFramework_ControlTemplateLoadStarted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlTemplateLoadStarted');
            }

            traceControlFramework_ControlTemplateLoadCompleted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlTemplateLoadCompleted');
            }

            traceControlFramework_TemplateLoadStarted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_TemplateLoadStarted');
            }

            traceControlFramework_TemplateLoadFragmentStarted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_TemplateLoadFragmentStarted');
            }

            traceControlFramework_TemplateLoadFragmentCompleted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_TemplateLoadFragmentCompleted');
            }

            traceControlFramework_TemplateLoadTemplateExtracted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_TemplateLoadTemplateExtracted');
            }

            traceControlFramework_TemplateLoadCompletedFromCache(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_TemplateLoadCompletedFromCache');
            }

            traceControlFramework_TemplateLoadCompleted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_TemplateLoadCompleted');
            }

            traceControlFramework_ControlInitializationCompleted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlInitializationCompleted');
            }

            traceControlFramework_UserInitializationCompleted(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_UserInitializationCompleted');
            }

            traceControlFramework_ControlCompleteInitializationQueuedForRoot(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlCompleteInitializationQueuedForRoot');
            }

            traceControlFramework_ControlCompleteInitializationDequeuedForRoot(templateId: string): void {
                console.warn('shimmed function Shell.traceControlFramework_ControlCompleteInitializationDequeuedForRoot');
            }

            traceSubscriptionSignup_Start(templateId: string): void {
                console.warn('shimmed function Shell.traceSubscriptionSignup_Start');
            }

            traceSubscriptionSignup_Finish(templateId: string): void {
                console.warn('shimmed function Shell.traceSubscriptionSignup_Finish');
            }

            traceSubscriptionSignup_Cancel(templateId: string): void {
                console.warn('shimmed function Shell.traceSubscriptionSignup_Cancel');
            }

            traceSubscriptionSignup_Error(templateId: string): void {
                console.warn('shimmed function Shell.traceSubscriptionSignup_Error');
            }

            traceNotification_NotificationArrived(templateId: string): void {
                console.warn('shimmed function Shell.traceNotification_NotificationArrived');
            }

            traceNotification_PageSelected(templateId: string): void {
                console.warn('shimmed function Shell.traceNotification_PageSelected');
            }

            traceNotification_NotificationClicked(templateId: string): void {
                console.warn('shimmed function Shell.traceNotification_NotificationClicked');
            }

            traceAd_Companion_Shown(linkUrl: string, imageUrl: string): void {
                console.warn('shimmed function Shell.traceAd_Companion_Shown');
            }

            tracePurchaseFlowMusic_Finish(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowMusic_Finish');
            }

            tracePurchaseFlowMusic_Cancel(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowMusic_Cancel');
            }

            tracePurchaseFlowMusic_Error(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowMusic_Error');
            }

            tracePurchaseFlowMusic_Rejection(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowMusic_Rejection');
            }

            tracePurchaseFlowVideo_Start(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Start');
            }

            tracePurchaseFlowVideo_Finish(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Finish');
            }

            tracePurchaseFlowVideo_Cancel(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Cancel');
            }

            tracePurchaseFlowVideo_Error(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Error');
            }

            tracePurchaseFlowVideo_Start_Bandwidth_Test(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Start_Bandwidth_Test');
            }

            tracePurchaseFlowVideo_Download(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Download');
            }

            tracePurchaseFlowVideo_Stream(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Stream');
            }

            tracePurchaseFlowVideo_Done(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Done');
            }

            tracePurchaseFlowVideo_Rejection(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowVideo_Rejection');
            }

            traceGalleryControl_Load_Start(): void {
                console.warn('shimmed function Shell.traceGalleryControl_Load_Start');
            }

            traceGalleryControl_Load_End(): void {
                console.warn('shimmed function Shell.traceGalleryControl_Load_End');
            }

            traceGalleryControl_InLine_Open_Start(): void {
                console.warn('shimmed function Shell.traceGalleryControl_InLine_Open_Start');
            }

            traceGalleryControl_InLine_Open_End(): void {
                console.warn('shimmed function Shell.traceGalleryControl_InLine_Open_End');
            }

            traceGalleryControl_InLine_Open_Error(): void {
                console.warn('shimmed function Shell.traceGalleryControl_InLine_Open_Error');
            }

            traceGalleryControl_InLine_Close(): void {
                console.warn('shimmed function Shell.traceGalleryControl_InLine_Close');
            }

            traceGalleryControl_LoadingState_Changed(newState: string): void {
                console.warn('shimmed function Shell.traceGalleryControl_LoadingState_Changed');
            }

            traceModifierControl_SelectionChanged(value: string, source: string): void {
                console.warn('shimmed function Shell.traceModifierControl_SelectionChanged');
            }

            traceModifierControl_PopupOpened(templateId: string): void {
                console.warn('shimmed function Shell.traceModifierControl_PopupOpened');
            }

            traceModifierControl_PopupClosed(templateId: string): void {
                console.warn('shimmed function Shell.traceModifierControl_PopupClosed');
            }

            traceActionListControl_ItemAdded(templateId: string): void {
                console.warn('shimmed function Shell.traceActionListControl_ItemAdded');
            }

            traceActionListControl_ItemRemoved(templateId: string): void {
                console.warn('shimmed function Shell.traceActionListControl_ItemRemoved');
            }

            traceSettingsPreferences_Launch(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsPreferences_Launch');
            }

            traceSettingsAbout_Launch(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsAbout_Launch');
            }

            traceSettingsFeedback_Launch(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsFeedback_Launch');
            }

            traceSettingsCaptions_Launch(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsCaptions_Launch');
            }

            traceSettingsPopulate_Start(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsPopulate_Start');
            }

            traceSettingsWinJSPopulate_Start(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsWinJSPopulate_Start');
            }

            traceSettingsPopulate_End(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsPopulate_End');
            }

            tracePurchaseFlowGames_Start(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowGames_Start');
            }

            tracePurchaseFlowGames_Finish(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowGames_Finish');
            }

            tracePurchaseFlowGames_Cancel(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowGames_Cancel');
            }

            tracePurchaseFlowGames_Error(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowGames_Error');
            }

            tracePurchaseFlowGames_Rejection(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowGames_Rejection');
            }

            traceMarketplaceBrowse_PageLoadStart(templateId: string): void {
                console.warn('shimmed function Shell.traceMarketplaceBrowse_PageLoadStart');
            }

            traceServiceQuery_QueryStart(templateId: string): void {
                console.warn('shimmed function Shell.traceServiceQuery_QueryStart');
            }

            traceServiceQuery_QueryReturn(templateId: string): void {
                console.warn('shimmed function Shell.traceServiceQuery_QueryReturn');
            }

            traceServiceQuery_ParseComplete(templateId: string): void {
                console.warn('shimmed function Shell.traceServiceQuery_ParseComplete');
            }

            traceSettingsAccount_LaunchComplete(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsAccount_LaunchComplete');
            }

            traceSettingsPreferences_LaunchComplete(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsPreferences_LaunchComplete');
            }

            traceSettingsAbout_LaunchComplete(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsAbout_LaunchComplete');
            }

            traceSettings_BackToHome(templateId: string): void {
                console.warn('shimmed function Shell.traceSettings_BackToHome');
            }

            traceSettingsFeedback_LaunchComplete(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsFeedback_LaunchComplete');
            }

            traceSettingsCaptions_LaunchComplete(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsCaptions_LaunchComplete');
            }

            traceHomeHub_Load_Start(): void {
                console.warn('shimmed function Shell.traceHomeHub_Load_Start');
            }

            traceHomeHub_Load_End(): void {
                console.warn('shimmed function Shell.traceHomeHub_Load_End');
            }

            traceHomeHub_Ready(): void {
                console.warn('shimmed function Shell.traceHomeHub_Ready');
            }

            tracePurchaseFlowMusic_Start(templateId: string): void {
                console.warn('shimmed function Shell.tracePurchaseFlowMusic_Start');
            }

            traceTest_Event_Trace(id: number, message: string): void {
                console.warn('shimmed function Shell.traceTest_Event_Trace');
            }

            traceTest_Event_Error(id: number, message: string): void {
                console.warn('shimmed function Shell.traceTest_Event_Error');
            }

            traceHubStrip_Load_Start(moniker: string): void {
                console.warn('shimmed function Shell.traceHubStrip_Load_Start');
            }

            traceHubStrip_Load_End(moniker: string): void {
                console.warn('shimmed function Shell.traceHubStrip_Load_End');
            }

            traceHub_Load_Start(moniker: string): void {
                console.warn('shimmed function Shell.traceHub_Load_Start');
            }

            traceHub_Load_End(moniker: string): void {
                console.warn('shimmed function Shell.traceHub_Load_End');
            }

            tracePanel_Load_Start(moniker: string): void {
                console.warn('shimmed function Shell.tracePanel_Load_Start');
            }

            tracePanel_Load_End(moniker: string): void {
                console.warn('shimmed function Shell.tracePanel_Load_End');
            }

            traceHubStrip_Ready(moniker: string): void {
                console.warn('shimmed function Shell.traceHubStrip_Ready');
            }

            traceHub_Ready(moniker: string): void {
                console.warn('shimmed function Shell.traceHub_Ready');
            }

            tracePanel_Ready(moniker: string): void {
                console.warn('shimmed function Shell.tracePanel_Ready');
            }

            traceHubStrip_MoveToComplete(moniker: string): void {
                console.warn('shimmed function Shell.traceHubStrip_MoveToComplete');
            }

            traceCreateAccount_Start(templateId: string): void {
                console.warn('shimmed function Shell.traceCreateAccount_Start');
            }

            traceCreateAccount_Finish(templateId: string): void {
                console.warn('shimmed function Shell.traceCreateAccount_Finish');
            }

            traceCreateAccount_Cancel(templateId: string): void {
                console.warn('shimmed function Shell.traceCreateAccount_Cancel');
            }

            traceCreateAccount_Error(templateId: string): void {
                console.warn('shimmed function Shell.traceCreateAccount_Error');
            }

            traceAcceptTermsOfService_Start(templateId: string): void {
                console.warn('shimmed function Shell.traceAcceptTermsOfService_Start');
            }

            traceAcceptTermsOfService_Finish(templateId: string): void {
                console.warn('shimmed function Shell.traceAcceptTermsOfService_Finish');
            }

            traceAcceptTermsOfService_Cancel(templateId: string): void {
                console.warn('shimmed function Shell.traceAcceptTermsOfService_Cancel');
            }

            traceSignInResult(templateId: string): void {
                console.warn('shimmed function Shell.traceSignInResult');
            }

            traceSettingsHome_Start(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsHome_Start');
            }

            traceSettingsHome_Finish(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsHome_Finish');
            }

            traceSettingsAccount_Launch(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsAccount_Launch');
            }

            traceSettingsAccount_Finish(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsAccount_Finish');
            }

            traceSettingsAccount_Error(templateId: string): void {
                console.warn('shimmed function Shell.traceSettingsAccount_Error');
            }

            traceNavigable_Loading_Done(moniker: string): void {
                console.warn('shimmed function Shell.traceNavigable_Loading_Done');
            }

            traceQueries_Begin(moniker: string): void {
                console.warn('shimmed function Shell.traceQueries_Begin');
            }

            traceQueries_Complete(moniker: string): void {
                console.warn('shimmed function Shell.traceQueries_Complete');
            }

            traceJavascript_Load_Start(): void {
                console.warn('shimmed function Shell.traceJavascript_Load_Start');
            }

            traceSplashScreen_Removed(): void {
                console.warn('shimmed function Shell.traceSplashScreen_Removed');
            }

            traceJavascript_Load_End(): void {
                console.warn('shimmed function Shell.traceJavascript_Load_End');
            }

            traceDom_Content_Loaded(): void {
                console.warn('shimmed function Shell.traceDom_Content_Loaded');
            }

            traceFinish_ProcessAll(): void {
                console.warn('shimmed function Shell.traceFinish_ProcessAll');
            }

            traceNavigation_Started(moniker: string): void {
                console.warn('shimmed function Shell.traceNavigation_Started');
            }

            traceLocation_Changed(pageMoniker: string, hubMoniker: string, panelMoniker: string): void {
                console.warn('shimmed function Shell.traceLocation_Changed');
            }

            traceOverlay_Shown(templateId: string): void {
                console.warn('shimmed function Shell.traceOverlay_Shown');
            }

            traceOverlay_Dismissed(templateId: string): void {
                console.warn('shimmed function Shell.traceOverlay_Dismissed');
            }

            traceAction_Invoked(actionId: string): void {
                console.warn('shimmed function Shell.traceAction_Invoked');
            }

            traceDeepLink_Protocol_Invoked(url: string): void {
                console.warn('shimmed function Shell.traceDeepLink_Protocol_Invoked');
            }

            traceDeepLink_Protocol_Failed(url: string): void {
                console.warn('shimmed function Shell.traceDeepLink_Protocol_Failed');
            }

            traceDeepLink_Tile_Invoked(args: string): void {
                console.warn('shimmed function Shell.traceDeepLink_Tile_Invoked');
            }

            traceDeepLink_Tile_Failed(args: string): void {
                console.warn('shimmed function Shell.traceDeepLink_Tile_Failed');
            }

            traceSearch_Start(): void {
                console.warn('shimmed function Shell.traceSearch_Start');
            }

            traceSearch_Completed(): void {
                console.warn('shimmed function Shell.traceSearch_Completed');
            }

            traceWebExperience_Start(templateId: string): void {
                console.warn('shimmed function Shell.traceWebExperience_Start');
            }

            traceWebExperience_Finish(templateId: string): void {
                console.warn('shimmed function Shell.traceWebExperience_Finish');
            }

            traceWebExperience_Cancel(templateId: string): void {
                console.warn('shimmed function Shell.traceWebExperience_Cancel');
            }

            traceWebExperience_Error(templateId: string): void {
                console.warn('shimmed function Shell.traceWebExperience_Error');
            }

            traceWebExperience_PageLoad(templateId: string): void {
                console.warn('shimmed function Shell.traceWebExperience_PageLoad');
            }

            traceTest_Event_Result(result: Boolean, message: string): void {
                console.warn('shimmed function Shell.traceTest_Event_Result');
            }

        }
        export class ShellTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function ShellTemplate.eventEnabled');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, moniker: string): void {
                console.warn('shimmed function ShellTemplate.traceTemplate_z');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function ShellTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_zzz(_MCGEN_EventIndex: number, pageMoniker: string, hubMoniker: string, panelMoniker: string): void {
                console.warn('shimmed function ShellTemplate.traceTemplate_zzz');
            }

            traceTemplate_tz(_MCGEN_EventIndex: number, result: Boolean, message: string): void {
                console.warn('shimmed function ShellTemplate.traceTemplate_tz');
            }

            traceTemplate_dz(_MCGEN_EventIndex: number, id: number, message: string): void {
                console.warn('shimmed function ShellTemplate.traceTemplate_dz');
            }

            traceTemplate_zz(_MCGEN_EventIndex: number, value: string, source: string): void {
                console.warn('shimmed function ShellTemplate.traceTemplate_zz');
            }

            traceTemplate_q(_MCGEN_EventIndex: number, durationMsec: number): void {
                console.warn('shimmed function ShellTemplate.traceTemplate_q');
            }

            traceTemplate_zq(_MCGEN_EventIndex: number, name: string, durationMsec: number): void {
                console.warn('shimmed function ShellTemplate.traceTemplate_zq');
            }

        }
        export class Social {
            isAvatarRendererFrameEndEnabled: Boolean = false;
            isAvatarRendererFrameStartEnabled: Boolean = false;
            isAvatarRendererShutdownEnabled: Boolean = false;
            traceAvatarRendererFrameStart(id: string): void {
                console.warn('shimmed function Social.traceAvatarRendererFrameStart');
            }

            traceAvatarRendererFrameEnd(id: string, duration: number): void {
                console.warn('shimmed function Social.traceAvatarRendererFrameEnd');
            }

            traceAvatarRendererShutdown(id: string): void {
                console.warn('shimmed function Social.traceAvatarRendererShutdown');
            }

        }
        export class SocialTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function SocialTemplate.eventEnabled');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, id: string): void {
                console.warn('shimmed function SocialTemplate.traceTemplate_z');
            }

            traceTemplate_zf(_MCGEN_EventIndex: number, id: string, duration: number): void {
                console.warn('shimmed function SocialTemplate.traceTemplate_zf');
            }

        }
        export class SyncEventProvider {
            isCloudSync_CloudProvider_ApplyBatch_StartEnabled: Boolean = false;
            isCloudSync_CloudProvider_ApplyBatch_StopEnabled: Boolean = false;
            isCloudSync_CloudProvider_ApplyItem_ErrorEnabled: Boolean = false;
            isCloudSync_CloudProvider_ApplyItem_SkippedEnabled: Boolean = false;
            isCloudSync_CloudProvider_ContentChangedEnabled: Boolean = false;
            isCloudSync_CloudProvider_FindChangesEnabled: Boolean = false;
            isCloudSync_CloudProvider_FoundChangeEnabled: Boolean = false;
            isCloudSync_CloudProvider_IsAvailableEnabled: Boolean = false;
            isCloudSync_CloudProvider_IsDirtyEnabled: Boolean = false;
            isCloudSync_CloudProvider_LoadItem_ErrorEnabled: Boolean = false;
            isCloudSync_CloudProvider_TakeDownEnabled: Boolean = false;
            isCloudSync_CloudProvider_UpdateMetadata_StartEnabled: Boolean = false;
            isCloudSync_CloudProvider_UpdateMetadata_StopEnabled: Boolean = false;
            isCloudSync_Engine_BlockSync_StartEnabled: Boolean = false;
            isCloudSync_Engine_BlockSync_StopEnabled: Boolean = false;
            isCloudSync_Engine_CancelSyncEnabled: Boolean = false;
            isCloudSync_Engine_NotificationEnabled: Boolean = false;
            isCloudSync_Engine_RequestSyncEnabled: Boolean = false;
            isCloudSync_Engine_ScheduleSyncEnabled: Boolean = false;
            isCloudSync_Engine_SyncEndEnabled: Boolean = false;
            isCloudSync_Engine_SyncErrorEnabled: Boolean = false;
            isCloudSync_Engine_Sync_StartEnabled: Boolean = false;
            isCloudSync_Engine_Sync_StopEnabled: Boolean = false;
            isCloudSync_LibraryProvider_AddItemEnabled: Boolean = false;
            isCloudSync_LibraryProvider_ContentChangedEnabled: Boolean = false;
            isCloudSync_LibraryProvider_DeleteItemEnabled: Boolean = false;
            isCloudSync_LibraryProvider_DeletedItemsEnabled: Boolean = false;
            isCloudSync_LibraryProvider_DirtyItemsEnabled: Boolean = false;
            isCloudSync_LibraryProvider_InvalidItemsEnabled: Boolean = false;
            isCloudSync_LibraryProvider_IsAvailableEnabled: Boolean = false;
            isCloudSync_LibraryProvider_IsDirtyEnabled: Boolean = false;
            isCloudSync_LibraryProvider_LoadItemEnabled: Boolean = false;
            isCloudSync_LibraryProvider_UpdateItemEnabled: Boolean = false;
            isCloudSync_LibraryProvider_UpdateMetadata_StartEnabled: Boolean = false;
            isCloudSync_LibraryProvider_UpdateMetadata_StopEnabled: Boolean = false;
            traceCloudSync_CloudProvider_IsDirty(isDirty: Boolean, dirtyReason: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_IsDirty');
            }

            traceCloudSync_CloudProvider_IsAvailable(availability: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_IsAvailable');
            }

            traceCloudSync_CloudProvider_ContentChanged(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_ContentChanged');
            }

            traceCloudSync_CloudProvider_FindChanges(anchor: string, requestedBatchSize: number, hasMoreData: Boolean): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_FindChanges');
            }

            traceCloudSync_CloudProvider_FoundChange(syncType: number, cloudId: string, changeType: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_FoundChange');
            }

            traceCloudSync_CloudProvider_TakeDown(cloudId: string): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_TakeDown');
            }

            traceCloudSync_CloudProvider_UpdateMetadata_Start(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_UpdateMetadata_Start');
            }

            traceCloudSync_CloudProvider_UpdateMetadata_Stop(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_UpdateMetadata_Stop');
            }

            traceCloudSync_CloudProvider_ApplyBatch_Start(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_ApplyBatch_Start');
            }

            traceCloudSync_CloudProvider_ApplyBatch_Stop(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_ApplyBatch_Stop');
            }

            traceCloudSync_Engine_Sync_Start(requestSyncOption: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_Sync_Start');
            }

            traceCloudSync_Engine_Sync_Stop(hresult: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_Sync_Stop');
            }

            traceCloudSync_Engine_BlockSync_Start(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_BlockSync_Start');
            }

            traceCloudSync_Engine_BlockSync_Stop(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_BlockSync_Stop');
            }

            traceCloudSync_Engine_RequestSync(requestSyncOption: number, cookieNextCompleteSync: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_RequestSync');
            }

            traceCloudSync_Engine_SyncError(hresult: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_SyncError');
            }

            traceCloudSync_Engine_SyncEnd(hresult: number, changes: Boolean, cookieCompleteSync: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_SyncEnd');
            }

            traceCloudSync_Engine_ScheduleSync(delayTimeMS: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_ScheduleSync');
            }

            traceCloudSync_Engine_CancelSync(hresult: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_CancelSync');
            }

            traceCloudSync_Engine_Notification(syncPointId: string): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_Engine_Notification');
            }

            traceCloudSync_LibraryProvider_LoadItem(syncType: number, mediaId: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_LoadItem');
            }

            traceCloudSync_LibraryProvider_AddItem(syncType: number, mediaId: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_AddItem');
            }

            traceCloudSync_LibraryProvider_UpdateItem(syncType: number, mediaIdIn: number, mediaIdOut: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_UpdateItem');
            }

            traceCloudSync_LibraryProvider_DeleteItem(syncType: number, mediaId: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_DeleteItem');
            }

            traceCloudSync_LibraryProvider_DirtyItems(syncType: number, dirtyItems: string): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_DirtyItems');
            }

            traceCloudSync_LibraryProvider_DeletedItems(syncType: number, deletedItems: string): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_DeletedItems');
            }

            traceCloudSync_LibraryProvider_InvalidItems(syncType: number, invalidItems: string): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_InvalidItems');
            }

            traceCloudSync_LibraryProvider_IsDirty(isDirty: Boolean): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_IsDirty');
            }

            traceCloudSync_LibraryProvider_IsAvailable(isAvailable: Boolean): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_IsAvailable');
            }

            traceCloudSync_LibraryProvider_ContentChanged(notifyDelayMS: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_ContentChanged');
            }

            traceCloudSync_LibraryProvider_UpdateMetadata_Start(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_UpdateMetadata_Start');
            }

            traceCloudSync_LibraryProvider_UpdateMetadata_Stop(): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_LibraryProvider_UpdateMetadata_Stop');
            }

            traceCloudSync_CloudProvider_ApplyItem_Error(syncType: number, cloudId: string, hresult: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_ApplyItem_Error');
            }

            traceCloudSync_CloudProvider_ApplyItem_Skipped(syncType: number, cloudId: string): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_ApplyItem_Skipped');
            }

            traceCloudSync_CloudProvider_LoadItem_Error(syncType: number, cloudId: string, hresult: number): void {
                console.warn('shimmed function SyncEventProvider.traceCloudSync_CloudProvider_LoadItem_Error');
            }

        }
        export class SyncEventProviderTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function SyncEventProviderTemplate.eventEnabled');
            }

            traceTemplate_q(_MCGEN_EventIndex: number, requestSyncOption: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_q');
            }

            traceTemplate_d(_MCGEN_EventIndex: number, hresult: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_d');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_qq(_MCGEN_EventIndex: number, requestSyncOption: number, cookieNextCompleteSync: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_qq');
            }

            traceTemplate_dtq(_MCGEN_EventIndex: number, hresult: number, changes: Boolean, cookieCompleteSync: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_dtq');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, syncPointId: string): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_z');
            }

            traceTemplate_qd(_MCGEN_EventIndex: number, syncType: number, mediaId: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_qd');
            }

            traceTemplate_qdd(_MCGEN_EventIndex: number, syncType: number, mediaIdIn: number, mediaIdOut: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_qdd');
            }

            traceTemplate_qz(_MCGEN_EventIndex: number, syncType: number, dirtyItems: string): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_qz');
            }

            traceTemplate_t(_MCGEN_EventIndex: number, isDirty: Boolean): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_t');
            }

            traceTemplate_qzd(_MCGEN_EventIndex: number, syncType: number, cloudId: string, hresult: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_qzd');
            }

            traceTemplate_tq(_MCGEN_EventIndex: number, isDirty: Boolean, dirtyReason: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_tq');
            }

            traceTemplate_zqt(_MCGEN_EventIndex: number, anchor: string, requestedBatchSize: number, hasMoreData: Boolean): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_zqt');
            }

            traceTemplate_qzq(_MCGEN_EventIndex: number, syncType: number, cloudId: string, changeType: number): void {
                console.warn('shimmed function SyncEventProviderTemplate.traceTemplate_qzq');
            }

        }
        export class Xbox {
            isXboxAcquireExclusiveModeBeginEnabled: Boolean = false;
            isXboxAcquireExclusiveModeDoneEnabled: Boolean = false;
            isXboxAcquireExclusiveModeErrorEnabled: Boolean = false;
            isXboxBogusMediaStateMessageIgnoredEnabled: Boolean = false;
            isXboxControlCommandErrorEnabled: Boolean = false;
            isXboxControlCommandSentEnabled: Boolean = false;
            isXboxControlSeekCommandErrorEnabled: Boolean = false;
            isXboxControlSeekCommandSentEnabled: Boolean = false;
            isXboxDisconnectSessionBeginEnabled: Boolean = false;
            isXboxDisconnectSessionDoneEnabled: Boolean = false;
            isXboxDisconnectSessionErrorEnabled: Boolean = false;
            isXboxEstablishTitleChannelBeginEnabled: Boolean = false;
            isXboxEstablishTitleChannelDoneEnabled: Boolean = false;
            isXboxEstablishTitleChannelErrorEnabled: Boolean = false;
            isXboxGetActiveTitleInformationBeginEnabled: Boolean = false;
            isXboxGetActiveTitleInformationDoneEnabled: Boolean = false;
            isXboxGetActiveTitleInformationErrorEnabled: Boolean = false;
            isXboxGetKeyboardBeginEnabled: Boolean = false;
            isXboxGetKeyboardDoneEnabled: Boolean = false;
            isXboxGetKeyboardErrorEnabled: Boolean = false;
            isXboxGetKeyboardStateBeginEnabled: Boolean = false;
            isXboxGetKeyboardStateDoneEnabled: Boolean = false;
            isXboxGetKeyboardStateErrorEnabled: Boolean = false;
            isXboxGetKeyboardTextBeginEnabled: Boolean = false;
            isXboxGetKeyboardTextDoneEnabled: Boolean = false;
            isXboxGetKeyboardTextErrorEnabled: Boolean = false;
            isXboxGetMediaStateErrorEnabled: Boolean = false;
            isXboxHeartBeatPingErrorEnabled: Boolean = false;
            isXboxHideXboxControlsEnabled: Boolean = false;
            isXboxLaunchTitleCallEnabled: Boolean = false;
            isXboxLocalTransportStateChangedEnabled: Boolean = false;
            isXboxNewSessionObjectAssignedEnabled: Boolean = false;
            isXboxOnlinePresenceBeginEnabled: Boolean = false;
            isXboxOnlinePresenceErrorEnabled: Boolean = false;
            isXboxOnlinePresenceReceivedEnabled: Boolean = false;
            isXboxReleaseExclusiveModeBeginEnabled: Boolean = false;
            isXboxReleaseExclusiveModeDoneEnabled: Boolean = false;
            isXboxReleaseExclusiveModeErrorEnabled: Boolean = false;
            isXboxSendTitleMessageBeginEnabled: Boolean = false;
            isXboxSendTitleMessageDoneEnabled: Boolean = false;
            isXboxSendTitleMessageErrorEnabled: Boolean = false;
            isXboxSendTouchPointsBeginEnabled: Boolean = false;
            isXboxSendTouchPointsDoneEnabled: Boolean = false;
            isXboxSendTouchPointsErrorEnabled: Boolean = false;
            isXboxSessionConnectCallEnabled: Boolean = false;
            isXboxSessionObjectReassignedEnabled: Boolean = false;
            isXboxSessionObjectResetToNullEnabled: Boolean = false;
            isXboxSessionStateChangeEnabled: Boolean = false;
            isXboxSessionStatusChangedEnabled: Boolean = false;
            isXboxSetKeyboardTextAndSelectionBeginEnabled: Boolean = false;
            isXboxSetKeyboardTextAndSelectionDoneEnabled: Boolean = false;
            isXboxSetKeyboardTextAndSelectionErrorEnabled: Boolean = false;
            isXboxSetKeyboardTextBeginEnabled: Boolean = false;
            isXboxSetKeyboardTextDoneEnabled: Boolean = false;
            isXboxSetKeyboardTextErrorEnabled: Boolean = false;
            isXboxShowXboxControlsEnabled: Boolean = false;
            isXboxShowXboxControlsSetVisibleEnabled: Boolean = false;
            isXboxSigninJoinSessionEnabled: Boolean = false;
            isXboxSigninNoUserSessionsEnabled: Boolean = false;
            isXboxSigninTMFServiceSigninEnabled: Boolean = false;
            isXboxSigninX8AppSigninEnabled: Boolean = false;
            isXboxStreamingModeChangedEnabled: Boolean = false;
            isXboxTitleChangedEnabled: Boolean = false;
            isXboxTitleChannelStatusChangedEnabled: Boolean = false;
            isXboxTitleMessagingConfigChangedEnabled: Boolean = false;
            isXboxTransportControlsLRCStateChangeEnabled: Boolean = false;
            traceXboxSessionObjectResetToNull(): void {
                console.warn('shimmed function Xbox.traceXboxSessionObjectResetToNull');
            }

            traceXboxTitleChanged(titleId: number): void {
                console.warn('shimmed function Xbox.traceXboxTitleChanged');
            }

            traceXboxTitleMessagingConfigChanged(titleId: number, titlePort: number, enabled: Boolean): void {
                console.warn('shimmed function Xbox.traceXboxTitleMessagingConfigChanged');
            }

            traceXboxTitleChannelStatusChanged(status: number, titleId: number, titlePort: number, hresult: number): void {
                console.warn('shimmed function Xbox.traceXboxTitleChannelStatusChanged');
            }

            traceXboxStreamingModeChanged(clientExclusiveModeStatus: number, consoleExclusiveModeStatus: number): void {
                console.warn('shimmed function Xbox.traceXboxStreamingModeChanged');
            }

            traceXboxLocalTransportStateChanged(localTransportConnected: Boolean): void {
                console.warn('shimmed function Xbox.traceXboxLocalTransportStateChanged');
            }

            traceXboxSessionStatusChanged(sessionState: number): void {
                console.warn('shimmed function Xbox.traceXboxSessionStatusChanged');
            }

            traceXboxAcquireExclusiveModeBegin(): void {
                console.warn('shimmed function Xbox.traceXboxAcquireExclusiveModeBegin');
            }

            traceXboxAcquireExclusiveModeDone(): void {
                console.warn('shimmed function Xbox.traceXboxAcquireExclusiveModeDone');
            }

            traceXboxAcquireExclusiveModeError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxAcquireExclusiveModeError');
            }

            traceXboxHeartBeatPingError(hresult: number, errorMessage: string, sessionState: string, isCurrentWinRTSessionReassigned: Boolean, isCurrentWinRTSessionNull: Boolean): void {
                console.warn('shimmed function Xbox.traceXboxHeartBeatPingError');
            }

            traceXboxSessionConnectCall(sessionState: string, isRetry: Boolean): void {
                console.warn('shimmed function Xbox.traceXboxSessionConnectCall');
            }

            traceXboxLaunchTitleCall(titleId: number, startTimeMilliseconds: number, firstAction: string): void {
                console.warn('shimmed function Xbox.traceXboxLaunchTitleCall');
            }

            traceXboxReleaseExclusiveModeBegin(): void {
                console.warn('shimmed function Xbox.traceXboxReleaseExclusiveModeBegin');
            }

            traceXboxReleaseExclusiveModeDone(): void {
                console.warn('shimmed function Xbox.traceXboxReleaseExclusiveModeDone');
            }

            traceXboxReleaseExclusiveModeError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxReleaseExclusiveModeError');
            }

            traceXboxSendTouchPointsDone(): void {
                console.warn('shimmed function Xbox.traceXboxSendTouchPointsDone');
            }

            traceXboxSendTouchPointsError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxSendTouchPointsError');
            }

            traceXboxGetKeyboardBegin(): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardBegin');
            }

            traceXboxGetKeyboardDone(): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardDone');
            }

            traceXboxGetKeyboardError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardError');
            }

            traceXboxGetKeyboardStateBegin(): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardStateBegin');
            }

            traceXboxGetKeyboardStateDone(): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardStateDone');
            }

            traceXboxGetKeyboardStateError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardStateError');
            }

            traceXboxGetKeyboardTextBegin(): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardTextBegin');
            }

            traceXboxGetKeyboardTextDone(): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardTextDone');
            }

            traceXboxGetKeyboardTextError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxGetKeyboardTextError');
            }

            traceXboxSetKeyboardTextBegin(text: string): void {
                console.warn('shimmed function Xbox.traceXboxSetKeyboardTextBegin');
            }

            traceXboxSetKeyboardTextDone(): void {
                console.warn('shimmed function Xbox.traceXboxSetKeyboardTextDone');
            }

            traceXboxSetKeyboardTextError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxSetKeyboardTextError');
            }

            traceXboxSetKeyboardTextAndSelectionBegin(text: string, selectionStart: number, selectionLength: number): void {
                console.warn('shimmed function Xbox.traceXboxSetKeyboardTextAndSelectionBegin');
            }

            traceXboxSetKeyboardTextAndSelectionDone(): void {
                console.warn('shimmed function Xbox.traceXboxSetKeyboardTextAndSelectionDone');
            }

            traceXboxSetKeyboardTextAndSelectionError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxSetKeyboardTextAndSelectionError');
            }

            traceXboxSendTitleMessageBegin(): void {
                console.warn('shimmed function Xbox.traceXboxSendTitleMessageBegin');
            }

            traceXboxSendTitleMessageDone(): void {
                console.warn('shimmed function Xbox.traceXboxSendTitleMessageDone');
            }

            traceXboxSendTitleMessageError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxSendTitleMessageError');
            }

            traceXboxDisconnectSessionBegin(): void {
                console.warn('shimmed function Xbox.traceXboxDisconnectSessionBegin');
            }

            traceXboxDisconnectSessionDone(): void {
                console.warn('shimmed function Xbox.traceXboxDisconnectSessionDone');
            }

            traceXboxDisconnectSessionError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxDisconnectSessionError');
            }

            traceXboxNewSessionObjectAssigned(): void {
                console.warn('shimmed function Xbox.traceXboxNewSessionObjectAssigned');
            }

            traceXboxSessionObjectReassigned(): void {
                console.warn('shimmed function Xbox.traceXboxSessionObjectReassigned');
            }

            traceXboxSessionStateChange(newState: string, oldState: string): void {
                console.warn('shimmed function Xbox.traceXboxSessionStateChange');
            }

            traceXboxTransportControlsLRCStateChange(newState: string, oldState: string): void {
                console.warn('shimmed function Xbox.traceXboxTransportControlsLRCStateChange');
            }

            traceXboxSigninTMFServiceSignin(tag: string, hresult: number, errorText: string): void {
                console.warn('shimmed function Xbox.traceXboxSigninTMFServiceSignin');
            }

            traceXboxSigninJoinSession(tag: string, hresult: number, errorText: string): void {
                console.warn('shimmed function Xbox.traceXboxSigninJoinSession');
            }

            traceXboxSigninX8AppSignin(tag: string, hresult: number, errorText: string): void {
                console.warn('shimmed function Xbox.traceXboxSigninX8AppSignin');
            }

            traceXboxSigninNoUserSessions(tag: string, hresult: number, errorText: string): void {
                console.warn('shimmed function Xbox.traceXboxSigninNoUserSessions');
            }

            traceXboxControlCommandSent(controlKey: number, executionTimeMilliseconds: number): void {
                console.warn('shimmed function Xbox.traceXboxControlCommandSent');
            }

            traceXboxControlCommandError(controlKey: number, executionTimeMilliseconds: number, responseCode: number): void {
                console.warn('shimmed function Xbox.traceXboxControlCommandError');
            }

            traceXboxControlSeekCommandSent(seekPosition: number, executionTimeMilliseconds: number): void {
                console.warn('shimmed function Xbox.traceXboxControlSeekCommandSent');
            }

            traceXboxControlSeekCommandError(seekPosition: number, executionTimeMilliseconds: number, responseCode: number): void {
                console.warn('shimmed function Xbox.traceXboxControlSeekCommandError');
            }

            traceXboxBogusMediaStateMessageIgnored(position: number, transportState: number, positionBeforeLastSeek: number, lastSeekPosition: number): void {
                console.warn('shimmed function Xbox.traceXboxBogusMediaStateMessageIgnored');
            }

            traceXboxGetMediaStateError(executionTimeMilliseconds: number, responseCode: number): void {
                console.warn('shimmed function Xbox.traceXboxGetMediaStateError');
            }

            traceXboxShowXboxControls(): void {
                console.warn('shimmed function Xbox.traceXboxShowXboxControls');
            }

            traceXboxShowXboxControlsSetVisible(): void {
                console.warn('shimmed function Xbox.traceXboxShowXboxControlsSetVisible');
            }

            traceXboxHideXboxControls(): void {
                console.warn('shimmed function Xbox.traceXboxHideXboxControls');
            }

            traceXboxOnlinePresenceBegin(): void {
                console.warn('shimmed function Xbox.traceXboxOnlinePresenceBegin');
            }

            traceXboxOnlinePresenceReceived(titleId: number, mediaAssetId: string): void {
                console.warn('shimmed function Xbox.traceXboxOnlinePresenceReceived');
            }

            traceXboxOnlinePresenceError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxOnlinePresenceError');
            }

            traceXboxGetActiveTitleInformationBegin(): void {
                console.warn('shimmed function Xbox.traceXboxGetActiveTitleInformationBegin');
            }

            traceXboxGetActiveTitleInformationDone(): void {
                console.warn('shimmed function Xbox.traceXboxGetActiveTitleInformationDone');
            }

            traceXboxGetActiveTitleInformationError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxGetActiveTitleInformationError');
            }

            traceXboxEstablishTitleChannelBegin(): void {
                console.warn('shimmed function Xbox.traceXboxEstablishTitleChannelBegin');
            }

            traceXboxEstablishTitleChannelDone(): void {
                console.warn('shimmed function Xbox.traceXboxEstablishTitleChannelDone');
            }

            traceXboxEstablishTitleChannelError(hresult: number, errorMessage: string): void {
                console.warn('shimmed function Xbox.traceXboxEstablishTitleChannelError');
            }

            traceXboxSendTouchPointsBegin(): void {
                console.warn('shimmed function Xbox.traceXboxSendTouchPointsBegin');
            }

        }
        export class XboxTemplate {
            eventEnabled(eventIndex: number): number {
                throw new Error('shimmed function XboxTemplate.eventEnabled');
            }

            traceTemplate_zz(_MCGEN_EventIndex: number, newState: string, oldState: string): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_zz');
            }

            traceTemplate_zdz(_MCGEN_EventIndex: number, tag: string, hresult: number, errorText: string): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_zdz');
            }

            traceTemplate_qf(_MCGEN_EventIndex: number, controlKey: number, executionTimeMilliseconds: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_qf');
            }

            traceTemplate_qfq(_MCGEN_EventIndex: number, controlKey: number, executionTimeMilliseconds: number, responseCode: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_qfq');
            }

            traceTemplate_xf(_MCGEN_EventIndex: number, seekPosition: number, executionTimeMilliseconds: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_xf');
            }

            traceTemplate_xfq(_MCGEN_EventIndex: number, seekPosition: number, executionTimeMilliseconds: number, responseCode: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_xfq');
            }

            traceTemplate_xqxx(_MCGEN_EventIndex: number, position: number, transportState: number, positionBeforeLastSeek: number, lastSeekPosition: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_xqxx');
            }

            traceTemplate_fq(_MCGEN_EventIndex: number, executionTimeMilliseconds: number, responseCode: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_fq');
            }

            traceTemplateEventDescriptor(_MCGEN_EventIndex: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplateEventDescriptor');
            }

            traceTemplate_qz(_MCGEN_EventIndex: number, titleId: number, mediaAssetId: string): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_qz');
            }

            traceTemplate_dz(_MCGEN_EventIndex: number, hresult: number, errorMessage: string): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_dz');
            }

            traceTemplate_z(_MCGEN_EventIndex: number, text: string): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_z');
            }

            traceTemplate_zqq(_MCGEN_EventIndex: number, text: string, selectionStart: number, selectionLength: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_zqq');
            }

            traceTemplate_q(_MCGEN_EventIndex: number, titleId: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_q');
            }

            traceTemplate_qqt(_MCGEN_EventIndex: number, titleId: number, titlePort: number, enabled: Boolean): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_qqt');
            }

            traceTemplate_qqqd(_MCGEN_EventIndex: number, status: number, titleId: number, titlePort: number, hresult: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_qqqd');
            }

            traceTemplate_qq(_MCGEN_EventIndex: number, clientExclusiveModeStatus: number, consoleExclusiveModeStatus: number): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_qq');
            }

            traceTemplate_t(_MCGEN_EventIndex: number, localTransportConnected: Boolean): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_t');
            }

            traceTemplate_dzztt(_MCGEN_EventIndex: number, hresult: number, errorMessage: string, sessionState: string, isCurrentWinRTSessionReassigned: Boolean, isCurrentWinRTSessionNull: Boolean): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_dzztt');
            }

            traceTemplate_zt(_MCGEN_EventIndex: number, sessionState: string, isRetry: Boolean): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_zt');
            }

            traceTemplate_qfz(_MCGEN_EventIndex: number, titleId: number, startTimeMilliseconds: number, firstAction: string): void {
                console.warn('shimmed function XboxTemplate.traceTemplate_qfz');
            }

        }
    }
}