import Head from "next/head";
import Product from "../components/Product";
import Nav from "../components/Nav/Nav";
import prisma from "../lib/prisma";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name='description' content='PlanetScale Quickstart for Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-10 mx-auto max-w-4xl'>
        <Link href='/'>
          <a className='text-6xl font-bold mb-4 text-center'>
            Development branch
          </a>
        </Link>
        <p className='mb-20 text-xl text-center'>
          🔥 Shop from the hottest items in the world 🔥
        </p>
        <div className='flex justify-center'>
          <Nav />
        </div>
        {/* {products.map((product) => (
            <Product product={product} key={product.id} />
          ))} */}
      </main>

      <footer></footer>
    </div>
  );
}

// export async function getStaticProps(context) {
//   // const data = await prisma.product.findMany({
//   //   include: {
//   //     category: true,
//   //   },
//   });

//convert decimal value to string to pass through as json
// const products = data.map((product) => ({
//   ...product,
//   price: product.price.toString(),
// }));
// return {
//   props: { products },
// };
// }
