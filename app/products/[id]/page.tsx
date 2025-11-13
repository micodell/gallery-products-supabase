import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export default async function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = await params;
    const supabase = await createClient();

    const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

    // console.log('product id: ' + product);

    if (error || !product) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Product Not Found :(</h2>
        <Link href="/" className="block mt-10 sm:inline-block sm:mt-4 text-teal-200 hover:underline">Return To Home</Link>
        </div>
    );
    }

    return (
    <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center sm:grid sm:grid-cols-4 gap-10 card max-w-4xl">
                <Image width={400} height={500} src={product.image} alt="" className='w-2/3 sm:w-full' draggable="false" />
                <div className='sm:col-span-3 flex flex-col gap-0 sm:gap-2'>
                    <h2 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-6">{product.title}</h2>
                    <p className="mt-2 text-xs sm:text-base">{product.description}</p>
                    <p className="mt-6 sm:mt-2 font-bold bg-green-500 text-white text-lg px-3 py-1 rounded-md w-fit">${product.price}</p>
                </div>
            </div>
            <div className="flex gap-4 mt-4 align-middle">
                <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base py-1.5 px-3 rounded">⬅ Back</Link>
            </div>
        </div>
    </div>
    );
}