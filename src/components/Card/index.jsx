import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { IconButton } from '@mui/material'; // Importa o IconButton do Material-UI
import EditIcon from '@mui/icons-material/Edit'; // Importa o ícone de edição
import './Card.css';

const Card = ({ type, data, setSelectedSong }) => {
    const navigate = useNavigate(); 
    const [isHovered, setIsHovered] = useState(false); 

    const handleMouseEnter = () => {
        setIsHovered(true); 
    };

    const handleMouseLeave = () => {
        setIsHovered(false); 
    };

    const handleClick = () => {
        if (type === "song") {
            setSelectedSong(data); 
        }
    };

    return (
        <div 
            className="music-card" 
            onClick={handleClick} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <img src={type === "song" ? data.albumCover : data.image} alt="Album cover" />
            <h3>{type === "song" ? data.title : data.name}</h3>
            {type === "song" && <p>{data.artist}</p>}
            {isHovered && type === "song" && (
                <IconButton 
                    className='edit' 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        console.log(`Navigating to edit for song with id: ${data.id}`); 
                        navigate(`/edit/${data.id}`); 
                    }}
                    size="small"
                    style={{ 
                        position: 'absolute',
                        top: '10px', 
                        left: '10px', 
                        zIndex: 1000 
                    }}
                >
                    <EditIcon className='edit'/> 
                </IconButton>
            )}
        </div>
    );
}

export default Card;
