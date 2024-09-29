import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import SongForm from './SongForm';
import SuccessModal from './SuccessModal';
import './NewSong.css';

const NewSong = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/artista")
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            {isModalVisible && 
                <SuccessModal 
                    setIsModalVisible={setIsModalVisible} 
                />
            }
            <Header />
            <SongForm 
                artists={artists}
                setIsModalVisible={setIsModalVisible}
            />
        </>
    )
}

export default NewSong;
