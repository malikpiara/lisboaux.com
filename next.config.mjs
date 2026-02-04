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
      {
        source: "/telegram",
        destination: "https://t.me/ux_jobs",
        permanent: true,
      },
      {
        source: "/whatsapp",
        destination: "https://whatsapp.com/channel/0029VbBgMmb6hENv6HkmMt2R",
        permanent: true,
      },
      {
        source: "/wa",
        destination: "https://whatsapp.com/channel/0029VbBgMmb6hENv6HkmMt2R",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
