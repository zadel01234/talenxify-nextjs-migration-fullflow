'use client'
import Header from '@/components/dashboard/common/Header'  
import Sidebar from '@/components/dashboard/common/Sidebar' 
import QueryProvider from '@/components/dashboard/providers/QueryProvider';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-68 ml-0">
          <main>
            <QueryProvider>
              {children}
            </QueryProvider>
          </main>
        </div>
      </div>
    </>
  );
}