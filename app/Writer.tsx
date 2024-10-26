import { Copy, Lightbulb, Minus, Save, Undo2, X } from "lucide-react";

export default function Writer() {
  return (
    <section className="flex flex-col w-full">
      {/* The top blue ribbon */}
      <div className="flex flex-col bg-[#4170cf] pt-1 px-2">
        {/* The icons and filename */}
        <div className="flex justify-between">
          {/* left icons*/}
          <div className="flex">
            <Save
              stroke="white"
              strokeWidth={1.5}
              className="hover:bg-[#6699ff] p-1 cursor-pointer"
            />
            <Undo2
              stroke="white"
              strokeWidth={1.5}
              className="hover:bg-[#6699ff] p-1 cursor-pointer"
            />
          </div>

          <p className="text-gray-100 text-sm">Document1 - Word</p>

          {/* Right icons*/}
          <div className="flex">
            <Minus
              stroke="white"
              strokeWidth={1.5}
              className="hover:bg-[#6699ff] p-1 cursor-pointer"
            />
            <Copy
              stroke="white"
              strokeWidth={1.5}
              className="hover:bg-[#6699ff] p-1 cursor-pointer"
            />
            <X
              stroke="white"
              strokeWidth={1.5}
              className="hover:bg-red-500 p-1 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex mt-2">
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            File
          </p>
          <p className="bg-gray-100 px-4 py-1 text-sm text-[#4170cf]">Home</p>
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            Insert
          </p>
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            Design
          </p>
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            Layout
          </p>
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            References
          </p>
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            Mailings
          </p>
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            Review
          </p>
          <p className="hover:bg-[#6699ff] px-4 py-1 text-sm text-gray-100">
            View
          </p>

          <div className="flex hover:bg-[#6699ff] px-2 py-1 text-sm text-gray-100">
            <Lightbulb stroke="white" strokeWidth={1.5} className="p-1" />
            <p>Tell me what you want to do...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
