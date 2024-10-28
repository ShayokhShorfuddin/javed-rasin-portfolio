import BlueRibbon from "./BlueRibbon";
import Editor from "./Editor";
import Tools from "./Tools";

export default function Writer() {
  return (
    <section className="flex flex-col w-full h-screen">
      <BlueRibbon />
      <Tools />
      <Editor />
    </section>
  );
}
