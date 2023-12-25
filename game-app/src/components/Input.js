function Input({ value, label, onChange}) {

    // Take it as the below declaration is the default, to have UI
    // reflect of what user key in in real time
    const handlerChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <label>{label}</label>
            <input onChange={handlerChange} value={value} />
        </div>
    );

}

export default Input;