export const Post = (props: PostProp) => {
  const { body, heading, other } = props;
  return (
    <>
      <div className="postcard">
        <h1
          style={{
            fontSize: "2rem",
            color: "#0b2661",
            textAlign: "center",
          }}
        >
          {!heading ? "NOT SET" : heading}
        </h1>
        <p>{body}</p>

        {other?.map((text) => (
          <>
            <h1
              style={{
                fontSize: "1.5rem",
                color: "#0b2661",
              }}
            >
            { !text.heading ? null : text.heading }
            </h1>
            <p>{!other ? null : text.body}</p>
          </>
        ))}
      </div>
    </>
  );
};

type PostProp = {
  heading?: string;
  body?: string;
  other?: PostType[];
};

type PostType = {
  heading?: string;
  body?: string;
};
