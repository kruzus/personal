//TODO
export const useAxios = async () => {
  //re use fetch so we dont ahve to reuse logic.
  /*Idea: 
  
    const {data, error} = useAxios(
    {
        path: "github.com/api/users",
        config: {
            ...Data
        }
    }    
    )

    */
  const data = { data: "Data" };
  const err = { err: "error" };
  return { data, err };
};
