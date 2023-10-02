import SingleProductCard from "./SingleProductCard";
import PropTypes from "prop-types";

const ShowProducts = ({ name, sunglasses }) => {
  //   console.log(name, sunglasses);
  return (
    <div className='px-5 py-12'>
      <h1 className='text-3xl font-bold'>{name}</h1>
      <br />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {sunglasses.map(item => (
          <SingleProductCard
            key={item.id}
            item={item}
            discount
          ></SingleProductCard>
        ))}
      </div>
    </div>
  );
};
ShowProducts.propTypes = {
  sunglasses: PropTypes.array,
  name: PropTypes.string,
};
export default ShowProducts;
