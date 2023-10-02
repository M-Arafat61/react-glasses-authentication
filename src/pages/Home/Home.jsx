import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ShowProducts from "../../components/ShowProducts/ShowProducts";

const Home = () => {
  const sunglasses = useLoaderData();
  // console.log(sunglasses);
  return (
    <div>
      <Banner></Banner>

      <ShowProducts
        name={"Best selling products"}
        sunglasses={sunglasses.slice(5, 10)}
      ></ShowProducts>
      <ShowProducts
        name={"Top products"}
        sunglasses={sunglasses.slice(0, 5)}
      ></ShowProducts>
    </div>
  );
};

export default Home;
