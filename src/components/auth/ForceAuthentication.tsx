import { ReactNode, useCallback } from "react";
import Image from "next/image";
import * as loadingGif from "../../../public/images/loading.gif";
import useAuth from "data/hooks/useAuth";
import router from "next/router";
import Script from "next/script";

const ForceAuthentication = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();

  const renderContent = useCallback(() => {
    return (
      <>
        <Script
          id="my-security-script"
          dangerouslySetInnerHTML={{
            __html: `
            if(!document.cookie?.includes("next-admin-template-01-auth")) window.location.href = '/authentication'
        `,
          }}
        ></Script>

        {children}
      </>
    );
  }, [children]);

  const renderLoading = useCallback(() => {
    return (
      <div
        className={`
        flex flex-col justify-center items-center 
        h-screen w-full p-7 bg-zinc-100 dark:bg-zinc-700
      `}
      >
        <Image src={loadingGif} alt="loading gif image" />
      </div>
    );
  }, []);

  const pushAuthentication = useCallback(() => {
    router.push("/authentication");
    return null;
  }, []);

  if (!loading && user?.email) return renderContent();
  if (loading) return renderLoading();
  return pushAuthentication();
};

export default ForceAuthentication;
