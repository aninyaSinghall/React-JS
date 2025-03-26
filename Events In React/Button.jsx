
// Event in React
// Handling Click Events

function printHello(){
    console.log("Hello!");
}

function printBye(){
    console.log("Bye!");
}

function handleSubmitButton(event){
    event.preventDefault();
     console.log("Form has submitted");
}

export const Button = () => {
    let styles = {padding: "15px", backgroundColor: "yellow", innerWidth: "30px"};
    return(
        <>
        <h1>Hello! Welcome To Handling Click Events</h1>
        <button onClick={printHello} style={styles}>Click Me</button>
        <h3 onClick={printBye}>Thank You For Coming!</h3>
        <form onSubmit={handleSubmitButton}>
            <input placeholder="write something" />
            <button>submit!</button>
        </form>
        </>
    )
}
