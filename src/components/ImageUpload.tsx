// src/components/ImageUpload.tsx
import { ChangeEvent } from "react";

interface ImageUploadProps {
  images: File[];
  setImages: (images: File[]) => void;
}

export default function ImageUpload({ images, setImages }: ImageUploadProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImages([...images, ...newImages]);
    }
  };

  return (
    <div className="border-2 border-dashed rounded-lg p-8 text-center">
      <input
        type="file"
        id="image-upload"
        multiple
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <label htmlFor="image-upload" className="cursor-pointer">
        <p className="text-gray-500">Click to choose images</p>
        <p className="text-sm text-gray-400">or drag and drop</p>
      </label>

      {images.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium">Selected files:</p>
          <ul className="text-sm text-gray-600">
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
