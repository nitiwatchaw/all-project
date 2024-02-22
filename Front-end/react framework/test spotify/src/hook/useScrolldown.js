import { useState, useEffect } from "react"

export const useScrollDown = (ref) => {

    const [isScoll, setIsScroll] = useState(false)

    useEffect(() => {


        const handleScroll = () => {

            if (ref.current.scrollTop > 20) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        };

        ref?.current?.addEventListener('scroll', handleScroll);

        return () => {
            ref?.current?.removeEventListener('scroll', handleScroll);
        };


    }, [ref])

    return isScoll
}