import PropTypes from "prop-types";

const ServiceIdDetails = ({ category }) => {
  const { name, img, price, description } = category;
  return (
    <div className=" bg-base-100 shadow-xl">
      <figure className="p-3 lg:h-[25rem]">
        <img className="w-full h-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body  text-center">
        <h2 className=" text-center text-3xl">{name}</h2>
        <p className="text-2xl">{description}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-[#ca786c] text-white text-2xl">Price : {price}</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceIdDetails;
ServiceIdDetails.propTypes = {
  category: PropTypes.node,
};
