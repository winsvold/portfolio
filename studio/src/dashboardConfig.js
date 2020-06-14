export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5ee621f2d717525db2c5b63f",
                  title: "Sanity Studio",
                  name: "portfolio-studio-cwz3n8oi",
                  apiId: "348e3f19-56e9-4e01-84d0-a66dc5ca1e74",
                },
                {
                  buildHookId: "5ee621f2d71752ef43c5bc7c",
                  title: "Blog Website",
                  name: "portfolio-web-d11t79dj",
                  apiId: "cd3e0da6-939a-4249-922d-c1245e3137bf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/winsvold/portfolio",
            category: "Code",
          },
          { title: "Frontend", value: "https://portfolio-web-d11t79dj.netlify.app", category: "apps" },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent blog posts", order: "_createdAt desc", types: ["post"] },
      layout: { width: "medium" },
    },
  ],
};
