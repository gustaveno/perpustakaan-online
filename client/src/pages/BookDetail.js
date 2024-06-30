import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Spinner from '../components/Spinner'

const Catalogue = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5000/books/${id}`)
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    const idbuku = `${id}`;
    const nik = "1122335708900001";
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}${month}${day}`;

    const status = "aktif";
    const nomerid = `${currentDate}${nik}${id}`;

    return (
        <div className="min-h-screen flex p-4">
            <div className="w-full bg-white rounded-md">
                <div className="flex space-x-8 items-center justify-center mx-8 my-14">
                    <div className="box w-1/2">
                        <img className="w-72 object-cover" src={books.thumbnailUrl} alt="" />
                    </div>
                    <div className="box w-1/2">
                        <span className="text-4xl font-semibold">{books.title}</span>
                        <span className="text-base font-semibold block text-blue-950">by {books.authors}</span>
                        <span className="text-sm font-normal block py-4 text-slate-700">{books.longDescription}</span>
                        <Link to={`/loans/${nomerid}/${idbuku}/${nik}/${currentDate}/${status}`}>
                            <button className="bg-blue-950 text-white rounded-full text-sm px-6 py-3 uppercase tracking-widest outline outline-2 hover:bg-white hover:text-blue-950">Pinjam Sekarang</button>
                        </Link>
                    </div>
                </div>

                <div class="relative overflow-x-auto px-8">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-900">
                        <thead>
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ISBN
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Publish
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kategori
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {books.isbn}
                                </th>
                                <td class="px-6 py-4">
                                    {books.publishedDate}
                                </td>
                                <td class="px-6 py-4">
                                    {books.categories}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Catalogue;