export const Post = (props: PostProp) => {
  const { body, heading, other } = props;
  return (
    <>
      <div className="postcard">
        <h1
          style={{
            fontSize: "2rem",
            color: "#0b2661",
            textAlign: "center"
          }}
        >
          {!heading ? "NOT SET" : heading}
        </h1>
        <p>{body}</p>
        <p>{!other ? null : other}</p>
      </div>
    </>
  );
};

type PostProp = {
  heading?: string;
  body?: string;
  other?: string
  
};
