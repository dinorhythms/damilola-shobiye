import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

const LifeOfDamilola = () => {
  return (
    <div>
      <Header title={'FUNERAL ARRANGEMENT'} />
      <section className='mx-3 lg:mx-0 py-16'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <p className='font-bold text-xl'>Damilola Shobiye</p>
            <p className='text-3xl my-4 font-bold'>Funeral Arrangement</p>
          </div>
          <div className='lg:w-2/3 mx-auto text-center mt-10'>
            <div className='mb-7'>
              <p className='mb-5'>
                A befitting memorial service, church service, and interment
                details, will be announced shortly. Please check this page
                again.
              </p>
              <p className='mb-5'>
                We thank you for all your words of encouragement and moral
                support at this difficult time, please continue to put the both
                families of Shobiye and Oyeledun in your prayers has they
                navigate this sensitive and painful curve.
              </p>
              <p className='mb-5'>
                Damilola rest in peace, we love you, and by God’s decision shall
                we abide even though it is painful.
              </p>
            </div>
            <div className='mt-5'>
              <Link href={'/tribute'}>
                <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white'>
                  Share a Memory/Tribute of Damilola
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='flex'>
        <Image
          alt='damilola'
          className='w-1/5'
          width={286}
          height={493}
          src={'/assets/images/life1.jpg'}
        />
        <Image
          alt='damilola'
          className='w-1/5'
          width={286}
          height={493}
          src={'/assets/images/life2.jpg'}
        />
        <Image
          alt='damilola'
          className='w-1/5'
          width={286}
          height={493}
          src={'/assets/images/life3.jpg'}
        />
        <Image
          alt='damilola'
          className='w-1/5'
          width={286}
          height={493}
          src={'/assets/images/life4.jpg'}
        />
        <Image
          alt='damilola'
          className='w-1/5'
          width={286}
          height={493}
          src={'/assets/images/life5.jpg'}
        />
      </section>
    </div>
  );
};

export default LifeOfDamilola;
