import Image from "next/image";

interface HeroHeadshotProps {
    imgSrc: string,
    imgAlt: string
}

const HeroHeadshot = ({imgSrc, imgAlt}: HeroHeadshotProps) => {
    return (
        <Image
        height={100}
        width={100}
        src={imgSrc}
        alt={imgAlt}
        className="object-cover !m-0 !p-0 object-top rounded-full h-64 w-64 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
        />
    );
  };
  
  export default HeroHeadshot;