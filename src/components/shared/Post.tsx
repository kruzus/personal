export const Post = (props: PostProp) => {
  const { body, date, heading } = props;
  return (
    <>
      <h1>{heading}</h1>
      <p>{body}</p>
      <span>{date ? date : "Date not set."}</span>
    </>
  );
};

type PostProp = {
  heading: string;
  body: string;
  date?: Date | null | string;
};
