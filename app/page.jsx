import { Card, Hero, Sidebar } from "@/components";
import { products } from "@/data/card";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="grid grid-cols-6">
        <Sidebar />
        <div className="flex gap-4 m-3 flex-wrap col-span-5">
          {products.map((product) => (
            <Card key={product._id} {...product} />
          ))}
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
