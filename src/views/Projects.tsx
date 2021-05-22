import { Wrapper } from "../components/shared/Wrapper";
import { Post } from "../components/shared/Post";
export const Projects = () => {
  return (
    <>
      <Wrapper>
        <Post heading="Welcome to projects!!" body="Welcome to my webpage." />

        <Post
          heading="Stuff..."
          body={`
          I am working on a CRUD project but that is going slow. For now I made few apps using free
          open API's that lets me use their data without the API key.
          `}
        />
      </Wrapper>
    </>
  );
};
