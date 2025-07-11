import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // client routes
  route("/", "routes/client/index.tsx", [
    index("routes/client/home.tsx"),
    route("company", "routes/client/company.tsx"),
    route("blogs", "routes/client/blog.tsx"),
    route("teams", "routes/client/team.tsx"),
    route("contact", "routes/client/contact.tsx"),
    route("services", "routes/client/services.tsx"),
    route("works", "routes/client/works.tsx"),
    route("work-item/:workId", "routes/client/work-item.tsx"),
    route("service-item/:serviceId", "routes/client/service-item.tsx"),
  ]),

  // dashboard routes
  // route("", "routes/dashboard/home.tsx", [index("routes/client/home.tsx")]),
] satisfies RouteConfig;
