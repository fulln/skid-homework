import { useCallback, useMemo } from "react";
export const useNativeCamera = () => {
  // Capacitor camera is not available in the Next.js build; fall back to web file input.
  const isNative = useMemo(() => false, []);

  const capture = useCallback(async (): Promise<File[]> => [], []);

  return { isNative, capture };
};
