import Head from 'next/head';
import Product from '../components/Product';
import Nav from '../components/Nav/Nav';
import
  {
    useSession
  } from "next-auth/react"
// import prisma from '../lib/prisma';
import Link from 'next/link';

export default function Home({ products }) {
const {data:session, status} = useSession()

  return (
    <div>
      <Head>
        <title>Read Funny Incidents</title>
        <meta name="description" content="People all across the world shared their Funny Incidents and memories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
     <Nav/>
List of  Incidents
{(status=== 'loading') && <p>loading..</p>}
{(status === 'unauthenticated') &&<strong>Sign up to share your funny Incident</strong>}
      </main>

      <footer></footer>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const data = await prisma.product.findMany({
//     include: {
//       category: true,
//     },
//   });

//   //convert decimal value to string to pass through as json
//   const products = data.map((product) => ({
//     ...product,
//     price: product.price.toString(),
//   }));
//   return {
//     props: { products },
//   };
// }
