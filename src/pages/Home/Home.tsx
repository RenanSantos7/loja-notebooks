import Advantages from "./Advantages/Advantages.tsx";
import Banner from "./Banner/Banner.tsx";
import Categories from "./Categories/Categories.tsx";
import SecProdutos from "./SecProdutos/SecProdutos.tsx";

export default function Home() {
    return (
        <div className={`pageLimited`}>
            <Banner />
            <Categories />
            <SecProdutos />
            <Advantages />
        </div>
    )
}
