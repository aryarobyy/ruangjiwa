import Image from "next/image";
// import img from "@/../public/img.png";

const CardGrid = () => {
  const Card = ({ number, title, description, imgSrc, imgAlt, personName }) => (
    <div className="relative bg-[var(--compo-color)] rounded-lg shadow-lg p-6 pt-12 flex flex-col items-center text-center">
      <div className="absolute -top-20">
        <Image
          className="rounded-full"
          src={imgSrc}
          alt={imgAlt}
          width={200}
          height={200}
        />
      </div>
      <span className="text-sm font-semibold text-[var(--text-color)] mt-12">{`0${number}`}</span>
      <h3 className="text-xl font-bold text-[var(--title-color)] mt-2 mb-2">{title}</h3>
      <p className="text-[var(--text-color)] mb-4">{description}</p>
      <span className="text-sm font-medium text-[var(--title-color)]">{personName}</span>
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <h2 className="text-center text-gray-500 text-2xl font-semibold mb-20">
        Creators.
      </h2>
      <div className="flex flex-wrap justify-center gap-20">
        <Card
          number={1}
          title="FrontEnd Developer"
          description="Universitas Singaperbangsa Karawang"
          imgSrc="/team/rolis.png"
          imgAlt="Rolis Liu"
          personName="Rolis Liu"
        />
        <Card
          number={2}
          title="BackEnd Developer"
          description="Universitas Singaperbangsa Karawang"
          imgSrc="/team/roby.png"
          imgAlt="Roby Aryanata"
          personName="Roby Aryanata"
        />
        <Card
          number={3}
          title="SEO Consulting"
          description="Universitas Singaperbangsa Karawang"
          imgSrc="/team/irzi.png"
          imgAlt="Irzi Rahmatullah"
          personName="Irzi Rahmatullah"
        />
      </div>
    </div>
  );
};

export default CardGrid;
