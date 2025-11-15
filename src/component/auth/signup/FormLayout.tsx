// components/FormLayout.tsx
import Image, { StaticImageData } from "next/image";

interface FormLayoutProps {
  children: React.ReactNode;
  imageSrc: StaticImageData;
  imageAlt: string;
}

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center bg-white rounded-3xl py-12 px-12 shadow-2xl w-full max-w-5xl mx-auto transition-all duration-300 hover:shadow-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          className="w-full md:w-1/2 bg-blue-300 h-auto object-cover rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col gap-6 w-full md:w-1/2 max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};
