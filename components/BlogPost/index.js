import { Card, Typography } from "@material-ui/core";
import Link from "next/link";
export default function BlogPost(props) {
  const { post } = props;
  return (
    <Card style={{ padding: 10 }}>
      <Link href={`/data-fetching/blog/${post.id}`} key={post.id}>
        <a>
          <Typography variant={"h5"}>{post.title}</Typography>
        </a>
      </Link>
      <Typography variant={"body1"}>{post.body}</Typography>
    </Card>
  );
}
