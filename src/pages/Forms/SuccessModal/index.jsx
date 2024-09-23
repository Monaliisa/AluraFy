import { CheckCircle } from '@mui/icons-material';
import "./SuccessModal.css"

const SuccessModal = () => {
    return (
        <section className="modal-background">
            <div className="modal">
                <p>Song added successfully!</p>
                <CheckCircle fontSize='xl' />
            </div>
        </section>
    )
}

export default SuccessModal;
