## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Saya disini menggunakan `pnpm`, bapak bisa menyesuaikan 🙏🏻
```bash
pnpm add @supabase/supabase-js @supabase/ssr
````

**Michelle - c14240169**

## Soal
1. buatlah table barang dengan kolom judul, deskripsi, harga, dan url gambar di supabase
2. buat CRUD table barang dengan API Route yang di sisi server terhubung dengan supabase, gunakan Next.js untuk programnya
3. buat tampilan daftar barang dengan card 3 barang dalam 1 row
4. tampilkan detail barang ketika card barang di klik
5. hapus folder node_modules dan .next dahulu sebelum dikumpulkan

## Notes
1. Saya buat kolom table pada supabase saya lengkap seperti pada https://fakestoreapi.com/products hanya saja untuk 'rate' dan 'count' tidak nested.
2. CRUD. <br> Video demo CRUD: [ClientSideProgramming-NextJS-Supabase-Demo.mp4](https://drive.google.com/file/d/1ReAe3JGlJCumZMVj6AndGRu3v7zUXseM/view?usp=sharing)
- POST (create): under `/products` di `/app/api/products/route.ts`. Contoh yang dapat dilakukan:
<br>Postman: `http://localhost:3000/api/products/`
````json
{
    "title": "SERAPHIM T-SHIRT TAN",
    "price": 169,
    "description": "sdfsdfsdfsfsdfsdfdf",
    "category": "woman's clothing",
    "image": "https://i.pinimg.com/736x/36/69/83/3669837d3f74bd859c07f73c96b4c607.jpg",
    "rate": 4.9,
    "count": 169
}
````
- GET all (read): under `/products` untuk view ada di `/app/page.tsx`, ada juga under `/app/api/products/route.ts` dimana mereka melakukan hal yang sama. Contoh yang dapat dilakukan:
<br>Postman: `http://localhost:3000/api/products/`
- GET with id (read): under `/products/[id]` untuk view ada di `/app/api/products/[id]/route.ts`. Contoh yang dapat dilakukan:
<br>Postman: `http://localhost:3000/api/products/7`
- PUT (update): under `/products/[id]` di `/app/api/products/[id]/route.ts`
<br>Postman: `http://localhost:3000/api/products/10`
````json
{
    "description": "Cute T-Shirt",
}
````
- DELETE (delete): under `/products/[id]` di `/app/api/products/[id]/route.ts`
<br>Postman: `http://localhost:3000/api/products/10`

## Personal Notes
- jika ingin menambahkan sumber source (misal gambar), tambahkan pada `next.config.ts` under `images/remotePatterns`. https://nextjs.org/docs/messages/next-image-unconfigured-host 