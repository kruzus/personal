import { Wrapper } from "../components/shared/Wrapper";
import { Post } from "../components/shared/Post";
export const Home = () => {
  return (
    <>
      <Wrapper>
        <Post
          heading="Welcome!"
          body="Welcome to my page. Find more about me in About and for my projects in the Projects tab!"
        />

        <Post
          heading="Notice.."
          body="I will be adding stuff to my site. Here we go."
          other={
            [
              {
                heading: "welcome",
                body: "awd"
              }
            ]
          }
        />
      </Wrapper>
    </>
  );
};
