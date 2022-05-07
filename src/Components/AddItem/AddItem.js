import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {

    const { register, handleSubmit } = useForm();
  
    const onSubmit = data =>{
        console.log(data);
       
        const url =`https://secret-scrubland-28960.herokuapp.com/inventory`
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))

    }
    return (
        <div className=' mx-5 my-5 '>
      
      <form   onSubmit={handleSubmit(onSubmit)}>
      <input style={{width:'75%'}} placeholder='name' {...register("name", { required: true})} /> <br />
      <input style={{width:'75%'}} placeholder='image url' {...register("img", { required: true})} /> <br />
      <input  style={{width:'75%'}}  placeholder='price' type='number' {...register("price" , { required: true})} /> <br />
      <textarea  style={{width:'75%'}} placeholder='description' {...register("description", { required: true})} /> <br />
      <input  style={{width:'75%'}} placeholder='supplier' {...register("supplier", { required: true})} /> <br />
      <input  style={{width:'75%'}} placeholder='quantity' type="number" {...register("quantity" , { required: true})} /> <br />  <br />
      <input className='btn btn-danger' type="submit" />
    </form>
        </div>
    );
};

export default AddItem;