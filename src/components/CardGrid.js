import Image from "next/image";
import img from "@/../public/img.png";

const CardGrid = () => {
  const Card = ({ number, title, description, imgSrc, imgAlt, personName }) => (
    <div className="relative bg-white rounded-lg shadow-lg p-6 pt-12 flex flex-col items-center text-center">
      <div className="absolute -top-8">
        <Image
          className="rounded-full"
          src={imgSrc}
          alt={imgAlt}
          width={200}
          height={200}
        />
      </div>
      <span className="text-sm font-semibold text-gray-500 mt-12">{`0${number}`}</span>
      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-sm font-medium text-gray-700">{personName}</span>
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <h2 className="text-center text-gray-500 text-2xl font-semibold mb-8">Creators.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          number={1}
          title="CEO Of My Heart"
          description="CEO"
          imgSrc={img}
          imgAlt="Gis"
          personName="Gia"
        />
        <Card
          number={2}
          title="SEO Website Design"
          description="1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and ad retargeting strategies."
          imgSrc="/images/person2.jpg"
          imgAlt="Andrew Sibalus"
          personName="Andrew Sibalus"
        />
        <Card
          number={3}
          title="SEO Consulting"
          description="B2B SEO is the process of generating valuable inbound leads from other businesses."
          imgSrc="/images/person3.jpg"
          imgAlt="Zahra Agustin"
          personName="Zahra Agustin"
        />
        <Card
          number={4}
          title="SEO Consulting"
          description="B2B SEO is the process of generating valuable inbound leads from other businesses."
          imgSrc="/images/person3.jpg"
          imgAlt="Zahra Agustin"
          personName="Zahra Agustin"
        />
      </div>
    </div>
  );
};

export default CardGrid;
