import { useState } from 'react';
import Header from '../../components/Header';
import MusicForms from './SongForm';
import SuccessModal from './SuccessModal';
import './NewSong.css';

const NewSong = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        artist: '',
        songName: '',
        albumCover: '',
        songLink: ''
    });

    const handleFormSubmit = () => {
        setIsModalVisible(true);
    }

    return (
        <>
            {isModalVisible && 
                <SuccessModal 
                    setIsModalVisible={setIsModalVisible} 
                    setFormData={setFormData} 
                />
            }
            <Header />
            <MusicForms 
                onSubmit={handleFormSubmit} 
                formData={formData} 
                setFormData={setFormData} 
            />
        </>
    )
}

export default NewSong;
