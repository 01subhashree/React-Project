import axios from 'axios';
import { useState, useEffect } from 'react';
import style from './Table.module.css'

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data)
        })
    }, [])
    
    const removeHandler = (index) => {
        data.splice(index, 1)
        setData([...data]);
        // const newData = data.filter((elem, id) => id !== index)
        // setData(newData);
        console.log(index);  
    }

    return (
        <>
            <table className={style.Table}>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem,index) => (
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.title}</td>
                            <td>{elem.body}</td>
                            <td onClick={() => { removeHandler(index) }}>❌</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Table;