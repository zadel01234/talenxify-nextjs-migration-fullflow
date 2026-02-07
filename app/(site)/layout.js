import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function SiteLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
