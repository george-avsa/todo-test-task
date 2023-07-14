export function  TaskCreator() {
    return (
        <div className="flex gap-3.5 w-full h-12">
            <input 
                type="text" 
                className={`grow h-full rounded border-2 border-slate-200 
                border-solid px-3 text-black focus:outline outline-1 outline-[#D6D6D6]`}
                placeholder="For expample: Learn Javascript"
            />
            <div className={`w-12 h-12 border-2 rounded bg-white border-slate-200 cursor-pointer
            border-solid bg-[url(../../public/creationIcon.svg)] bg-no-repeat bg-center`}></div>
        </div>
    );
}