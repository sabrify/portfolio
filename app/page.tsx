import React from "react";
import Intro from "@/components/intro";
import { MDXRemote, } from "next-mdx-remote/rsc";

export default function Home(){
  const content = `
  #this is a markdown heading`
  return(
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}