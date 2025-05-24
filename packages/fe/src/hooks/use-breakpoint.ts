import { useEffect, useState } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints: Record<Exclude<Breakpoint, "xs">, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const getBreakpoint = (width: number): Breakpoint => {
  if (width >= breakpoints["2xl"]) return "2xl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "xs";
};

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    typeof window !== "undefined" ? getBreakpoint(window.innerWidth) : "sm"
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
