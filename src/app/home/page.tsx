'use client';
import { Carousel } from '@material-tailwind/react';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <section className='bg-[#C8CDD9] h-[756px] w-full'>
        <Carousel
          className='rounded-xl'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <img
            src='/assets/images/sliders/WhatsApp Image 2024-07-03 at 11.00.21_0f02d63d.jpg'
            alt='image 1'
            className='h-full w-full object-cover'
          />
          <img
            src='/assets/images/sliders/WhatsApp Image 2024-07-03 at 11.04.44_6afbac85.jpg'
            alt='image 2'
            className='h-full w-full object-cover'
          />
          <img
            src='/assets/images/sliders/WhatsApp Image 2024-07-03 at 11.28.03_eae052c8.jpg'
            alt='image 3'
            className='h-full w-full object-cover'
          />
          <img
            src='/assets/images/sliders/WhatsApp Image 2024-07-03 at 14.14.23_2f912872.jpg'
            alt='image 3'
            className='h-full w-full object-cover'
          />
        </Carousel>
      </section>
      <section className='mx-3 lg:mx-0'>
        <div className='container mx-auto text-center py-16'>
          <p className='font-bold text-xl'>
            IN LOVING MEMORY OF BARR. MRS. DAMILOLA O. SHOBIYE (nee Oyeledun)
          </p>
          <p className='text-3xl my-4 font-bold'>(1982 -2024)</p>
          <div className='max-w-[800px] mx-auto text-center mt-7'>
            <p className='mb-7'>
              Dami my dear wife, I write with the deepest grieve Sweetie mi. I
              cannot believe that I am writing about your demise. This was not
              what you and I, and our children: Iretemi and Olamipo, discussed
              and hoped for when we started Year 2023. We had planned to
              celebrate our 15th year wedding anniversary elaborately in London
              in December 2023, we were very excited about your new job in March
              2023 following your course completion at the John Molson School of
              Business, we rejoiced at your graduation ceremony in June 2023,
              and we were looking forward to conclude the purchase of our home
              in Canada.
            </p>
            <p className='mb-7'>
              I am still in shock because what was meant to be a routine
              hospital visit for you, changed everything completely. I travelled
              back to Montreal immediately from Nigeria where I was running our
              Law Firm. Since my arrival in Montreal in the last 11+ months, I
              sat daily by your bed side at the hospital. The specialists were
              hopeful that you will make a recovery given time, and indeed you
              were responding to treatment. Our children and I, and our loved
              ones prayed tirelessly, fasted, and trusted that God will bring us
              back together as a family. Sadly, since you left us on 27 June
              2024, we are still in the deepest shock and our hearts have been
              torn in pieces. But we believe that God knows best and you are now
              in a better place. Dami you are a special person, honestly a rare
              gem. Dami, our 19 years + relationship was love in its truest and
              purest form, you were genuine, and I know that no one can alter
              your legacies.
            </p>
            <p className='mb-7'>
              Dami, your sudden demise has left the deepest hole in our children
              and I, families, and friends. You have left an indelible mark on
              this earth and you deserve to be respected and honoured
              accordingly — I will continue to ensure that this happens. Rest in
              Peace Sweetie! I know that the Almighty God will comfort us all by
              His Grace.
            </p>
            <p className='mb-7'>
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors.
            </p>
            <p className='mb-2 text-lg font-bold'>Your husband,</p>
            <p className='mb-2 text-lg font-bold'>Peter Shobiye</p>
            <div className=''>
              <Link href={'/home'}>
                <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white'>
                  Share a Memory/Tribute of Damilola
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#F6F6F6] mx-3 lg:mx-0'>
        <div className='container mx-auto text-center py-16'>
          <p className='font-bold text-xl'>SHARE HER LIFE</p>
          <p className='text-3xl my-4 font-bold'>MEMORIES / TRIBUTES</p>
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
          </div>
          <div className=''>
            <Link href={'/home'}>
              <button className='mt-5 px-7 py-5 rounded-xl bg-black text-white'>
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
