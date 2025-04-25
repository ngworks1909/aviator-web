import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.png'
import image3 from '@/assets/3.png'
import image4 from '@/assets/4.png'

export default function ImageCarousel() {
    const images = [image1, image2, image3, image4]
  return (
    <div className="w-full mx-auto px-4 py-8">
      <Card className="border-0 shadow-sm bg-transparent">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="bg-transparent">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`Carousel image ${index}`}
                      className="w-full  object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Card>
    </div>
  )
}
