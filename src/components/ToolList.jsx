import React, {useEffect, useState} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'

const ToolList = () => {
    const [list, setlist] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/tool/'/'")
        .then(res => {
            setlist(res.data.Tool)
        })
        .catch(err =>  console.log(err))
    },[])
    return(
        <div className="container mt-3">
            <div id="nav"></div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <button className="btn btn-secondary btn-m" onClick={() => navigate(`dashboard/new`)}>Post Item</button>
                </li>
            </ul>

            <h1 className="main_title">RentTool</h1>
                  
            <div className="search">
			<label className="search-label" htmlFor="search-input">
				<input
					type="text"
					name="query"
					id="search-input"
					placeholder="Search..."
				/>
				<i className="fa fa-search search-icon" aria-hidden="true"/>
			</label>
                <div className="col">

                </div>
            </div>
            <hr/>
        </div>

    )
}

export default ToolList;