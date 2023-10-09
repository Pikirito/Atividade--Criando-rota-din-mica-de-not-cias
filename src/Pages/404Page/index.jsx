import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <main>
      <h1>404:Pagina nao encontrada</h1>
      <Link to="/">Voltar para o inicio</Link>
    </main>
  );
};
