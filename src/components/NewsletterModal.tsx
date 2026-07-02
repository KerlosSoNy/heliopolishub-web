'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay z-[99999999999]!" data-overlay onClick={closeModal}></div>

      <div className="modal" data-modal>
        <div className="modal-content">
          <button
            className="absolute top-4! right-4! text-gray-500 hover:text-gray-700 z-[99999999999]"
            data-modal-close
            onClick={closeModal}
          >
            <svg className="w-2 h-2" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon> </g> </g> </g></svg>
          </button>

          <div className="newsletter-img">
            <Image
              src="/images/cars/1.JPG"
              alt="subscribe newsletter"
              width={400}
              height={400}
            />
          </div>

          <div className="newsletter">
            <form onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              closeModal();
            }}>
              <div className="newsletter-header">
                <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                <p className="newsletter-desc">
                  Subscribe the <b>Heliopolis Hub</b> to get latest products and discount update.
                </p>
              </div>

              <input
                type="email"
                name="email"
                className="email-field"
                placeholder="Email Address"
                required
              />

              <button type="submit" className="btn-newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}