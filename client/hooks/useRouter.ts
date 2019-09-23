import { useState, useLayoutEffect, useCallback } from "react";

const useRouter = (routeMap: any, defaultRoute: string) => {
  const [page, setPage] = useState(defaultRoute);

  const changeRoute = useCallback((newRoute: string) => {
    window.history.pushState("", "New Route", newRoute);
    setPage(newRoute);
  }, []);

  useLayoutEffect(() => {
    const { pathname } = window.location;
    setPage(pathname);
  }, []);

  return [
    routeMap[page] ? routeMap[page] : routeMap[defaultRoute],
    changeRoute
  ];
};

export default useRouter;
