import { Camera, FileUp } from "lucide-react";

interface FileUploadButtonsProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FileUploadButtons({ onFileChange }: FileUploadButtonsProps) {
  return (
    <div className="absolute right-2 top-2 flex space-x-2">
      <label
        htmlFor="photo-upload"
        className="cursor-pointer hover:bg-gray-100 p-2 rounded-full"
        title="Add Photo"
      >
        <Camera size={20} className="text-gray-600" />
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
      </label>
      <label
        htmlFor="file-upload"
        className="cursor-pointer hover:bg-gray-100 p-2 rounded-full"
        title="Add File"
      >
        <FileUp size={20} className="text-gray-600" />
        <input
          type="file"
          id="file-upload"
          multiple
          className="hidden"
          onChange={onFileChange}
        />
      </label>
    </div>
  );
}
