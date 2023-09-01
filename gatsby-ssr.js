import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      // href="/fonts/Fatlip.woff"
      key="customFont"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
  ])
}