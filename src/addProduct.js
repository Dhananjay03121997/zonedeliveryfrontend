import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const AddProduct = (props) => {
console.log('PROPR', props);
    let history = useHistory();
    
    const [desc, setDesc] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        if(props.location.state.stateName === 'update'){
            setName(props.location.state.name);
            setDesc(props.location.state.description);
            setPrice(props.location.state.price);
        }
    }, []);
    const addProduct = async () => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:3001/createproduct', {
            name,
            price,
            description: desc
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(data => {
            console.log(data?.data);
            if (data?.data?.code === 200) {
                console.log(data?.data);
                // setList(data?.data?.data);
            }
        }).catch(err => {
            console.log('ERror', err);
            alert('Something went wrong');
        })
    }

    const updateProduct = async () => {
        const token = localStorage.getItem('token');
        console.log({name,
            price,
            desc})
        axios.patch(`http://localhost:3001/updateproduct?productId=${props.location.state._id}`, {
            name,
            price,
            description: desc
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(data => {
            console.log(data?.data);
            if (data?.data?.code === 200) {
                console.log(data?.data);
                // setList(data?.data?.data);
            }
        }).catch(err => {
            console.log('ERror', err);
            alert('Something went wrong');
        })
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        history.push('/product');

    }
    return (
        <div className='form-container'>
            {/* <form className='register-form' onSubmit={handleSubmit}> */}
            <label>
                Name
            </label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="First Name" id="name" name="First Name" />
            <label>
                Price
            </label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="price" placeholder="price" id="price" name="price" />
            <label>
                Description
            </label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)} type="desc" placeholder="description" id="desc" name="desc" />
            <button type='submit' onClick={props.location.state.stateName === 'add' ? addProduct : updateProduct}>{props.location.state.stateName}</button>
            <button type='button' onClick={handleCancel}>Cancel</button>
        </div>
    )
}