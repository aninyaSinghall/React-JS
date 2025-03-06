
import { Navbar } from "./components/Navbar";

 export const Comp = () => {
   const myName = "Queen of Tears";
   const ratings = 8.2;
   const myPara = "A Korean drama image typically depicts a visually"
   const myPara2 =() => {
      const summary = "This is my fav series in my korean drama ";
      return summary;
   }

   let age = 18;
   let canWatch = "Not Available";
   if(age>=18) canWatch = "Watch Now";

    return (
       <>
       <Navbar/>
       <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/07/20171014/image3.jpeg" alt="" width="50%"/>
       <h1>Name: {myName}</h1>
       <h2>Ratings: {ratings}</h2>
       <p>Summary: {myPara}</p>
       {/* here we  are our dynamic values in jsx */}
       <p>Summary2: {myPara2()}</p> 
       {/* here we are our dynamic values using function call */}
       {/* First to use this condition with the help of ternary operator */}
       {/* <button>{age>=18 ? "Watch Now": "Not Available"}</button> */}
       <button>{canWatch}</button>
       </>
    )
 };

