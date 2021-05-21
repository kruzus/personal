export const Post = (props: PostProp) => {
  const { body, heading } = props;
  return (
    <>
      <div className="postcard noselect">
        <h1
          style={{
            fontSize: "2rem",
            color: "#0b2661",
          }}
        >
          {!heading ? "Heading NOT SET" : heading}
        </h1>
        <p>{body}</p>
      </div>
    </>
  );
};

type PostProp = {
  heading?: string | null;
  body?: string;
};
