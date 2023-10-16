import { http } from "@/http/http";

const Page = () => {
  async function downloadHandler() {
    const filename = window.prompt("enter filename...");
    if (!filename?.trim()) return;

    try {
      const { data } = await http.get("/api/files/xss-base64?filename=" + filename, {
        baseURL: "/"
      });

      // The atob function is used to decode a base64-encoded string back to its binary data representation.
      // The Blob constructor is used to create a binary large object (Blob) that encapsulates the binary data.

      const blob = new Blob([atob(data.file)], { type: "application/octet-stream" });
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
        download xss file! (as base64)
      </button>
    </div>
  );
};

export default Page;
