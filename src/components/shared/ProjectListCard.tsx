

export const ProjectListCard = () => {

    const data: ProjectItemProp[] = [{
        id: 0,
        imageUrl: "awdawd",
        link: "awdawd",
        title: "awdawd"        
    },
    {
        id: 1,
        imageUrl: "8885awdawd",
        link: "awdawd",
        title: "awdawd"        
    },
    {
        id: 2,
        imageUrl: "556777",
        link: "awdawd",
        title: "awdawd"        
    },
    {
        id: 3,
        imageUrl: "11ccc",
        link: "754ll",
        title: "cvvsev"        
    },

]

    

    return(
        <>
        <div className="projectList">
         test
         
         {data.map(
             item => (
                <ProjectItem
                project={item}
                key={item.id}
                />
             )
         )}
        </div>
        </>
    )
}

const ProjectItem = (props:ProjectProp) => {
    const {
        imageUrl,
        link,
        title
    } = props.project;


    return(
        <>
        {link}<br />
        {title}<br />
        {imageUrl}<br />
        </>
    )
}

type ProjectProp = {
    project: ProjectItemProp
}

type ProjectItemProp = {
    id: number
    title: string;
    imageUrl: string;
    link: string;
}