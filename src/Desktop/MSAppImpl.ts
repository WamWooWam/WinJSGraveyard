import { IMessage } from "./Desktop";
import { Start } from "./Start";

export class MSAppImpl {
    terminateApp(message: IMessage) {
        let start = Start.getInstance();
        start.show();

        message.window.terminate();
    }

    createNewView(message: IMessage) {
        
    }
}