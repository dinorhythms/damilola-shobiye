'use client';
import { Carousel } from '@material-tailwind/react';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <nav className=''>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='bg-black px-10 py-5 w-[220px] text-white'>
            In Memory of Damilola Shobiye
          </div>
          <div className='hidden lg:flex gap-5'>
            <span className='font-semibold'>HOME</span>
            <span className='font-semibold'>LIFE OF DAMILOLA</span>
            <span className='font-semibold'>GALLERY</span>
            <span className='font-semibold'>TRIBUTE/MEMORIES</span>
            <span className='font-semibold'>FUNERAL ARRANGEMENT</span>
          </div>
          <div className='flex items-center gap-3 mx-3'>
            <svg
              width='14'
              height='14'
              className='hidden lg:flex gap-5'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.33331 10.3333H7.66665V7.66668H10.3333V6.33334H7.66665V3.66668H6.33331V6.33334H3.66665V7.66668H6.33331V10.3333ZM6.99998 13.6667C6.07776 13.6667 5.21109 13.4917 4.39998 13.1417C3.58887 12.7917 2.88331 12.3167 2.28331 11.7167C1.68331 11.1167 1.20831 10.4111 0.858313 9.60001C0.508313 8.7889 0.333313 7.92223 0.333313 7.00001C0.333313 6.07779 0.508313 5.21112 0.858313 4.40001C1.20831 3.5889 1.68331 2.88334 2.28331 2.28334C2.88331 1.68334 3.58887 1.20834 4.39998 0.858343C5.21109 0.508343 6.07776 0.333344 6.99998 0.333344C7.9222 0.333344 8.78887 0.508343 9.59998 0.858343C10.4111 1.20834 11.1166 1.68334 11.7166 2.28334C12.3166 2.88334 12.7916 3.5889 13.1416 4.40001C13.4916 5.21112 13.6666 6.07779 13.6666 7.00001C13.6666 7.92223 13.4916 8.7889 13.1416 9.60001C12.7916 10.4111 12.3166 11.1167 11.7166 11.7167C11.1166 12.3167 10.4111 12.7917 9.59998 13.1417C8.78887 13.4917 7.9222 13.6667 6.99998 13.6667ZM6.99998 12.3333C8.48887 12.3333 9.74998 11.8167 10.7833 10.7833C11.8166 9.75001 12.3333 8.4889 12.3333 7.00001C12.3333 5.51112 11.8166 4.25001 10.7833 3.21668C9.74998 2.18334 8.48887 1.66668 6.99998 1.66668C5.51109 1.66668 4.24998 2.18334 3.21665 3.21668C2.18331 4.25001 1.66665 5.51112 1.66665 7.00001C1.66665 8.4889 2.18331 9.75001 3.21665 10.7833C4.24998 11.8167 5.51109 12.3333 6.99998 12.3333Z'
                fill='#0C0C0C'
              />
            </svg>

            <span className=''>SHARE A TRIBUTE/MEMORY</span>
          </div>
        </div>
      </nav>
      <section className='bg-[#C8CDD9] h-[756px] w-full'>
        <Carousel className='rounded-xl'>
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
      <section className='bg-[#0C0C0C] mx-0 lg:mx-0'>
        <div className='container mx-auto text-center py-16 text-white'>
          <p className='font-bold text-xl'>REMEMBERING DAMILOLA</p>
          <p className='text-3xl my-4 font-bold'>
            This site was created in memory of Barrister Mrs. Damilola Shobiye.
            Our loving Wife and Mother
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
