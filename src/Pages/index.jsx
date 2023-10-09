import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../Services/api";

export const PostePage = () => {
  const [newsPost, setNewsPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await api.get(`/news/${id}`);
        setNewsPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <main>
      {newsPost ? (
        <article>
          <h1>{newsPost.title}</h1>
          <h3>Categoria da materia:{newsPost.category}</h3>
          <p>{newsPost.content}</p>
          <span>Autot:{newsPost.author}</span>
        </article>
      ) : null}
    </main>
  );
};
