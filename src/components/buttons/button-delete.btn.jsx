import TrashIcon from "../icons/trash.icon";

function DeleteButton({id, onEliminar}){
    return(
        <button onClick={() => onEliminar(id)}
        style={{ backgroundColor: "transparent", color: "#242d71" }} >
          <span style={{ fontSize: "1.5em" }}>
            <TrashIcon />
          </span>
        </button>
    )
}

export default DeleteButton;