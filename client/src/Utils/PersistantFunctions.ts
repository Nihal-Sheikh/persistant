export default class Persistant {

    public static set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    public static get(key: string) {
        return localStorage.getItem(key);
    }

    public static remove(key: string) {
        localStorage.removeItem(key);
    }

    public static clear() {
        localStorage.clear();
    }

    public static togglePopup() {
        const popup = document.getElementsByClassName("popup")[0] as HTMLElement;
        const popupfade = document.getElementById("popup") as HTMLElement;
        if (popup) {
            popup.style.display = popup.style.display === "none" ? "block" : "none";
            popupfade.style.display = popupfade.style.display === "none" ? "block" : "none";
        }
    }
}