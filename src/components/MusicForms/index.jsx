import './MusicForms.css'

const MusicForms = () => {
    return (
        <section className="form-section">
            <h1 className='form-title'>Add a Song</h1>
            <form className="form-container">
                <label className="form-group">
                    Artist name:
                    <input
                        type="text"
                    />
                </label>
                <label className="form-group">
                    Song name:
                    <input
                        type="text"
                    />
                </label>
                <label className="form-group">
                    Album cover:
                    <input
                        type="text"
                        placeholder="Image URL"
                    />
                </label>
                <label className="form-group">
                    Song link:
                    <input
                        type="text"
                        placeholder="Song URL"
                    />
                </label>
                <div className="button-group">
                    <button type="submit" className="button-send">Send</button>
                    <button type="button" className="button-cancel">Cancel</button>
                </div>
            </form>
        </section>
    );
};

export default MusicForms;
