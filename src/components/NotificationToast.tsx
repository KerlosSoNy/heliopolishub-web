'use client'
import Image from "next/image";
import { useState } from "react";

export default function NotificationToast() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="notification-toast" data-toast>
      <button
        className="toast-close-btn"
        onClick={() => setIsVisible(false)}
      >
        <svg className="w-2 h-2" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon> </g> </g> </g></svg>
      </button>

      <div className="toast-banner">
        <Image src="/images/cars/10.JPG" alt="Rose Gold Earrings" className="object-cover! h-full" width={80} height={70} />
      </div>

      <div className="toast-detail">
        <p className="toast-message">Someone in new just bought</p>
        <p className="toast-title">KaidoHouse E30</p>
        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
}