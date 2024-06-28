
import PersistantFunctions from "./PersistantFunctions";
/**
 * An interface that describes the props object for the `_Popup` component.
 * 
 * @interface _Popup_props
 * @property {string} [heading] - The heading of the popup.
 * @property {JSX.Element} content - The JSX element to be displayed in the popup content area.
 * @property {boolean} isForm - A boolean indicating whether the popup content area contains a form.
 * @property {string[]} [dataToCollect] - An optional array of strings representing the names of data to collect from a form.
 * @property {(data: Record<string, string>) => void} onDataCollect - Callback function to return collected data.
 */
interface _Popup_props {
    heading?: string;
    content: JSX.Element;
    isForm: boolean;
    dataToCollect?: string[];
}

const _Popup: React.FC<_Popup_props> = (props) => {
    const resetForm = () => {
        if (props.isForm) {
            const resetButton = document.getElementById("resetButton") as HTMLButtonElement;
            if (resetButton) {
                resetButton.click();
            }
        }
    };

    const popUpStructure: JSX.Element = (
        <>
            <div className="popupfade" id="popup" onClick={()=>PersistantFunctions.togglePopup()}></div>
            <article className="popup">
                <header className="popupTopbar">
                    <button type="button" className="closeButton" id="closeButton" onClick={() => { PersistantFunctions.togglePopup(); resetForm(); }}>X</button>
                    <p>{props.heading?props.heading:""}</p>
                    <button type="button" className="minusButton" onClick={() => PersistantFunctions.togglePopup()}>-</button>
                </header>
                <div className="popupContent">
                    {props.content}
                </div>
            </article>
        </>
    );

    return popUpStructure;
};

export default _Popup;
