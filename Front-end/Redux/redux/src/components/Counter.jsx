import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByMount } from "../features/Counter/CounterSlice"
import { useState } from "react"

const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }


    return (
        <section >
            <h1>Counter</h1>
            <h1>{count}</h1>
            <div className="wrap-btn" style={{ marginBottom: "20px" }}>

                <button onClick={() => dispatch(decrement())}> -</button>
                <button onClick={() => dispatch(reset())}> RE</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <div className="count-container">
                <input
                    type="text"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)} />

                <div className="wrap-btn">
                    <button onClick={() => dispatch(incrementByMount(addValue))}> Add Mount</button>
                    <button onClick={resetAll}>resetAll</button>
                </div>
            </div>
        </section>
    )
}

export default Counter