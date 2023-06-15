import { Card, Hero, Sidebar } from "@/components";
import { products } from "@/data/card";
import { auth } from "@clerk/nextjs";
// export const { userId } = auth();

export default function Home() {
  const { userId } = auth();
  return (
    <main className="">
      {/* Navbar is inside layout and wraps this main component */}
      <Hero />
      <div className="grid grid-cols-9">
        <aside className="block h-full aside col-span-2 mx-auto">
          <Sidebar />
        </aside>
        <div className="flex gap-4 mt-3 md:mr-5 flex-wrap col-span-7 mx-auto justify-normal max-lg:justify-center">
          {products.map((product) => (
            <Card key={product._id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
