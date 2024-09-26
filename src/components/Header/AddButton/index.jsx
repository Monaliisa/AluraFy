import { useNavigate } from "react-router-dom";
import "./AddButton.css"

const AddButton = ({ showAddButton }) => {
    const navigate = useNavigate();

    return (
        <>
            {showAddButton &&
                <div className="add-button">
                    <p onClick={() => navigate("/new-song")}>Add a song</p>
                    <p onClick={() => navigate("/new-artist")}>Add an artist</p>
                </div>
            }
        </>
    )
}

export default AddButton;
