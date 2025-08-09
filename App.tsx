
import React, { useState, useRef, useEffect } from 'react';
import Section from './components/Section';
import ContactModal from './components/ContactModal';
import { InstagramIcon, TikTokIcon, MailIcon } from './constants';
import { fallbackProfileImage } from './imageConstants';

const ugcVideos = [
  { id: 'xNd09a37CaI', title: 'Creative Product Showcase' },
  { id: 'MyjGcAiahD8', title: 'random but funny' },
  { id: '1hoJvUbRst0', title: 'Game-Changing AI Feature' },
  { id: 'FwsRagXM63Q', title: 'Must-Have Productivity Tool' },
];

const VideoCard = ({ videoId, title }) => (
  <div className="relative hover:z-10 flex-shrink-0 w-64 sm:w-72 bg-gray-800/50 rounded-lg overflow-hidden shadow-lg border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-amber-400/20">
    <div className="aspect-[9/16] w-full bg-black">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-white text-lg truncate">{title}</h3>
    </div>
  </div>
);


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImgSrc, setProfileImgSrc] = useState('assets/profile.jpeg');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll to the middle of the container on initial load
      const scrollAmount = (container.scrollWidth - container.clientWidth) / 2;
      container.scrollLeft = scrollAmount;
    }
  }, []);


  const handleImageError = () => {
    // If the primary image fails to load, switch to the embedded fallback image.
    setProfileImgSrc(fallbackProfileImage);
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <main>
        {/* Hero Section */}
        <Section className="relative min-h-screen flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-80 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb91?q=80&w=3456&auto=format&fit=crop"
              alt="Abstract background"
              className="object-cover w-full h-full opacity-10 blur-sm"
            />
          </div>
          <div className="relative z-20 p-4">
            <img
              src={profileImgSrc}
              onError={handleImageError}
              alt="Oskar Kuder's Profile Picture"
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto mb-4 sm:mb-6 border-4 border-gray-700 shadow-lg bg-gray-700"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              Oskar Kuder
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 font-medium">
              UGC Creator <span className="text-amber-400">&</span> Social Media Manager
            </p>
            <p className="mt-2 max-w-2xl mx-auto text-gray-400">
              I create authentic content that doesn't feel like an ad, specializing in high-volume video and full-service management.
            </p>
            <div className="mt-6 sm:mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-500 transition-transform transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-widest">Currently Working With</p>
              <div className="flex items-center justify-center gap-6 mt-3">
                <p className="text-xl sm:text-2xl font-bold text-gray-200">Parakeet AI</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/oskarkuder2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    aria-label="Visit Oskar Kuder's Instagram"
                  >
                    <InstagramIcon className="h-7 w-7" />
                  </a>
                  <a
                    href="https://tiktok.com/oskarkuder2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    aria-label="Visit Oskar Kuder's TikTok"
                  >
                    <TikTokIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 inset-x-0 z-30 flex justify-center">
            <div
              className="flex flex-col items-center animate-gentle-bounce cursor-default"
              aria-hidden="true"
            >
              <span className="text-gray-400 text-sm tracking-wider">
                View Showcase
              </span>
              <svg className="w-5 h-5 mt-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </Section>
        
        {/* UGC Showcase Section */}
        <Section id="work" className="bg-black/20 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
              UGC Showcase
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              A collection of my recent work. Authentic, engaging, and designed to convert.
            </p>
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 mt-16 pt-4 pb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 hide-scrollbar"
            >
              {ugcVideos.map((video, index) => (
                <VideoCard key={`${video.id}-${index}`} videoId={video.id} title={video.title} />
              ))}
            </div>
        </Section>


        {/* Footer */}
        <footer className="bg-black/30 py-8 px-4 text-center">
          <p className="text-gray-500 text-sm mt-2">Built with ❤️ and powered by creativity.</p>
        </footer>

        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </div>
  );
};

export default App;
