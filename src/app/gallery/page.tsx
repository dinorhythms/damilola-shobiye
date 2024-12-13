'use client';
import Header from '@/components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// interface CustomImage extends Image {
//   original: string;
// 	width?:any;
// 	height?:any;
// }

// Mock function to simulate loading image dimensions
const loadImage = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.src = src;
  });
};

interface CustomImage {
  src: string;
  original: string;
  alt?: string;
  width?: any;
  height?: any;
  caption?: string;
}

const loadImages = async (): Promise<CustomImage[]> => {
  const oldimages: CustomImage[] = [
    {
      src: '/assets/images/gallery/gallery1.jpg',
      original: '/assets/images/gallery/gallery1.jpg',
      // width:  (loadImage('/assets/images/gallery/gallery1.jpg')).then((d:any)=>d.width),
      // height:  (loadImage('/assets/images/gallery/gallery1.jpg')).then((d:any)=>d.height)
      // width: 756,
      // height: 1008,
      // tags: [
      //   { value: 'Nature', title: 'Nature' },
      //   { value: 'Flora', title: 'Flora' },
      // ],
      // caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
      src: '/assets/images/gallery/gallery2.jpg',
      original: '/assets/images/gallery/gallery2.jpg',
      width: 1280,
      height: 896,
      // caption: 'Boats (Jeshu John - designerspics.com)',
    },
    // {
    //   src: '/assets/images/gallery/gallery3.jpg',
    //   original: '/assets/images/gallery/gallery3.jpg',
    //   width: 750,
    //   height: 1000,
    //   // caption: 'Color Pencils (Jeshu John - designerspics.com)',
    // },
    {
      src: '/assets/images/gallery/gallery4.jpg',
      original: '/assets/images/gallery/gallery4.jpg',
      width: 768,
      height: 1024,
      // caption: 'Red Apples with other Red Fruit (foodiesfeed.com)',
    },
    {
      src: '/assets/images/gallery/gallery5.jpg',
      original: '/assets/images/gallery/gallery5.jpg',
      width: 810,
      height: 1080,
      // caption: '37H (gratispgraphy.com)',
    },
    {
      src: '/assets/images/gallery/gallery6.jpg',
      original: '/assets/images/gallery/gallery6.jpg',
      width: 1080,
      height: 810,
      // tags: [{ value: 'Nature', title: 'Nature' }],
      // caption: '8H (gratisography.com)',
    },
    {
      src: '/assets/images/gallery/gallery7.jpg',
      original: '/assets/images/gallery/gallery7.jpg',
      width: 591,
      height: 1082,
      // caption: '286H (gratisography.com)',
    },
    {
      src: '/assets/images/gallery/gallery8.jpg',
      original: '/assets/images/gallery/gallery8.jpg',
      width: 1512,
      height: 2016,
      // tags: [{ value: 'People', title: 'People' }],
      // caption: '315H (gratisography.com)',
    },
    {
      src: '/assets/images/gallery/gallery9.jpg',
      original: '/assets/images/gallery/gallery9.jpg',
      width: 1280,
      height: 960,
      // caption: '201H (gratisography.com)',
    },
    {
      src: '/assets/images/gallery/gallery10.jpg',
      original: '/assets/images/gallery/gallery10.jpg',
      alt: 'Big Ben - London',
      width: 768,
      height: 1024,
      // caption: 'Big Ben (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery11.jpg',
      original: '/assets/images/gallery/gallery11.jpg',
      alt: 'Red Zone - Paris',
      width: 720,
      height: 480,
      // tags: [{ value: 'People', title: 'People' }],
      // caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery12.jpg',
      original: '/assets/images/gallery/gallery12.jpg',
      alt: 'Wood Glass',
      width: 960,
      height: 1080,
      // caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery13.jpg',
      original: '/assets/images/gallery/gallery13.jpg',
      width: 756,
      height: 1008,
      // caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery14.jpg',
      original: '/assets/images/gallery/gallery14.jpg',
      width: 960,
      height: 1280,
      // caption: 'Old Barn (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery15.jpg',
      original: '/assets/images/gallery/gallery15.jpg',
      // alt: 'Cosmos Flower',
      width: 703,
      height: 1280,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery16.jpg',
      original: '/assets/images/gallery/gallery16.jpg',
      // alt: 'Cosmos Flower',
      width: 1600,
      height: 1200,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery17.jpg',
      original: '/assets/images/gallery/gallery17.jpg',
      // alt: 'Cosmos Flower',
      width: 1200,
      height: 1600,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery18.jpg',
      original: '/assets/images/gallery/gallery18.jpg',
      // alt: 'Cosmos Flower',
      width: 1600,
      height: 1200,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery19.jpg',
      original: '/assets/images/gallery/gallery19.jpg',
      // alt: 'Cosmos Flower',
      width: 1599,
      height: 1200,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/gallery/gallery20.jpg',
      original: '/assets/images/gallery/gallery20.jpg',
      // alt: 'Cosmos Flower',
      width: 1200,
      height: 1599,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/IMG-20240703-WA0029.jpg',
      original: '/assets/images/IMG-20240703-WA0029.jpg',
      // alt: 'Cosmos Flower',
      width: 1032,
      height: 581,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    {
      src: '/assets/images/IMG-20240703-WA0030.jpg',
      original: '/assets/images/IMG-20240703-WA0030.jpg',
      // alt: 'Cosmos Flower',
      width: 1152,
      height: 1152,
      // caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)',
    },
    // {
    //   src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
    //   original: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
    //   width: 271,
    //   height: 320,
    //   caption: 'Orange Macro (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg',
    //   original: 'https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg',
    //   width: 320,
    //   height: 213,
    //   tags: [
    //     { value: 'Nature', title: 'Nature' },
    //     { value: 'People', title: 'People' },
    //   ],
    //   caption: 'Surfer Sunset (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg',
    //   original: 'https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg',
    //   width: 320,
    //   height: 213,
    //   tags: [
    //     { value: 'People', title: 'People' },
    //     { value: 'Sport', title: 'Sport' },
    //   ],
    //   caption: 'Man on BMX (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg',
    //   original: 'https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg',
    //   width: 320,
    //   height: 213,
    //   caption: 'Ropeman - Thailand (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg',
    //   original: 'https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg',
    //   width: 320,
    //   height: 213,
    //   caption: 'Time to Think (Tom Eversley - isorepublic.com)',
    // },
    // {
    //   src: 'https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg',
    //   original: 'https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg',
    //   width: 320,
    //   height: 179,
    //   tags: [
    //     { value: 'Nature', title: 'Nature' },
    //     { value: 'Fauna', title: 'Fauna' },
    //   ],
    //   caption: 'Untitled (Jan Vasek - jeshoots.com)',
    // },
    // {
    //   src: 'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg',
    //   original: 'https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg',
    //   width: 320,
    //   height: 215,
    //   tags: [{ value: 'People', title: 'People' }],
    //   caption: 'Untitled (moveast.me)',
    // },
    // {
    //   src: 'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg',
    //   original: 'https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg',
    //   width: 257,
    //   height: 320,
    //   caption: 'A photo by 贝莉儿 NG. (unsplash.com)',
    // },
    // {
    //   src: 'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg',
    //   original: 'https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg',
    //   width: 226,
    //   height: 320,
    //   caption: 'A photo by Matthew Wiebe. (unsplash.com)',
    // },
  ];

  const images: CustomImage[] = [];

  // Generate image objects from gallery21 to gallery110
  for (let i = 2; i <= 106; i++) {
    const image = {
      src: `/assets/images/gallery/gallery${i}.jpg`,
      original: `/assets/images/gallery/gallery${i}.jpg`,
    };
    images.push(image);
  }

  // Add the initial image manually if needed
  images.unshift({
    src: '/assets/images/gallery/gallery1.jpg',
    original: '/assets/images/gallery/gallery1.jpg',
  });

  // Add the specified images to the end
  images.push(
    {
      src: '/assets/images/IMG-20240703-WA0029.jpg',
      original: '/assets/images/IMG-20240703-WA0029.jpg',
      width: 1032,
      height: 581,
    },
    {
      src: '/assets/images/IMG-20240703-WA0030.jpg',
      original: '/assets/images/IMG-20240703-WA0030.jpg',
      width: 1152,
      height: 1152,
    }
  );

  const promises = images.map(async (image) => {
    const { width, height } = await loadImage(image.src);
    image.width = width;
    image.height = height;
  });

  await Promise.all(promises);
  return images;
};

const LifeOfDamilola = () => {
  const [images, setImages] = useState<CustomImage[]>([]);

  useEffect(() => {
    loadImages().then(setImages);
  }, []);

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Header title={'GALLERY'} />
      <section className='mx-3 lg:mx-0 py-16'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <p className='font-bold text-xl'>HER LIFE</p>
            <p className='text-3xl my-4 font-bold'>Damilola&apos;s Album</p>
          </div>
        </div>
      </section>
      <section className='mx-3 lg:mx-0 mb-20'>
        <div className='container mx-auto'>
          <Gallery
            //@ts-ignore
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          {index >= 0 && currentImage && (
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      </section>
      <section className='mb-10 mx-3 lg:mx-0'>
        <div className='mx-auto text-center'>
          <div className='mt-5'>
            <Link href={'/tribute'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                Share a Memory/Tribute of Damilola
              </button>
            </Link>
            <Link href={'/home'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                Home
              </button>
            </Link>
            <Link href={'/life-of-damilola'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                Life of Damilola
              </button>
            </Link>
            <Link href={'/funeral'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white'>
                Funeral Arrangement
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeOfDamilola;
