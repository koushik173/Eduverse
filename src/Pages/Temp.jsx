// import { useState } from "react";


// const Temp = () => {



//     let startx = 0;
//     let starty = 0;

//     const id = 0;
//     const [drug, setDrug] = useState(false)
//     const [currentx, setCurrentx] = useState(0)
//     const [currenty, setCurrenty] = useState(0)
//     const [movex, setMoveX] = useState(0)
//     const [movey, setMoveY] = useState(0)



//     const mouseMove = (event) =>
//     {
        
//         requestAnimationFrame(()=>move(event))
        
//     }


//     const mouseDown = (event)=>
//     {
//         startx = event.clientX;
//         starty = event.clientY;
//         // setMoveX(event.clientX - movex)
//         // setMoveY(event.clientY - movex)
//         // event.preventDefault();
//         setDrug(true)
//         // id = requestAnimationFrame(animate)
//     }



//     const mouseUp = ()=>
//     {
//         // setMoveX(event.clientX)
//         // setMoveY(event.clientY)
//         // event.preventDefault();
//         setDrug(false)
//         // id = requestAnimationFrame(animate)
//     }


//     const move = (event) =>
//     {
//         if(drug)
//         {
//             setMoveX(event.clientX - startx);
//             setMoveY(event.clientY - starty);

//             startx+=movex;
//             starty+=movey;
//         }
//     }




//     return (
//         <div onMouseMove={mouseMove} onTouchEnd={mouseUp} onMouseUp={mouseUp} className="p-20 w-full h-full bg-slate-300">
//             <button onMouseDown={mouseDown} onTouchEnd={mouseUp} onMouseUp={mouseUp} Style={`translate: ${movex}px ${movey}px;`} className={` cursor-pointer bg-yellow-400 inline rounded-xl select-none hover:bg-yellow-500 p-5`} id = 'output'> Krishna</button>
//             {/* <input className="border-2 rounded"></input> */}
//             {/* <p className="border-2 rounded p-5">Hare Krishna</p> */}
//             {
//                 // const output = document.getElementById('output')
//                 // requestAnimationFrame(do)
//             }
//         </div>
//     );
// };

// export default Temp;




















// const swipeContainer = document.getElementById('swipe-container');

// console.log("Hare Krishna my container is: ", swipeContainer)

// let isDragging = false;
// let startPosition = 0;
// let currentTranslate = 0;
// let previousTranslate = 0;
// let animationID = 0;

// // swipeContainer.addEventListener('mousedown', dragStart);
// // swipeContainer.addEventListener('touchstart', dragStart);

// // swipeContainer.addEventListener('mousemove', drag);
// // swipeContainer.addEventListener('touchmove', drag);

// // swipeContainer.addEventListener('mouseup', dragEnd);
// // swipeContainer.addEventListener('touchend', dragEnd);




// function dragStart(event) {
//     const swipeContent = event.target;
//     console.log("Hare Krishna drag start", swipeContent)
//     if (event.type === 'touchstart') {
//       startPosition = event.touches[0].clientX;
//     } else {
//       startPosition = event.clientX;
//       event.preventDefault();
//     }
  
//     isDragging = true;
  
//     animationID = requestAnimationFrame(animation);
//   }
  
//   function drag(event) {
//     if (isDragging) {
//       let currentPosition;
//       if (event.type === 'touchmove') {
//         currentPosition = event.touches[0].clientX;
//       } else {
//         currentPosition = event.clientX;
//       }
  
//       currentTranslate = previousTranslate + currentPosition - startPosition;
//     }
//   }
  
//   function dragEnd() {
//     // const swipeContent = event.target;

//     isDragging = false;
//     cancelAnimationFrame(animationID);
  
//     // Define the swipe sensitivity (adjust as needed)
//     // const swipeSensitivity = 100;
  
//     // // Determine the direction of the swipe
//     // if (currentTranslate > swipeSensitivity) {
//     //   // Swipe right
//     //   currentTranslate = swipeSensitivity;
//     // } else if (currentTranslate < -swipeSensitivity) {
//     //   // Swipe left
//     //   currentTranslate = -swipeSensitivity;
//     // }  
  
//     // Save the current translate value as the previous translate value
//     previousTranslate = currentTranslate;
  
//     // Apply the transform to the content
// const swipeContent = document.getElementById('swipe-content');

//     swipeContent.style.transform = `translateX(${currentTranslate}px)`;
//   }
  

//   function animation() {
// const swipeContent = document.getElementById('swipe-content');

//     // const swipeContent = event.target;
//     swipeContent.style.transform = `translateX(${currentTranslate}px)`;
//     // swipeContent.style.transform = `translatey(${currentTranslate}px)`;
  
//     if (isDragging) {
//       animationID = requestAnimationFrame(animation);
//     }
//   }

// const TeacherHome = () => {
//     return (
//         <div onTouchStart={dragStart} onMouseMove={drag} onTouchMove={drag} onMouseUp={dragEnd} onTouchEnd={dragEnd}  id='swipe-container' className='bg-slate-500 w-full overflow-hidden swipe-container h-screen'>
//             Hare Krishna from teacher Home
//             <p onMouseDown={dragStart} id='swipe-content'  className=' swipe-content inline-flex transition bg-slate-700 dela ease-in-out cursor-pointer'>Hare Krishna</p>
//         </div>
//     );
// };

// export default TeacherHome;




const Temp = () => <h1>Hare Krishna</h1>


export default Temp;