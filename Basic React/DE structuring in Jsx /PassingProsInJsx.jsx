function PassingProsInJsx(){
    return(
        <div>
            <h1>Profile Challenge</h1>
            <ProfileCard
              name= "Ram"
              age = {12}
              greetings = {
                <div>
                <strong>Hi Ram!, have a wonderful day</strong>
                </div>
              }
            >
            <div>
            <p>Hobbies: Dancing , singing</p>
            </div>
            </ProfileCard>

            <ProfileCard
              name= "Khu"
              age = {10}
              greetings = {
                <div>
                <strong>Hi Khu!, have a wonderful day</strong>
                </div>
              }
            >
                 <div>
            <p>Hobbies: Dancing , singing</p>
            </div>
            </ProfileCard>

            <ProfileCard
              name= "Man"
              age = {16}
              greetings = {
                <div>
                <strong>Hi Man!, have a wonderful day</strong>
                </div>
              }
            >
                <div>
               <p>Hobbies: Dancing , singing</p>
               </div>
            </ProfileCard>
        </div>
    )
}

export default PassingProsInJsx;


//function ProfileCard({name, age, greetings}){ is the second way to destructuring 
function ProfileCard(props){

    const {name, age, greetings} = props;// this is the 1st way to destructuring the jsx 
    return (
        <>
        <h1>Name:{name}</h1>
        <p>Age:{age}</p>
        <p>Greetings: {greetings}</p>
        <div>{props.children}</div>
        </>
    )
}
