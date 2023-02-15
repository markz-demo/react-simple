import { useEffect, useRef } from "react";

// base hooks
export const useMount = (callback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, []);
};

export const useUnmount = (fn) => {
    const fnRef = useRef(fn);
    fnRef.current = fn;

    useMount(() => () => fnRef.current());
};
