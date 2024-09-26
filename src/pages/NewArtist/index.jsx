import { useState } from 'react';
import Header from '../../components/Header';
import MusicForms from './ArtistForm';
import SuccessModal from './SuccessModal';
import './NewArtist.css';

const NewArtist = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: ''
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

export default NewArtist;
