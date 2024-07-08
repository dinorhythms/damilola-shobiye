'use client';
import Header from '@/components/Header';
import { CommentCount, DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';
import 'react-image-lightbox/style.css';

const LifeOfDamilola = () => {
  return (
    <div>
      <Header title={'TRIBUTE/MEMORIES'} />
      <section className='mx-3 lg:mx-0 py-16'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <p className='font-bold text-xl'>SHARE HER LIFE</p>
            <p className='text-3xl my-4 font-bold'>MEMORIES / TRIBUTES</p>
          </div>
        </div>
      </section>
      <section className='bg-[#F6F6F6] mx-3 lg:mx-0 disqus'>
        <div className='container mx-auto text-center py-16'>
          <p className='font-bold text-xl'>
            Kindly note that you can upload pictures alongside your comment
            using the picture icon.
          </p>
          {/* <p className='text-3xl my-4 font-bold'>MEMORIES / TRIBUTES</p> */}
          <div>
            <DiscussionEmbed
              shortname='damilola-shobiye'
              config={{
                url: 'https://damilola-shobiye.netlify.app/home',
                // identifier: this.props.article.id,
                title: 'Damilola Shobiye',
                language: 'en',
              }}
            />
            <CommentCount
              shortname='damilola-shobiye'
              config={{
                url: 'https://damilola-shobiye.netlify.app/home',
                // identifier: this.props.article.id,
                title: 'Damilola Shobiye',
              }}>
              {/* Placeholder Text */}
              Comments
            </CommentCount>
          </div>
          {/* <div className=''>
            <Link href={'/home'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white'>
                View More
              </button>
            </Link>
          </div> */}
        </div>
      </section>
      <section className='mb-10 mx-3 lg:mx-0'>
        <div className='mx-auto text-center'>
          <div className='mt-5'>
            <Link href={'/home'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                Home
              </button>
            </Link>
            <Link href={'/gallery'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white mr-2'>
                Gallery
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
