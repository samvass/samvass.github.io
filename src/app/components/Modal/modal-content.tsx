// components/Experience.tsx
import Image from 'next/image';

interface ModalContentProps {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string[];
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
                <span key={idx} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-900 text-indigo-300 mr-2 my-2">{tag}</span>
            )
        })}
      </div>
      <div>
        {description.map((d, idx) => (
          <div key={idx} className="my-8 flex items-center">
            <p className="text-lg">{d}</p>
          </div>
        ))}
      </div>
      <div className="w-4/6 h-4/6 flex mx-auto mb-4">
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