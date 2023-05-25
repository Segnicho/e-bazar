import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { products } from "@/data/card";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="flex gap-4 m-3 flex-wrap">
        {
          products.map(product =><Card key={product._id} {...product}/>)
        }
        <Card />
        <Card />
      </div>
    </main>
  );
}
