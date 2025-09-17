import { useState } from 'react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBorder?: boolean;
  className?: string;
}

export function ProfileAvatar({ 
  size = 'lg', 
  showBorder = true, 
  className = '' 
}: ProfileAvatarProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const borderClass = showBorder 
    ? 'ring-4 ring-primary/20 border-2 border-background shadow-lg' 
    : '';

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className={`
        ${sizeClasses[size]}
        rounded-full overflow-hidden 
        ${borderClass}
        transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
      `}>
        {!imageError ? (
          <img
            src="/src/assets/emmanuel-photo.jpg"
            alt="Emmanuel Duarte de Oliveira - Foto Profissional"
            className="w-full h-full object-cover object-center"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <span className="text-primary-foreground text-xl font-bold">
              {size === 'sm' ? 'E' : 'EDO'}
            </span>
          </div>
        )}
      </div>
      
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className={`
          absolute inset-0 ${sizeClasses[size]} rounded-full 
          bg-gradient-to-br from-primary/20 to-primary-dark/20 
          animate-pulse ${borderClass}
        `}>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
}