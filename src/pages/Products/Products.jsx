import { useEffect, useState } from "react";
import ShowProducts from "../../components/ShowProducts/ShowProducts";

const Products = () => {
  const [sunglasses, setSunglasses] = useState([]);

  useEffect(() => {
    fetch("/public/db.json")
      .then(res => res.json())
      .then(data => setSunglasses(data));
  }, []);
  return (
    <div>
      <img src='https://i.ibb.co/4Fm9MgB/image.png' alt='' />
      <ShowProducts
        name={"Featured Products"}
        sunglasses={sunglasses}
      ></ShowProducts>
    </div>
  );
};

export default Products;
