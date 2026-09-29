"use client";
import { useEffect } from 'react';

export default function ImageProtection() {
  useEffect(() => {
    // Prevent right click globally to stop image downloads (including background images)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right click ONLY on input fields or textareas if needed, otherwise block all
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
    };
    
    // Prevent dragging images globally
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Prevent common keyboard shortcuts for save (Ctrl+S) and print (Ctrl+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
