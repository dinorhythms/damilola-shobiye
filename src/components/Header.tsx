const images = [
  '/assets/images/IMG-20240703-WA0029.jpg',
  '/assets/images/IMG-20240703-WA0030.jpg',
  '/assets/images/IMG-20240703-WA0031.jpg',
  '/assets/images/IMG-20240703-WA0032.jpg',
  '/assets/images/IMG-20240703-WA0034.jpg',
  '/assets/images/IMG-20240703-WA0035.jpg',
  '/assets/images/IMG-20240703-WA0036.jpg',
  '/assets/images/IMG-20240703-WA0037.jpg',
  '/assets/images/IMG-20240703-WA0038.jpg',
  '/assets/images/IMG-20240703-WA0039.jpg',
  '/assets/images/IMG-20240703-WA0057.jpg',
  '/assets/images/IMG-20240703-WA0058.jpg',
  '/assets/images/IMG-20240703-WA0059.jpg',
  '/assets/images/IMG-20240703-WA0060.jpg',
  '/assets/images/IMG-20240703-WA0061.jpg',
  '/assets/images/IMG-20240703-WA0062.jpg',
  '/assets/images/IMG-20240703-WA0063.jpg',
  '/assets/images/IMG-20240703-WA0064.jpg',
  '/assets/images/IMG-20240703-WA0065.jpg',
  '/assets/images/IMG-20240703-WA0066.jpg',
  '/assets/images/IMG-20240703-WA0067.jpg',
  '/assets/images/IMG-20240703-WA0068.jpg',
  '/assets/images/IMG-20240703-WA0069.jpg',
  '/assets/images/IMG-20240703-WA0070.jpg',
];

const Header = ({ title }: any) => {
  return (
    <header className='h-[200px] lg:h-[513px] bg-blue-gray-700 relative overflow-hidden'>
      <div className='columns-4 gap-0 sm:columns-4 sm:gap-0 md:columns-4 lg:columns-8 [&>img:not(:first-child)]:mt-0'>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className='w-full h-full'
          />
        ))}
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white'>
        <h1 className='lg:text-4xl mb-4 font-bold max-w-[900px] text-center mx-3'>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
