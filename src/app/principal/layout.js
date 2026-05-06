import PrincipalNavbar from "@/components/Principal/PrincipalNavbar";
import PrincipalSidebar from "@/components/Principal/PrincipalSidebar";

export default function PrincipalLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PrincipalNavbar />
      <div className="flex">
        <PrincipalSidebar />
        <main className="flex-1 ml-64 mt-16 p-6">{children}</main>
      </div>
    </div>
  );
}
