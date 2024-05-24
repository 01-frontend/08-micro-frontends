export const getMfePath = (pathname: string): string =>
  `/${pathname.split("/")[1]}`;
