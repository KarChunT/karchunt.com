import Footer from '@/components/shared/footer';
import NavBar from '@/components/shared/navbar';

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <NavBar />
      <div className="container flex min-h-screen flex-col bg-background px-4 pb-8">
        {children}
      </div>
      <Footer />
    </section>
  );
}
