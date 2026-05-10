'use client';

import BookCallButton from './BookCallButton';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-white border-t border-border-light p-4 z-40 safe-area-inset-bottom">
      <BookCallButton />
    </div>
  );
}
