
import { useEffect, useState } from "react";
import domain from "../domain";

export type StatusType = "idle" | "pending" | "success" | "error";
export type DomainType = typeof domain;
export type RunType<T> = (domain: DomainType) => Promise<T>;

export interface IUseDomain<T> {
    initRun?: RunType<T>;
    initState?: any;
}

const useDomain = <T>({ initRun, initState = null }: IUseDomain<T>  = {}) => {
  const [data, setData] = useState(initState);
  const [status, setStatus] = useState<StatusType>("idle");
  const [error, setError] = useState<any>(null);

  const executeUseCase = async (run: RunType<T>) => {
    setStatus("pending");
    setError(null);

    try {
      const responseData = await run(domain);
      if (responseData) {
        setStatus("success");
        setData(responseData);
      } else {
        setStatus("error");
        setError("error");
        domain.cleanStorageUseCase();
      }
    } catch (e) {
      setStatus("error");
      setError(e);
      domain.cleanStorageUseCase();
    }
  };

  useEffect(() => {
    if (initRun) executeUseCase(initRun);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    status,
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "error",
    isSuccess: status === "success",
    error,
    data,
    run: executeUseCase,
  };
};

export default useDomain;