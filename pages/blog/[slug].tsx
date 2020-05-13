import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
import path from "path";
import React from "react";
import BlogNavigation from "../../components/blogNavigation";
import Layout from "../../components/layout";
import { data } from "../../public/helpers/interfaces";

interface StaticProps {
  slug: string;
}

interface PostProps {
  slug: string;
  contents: string;
  data: data;
}

const Post: React.FC<PostProps> = ({ slug, contents, data }) => {
  return (
    <main>
      <BlogNavigation />
      <Head>
        <title>{data.title}</title>{" "}
        <meta title="description" content={data.description} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Layout id="blogArticleContainer">
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </Layout>
    </main>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: StaticProps }) => {
  const slug = params.slug;
  const rawData = fs.readFileSync(path.join("posts", `${slug}.md`)).toString();
  const parsedMD = matter(rawData);
  const htmlString = marked(parsedMD.content);
  return {
    props: {
      slug,
      contents: htmlString,
      data: parsedMD.data,
    },
  };
};

export default Post;
