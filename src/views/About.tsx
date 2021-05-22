import { Wrapper } from "../components/shared/Wrapper";
import { Post } from "../components/shared/Post";
export const About = () => {
  return (
    <>
      <Wrapper>
        <Post
          heading="About"
          body
          ="
          My name is Bek, I am studying web development. I am fascinated by technology
          mostly in the web dev area at the moment.
          My end game plan is to become full stack engineer but for now I am inetested learning
          front end technolgies.
          "
        />

        <Post
    
        heading="Technolgies"
        body
        ={`
        For technologies I am learning React for my front end library.
        TypeScript/JS with React and varius NodeJS related projects. 
        Golang for more CPU intensive / multitasking projects.
        For general purpose backend is NodeJS/ Express way to go.
       `}

       other={`
        Projects are usually hosted on Netlify, for frontend and anything backend is on DigitalOcean.
       `}
      
        />
      </Wrapper>
    </>
  );
};
