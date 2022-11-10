import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Image ,Transformation} from 'cloudinary-react';

const Getimages = () => {
    const[imageIds,setImageIds]=useState()
    const loadImages = async () =>{

        try {
         const resp = await fetch("http://localhost:5000/api/images");

            const data = await resp.json();
            setImageIds(data)  
            console.log(data);
        //   } 


        // try {
        //    await  axios.get('/api/images')
        //     .then(res => {
        //         const data =  res.json();
        //         console.log(data)
        //        }).catch(err=>console.error(err))
       
            // const res = await fetch ('http:localhost:5000/api/images');
            // const data = await res.json();
            // console.log(data);
            // console.log('zzzz')
            // setImageIds(data)       
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
      loadImages()
    }, [])
  return (
    <div>
       {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName="dotit"
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    ))}
    </div>
  )
}

export default Getimages