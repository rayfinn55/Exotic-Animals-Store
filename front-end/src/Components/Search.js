import React, { useState, useEffect } from 'react'


export default function Search({ handleChange, handleSubmit }) {


    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="">Amount of potential pets in result: </label>
            <input onChange={handleChange} type="number" />
            <input type="submit" value="Submit" />
        </form>
    )
}
