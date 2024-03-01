import { useCallback } from "react";

type Nullable<T> = T | null;

type CallbackType<T extends Function> = ReturnType<typeof useCallback<T>>;

export { Nullable, CallbackType };
