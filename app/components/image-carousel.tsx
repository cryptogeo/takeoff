import { Button } from "@/components/ui/button"; // Adjust the import as necessary
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image'; // Import the Next.js Image component

// Define the types for the props
interface ImageCarouselProps {
    images: string[]; // Define images as an array of strings (URLs)
    currentImage: number; // Define currentImage as a number
    setCurrentImage: (index: number | ((prev: number) => number)) => void; // Define setCurrentImage
}

// Define the types for the props in the CarouselButton function
interface CarouselButtonProps {
    direction: 'left' | 'right'; // Specify the allowed values
    onClick: () => void; // Define the type for onClick
}

function CarouselButton({ direction, onClick }: CarouselButtonProps) {
    const isLeft = direction === "left";
    return (
        <Button
            variant="outline"
            size="icon"
            className={`absolute ${isLeft ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white`}
            onClick={onClick}
        >
            {isLeft ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            <span className="sr-only">{isLeft ? "Previous" : "Next"} image</span>
        </Button>
    );
}

export default function ImageCarousel({ images, currentImage, setCurrentImage }: ImageCarouselProps) {
    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative mb-6">
            <div className="overflow-hidden rounded-lg aspect-video">
                <Image
                    src={images[currentImage]}
                    alt={`Property image ${currentImage + 1}`}
                    layout="fill" // Use layout fill for responsive images
                    className="object-cover"
                />
            </div>
            <CarouselButton
                direction="left"
                onClick={prevImage}
            />
            <CarouselButton
                direction="right"
                onClick={nextImage}
            />
            <ImageIndicators
                images={images}
                currentImage={currentImage}
            />
        </div>
    );
}

// Updated ImageIndicators function
interface ImageIndicatorsProps {
    images: string[]; // Array of image URLs
    currentImage: number; // Index of the current image
}

function ImageIndicators({ images, currentImage }: ImageIndicatorsProps) {
    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
                />
            ))}
        </div>
    );
}