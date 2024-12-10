interface InputFieldProps {
    label: string,
    id: string,
    type?: string,
    placeholder: string,
    required?: boolean,
}
export function InputField(props: InputFieldProps) {
    const {label, id, type, placeholder, required} = props;
    return(
        <div className="rounded-2xl border border-zinc-500 mb-2">
            <label htmlFor={id} className="invisible hidden">{label}</label>
            <input
                name={id}
                autoComplete="off"
                type={type}
                id={id}
                required={required}
                placeholder={placeholder}
                className="appearance-none bg-transparent outline-none px-4 py-2 w-full"/>
        </div>
    )
}
export function TextArea(props: InputFieldProps) {
    const {label, id, placeholder, required} = props;
    return(
        <div className="rounded-2xl border border-zinc-500 mb-2">
            <label htmlFor={id} className="invisible hidden">{label}</label>
            <textarea
                id={id}
                required={required}
                placeholder={placeholder}
                rows={5}
                name={id}
                className="appearance-none bg-transparent outline-none px-4 py-2 w-full"/>
        </div>
    )
}