import mockBag from "../assets/mockImages/mockBag.png";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Packaging
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in
          aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          in aliquid?
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in
          aliquid?
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center bg-gray-50 border rounded-lg shadow-lg">
        <img
          src={mockBag}
          alt="mockBag"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
