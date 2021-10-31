import { useEffect, useState } from "react";



const useContent = (fetchData) => {
    const [contents, setContents] = useState([]);
    const fetchURL = fetchData;
    useEffect(()=>{
        fetch(fetchURL)
        .then(res => res.json())
        .then(data => setContents(data))
    }, [])

    return {
        contents
    }
}
export default useContent;