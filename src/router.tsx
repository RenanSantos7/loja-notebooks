import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base.tsx";
import Home from "./pages/Home/Home.tsx";
import PagCategoria from "./pages/PagCategoria/PagCategoria.tsx";
import Produto from "./pages/Produto/Produto.tsx";
import Erro404 from "./pages/Erro404/Erro404.tsx";
import PagCarrinho from "./pages/PagCarrinho/PagCarrinho.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/categoria/:categoria',
        element: <PagCategoria />
      },
      {
        path: 'produto/:id',
        element: <Produto />
      },
      {
        path: '/carrinho',
        element: <PagCarrinho />
      },
      {
        path: '*',
        element: <Erro404 />
      }
    ]
  }
])

export default router
