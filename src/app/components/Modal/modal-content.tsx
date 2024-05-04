// components/Experience.tsx
import Image from 'next/image';

interface ModalContentProps {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
}

const ModalContent: React.FC<ModalContentProps> = ({
  title,
  subtitle,
  date,
  image,
  description,
  tags,
}) => {
  return (
    <div
      className="flex flex-col justify-start p-4 rounded-lg"
    >
      <div className="text-4xl font-bold">{title}</div>
      <p className="text-lg text-gray-400">{subtitle}</p>
      <p className="text-m text-gray-600">{date}</p>
      <div className="flex">
        {tags.map((tag, idx) => {
            return (
                <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 mr-2 my-2">{tag}</span>
            )
        })}
      </div>
      <p className="text-lg my-8">{description}</p>
      <div className="w-full h-64 mb-4">
        <Image
          width={500}
          height={500}
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default ModalContent;