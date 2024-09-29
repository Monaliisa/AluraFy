import { useState } from 'react';
import { addNewArtist } from '../service/addNewArtist';
import './ArtistForm.css'
import { useNavigate } from 'react-router-dom';

const ArtistForm = ({ setIsModalVisible }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !image) {
            alert('Please, fill in all fields');
            return;
        }

        try {
            fetch(addNewArtist(name, image))
            setIsModalVisible(true)
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <section className="form-section">
            <h1 className='form-title'>Add a new artist</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <label className="form-group">
                    Artist name:
                    <input
                        type="text"
                        name="artist"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter artist name"
                    />
                </label>
                <label className="form-group">
                    Artist image:
                    <input
                        type="url"
                        name="albumCover"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Image URL"
                    />
                </label>
                <div className="button-group">
                    <button type="submit" className="button-send">Send</button>
                    <button type="button" className="button-cancel"
                        onClick={() => navigate("/")}>
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ArtistForm;
