import './ArtistForm.css'
import { useNavigate } from 'react-router-dom';

const ArtistForm = ({ onSubmit, formData, setFormData }) => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.image) {
            onSubmit();
        } else {
            alert('Please, fill in all fields');
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
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter artist name"
                    />
                </label>
                <label className="form-group">
                    Artist image:
                    <input
                        type="url"
                        name="albumCover"
                        value={formData.image}
                        onChange={handleChange}
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
