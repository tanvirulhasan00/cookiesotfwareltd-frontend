import { Link } from "react-router";

const posts = [
  {
    id: 1,
    title: "Landing Page",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Website", href: "#" },
    blogImgae: "/web.jpg",
    technology: {
      name: "ReactJs,ASP.NET Core",
      language: "C#, Javascript",
    },
  },
  {
    id: 1,
    title: "Web Application",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Website", href: "#" },
    blogImgae: "/mobile.jpg",
    technology: {
      name: "ReactJs,ASP.NET Core",
      language: "C#, Javascript",
    },
  },
  {
    id: 1,
    title: "Web Application",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Website", href: "#" },
    blogImgae: "/mobile-2.jpg",
    technology: {
      name: "ReactJs,ASP.NET Core",
      language: "C#, Javascript",
    },
  },
  {
    id: 1,
    title: "Web Application",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Website", href: "#" },
    blogImgae: "/mobile-2.jpg",
    technology: {
      name: "ReactJs,ASP.NET Core",
      language: "C#, Javascript",
    },
  },

  // More posts...
];

export default function Work() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From the project lists
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">Explore our works.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between p-2 border hover:scale-[1.01] transition-all duration-500 rounded-md shadow-2xl "
            >
              <div className="flex gap-5 items-center flex-col-reverse">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <a href={"#"}>
                          <span className="absolute inset-0" />
                          {post.technology?.name}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        {post.technology?.language}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Link
                      to="#"
                      className="text-sm/6 font-semibold text-red-600"
                    >
                      Read more
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div id="image">
                  <img
                    src={post.blogImgae}
                    className="h-[20rem] w-full object-center rounded-md"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
