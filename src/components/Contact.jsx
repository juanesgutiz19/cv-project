import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Logo.svg';

const Contact = () => {
    return (

        <div id="contact">
            <div className="bg-gray-7 flex flex-col items-center lg:justify-between lg:flex-row mt-16 p-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-10">Contact</h1>
                    <div className="mb-8">
                        <p className="text-lg font-normal text-white">+57 3016579683</p>
                        <p className="text-lg font-normal text-white">juanesguti19@gmail.com</p>
                    </div>
                    <div className="text-white text-2xl mb-10">
                        <a href="https://www.linkedin.com/in/juan-esteban-guti%C3%A9rrez-zuluaga-8b6718208/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}
                                className="hover:text-blue-1 mx-2"
                            />
                        </a>  
                        <a href="https://github.com/juanesgutiz19" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}
                                className="hover:text-gray-8 mx-2"
                            />
                        </a>
                    </div>
                </div>
                <img
                    className="w-44 mb-6 lg:mb-0"
                    src={ Logo }
                    alt="Logo Juan"
                />
            </div>
        </div>
        
    )
}

export default Contact;
