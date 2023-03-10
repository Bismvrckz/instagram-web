import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const FacebookSDK = dynamic(
    () => import("https://connect.facebook.net/en_US/sdk.js"),
    { ssr: false }
  );

  useEffect(() => {
    FB.init({
      appId: 482223187415893,
      autoLogAppEvents: true,
      xfbml: true,
      version: "v8.0",
    });

    FB.api("/me", (response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FacebookSDK />
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <Link
          href={"/login"}
          // href={`https://www.facebook.com/v15.0/dialog/oauth?client_id=482223187415893&redirect_uri={"https://instagram-web-green.vercel.app/success"}&state={"{st=state123abc,ds=123456789}"}`}
        >
          <button>Sign in with facebook</button>
        </Link>
      </div>
    </>
  );
}
