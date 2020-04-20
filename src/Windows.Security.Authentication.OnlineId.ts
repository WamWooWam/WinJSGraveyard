/// <ref src="Windows.Foundation.ts"/>
import { Foundation } from "./Windows.Foundation"

export namespace Security.Authentication.OnlineId {
    export class OnlineIdServiceTicketRequest {

    }

    export class UserIdentity {

    }

    export enum CredentialPromptType {
        promptIfNeeded,
        retypeCredentials,
        doNotPrompt
    }

    export class OnlineIdAuthenticator {
        authenticateUserAsync(request: OnlineIdServiceTicketRequest[], proptType: CredentialPromptType)
            : Foundation.IAsyncOperation<UserIdentity> {
            return new Foundation.IAsyncOperation<UserIdentity>(async (resolve, reject) => {
                reject({});
            });
        }
    }
}