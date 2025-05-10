import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function LandingLayout({ children }) {
  return (
    <div className="">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
