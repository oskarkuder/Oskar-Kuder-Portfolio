
import React, { useState } from 'react';
import { CloseIcon, MailIcon, InstagramIcon, TikTokIcon, CheckIcon } from '../constants';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactLink = ({ href, icon, label, ariaLabel }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-700/60 hover:border-amber-400/50 transition-all duration-300 group"
    >
        <span className="text-amber-400 group-hover:scale-110 transition-transform">{icon}</span>
        <span className="text-lg text-white font-semibold">{label}</span>
    </a>
);


const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('oskar.kuder@gmail.com').then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2500);
        });
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
        >
            <div 
                className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md m-4 border border-gray-700/50 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-5 border-b border-gray-700/50">
                    <h2 id="contact-modal-title" className="text-2xl font-bold text-white">Get In Touch</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                        <CloseIcon />
                    </button>
                </div>
                <div className="p-6">
                    <p className="text-gray-300 mb-6">I'm always excited to discuss new projects. Reach out through any of the channels below!</p>
                    <div className="grid gap-4">
                       <button
                            onClick={handleCopyEmail}
                            aria-label="Copy email to clipboard"
                            className="flex items-center w-full gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-700/60 hover:border-amber-400/50 transition-all duration-300 group"
                       >
                            <span className={`transition-all ${isCopied ? 'text-green-400' : 'text-amber-400 group-hover:scale-110'}`}>
                                {isCopied ? <CheckIcon className="h-7 w-7" /> : <MailIcon className="h-7 w-7"/>}
                            </span>
                            <span className="text-lg text-white font-semibold">
                                {isCopied ? 'Copied!' : 'oskar.kuder@gmail.com'}
                            </span>
                       </button>
                       <ContactLink 
                            href="https://www.instagram.com/oskar_kuder/"
                            icon={<InstagramIcon className="h-7 w-7"/>}
                            label="Instagram"
                            ariaLabel="Visit Oskar Kuder's Instagram profile"
                       />
                       <ContactLink 
                            href="https://www.tiktok.com/oskarkuder2"
                            icon={<TikTokIcon className="h-7 w-7"/>}
                            label="TikTok"
                            ariaLabel="Visit Oskar Kuder's TikTok profile"
                       />
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in-scale { animation: fadeInScale 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default ContactModal;