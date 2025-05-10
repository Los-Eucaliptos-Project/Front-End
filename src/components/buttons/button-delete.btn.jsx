import TemplateIcon from '../icons/template-icon.icon.jsx';
import  icons  from '../../utils/icons-library.js';

function DeleteButton({id, onEliminar}){
    return(
        <button onClick={() => onEliminar(id)}
        style={{ backgroundColor: "transparent", color: "#242d71" }} >
          <span style={{ fontSize: "1.5em" }}>
              <TemplateIcon icon={icons.faTrashCan} />
          </span>
        </button>
    )
}

export default DeleteButton;