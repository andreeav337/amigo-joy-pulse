import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
}

export const ImageCarousel = ({ images, className = "" }: ImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false,
      containScroll: "trimSnaps"
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;

    // Opcional: agregar listeners para eventos del carrusel
    emblaApi.on('select', () => {
      // Puedes agregar lógica aquí si necesitas
    });
  }, [emblaApi]);

  if (!images || images.length === 0) {
    return (
      <div className={`bg-gradient-to-r from-primary/10 to-primary/5 ${className}`}>
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">Agrega imágenes al carrusel</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] min-w-0 relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Overlay opcional para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};