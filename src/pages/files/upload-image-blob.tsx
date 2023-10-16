import { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [imageUrl, setImageUrl] = useState("");

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];

    // const blob = new Blob([file], { type: file.type });
    // const url = URL.createObjectURL(file);

    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-1/3 w-[80%] items-center justify-around border">
        <div>
          {imageUrl && <Image src={imageUrl} alt="Preview" width={200} height={300} />}
        </div>
        <div>
          <input type="file" onChange={onFileChange} accept="image/*" />
        </div>
      </div>
    </div>
  );
};

export default Page;
