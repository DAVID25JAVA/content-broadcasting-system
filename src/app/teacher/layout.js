import Navbar from "@/components/Teacher/Navbar";
import SideBar from "@/components/Teacher/SideBar";

export default function TeacherLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <SideBar />
        <main className="flex-1 ml-64 mt-16 p-6">{children}</main>
      </div>
    </div>
  );
}
