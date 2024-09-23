import { useState } from 'react';
import Header from '../../components/Header';
import MusicForms from '../../components/MusicForms';
import SuccessModal from './SuccessModal';
import './Forms.css';

const Forms = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleFormSubmit = () => {
        setIsModalVisible(true);
    }
    return (
        <>
            {isModalVisible && <SuccessModal />}
            <Header />
            <MusicForms onSubmit={handleFormSubmit} />
        </>
    )
}

export default Forms;
