'use client';
export function FilterItem({children, active}) {
    return (
        <div className="h-10 px-7 sm:px-4 bg-gray-100 text-black rounded flex items-center gap-1 cursor-pointer">
            {active && <div className="w-2 h-2 rounded-full bg-black"></div>}
            {children}
        </div>
    );
}