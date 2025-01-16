export function Button({ label, onClick }) {
    return <button onClick={onClick} type="button" className=" transition-all w-full border-2 hover:text-black hover:bg-white text-white bg-slate-950  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
    </button>
}   