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
        if (popup && popupfade) {
            const isCurrentlyHidden = popup.style.display === "none" || getComputedStyle(popup).display === "none";
            popup.style.display = isCurrentlyHidden ? "block" : "none";
            popupfade.style.display = isCurrentlyHidden ? "block" : "none";
        }
    }
    public static detectColorScheme() {
        let theme = "dark";
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === "light") {
                theme = "light";
            }
        } else if (window.matchMedia) {
            if (window.matchMedia("(prefers-color-scheme: light)").matches) {
                theme = "light";
            }
        }
        document.documentElement.setAttribute("data-theme", theme);
    }
}