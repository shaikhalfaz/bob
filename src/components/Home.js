import React from 'react'

export default function Home () {
    // function handleOnSubmit(event){
    //     const firstName = event.target.element.first.value;
    //     const lastName = event.target.element.last.value;

    // }
  return (
    <div className="first">
      <form>
            <h1> Crud Operation </h1>
            <label htmlFor="exampleInputEmail1" className="htmlForm-label"> First Name  </label>
            <input type="text" className="htmlForm-control" id="first" aria-describedby="emailHelp"/><br/><br/>
        
            <label htmlFor="exampleInputPassword1" className="htmlForm-label"> Last Name  </label>
            <input type="text" className="htmlForm-control" id="last"/><br/><br/>
        
        
            <input type="checkbox" className="htmlForm-check-input" id="check"/>
            <label className="htmlForm-label" htmlFor="exampleCheck1">Check me out</label><br/><br/>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
     </div>
  )
}


