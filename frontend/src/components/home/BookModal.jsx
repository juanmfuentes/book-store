import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faBookOpen, faUserCircle } from "@fortawesome/free-solid-svg-icons";


const BookModal = ({ book, onClose }) => {
    return (
        <div
            className='fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full bg-white rounded-xl p-4 flex flex-col relative'>
                <FontAwesomeIcon icon={faTimesCircle}
                    className='absolute right-6 top-4 text-3xl text-red-400 cursor-pointer'
                    onClick={onClose} />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
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
                <p className="mt-4 text-gray-500">Synopsis</p>
                <p className="my-2">{book.synopsis || "No synopsis available"}</p>
            </div>
        </div>
    );
};

export default BookModal;