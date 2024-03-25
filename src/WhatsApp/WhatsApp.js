import React from 'react'
import { Link } from 'react-router-dom';
import './WhatsApp.css';
import { Tooltip } from '@mui/material';

const WhatsApp = () => {
    const whatsappLink = `https://wa.me/+919793186798`;
    return (
        <Tooltip title="Chat with us">

            <Link to={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp_float">
                <i className="bi bi-whatsapp fs-1"></i>
            </Link>
        </Tooltip>
    )
}

export default WhatsApp