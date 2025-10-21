import { useEffect, useState } from 'react';

export default function Character({ url }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    //este useEffect va a descargar la informacion desde la api
    useEffect(() => {
        console.log(url, data);

        fetch(url)
            .then((response) => response.json())
            .then(responseJson => {
                setData(responseJson);
            });
        setLoading(false);
    }, [url])


    return (
        <div>
            {loading ? <div>reloj de arena</div>
                : <div className="w-50 h-50 flex flex-col items-center justify-center gap-2">
                    <div className="text-xl">
                        {data.name}
                    </div>
                    <img className="h-36 w-36" src={"https://cdn.thesimpsonsapi.com/500" + data.portrait_path} alt="" />
                </div>
            }
        </div>
    )
}