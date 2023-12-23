// import React, { useEffect, useState } from 'react';
// // import './App.css';
// const data =[
//     "The computer was born to solve problems that did not exist before",
//     "People don’t care about what you say, they care about what you build ", 
//     "It is in your hands, to make a better world for all who live in it",
//     "We cannot solve our problems with the same thinking we used when we created them"
// ]
// const Quotes = () => {

//     const [activeindex, setActiveIndex] = useState("2")
//     const hanadlePre = () => {
//         setActiveIndex( (activeindex === 0) ? data.length-1 : activeindex-1 )
//     }
//     const handleNext = () => {
//         setActiveIndex((activeindex+1) % (data.length))
            
//     }
// useEffect(()=>{
//     const timer= setTimeout(()=>{
//         handleNext()
//     }, 2000)

//     return(()=>{
// clearTimeout(timer)
//     })
// }, [activeindex])

//   return (
//     <div style={{display: "flex", width: "100%", height: "50%", justifyContent:"space-around", alignItems: "center"}}>
//     <button onClick={hanadlePre} style={{width: "30px", background: "crimson"}}>previous</button>
//     {data.map((url, index)=>(<h3 key={url}
//     style={{ width: "500px", height: "400px" ,display : (activeindex === index ?  "block":"none") }}>{url}</h3>

//     ))}
//     <button onClick={handleNext} style={{width: "50px", background: "crimson"}}>Next</button>
   
//     </div>
//   )
// }

// export default Quotes

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material';


const MyBackgroundImage =
'https://farm6.staticflickr.com/5181/5621565275_6e1565a71e_o.jpg';


function Quotes(props)
{
    var items = [
        {
            name: "If you're changing the world, you're working on important things. You're excited to get up in the morning. ",
            description: "by Larry Page"
        },
        {
            name: "Success is a lousy teacher. It seduces smart people into thinking they can't lose. ",
            description: " by Bill Gates"
        },
        {
            name: "See, you not only have to be a good coder to create system like Linux, you have to be a sneaky bastard too.",
            description: "by Linus Torvalds"
        },
        {
            name: "People don’t care about what you say, they care about what you build  ",
            description: " by Mark Zuckerberg"
        },
        {
            name: "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            description: "by Martin Fowler"
        }
    ]

    return (
        <div >
  
        <Carousel style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundImage: `url(${MyBackgroundImage})`, backgroundSize: "cover", borderRadius: "0 50%"}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
    )
}

function Item(props) 
{
    return (
        <Paper style={{display: "flex",flexDirection: "column", justifyContent: "center",
         alignItems: "center", height:"350px", padding: "20px",color: "white", backgroundImage: `url(${MyBackgroundImage})`, backgroundSize: "cover", borderRadius: "0 50%"}}>
               {/* <h2 className={`title animate__animated animate__backInLeft animate__delay-2s`}>Testimonials</h2> */}
            <h2 className='animate__lightSpeedInRight'>{props.item.name}</h2>
            <p className='animate__lightSpeedInRight' style={{color:"red" }}>{props.item.description}</p>

        </Paper>
    )
}
export default Quotes;