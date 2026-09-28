"use client";
import { useEffect } from 'react';

export default function ImageProtection() {
  useEffect(() => {
    // Prevent right click on images globally
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If the target is an image, or inside a picture element, or has a background image and we want to be aggressive (but usually just IMG is enough)
      if (target && target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    
    // Prevent dragging images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null; // This component doesn't render anything
}
