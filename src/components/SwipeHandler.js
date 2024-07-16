import { useEffect } from 'react';

const useSwipeHandler = (onSwipe) => {
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY;

      if (deltaY < -50) {
        onSwipe('up');
      } else if (deltaY > 50) {
        onSwipe('down');
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipe]);
};

export default useSwipeHandler;
