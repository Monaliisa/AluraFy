import './SongForm.css'
import { useNavigate } from 'react-router-dom';

const SongForm = ({ onSubmit, formData, setFormData }) => {
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
        if (formData.artist && formData.songName && formData.albumCover && formData.songLink) {
            onSubmit();
        } else {
            alert('Please, fill in all fields');
        }
    };
    return (
        <section className="form-section">
            <h1 className='form-title'>Add a Song</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <label className="form-group">
                    Artist name:
                    <input
                        type="text"
                        name="artist"
                        value={formData.artist}
                        onChange={handleChange}
                        placeholder="Enter artist name"
                    />
                </label>
                <label className="form-group">
                    Song name:
                    <input
                        type="text"
                        name="songName"
                        value={formData.songName}
                        onChange={handleChange}
                        placeholder="Enter song name"
                    />
                </label>
                <label className="form-group">
                    Album cover:
                    <input
                        type="url"
                        name="albumCover"
                        value={formData.albumCover}
                        onChange={handleChange}
                        placeholder="Image URL"
                    />
                </label>
                <label className="form-group">
                    Song link:
                    <input
                        type="url"
                        name="songLink"
                        value={formData.songLink}
                        onChange={handleChange}
                        placeholder="Song URL"
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

export default SongForm;
