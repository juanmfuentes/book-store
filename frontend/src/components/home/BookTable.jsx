import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/fontawesome-free-regular";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const BookTable = ({ books }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                    <th className='border border-slate-600 rounded-md'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {book.title}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {book.author}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {book.publishYear}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className="flex justify-center gap-x-4">
                                <Link to={`/books/details/${book._id}`}>
                                    <FontAwesomeIcon icon={faInfoCircle}
                                        className="text-xl text-orange-300 transition delay-50 hover:text-black cursor-pointer" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <FontAwesomeIcon icon={faEdit}
                                        className="text-xl text-green-500 transition delay-50 hover:text-black cursor-pointer" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <FontAwesomeIcon icon={faTrash}
                                        className="text-xl text-red-400 transition delay-50 hover:text-black cursor-pointer" />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BookTable