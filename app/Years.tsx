import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function Years() {
  const data = [
    {
      title: "2024",
      content: (
        <p className="text-neutral-800 text-xs md:text-xl mb-8 max-w-2xl">
          The publication of "Bishonno Prohor," the sixth book of the Tomisra
          Bhubon series, which was one of the best-selling books this year. 📖
        </p>
      ),
    },
    {
      title: "2022",
      content: (
        <p className="text-neutral-800 text-xs md:text-xl mb-8 max-w-2xl">
          Become a member of Supreme Court Bar Association. ⚖️
        </p>
      ),
    },
    {
      title: "2019",
      content: (
        <p className="text-neutral-800 text-xs md:text-xl mb-4 max-w-2xl">
          Successfully organized the first-ever environmental school named
          "Environmental Autumn School". 🎒
        </p>
      ),
    },
    {
      title: "2018",
      content: (
        <p className="text-neutral-800 text-xs md:text-xl mb-4 max-w-2xl">
          Enrolled as an Advocate of Bangladesh Bar Council. <br /> Published
          the book "Bangladesh Environmental Judgments". 📗
        </p>
      ),
    },
    {
      title: "2016",
      content: (
        <p className="text-neutral-800 text-xs md:text-xl mb-4 max-w-2xl">
          Founded environmental non-profit organization named "Strategy for
          Environmental Development Foundation". 🌿
          <br /> Published the book "Tomisra" which was the most popular work.
        </p>
      ),
    },
    {
      title: "2015",
      content: (
        <p className="text-neutral-800 text-xs md:text-xl mb-4 max-w-2xl">
          Published first book named "Blackgate". 🕵🏻‍♂️
        </p>
      ),
    },
    {
      title: "2013",
      content: (
        <p className="text-neutral-800 text-xs md:text-xl mb-4 max-w-2xl">
          Completed LL.M. from University of Dhaka. 📜
        </p>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
