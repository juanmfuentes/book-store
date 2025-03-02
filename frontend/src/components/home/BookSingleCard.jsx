import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookModal from './BookModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faUserCircle } from "@fortawesome/fontawesome-free-regular";
import { faInfoCircle, faTrash, faBookOpen } from "@fortawesome/free-solid-svg-icons";


const BookSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={book._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <FontAwesomeIcon icon={faBookOpen} className="text-red-200" />
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <FontAwesomeIcon icon={faUserCircle} className='text-xl text-red-200' />
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-between items-center-gap-x-2 mt-4 p-4">
                <FontAwesomeIcon icon={faEye}
                    className="text-2xl text-blue-500 transition delay-50 hover:text-black cursor-pointer"
                    onClick={() => setShowModal(true)} />
                <Link to={`/books/details/${book._id}`}>
                    <FontAwesomeIcon icon={faInfoCircle}
                        className="text-2xl text-orange-300 transition delay-50 hover:text-black cursor-pointer" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <FontAwesomeIcon icon={faEdit}
                        className="text-2xl text-green-500 transition delay-50 hover:text-black cursor-pointer" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <FontAwesomeIcon icon={faTrash}
                        className="text-2xl text-red-400 transition delay-50 hover:text-black cursor-pointer" />
                </Link>
            </div>
            {
                showModal && (
                    <BookModal book={book} onClose={() => setShowModal(false)} />
                )}
        </div>
    )
}

export default BookSingleCard