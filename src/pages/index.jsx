import * as React from "react"
import { DocumentHeadSEO } from "../components/seo.jsx"

import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <div class="container">
        <div class="shape-group">
          <div class="small-rectangle" />
          <div class="small-circle" />
          <div class="small-circle" />
        </div>

        <div class="circle hoverTarget"/>
        <div class="circle hoverTarget"/>
        <div class="rectangle hoverTarget"/>
        <div class="semi-circle"/>
        <div class="square"/>
        <div class="rectangle hoverTarget"/>
        <div class="rectangle spacer"/>
        <div class="rectangle light-green"/>
        <div class="square light-green"/>
        <div class="semi-circle last"/>
      </div>

      <div class="img one"/>
      <div class="img two"/>
      <div class="img three"/>
      <div class="img four"/>

      <div class="container bkg">
        <div class="shape-group">
          <div class="small-rectangle"/>
          <div class="small-circle"/>
          <div class="small-circle"/>
        </div>
        <div class="circle"/>
        <div class="circle"/>
        <div class="rectangle"/>
        <div class="semi-circle"/>
        <div class="square"/>
        <div class="rectangle"/>
        <div class="rectangle spacer"/>
        <div class="rectangle light-green"/>
        <div class="square light-green"/>
        <div class="semi-circle last"/>

      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <DocumentHeadSEO />
