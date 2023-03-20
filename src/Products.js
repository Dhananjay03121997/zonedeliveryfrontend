import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';

const Products = () => {

    // const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(
    //     'ws://localhost:8080',
    //     { share: true }
    // );

    let [list, setList] = useState([]);
    let history = useHistory()
    const getProducts = (async () => {
        const token = await localStorage.getItem('token');
        console.log('TOKEN', token);
        axios.get('http://localhost:3001/getproducts', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(data => {
            console.log(data?.data);
            if (data?.data?.code === 200) {
                console.log(data?.data);
                setList(data?.data?.data);
            }
        }).catch(err => {
            console.log('ERror', err);
            alert('Something went wrong');
        })
    })
    const deleteProduct = (async (id) => {
        const token = await localStorage.getItem('token');
        console.log('TOKEN', token);
        axios.delete(`http://localhost:3001/deleteproduct?productId=${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(data => {
            if (data?.data?.code === 200) {
                alert('success');
                // setList(data?.data?.data);
            }
        }).catch(err => {
            alert('Something went wrong');
        })
    })
    useEffect(() => {
        getProducts();
        console.log("In UseEffect Products");
    }, []);

    console.log(list);
    return (
        <div>

            <table >
                <tr style={{ border: '1px solid black' }}>
                    <th>Sr.No.</th>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                    <button onClick={() => history.push('/addProduct', {stateName: 'add'})}>Add </button>
                    <th></th>
                </tr>
                <br/>
                {
                    list?.map((data, index) => {
                        return (
                            <tr key={data._id} >
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>{data.price}</td>
                                <td><button onClick={() => history.push('/addProduct', { ...data, stateName: 'update' })}>update</button></td>
                                <td><button onClick={()=>deleteProduct(data._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Products;
