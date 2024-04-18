import React from "react";
import { BlogPosts, HomeSection } from "../feature/home/components";
import { Banner } from "../components";

export default function HomePage() {
  return (
    <>
        <Banner />
        <HomeSection/>
        <BlogPosts />
    </>
  );
}
