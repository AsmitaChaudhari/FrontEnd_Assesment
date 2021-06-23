import { useEffect, useState } from "react"
import  { ApiService } from "../Services/api.service"


export default function MainComponent() {
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(()=> {
        gettingData()
    })

    const gettingData = async () => {
        // fetch('https://api.hatchways.io/assessment/students').then((response) => response.json())
        await ApiService.fetchData()
            .then(async (response) => {
                setData(response.students)
                setError(null)
            }).catch(err => {
                setError(err)
            })
    }
    return (
        <div>
            {(data) ? data.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.pic} alt='Demo pic'/>
                        <h3> {item.firstName + " " + item.lastName}</h3>
                        <p>Email: {item.email}</p>
                        <p>Company: {item.company}</p>
                        <p>Skill: {item.skill}</p>

                        <p>Average: {(item.grades).reduce((a, b) => parseInt(a) + parseInt(b), 0) / item.grades.length} %</p>
                    </div>
                )
            }) : <p>No data to Display</p>}
        </div>
    )
}