'use client';

export default function BookCallButton() {
  const handleClick = () => {
    if (typeof Calendly !== 'undefined') {
      Calendly.initPopupWidget({
        url: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/youragency',
      });
      return false;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn-primary text-sm w-full md:w-auto"
    >
      Book a Call
    </button>
  );
}
