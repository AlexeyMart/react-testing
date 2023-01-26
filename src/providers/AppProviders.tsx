import { PropsWithChildren, FC } from "react";

export const AppProviders: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <>{children}</>;
};
