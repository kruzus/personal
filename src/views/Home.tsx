import { Wrapper } from "../components/shared/Wrapper";
import { Post } from "../components/shared/Post";
export const Home = () => {
  const content: PostType[] = [
    {
      body: `I am learning React, TS/JS, NodeJS, Go. I am interested
      in developing web based apps for the users around the world. 
      This webpage will be changed as we go.
      `,
    },
  ];
  return (
    <>
      <Wrapper>
        <Post
          heading="Welcome!"
          body={`Welcome to my page. Find more about me in About and for my projects in the Projects tab!`}
          other={content}
        />
      </Wrapper>
    </>
  );
};
