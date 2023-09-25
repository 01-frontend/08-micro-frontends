import { lazy, ReactNode, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { loadMfeComponent } from "./loadMfeComponent";

interface IMfeLoaderProps {
  remoteUrl: string;
  mfeName: string;
  moduleName?: string;
  mfeProps?: any;
  errorElement?: ReactNode;
  loadingElement?: ReactNode;
}

const defaultError = <div>Ops! Something went wrong</div>;
const defaultLoading = <div>Loading...</div>;

export const mfeLoader = ({
  remoteUrl,
  mfeName,
  moduleName = "./App",
  mfeProps,
  errorElement,
  loadingElement,
}: IMfeLoaderProps) => {
  const Component = lazy(
    loadMfeComponent({
      remoteUrl,
      mfeName,
      moduleName,
    })
  );

  return (
    <ErrorBoundary
      fallbackRender={(error) => {
        console.log(error);
        return errorElement || defaultError;
      }}
    >
      <Suspense fallback={loadingElement || defaultLoading}>
        <Component {...mfeProps} />
      </Suspense>
    </ErrorBoundary>
  );
};
