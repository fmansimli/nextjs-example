import { type FC, useState, useEffect } from "react";
import clsx from "clsx";

interface IProps {
  onFileChange: (file: File | null) => void;
}

const FileUpLoader: FC<IProps> = (props) => {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (file) {
      props.onFileChange(file);
    }
  }, [file]);

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) {
      setFile(e.target.files[0]);
    }
  };

  const clearHandler = () => {
    setFile(null);
    props.onFileChange(null);
  };

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const dragLeaveHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    setDragging(false);
  };

  return (
    <div
      className={clsx("flex items-center gap-5", dragging ? "bg-slate-200" : "")}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}>
      <label className="cursor-pointer rounded-xl border-2 border-dashed bg-transparent px-10 py-4">
        <i className="ri-upload-2-line mr-3 text-blue-500"></i>
        <span className="text-[14px] font-normal">Yüklə</span>
        <input type="file" hidden onChange={fileChangeHandler} />
      </label>
      {file && (
        <div className="flex items-center rounded-xl bg-gray-100 px-5 py-3">
          <div className="flex items-center gap-3">
            <i className="ri-file-3-line text-2xl text-blue-500"></i>
            <div className="flex flex-col">
              <span className="text-[12px] font-normal">{file.name}</span>
              <span className="text-[10px] font-normal">{file.size / 1000} kb</span>
            </div>
          </div>
          <button className="ml-5 h-6 w-6 rounded-full bg-white" onClick={clearHandler}>
            <i className="ri-close-line text-blue-500"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpLoader;
