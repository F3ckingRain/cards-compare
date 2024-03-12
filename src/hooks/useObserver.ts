import {
    MutableRefObject,
    RefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { Nullable } from "@/types/default";

type ReturnObserverType = {
    visible: boolean;
};

const useObserver = (
    ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement>,
): ReturnObserverType => {
    const [visible, setVisible] = useState(false);

    const observerRef: MutableRefObject<Nullable<IntersectionObserver>> =
        useRef<IntersectionObserver>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) =>
            setVisible(entry.isIntersecting),
        );
    }, []);

    useEffect(() => {
        observerRef.current?.observe(ref.current!);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [ref]);

    return {
        visible,
    };
};

export default useObserver;
