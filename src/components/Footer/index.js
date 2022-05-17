import React from 'react';
import AA from '../../assets/AAbadge.png'
import UI from '../../assets/uiPath.png'


const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary">
            <div className='badge-container'>            
                <a href='https://github.com/Thisara-DE' target='_blank' rel='noreferrer'>
                    <i className="fa-brands fa-github fa-4x"></i>
                </a>
                <a href='https://linkedin.com/in/thisaradh' target='_blank' rel='noreferrer'>
                    <i className="fa-brands fa-linkedin fa-4x"></i>
                </a>
                <a href='https://certificates.automationanywhere.com/9e8df6da-4258-493c-b9f8-8e78c9de614f' target='_blank' rel='noreferrer'>
                    <img src={AA} className="automationBadge" alt='AA certification'></img>
                </a> 
                <a href='https://crlearningpath.s3.amazonaws.com/crcloud/learningpathcertificate/1993/1044506/LearningPath_Certificate_05152022063222907.pdf?X-Amz-Expires=3600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQTWQX7ATC3F6WGOC%2F20220515%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220515T064217Z&X-Amz-SignedHeaders=host&X-Amz-Signature=7817ae6d696471c6134a8b5d60ee8bf52502e9dc41a87dc6faf1c62ff7d19abf' target='_blank' rel='noreferrer'>
                    <img src={UI} className="automationBadge" alt='UI path certification'></img>
                </a>
            </div>
            <div className='copyright'>
                <p className='my-2'>© Thisara</p>
            </div>                   
        </footer>
    );
};

export default Footer;