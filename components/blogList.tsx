import React from "react";
import { Card, Button, CardColumns } from "react-bootstrap";
import { PostProps, data } from "../public/helpers/interfaces";

interface PostCardProp {
  data: data;
  slug: string;
}

const BlogCard: React.FC<PostCardProp> = ({ data, slug }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={data.img} alt="Card" />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Button variant="primary" href={`/blog/${slug}`}>
            Link To Article{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const BlogList: React.FC<PostProps> = ({ data, slugs }) => {
  var count = 0;
  return (
    <div id="postLists">
      <CardColumns>
        {data.map((item) => {
          count++;
          return (
            <BlogCard
              key={slugs[count - 1]}
              data={item}
              slug={slugs[count - 1]}
            />
          );
        })}
      </CardColumns>
    </div>
  );
};

export default BlogList;
