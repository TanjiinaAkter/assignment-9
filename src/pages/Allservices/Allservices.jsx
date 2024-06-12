import Navbar from "../shared/Navbar/Navbar";
// import logo1 from "../../../src/assets/s-1.jpg";
// import logo2 from "../../../src/assets/s-2.jpg";
// import logo3 from "../../../src/assets/s-3.jpg";
// import logo4 from "../../../src/assets/s-4.jpg";
// import logo5 from "../../../src/assets/s-5.jpg";
// import logo6 from "../../../src/assets/s-6.jpg";
import Footer from "../shared/Footer/Footer";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceIdDetails from "../ServiceIdDetails/ServiceIdDetails";

const Allservices = () => {
  const loader = useLoaderData();
  const { id } = useParams();
  const currentId = parseInt(id);
  console.log(loader, currentId);
  const getserviceInfo = loader.find((load) => load.id === currentId);
  const categoryget = getserviceInfo.categories;
  console.log(categoryget);
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-24 bg-none px-12 lg:px-[20rem] mb-16">
        <h2 className="text-center py-12 text-6xl">Our Services</h2>
        <div className="allservice-container text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryget.map((category) => (
            <ServiceIdDetails
              key={category.id}
              category={category}></ServiceIdDetails>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Allservices;
