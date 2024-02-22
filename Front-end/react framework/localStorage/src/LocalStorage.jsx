export const useLocalStorage = (key) => {

    const setItem = (value) => {

        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        catch (err) {
            console.log(err)
        }
    };


    const getItem = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : undefined;
        }
        catch (err) {
            console.log(err)
        }
    }


    const removeItem = () => {
        window.localStorage.removeItem(key)
    }

    return { setItem, getItem, removeItem }

}