import mock1 from "../assets/mockImages/mock1.png";
import mock2 from "../assets/mockImages/mock2.png";
import mock3 from "../assets/mockImages/mock3.png";
import PopularProductCard from "../components/PopularProductCard";

const products = [
  {
    imgURL: mock3,
    name: "Lorem Watch 001",
    price: "$500.20",
  },
  {
    imgURL: mock1,
    name: "Lorem Watch 002",
    price: "$510.20",
  },
  {
    imgURL: mock2,
    name: "Lorem Watch 003",
    price: "$520.20",
  },
  {
    imgURL: mock3,
    name: "Lorem Watch 004.1",
    price: "$530.20",
  },
];

const PopularProducts = () => {
  return (
    <section id="products" className="max-container sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias amet
          facere ipsa
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
