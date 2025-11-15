// components/AuthLayout.tsx
import Image, { StaticImageData } from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div
        className={`flex ${
          isImageLeft ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row"
        } gap-8 items-center justify-center bg-white rounded-3xl py-12 px-12 shadow-2xl w-full max-w-5xl mx-auto transition-all duration-300 hover:shadow-xl`}
      >
        {isImageLeft && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-full md:w-1/2 h-auto bg-blue-300 object-cover rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        )}

        <div className="flex flex-col w-full md:w-1/2 max-w-md space-y-8">
          {children}
        </div>

        {!isImageLeft && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-full md:w-1/2 h-auto bg-blue-300 object-cover rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        )}
      </div>
    </div>
  );
};
