import { useRouter } from "next/router";

import { http } from "@/http/http";

const Page = () => {
  const router = useRouter();

  async function downloadHandler() {
    const filename = window.prompt("enter filename...");

    if (!filename?.trim()) return;

    try {
      const resp = await http.get("/api/files/xss-binary?filename=" + filename, {
        baseURL: "/"
      });

      const binaryData = resp.data;

      const blob = new Blob([binaryData], { type: "application/octet-stream" });
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      a.download = filename;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <button
        className="rounded-lg bg-indigo-400 px-2 py-3 text-white"
        onClick={downloadHandler}>
        download xss! (as binary)
      </button>
    </div>
  );
};

export default Page;
