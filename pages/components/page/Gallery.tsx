import Image from 'next/image';
import { IMAGES } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-1 pt-8 md:grid-cols-3">
      {IMAGES.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger>
            <Image
              className="rounded-lg"
              src={image}
              alt={image}
              width={500}
              height={500}
            />
          </DialogTrigger>
          <DialogContent className="border-none bg-transparent">
            <Card className="border-none bg-transparent">
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <Image
                  className="rounded-lg"
                  src={image}
                  alt={image}
                  width={500}
                  height={500}
                />
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Gallery;
