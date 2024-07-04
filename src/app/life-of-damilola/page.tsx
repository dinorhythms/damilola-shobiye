import Header from '@/components/Header';
import Image from 'next/image';

const LifeOfDamilola = () => {
  return (
    <div>
      <Header
        title={'LIFE OF OF BARRISTER MRS DAMILOLA O. SHOBIYE (NEE OYELEDUN).'}
      />
      <section className='mx-3 lg:mx-0 py-16'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className='lg:w-1/3 text-center'>
              <Image
                alt='damilola'
                width={400}
                height={600}
                src={'/assets/images/damilola-law.jpg'}
              />
              <h4 className='font-bold mt-5'>
                Barrister Mrs. Damilola Shobiye
              </h4>
              <p className='font-bold'>(1982 - 2024)</p>
            </div>
            <div className='lg:w-2/3 text-center lg:text-left'>
              <p className='mb-5'>
                Dami my dear wife, I write with the deepest grieve Sweetie mi. I
                cannot believe that I am writing about your demise. This was not
                what you and I, and our children: Iretemi and Olamipo, discussed
                and hoped for when we started Year 2023. We had planned to
                celebrate our 15th year wedding anniversary elaborately in
                London in December 2023, we were very excited about your new job
                in March 2023 following your course completion at the John
                Molson School of Business, we rejoiced at your graduation
                ceremony in June 2023, and we were looking forward to conclude
                the purchase of our home in Canada. 
              </p>
              <p className='mb-5'>
                I am still in shock because what was meant to be a routine
                hospital visit for you, changed everything completely. I
                travelled back to Montreal immediately from Nigeria where I was
                running our Law Firm. Since my arrival in Montreal in the last
                11+ months, I sat daily by your bed side at the hospital. The
                specialists were hopeful that you will make a recovery given
                time, and indeed you were responding to treatment. Our children
                and I, and our loved ones prayed tirelessly, fasted, and trusted
                that God will bring us back together as a family. Sadly, since
                you left us on 27 June 2024, we are still in the deepest shock
                and our hearts have been torn in pieces. But we believe that God
                knows best and you are now in a better place. Dami you are a
                special person, honestly a rare gem. Dami, our 19 years +
                relationship was love in its truest and purest form, you were
                genuine, and I know that no one can alter your legacies. 
              </p>
              <p className='mb-5'>
                Dami, your sudden demise has left the deepest hole in our
                children and I, families, and friends. You have left an
                indelible mark on this earth and you deserve to be respected and
                honoured accordingly — I will continue to ensure that this
                happens. Rest in Peace Sweetie! I know that the Almighty God
                will comfort us all by His Grace. 
              </p>
              <p>Your Husband,</p>
              <p className='font-bold'>Peter Shobiyi.</p>
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
