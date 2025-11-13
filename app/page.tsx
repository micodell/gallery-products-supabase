// app/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import AddToCartBtn from "@/app/components/AddToCartBtn";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string; 
}

export default async function Products() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error("Error:", error);
    return <div>Error loading products</div>;
  }

  return (
    <div className="flex flex-col justify-center align-center m-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Beauty and Luxury’s Products
      </h2>
      
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {products?.map((product: Product) => (
            <div key={product.id} className="card flex flex-col md:flex-row gap-6 border p-4 rounded shadow-sm">
              <Image 
                src={product.image} 
                alt={product.title} 
                width={400} height={500}
                className='w-[40%] object-contain h-40' 
              />
              
              <div className="flex flex-col gap-2 justify-center w-full">
                <Link href={`/products/${product.id}`}>
                  <h2 className="font-semibold text-xl hover:text-blue-500 hover:underline cursor-pointer">
                    {product.title}
                  </h2>
                </Link>

                <div className="flex gap-2">
                  <p className="mt-2 font-semibold bg-green-500 text-white px-2 py-1 rounded-md w-fit">
                    ${product.price}
                  </p>
                  <AddToCartBtn id={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}