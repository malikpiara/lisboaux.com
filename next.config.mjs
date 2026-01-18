/** @type {import('next').NextConfig} */
const nextConfig = {
      redirects: async () => {
    return [
      {
        source: "/jobs",
        destination: "https://jobs.lisboaux.com/",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/company/lisboaux/",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
