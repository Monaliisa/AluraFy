import { CheckCircle } from '@mui/icons-material';
import './SuccessModal.css';

const SuccessModal = () => {
    return (
        <section className="modal-background">
            <div className="modal">
                <p>Song added successfully!</p>
                <CheckCircle sx={{ fontSize: 90 }}  />
            </div>
        </section>
    )
}

export default SuccessModal;
