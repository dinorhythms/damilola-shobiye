'use client';
import Header from '@/components/Header';
import { Carousel } from '@material-tailwind/react';
import Link from 'next/link';

const LifeOfDamilola = () => {
  return (
    <div>
      <Header
        title={
          'FUNERAL ARRANGEMENT OF BARRISTER MRS. DAMILOLA O. SHOBIYE (NEE OYELEDUN)'
        }
      />
      <section className='mx-3 lg:mx-0 py-16'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <p className='font-bold text-xl'>Mrs. Damilola O. Shobiye</p>
            <p className='text-3xl my-4 font-bold'>Funeral Arrangement</p>
          </div>
          <div className='lg:w-2/3 mx-auto text-center mt-10'>
            <div className='mb-7'>
              <p className='mb-5 hidden'>
                A befitting memorial service, church service, and interment
                details, will be announced shortly. Please check this page
                again.
              </p>
              <p className='mb-5'>
                We thank you for all your words of encouragement and moral
                support at this difficult time, please continue to put the both
                families of Shobiye and Oyeledun in your prayers as they
                navigate this sensitive and painful curve.
              </p>
              <p className='mb-5'>
                Damilola rest in peace, we love you, and by God’s decision shall
                we abide even though it is painful.
              </p>
            </div>
            <div className='mt-5'>
              <Link href={'/tribute'}>
                <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                  Share a Memory/Tribute of Damilola
                </button>
              </Link>
              <Link href={'/life-of-damilola'}>
                <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                  Life of Damilola
                </button>
              </Link>
              <Link href={'/gallery'}>
                <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                  Gallery
                </button>
              </Link>
              <Link href={'/home'}>
                <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white'>
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black'>
        <div className='text-center py-10'>
          <p className='font-bold text-xl text-white'>
            Click to watch videos of
          </p>
          <p className='text-3xl my-4 font-bold text-white'>Dam Dam Sho</p>
        </div>
        <div className='mx-auto text-center'>
          <Carousel
            loop={true}
            transition={{ duration: 2 }}
            className='rounded-xl'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/sMOQxEfRNrU?si=zSsaQJ49LZTw83yl'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen></iframe>
            <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/dT3czJHNqJQ?si=iaYhbHhTedSiu9T7&amp;start=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen></iframe>
            <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/Adl7SpRCtYs?si=mNttaiqiVeV7g8uq&amp;start=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen></iframe>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default LifeOfDamilola;
