import { Card, Hero, Sidebar } from "@/components";
import { products } from "@/data/card";
export default function Home() {
  return (
    <main className="">
      {/* Navbar is inside layout and wraps this main component */}
      <Hero />
      <div className="grid grid-cols-6">
        <aside className="sticky top-0 block h-full aside">
          <Sidebar />
        </aside>
        <div className="flex gap-4 m-3 flex-wrap col-span-5">
          {products.map((product) => (
            <Card key={product._id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
