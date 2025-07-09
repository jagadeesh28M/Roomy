import Navbar from "../../../components/vendor/Navbar";
import Sidebar from "../../../components/vendor/Sidebar";

export default function VendorLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <aside>
          <Sidebar />
        </aside>
        <main className="w-full min-h-screen">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  );
}
