import React from 'react'
import {NavLink} from "react-router-dom";

function Admin() {
    return <form>
            <input type="text" style={{display:"block"}}/> ID

            <input type="text" style={{display:"block"}}/> Description

            <input type="text" style={{display:"block"}}/> Image

            <input type="text" style={{display:"block"}}/> Stock
            <button><NavLink to='/'>Submit</NavLink></button>
        </form>

}

export default Admin;