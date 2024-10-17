import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold">Chic Threads</span>
            <p className="text-gray-500 text-base">
              Elevate your style with our curated collection of modern fashion.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/shop/women" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/men" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/accessories" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link href="/returns" className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                      Returns
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Chic Threads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}