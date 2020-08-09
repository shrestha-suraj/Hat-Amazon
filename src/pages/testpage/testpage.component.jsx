import React,{useState} from 'react'
import './testpage.styles.scss'


const TestPage=props=>{

    const [data,changeData]=useState('')

    return(
        <div className="test-container">
            <input className="input" onChange={e=>changeData(e.target.value)}/>
            <label className={`label ${data.length?'shrink':''}`}>Username</label>
        </div>
    )
}

export default TestPage