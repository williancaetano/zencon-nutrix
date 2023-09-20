import { useEffect, useState } from "react";

export function useNomoState(nomoGetterFunction: () => Promise<any>) {
  const [nomoState, setNomoState] = useState<any | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "failed">(
    "loading"
  );
  useEffect(() => {
    nomoGetterFunction()
      .then((valueFromNomo) => {
        setNomoState(valueFromNomo);
        setStatus("success");
      })
      .catch((e) => {
        console.error(e);
        setNomoState(e);
        setStatus("failed");
      });
  }, [nomoGetterFunction]);
  return [nomoState, status];
}
