import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";


const BackButton = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link
                to={destination}
                className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
            >
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Link>
        </div>
    )
}

export default BackButton