import Image from 'next/image';
import Header from "@/components/Header";
import Ads from '@/components/Ads';
import Blogs from '@/components/Blogs';

export default function Home() {
  return (
    <main  className="">
      <Header />
      <Blogs />
    </main>
  )
}
