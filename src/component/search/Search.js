import React from 'react'

export const Search = ({placeholder, onChange}) => {
    return(
        <div>
        <input type="search"
            className='search'
            placeholder={placeholder}
            onChange={onChange}
        />
        </div>
    )
}