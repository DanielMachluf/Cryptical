import { errorExtractor } from "error-extractor";
import iziToast, { IziToastSettings } from "izitoast";
import "izitoast/dist/css/iziToast.css";

class Notify {

    // Base configuration shared by all notifications
    private readonly baseSettings: IziToastSettings = {
        position: "topLeft",
        timeout: 3000,
        transitionIn: "fadeInRight",
        transitionOut: "fadeOutLeft",
    };

    public success(message: string): void {
        iziToast.success({
            ...this.baseSettings,
            message,
            timeout: 7000
        });
    }

    public info(message: string): void {
        iziToast.info({
            ...this.baseSettings,
            message,
            timeout: 6000
        });
    }

    public warning(message: string): void {
        iziToast.warning({
            ...this.baseSettings,
            message
        });
    }

    public error(err: any): void {
        iziToast.error({
            ...this.baseSettings,
            message: errorExtractor.getMessage(err)
        });
    }
}

export const notify = new Notify();