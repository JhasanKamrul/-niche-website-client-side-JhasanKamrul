import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';

const AddingProduct = () => {
    const [addedProduct, setAddedProduct] = useState({});
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddedData = { ...addedProduct };
        newAddedData[field] = value;
        console.log(newAddedData);
        setAddedProduct(newAddedData)
    }
    const handleformSubmit = e => {
        const addedProductInfo = {
            ...addedProduct
        }
        fetch('https://powerful-plateau-32116.herokuapp.com/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProductInfo),
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Added To The Explore Page Successfully');
                    history.replace('/explore');
                }
            })
        e.preventDefault()
    }
    return (
        <Container>
            <form onSubmit={handleformSubmit}>
                <TextField
                    sx={{ width: '85%', m: 1 }}
                    id="outlined-basic"
                    label="Product name"
                    name="name"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <TextField
                    sx={{ width: '85%', m: 1 }}
                    id="outlined-basic"
                    label="Price"
                    name="price"
                    type="number"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <TextField
                    sx={{ width: '85%', m: 1 }}
                    id="outlined-basic"
                    label="Image"
                    name="img"
                    onBlur={handleOnBlur}
                    variant="outlined" />

                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-multiline-static"
                    label="Description"
                    name="description"
                    multiline
                    rows={4}
                    onBlur={handleOnBlur}
                />
                <Button sx={{ width: '80%', m: 1 }} variant="contained" type="submit">Add The Product</Button>
            </form>
        </Container>
    );
};

export default AddingProduct;