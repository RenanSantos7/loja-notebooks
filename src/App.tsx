import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { DataProvider } from "./contexts/DataContext.tsx";
import { CartContext, CartProvider } from "./contexts/CartContext.tsx";

export default function App() {
  return (
    <CartProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </CartProvider>
  )
}
