import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await api.get("/news");
        setPostList(data);
      } catch (error) {
        navigate("/404");
        console.log(error);
      }
    };
    getPosts();
  }, []);
  return (
    <ul>
      {postList.map((posts) => (
        <li key={posts.id}>
          <h1>{posts.title}</h1>
          <Link to={`/post/${posts.id}`}>Ler mais</Link>
        </li>
      ))}
    </ul>
  );
};
