export function InputBox ({label,placeholder,onChange}){
    return <div class="flex flex-col">
        <div className="text-sm font-medium text-left py-2">
        {label}
        
    </div>
    <input onChange={onChange} placeholder={placeholder} className="w-ful px-2 py-1 flex-border rounded border-slate-200"/>
    </div>
}