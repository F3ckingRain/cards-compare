import { useCallback } from "react";

type Nullable<T> = T | null;

const func = new Function();

type CallbackType<T extends typeof func> = ReturnType<typeof useCallback<T>>;

export { Nullable, CallbackType };
