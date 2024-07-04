import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Nav />
      <div className='min-h-[calc(100vh-340px)]'>{children}</div>
      <Footer />
    </main>
  );
}
