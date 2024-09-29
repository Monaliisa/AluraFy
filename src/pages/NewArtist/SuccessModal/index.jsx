import { CheckCircle } from '@mui/icons-material';
import './SuccessModal.css';

const SuccessModal = ({setIsModalVisible}) => {
    const handleCloseModal = () => {
        setIsModalVisible(false)
    }

    return (
        <section className="modal-background" onClick={handleCloseModal}>
            <div className="modal">
                <p>Artist added successfully!</p>
                <CheckCircle sx={{ fontSize: 90 }}  />
            </div>
        </section>
    )
}

export default SuccessModal;
