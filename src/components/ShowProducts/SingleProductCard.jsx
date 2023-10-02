import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleProductCard = ({ discount, item }) => {
  return (
    <div>
      <div className='card card-compact shadow-xl'>
        {discount && item.discount && (
          <div className='badge m-1'>{item.discount}% off</div>
        )}

        <figure className='h-5/6'>
          <img src={item.image} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{item.price}</h2>
          <p>{item.name}</p>
          <div className='card-actions justify-end'>
            <Link to={`/product/${item.id}`} className='btn btn-neutral btn-sm'>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleProductCard.propTypes = {
  discount: PropTypes.bool,
  item: PropTypes.object,
};

export default SingleProductCard;
