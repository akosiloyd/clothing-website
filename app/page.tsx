import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:mt-10 sm:text-6xl">
                  Elevate Your Style with Chic Threads
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Discover the latest fashion trends and express your unique style with our curated collection of modern clothing and accessories.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button asChild>
                    <Link href="/shop">
                      Shop Now
                    </Link>
                  </Button>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
              <img
                className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Chic Threads Collection"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}