import Link from "next/link";

export default () => (
  <div className="container mx-auto p-12">
    <nav className="flex flex-col w-64">
      <Link href="/example-ssg">
        <a className="block mb-6 text-center rounded-lg bg-indigo-600 px-6 py-3 text-white">
          Example SSG
        </a>
      </Link>
      <Link href="/example-ssr">
        <a className="block mb-6 text-center rounded-lg bg-indigo-600 px-6 py-3 text-white">
          Example SSG
        </a>
      </Link>
      <Link href="/common">
        <a className="block mb-6 text-center rounded-lg bg-indigo-600 px-6 py-3 text-white">
          E-Commerce Common
        </a>
      </Link>
      <Link href="/pre">
        <a className="block mb-6 text-center rounded-lg bg-indigo-600 px-6 py-3 text-white">
          E-Commerce Skeleton
        </a>
      </Link>
      <Link href="/home">
        <a className="block mb-6 text-center rounded-lg bg-indigo-600 px-6 py-3 text-white">
          E-Commerce Real Case Scenario
        </a>
      </Link>
    </nav>
  </div>
);
