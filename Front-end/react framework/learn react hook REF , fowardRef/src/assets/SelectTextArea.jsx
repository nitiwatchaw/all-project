import React from 'react'

const SelectTextArea = React.forwardRef((props, ref) => {
    return (
        <>

            <textarea name="" id="" cols="30" rows="10" ref={ref}  ></textarea>
            <button onClick={props.textAreaAll}>TextArea press</button>
        </>
    )
})



export default SelectTextArea