export default function NotificationToast() {
  return (
    <div className="notification-toast" data-toast>
      <button className="toast-close-btn" data-toast-close>
        <svg className="w-2 h-2" fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon> </g> </g> </g></svg>
      </button>

      <div className="toast-banner">
        <img src="/images/cars/10.JPG" alt="Rose Gold Earrings" className="object-cover!" width={80} height={70} />
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
