import { Link } from "react-router";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode, TbWorldCode } from "react-icons/tb";
import { HiCursorArrowRays } from "react-icons/hi2";

const services = [
  {
    id: 1,
    title: "Full-Stack Solutions",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: { title: "Application Development", href: "#" },
    logo: TbWorldCode,
    imageUrl: "",
  },
  {
    id: 2,
    title: "Web Application",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: { title: "Application Development", href: "#" },
    logo: FaLaptopCode,
    imageUrl: "",
  },
  {
    id: 3,
    title: "Mobile Application",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: { title: "Application Development", href: "#" },
    logo: TbDeviceMobileCode,
    imageUrl: "",
  },
  {
    id: 3,
    title: "Engagement(Digital Marketing)",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    category: { title: "Digital Marketing", href: "#" },
    logo: HiCursorArrowRays,
    imageUrl: "",
  },

  // More posts...
];

export default function Service() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h1 className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Our Services
        </h1>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between p-2"
            >
              <div className="flex gap-5 items-center">
                <div>
                  <div className="flex text-xs">
                    <div className="relative z-10 rounded-lg bg-gray-200  py-1.5 font-medium text-gray-600 p-1.5">
                      <p className="">{post.category.title}</p>
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href} className="flex items-center gap-2">
                        <span className="absolute inset-0" />
                        <post.logo />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link
                      to={`/service-item/${post.id}`}
                      className="text-sm/6 font-semibold text-red-600"
                    >
                      Details
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div id="image">{/* <img src={post.blogImgae} /> */}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
