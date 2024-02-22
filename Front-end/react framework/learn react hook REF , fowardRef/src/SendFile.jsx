import React from 'react'

const SendFile = React.forwardRef((props, ref) => {
    return (
        <>

            <div>
                <input type="text" ref={ref} />
            </div>
            <button onClick={props.onUploadCLick}>File pres</button>
        </>
    )
})



export default SendFile