import { useState } from 'react';
import Header from '../../components/Header';
import MusicForms from './ArtistForm';
import SuccessModal from './SuccessModal';
import './NewArtist.css';

const NewArtist = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            {isModalVisible && 
                <SuccessModal 
                    setIsModalVisible={setIsModalVisible} 
                />
            }
            <Header />
            <MusicForms 
                // onSubmit={handleFormSubmit}
                setIsModalVisible={setIsModalVisible}
            />
        </>
    )
}

export default NewArtist;
