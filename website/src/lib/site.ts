// UI links support a fork's project Pages path; exported API URLs stay canonical.
export const sitePath = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
