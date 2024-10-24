import Image from "next/image";
import JavedImage from "./images/person.jpg";

export default function Hero() {
  return (
    <section className="container flex justify-around items-center mx-auto mt-10">
      <div className="flex flex-col">
        <h1>Hello, I am Javed Rasin</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          corrupti.
        </p>
      </div>

      <Image
        src={JavedImage}
        alt="Javed Rasin"
        width={300}
        className="rounded-2xl"
      />
    </section>
  );
}
