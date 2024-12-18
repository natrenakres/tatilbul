'use client';
/* eslint-disable @next/next/no-img-element */
import { SyntheticEvent } from 'react';

export function TheImage({
  src,
  alt,
  css
}: {
  src?: string | undefined,
  alt: string | undefined,
  css?: string | undefined
}) {
  const fallbackImage = "/img/dummy_hotel.svg";
  
  function handleError(e: SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.src = fallbackImage;
    e.currentTarget.onerror = null;
    console.log('Image load failed. Fallback image loaded.');
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={ css ? css : 'w-full h-48 object-cover rounded-md'}
    />
  );
}
