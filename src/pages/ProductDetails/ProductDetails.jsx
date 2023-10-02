import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [sunglass, setSunglass] = useState([]);
  const { id } = useParams();

  const glassesData = useLoaderData();

  useEffect(() => {
    const productId = parseInt(id);
    const filteredSunglass = glassesData?.filter(
      eachSunglass => eachSunglass.id === productId
    );
    setSunglass(filteredSunglass);
  }, [id, glassesData]);
  // console.log(sunglass);
  return (
    <>
      <img
        src='https://capricathemes.com/opencart/OPC09/OPC090220/image/cache/catalog/main-banner-1-1903x680.jpg'
        alt=''
      />

      {sunglass?.map(product => (
        <div
          className='grid grid-cols-1  md:grid-cols-2 gap-2 md:h-[680px] '
          key={product.id}
        >
          <div className=' flex justify-center items-center bg-white'>
            <img className='object-cover w-2/3' src={product.image} alt='' />
          </div>

          <div className=' bg-black flex flex-col items-center justify-center  text-white '>
            <div className=' bg-black h-auto md:h-[90%] md:-ml-24   p-4'>
              <h1 className='text-5xl font-bold mb-8'>{product.name}</h1>
              <p className='text-xl font-bold mb-4'>{product.description}</p>
              <p>
                GKB Optical online store brings in the best assortment of
                sunglasses. You can get a sunglass based on your lifestyle,
                fashion and requirements.
              </p>

              <h1 className='text-4xl font-bold my-4'>${product.price}</h1>
              <br />
              <button className='btn'>Buy it now!</button>
            </div>
          </div>
        </div>
      ))}

      {/* {sunglass?.map(product => (
        <div
          className='grid grid-cols-1 md:grid-cols-2 md:h-[680px]'
          key={product.id}
        >
          <div className='flex justify-center items-center bg-white'>
            <img src={product.image} alt='' />
          </div>

          <div className='bg-black text-white flex items-center'>
            <div className='bg-black h-auto md:h-[90%] md:-ml-24 p-4'>
              <h1 className='text-5xl font-bold mb-8'>{product.name}</h1>
              <p>{product.description}</p>
              <p>
                GKB Optical online store brings in the best assortment of
                sunglasses. You can get a sunglass based on your lifestyle,
                fashion, and requirements.
              </p>

              <h1 className='text-4xl font-bold my-4'>${product.price}</h1>
              <br />
              <button className='btn'>Buy it now!</button>
            </div>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default ProductDetails;
