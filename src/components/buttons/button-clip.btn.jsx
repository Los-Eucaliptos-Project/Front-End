import PaperClipIcon from "../icons/paperclip.icon";

function ClipButton({id, onEliminar}){
    return(
        <button onClick={() => onEliminar(id)}
        style={{ backgroundColor: "transparent", color: "#242d71" }} >
            <span style={{ fontSize: "1.5em" }}>
              <PaperClipIcon />
            </span>
        </button>
    )
}

export default ClipButton;