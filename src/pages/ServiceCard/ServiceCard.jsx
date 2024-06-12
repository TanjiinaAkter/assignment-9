import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({ six }) => {
  const { id, img, price_range, short_description, name } = six;
  return (
    <div className="card w-full   rounded-none relative">
      <figure className="w-full">
        <img
          className="w-full h-[21rem] lg:h-[30rem] object-cover "
          src={img}
          alt="Venue Selection"
        />
      </figure>
      <div className="text-white absolute w-full h-full flex justify-center items-center gap-3 flex-col bg-[rgba(0,0,0,0.6)]">
        <p className="text-4xl font-semibold">{name}</p>
        <p className="text-2xl font-semibold">{short_description}</p>
        <p className="text-xl font-semibold">Price range : {price_range}</p>
        <Link to={`/servicecard/${id}`}>
          <button className="py-3 px-8 text-lg bg-red-600">See details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  six: PropTypes.node,
};
