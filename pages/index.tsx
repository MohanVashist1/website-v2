import React from "react";
import Navigation from "../components/navigation";
import Landing from "../components/landing";
import Projects from "../components/projects";
import ParticleEffect from "../components/particle";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostProps } from "../public/helpers/interfaces";
import Blog from "../components/blog";
import Head from "next/head";

const App: React.FC<PostProps> = ({ slugs, data }) => {
  return (
    <main>
      <Head>
        <title>Mohan Vashist</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Mohan Vashist's personal website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div>
        <Navigation />
        <Landing />
        <Projects />
        <Blog data={data} slugs={slugs} />
      </div>
      <ParticleEffect />
    </main>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const rawData = files.map((file) => {
    return fs.readFileSync(path.join("posts", `${file}`)).toString();
  });
  const parsedData = rawData.map((file) => {
    return matter(file).data;
  });
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
      data: parsedData,
    },
  };
};

export default App;

// TODO: Google analytics
// TODO: Deploy
