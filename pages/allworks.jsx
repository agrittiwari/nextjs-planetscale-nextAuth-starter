

const allworks = () => {

    const onSave = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        <form className="w-1/2" onSubmit={onSave}>
            <label className="block my-5 flex justify-between items-center">
                <span className="block text-sm my-2 font-medium text-slate-700">Brand Logo</span>
                <input type="file" name="brandlogo" className="mt-1 block w-medium px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block my-5 flex justify-between items-center">
                <span className="block text-sm my-2 font-medium text-slate-700">Brand Image</span>
                <input type="file" name="brandImage" className="block w-medium text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-medium file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                "/>
            </label>
            <div className="flex justify-center">
                <button className="bg-violet-500 my-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-2xl w-1/4">
                Save
                </button>
            </div>
        </form>
    );
};

export default allworks;