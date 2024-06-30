import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner'

const Catalogue = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5000/books')
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex p-4">
            <div className="w-full bg-white rounded-md">
                <div className="mx-8 my-8">
                    <span className="text-xl font-medium">Katalog</span>
                </div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="mx-8">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="grid sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-16 gap-y-8">
                                {books.map((book) => (
                                    <div key={book._id} className="grid grid-cols-1 content-between max-w-sm rounded-lg overflow-hidden shadow-lg">
                                        <img className="w-full h-60 object-cover" src={book.thumbnailUrl} alt="" />
                                        <div class="px-3">
                                            <div class="block font-bold text-base mb-2 text-gray-800">{book.title}</div>
                                            <p class="block text-gray-500 text-base font-medium">
                                                {book.authors[0]}
                                            </p>
                                        </div>
                                        <div className="rounded-md mx-2 my-1 px-3 py-2 text-sm font-medium text-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-200 ease-out">
                                            <Link to={`/books/${book._id}`}>
                                                Lebih Detail
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Catalogue;