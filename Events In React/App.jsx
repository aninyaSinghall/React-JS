import Array from "./Array.jsx";
import { Button } from "./Button.jsx";

function App(){

  // let features = [<li>"Hello"</li>, <li>"hii"</li>];
  // let list = features.map((feature)=> <li>{feature}</li>)
  return (
    <>
   <Array title="Laptop" price={30000}/>
   <Array title="Mobile" price={10000}/>
   <Array title="charger point" price={50}/>
   <Button/>
    </>
  )
}
