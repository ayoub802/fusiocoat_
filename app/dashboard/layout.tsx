import Navbar from "@/components/navbar";
import firebase from 'firebase/app';
import { useRouter } from "next/router";


export const metadata = {
  title: 'Fusiocoat Dashboard',
  description: 'fusiocoat E-Commerce Dashboard',
}

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

   

    return (
      <>  
          <Navbar />
          {children}
      </>
      );
  }