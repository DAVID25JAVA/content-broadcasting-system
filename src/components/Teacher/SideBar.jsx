'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { teacherSidebarItems } from '../../../public/assets';

 

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 p-4 shadow-sm">
      
      <nav className="flex flex-col gap-1">
        {teacherSidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex focus:outline-none items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${isActive
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-sky-50 hover:text-sky-600'
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-sky-50 border border-sky-100 rounded-lg px-4 py-3">
          <p className="text-xs text-sky-600 font-medium">Logged in as</p>
          <p className="text-sm font-semibold text-sky-700">Teacher</p>
        </div>
      </div>
    </aside>
  );
}