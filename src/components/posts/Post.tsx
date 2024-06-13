interface PostProps {
  author: string;
  content: string;
}

export function Post(props: PostProps) {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
}
