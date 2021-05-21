import { Wrapper } from "../components/shared/Wrapper";
import { Post } from "../components/shared/Post";
export const Home = () => {
  return (
    <>
      <Wrapper>
        <Post heading="Welcome!" body="Welcome to my webpage." />

        <Post
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Praesentium quam minus neque quibusdam, ea nulla amet ipsum deserunt.
Incidunt sed voluptatum sunt facere velit reprehenderit vitae 
doloremque molestias aliquid saepe!"
          heading="Welcome!"
        />
        <Post
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Praesentium quam minus neque quibusdam, ea nulla amet ipsum deserunt.
Incidunt sed voluptatum sunt facere velit reprehenderit vitae 
doloremque molestias aliquid saepe!"
          heading="Welcome!"
        />
        <Post
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Praesentium quam minus neque quibusdam, ea nulla amet ipsum deserunt.
Incidunt sed voluptatum sunt facere velit reprehenderit vitae 
doloremque molestias aliquid saepe!"
          heading="Welcome!"
        />
      </Wrapper>
    </>
  );
};
