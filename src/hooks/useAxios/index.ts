//add generics????
export const useAxios = async (settings: useAxiosProp) => {
  const { url } = settings;
  const items = [`data: URL IS ${url}`, new Error("just an error"), true];
  const [data, error, isPending] = items;
  return { data, error, isPending };
};

//useAxios hook typings.
type useAxiosProp = {
  url: string;
  config: useAxiosConfigProp;
};

type useAxiosConfigProp = {
  settings?: {
    url?: string;
    method?: string;
  };
};
