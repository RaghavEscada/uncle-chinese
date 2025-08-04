import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
   <>
   </>
  );
} 