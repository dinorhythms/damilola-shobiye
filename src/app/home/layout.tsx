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
      {children}
      <Footer />
    </main>
  );
}
