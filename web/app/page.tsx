import Image from "next/image";
import { trpc } from "@web/app/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: "Tom" });
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}
