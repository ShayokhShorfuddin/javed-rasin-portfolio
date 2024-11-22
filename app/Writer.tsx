import BlueRibbon from "./BlueRibbon";
import Editor from "./Editor";
import Tools from "./Tools";

export default function Writer() {
  return (
    <section className="flex flex-col w-full min-h-screen xs:h-screen">
      <BlueRibbon />
      <Tools />
      <Editor />
    </section>
  );
}
