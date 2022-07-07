import Nav from '../components/Nav/Nav';
import CreateForm from '../components/CreateForm/createForm';

const Create = () => {
    return (
        <div>
            <main className="p-10 mx-auto max-w-4xl">
                <h1 className="text-6xl font-bold mb-4 text-center">Development branch</h1>
                <p className="mb-20 text-xl text-center">
                🔥 Shop from the hottest items in the world 🔥
                </p>
                <div className="flex justify-center">
                    <Nav />
                </div>
                <div className='flex justify-center my-5'>
                    <CreateForm />
                </div>
                {/* {products.map((product) => (
                    <Product product={product} key={product.id} />
                ))} */}
      </main>
        </div>
    )

}

export default Create;