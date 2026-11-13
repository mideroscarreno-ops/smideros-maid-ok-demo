import { useState } from 'react';
import { Home } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  priority = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-[#EAE5DA] via-[#E1DCD0] to-[#D6D9CE] flex flex-col items-center justify-center p-6 text-center text-[#35483D]"
      >
        <Home className="w-8 h-8 mb-3 opacity-60" strokeWidth={1.5} />
        <p className="font-serif text-xl text-[#29332E]">
          {fallbackLabel || 'Maid OK Residential Care'}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
