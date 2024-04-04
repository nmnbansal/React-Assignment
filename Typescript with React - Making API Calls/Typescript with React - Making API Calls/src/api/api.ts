import axios from "axios";


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchApi = async (): Promise<Post[]> => {
  try {
    let res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
