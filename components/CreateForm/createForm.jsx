const createForm = () => {
    return (
        <form>
            <label className="block my-5">
                <span className="block text-sm my-2 font-medium text-slate-700">Background Color</span>
                <input type="text" value="tbone" className="mt-1 block w-medium px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block my-5">
                <span className="block text-sm my-2 font-medium text-slate-700">Border Color</span>
                <input type="text" value="tbone" className="mt-1 block w-medium px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block my-5">
                <span className="block text-sm my-2 font-medium text-slate-700">Heading Text</span>
                <input type="text" value="tbone" className="mt-1 block w-medium px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block my-5">
                <span className="block text-sm my-2 font-medium text-slate-700">Paragraph Text</span>
                <input type="text" value="tbone" className="mt-1 block w-medium px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block my-5">
                <span className="block text-sm my-2 font-medium text-slate-700">Brand Logo</span>
                <input type="file" className="mt-1 block w-medium px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block my-5">
            <span className="block text-sm my-2 font-medium text-slate-700">Brand Logo</span>
            <input type="file" className="block w-medium text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
            "/>
            </label>
            <button className="bg-violet-500 my-5 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Save changes
            </button>
        </form>
    );
};

export default createForm;