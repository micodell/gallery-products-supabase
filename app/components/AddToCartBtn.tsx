'use client'

export default function AddToCartBtn({ id }: { id: number }) {
  const handleAddToCart = () => {
     console.log(`Added product ${id} to cart`);
     // dispatch({ type: 'increment', id }); 
  };

  return (
    <button onClick={handleAddToCart} className="mt-2 font-semibold bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded-md w-fit cursor-pointer" >
      + Add to cart
    </button>
  );
}