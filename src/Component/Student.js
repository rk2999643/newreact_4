import React, { useState } from "react";

const Student =()=>{
    const [data] = useState([
        {
            Name: "Ratan Kumar",
            Age : 23,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Santa Singh",
            Age : 22,
            Course : "B.tech",
            Batch : 2023,
            Status : "Active"
        },
        {
            Name: "Charlie Dubey",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        
        {
            Name: "Jack Sahu",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },
        {
            Name: "Chris Gupta",
            Age : 24,
            Course : "B.tech",
            Batch : 2022,
            Status : "Active"
        },

    ])
       return(
        <div className="st"> 
           <table  >
              <tr>
                <th>Name<hr/></th>
                <th>Age<hr/></th>
                <th>Course<hr/></th>
                <th>Batch<hr/></th>
                <th>Status<hr/></th>

              </tr>
              {data.map((item,index) =>{
            return(
            
                    <tr key={index}>
                        <td>{item.Name}<hr/></td>
                        <td>{item.Age}<hr/></td>
                        <td>{item.Course}<hr/></td>
                        <td>{item.Batch}<hr/></td>
                        <td>{item.Status}<hr/></td>
                        
                        
                         
                    </tr>
                
            )
           })}
           </table>
        </div>
       )
}
export default Student