import React from "react";
import Script from "next/script";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="beforeInteractive"
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
        />
        <>{props.children}</>
      </body>
    </html>
  );
}
