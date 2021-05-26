import { Wrapper } from "../components/shared/Wrapper";
import { Post } from "../components/shared/Post";

export const About = () => {
  const stuff: PostType[] = [
    {
      heading: "My go to stack",
      body: `
  Maecenas bibendum, risus et euismod tempus, magna erat vulputate ligula, 
  ac imperdiet augue nisl vitae ante. Duis finibus scelerisque efficitur. 
  Vestibulum non accumsan sem, vitae dapibus magna. Vestibulum vel massa 
  libero. Fusce feugiat tincidunt mi, id vehicula augue iaculis at. In ut 
  justo dolor. Nullam et nisl at risus accumsan volutpat vitae quis magna.
  Sed molestie purus eu mi commodo auctor. Phasellus vel fringilla nunc. 
  Ut et sodales arcu, eget consequat risus. Orci varius natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante 
  ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
  Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Sed nec lacinia mauris, eu condimentum purus.
  Interdum et malesuada fames ac ante ipsum primis in faucibus.
  `,
    },
    {
      heading: "My go to stack",
      body: `
  Maecenas bibendum, risus et euismod tempus, magna erat vulputate ligula, 
  ac imperdiet augue nisl vitae ante. Duis finibus scelerisque efficitur. 
  Vestibulum non accumsan sem, vitae dapibus magna. Vestibulum vel massa 
  libero. Fusce feugiat tincidunt mi, id vehicula augue iaculis at. In ut 
  justo dolor. Nullam et nisl at risus accumsan volutpat vitae quis magna.
  Sed molestie purus eu mi commodo auctor. Phasellus vel fringilla nunc. 
  Ut et sodales arcu, eget consequat risus. Orci varius natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante 
  ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
  Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Sed nec lacinia mauris, eu condimentum purus.
  Interdum et malesuada fames ac ante ipsum primis in faucibus.
  `,
    },
    {
      body: `
  Maecenas bibendum, risus et euismod tempus, magna erat vulputate ligula, 
  ac imperdiet augue nisl vitae ante. Duis finibus scelerisque efficitur. 
  Vestibulum non accumsan sem, vitae dapibus magna. Vestibulum vel massa 
  libero. Fusce feugiat tincidunt mi, id vehicula augue iaculis at. In ut 
  justo dolor. Nullam et nisl at risus accumsan volutpat vitae quis magna.
  Sed molestie purus eu mi commodo auctor. Phasellus vel fringilla nunc. 
  Ut et sodales arcu, eget consequat risus. Orci varius natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante 
  ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
  Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Sed nec lacinia mauris, eu condimentum purus.
  Interdum et malesuada fames ac ante ipsum primis in faucibus.
  `,
    },
  ];
  return (
    <>
      <Wrapper>
        <Post
          heading="About"
          body="
          My name is Bek, I am studying web development. I am fascinated by technology
          mostly in the web dev area at the moment.
          My end game plan is to become full stack engineer but for now I am inetested learning
          front end technolgies.
          "
        />

        <Post heading="Technolgies" other={stuff} />
      </Wrapper>
    </>
  );
};

type PostType = {
  heading?: string;
  body?: string;
};
