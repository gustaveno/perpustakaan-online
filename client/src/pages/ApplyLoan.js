import React from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const ApplyLoan = () => {
    const { nomerid, idbuku, nik, tglpinjam, status } = useParams();
    const navigate = useNavigate();
    const handleLoan = () => {
        axios
            .post(`http://localhost:5000/loans/${nomerid}/${idbuku}/${nik}/${tglpinjam}/${status}`)
            .then(() => {
                navigate(`/loans`);
            })
            .catch((error) => {
                alert(`An error happened! ${error}`);
                console.log(error)
            });
    };

    return (
        <div className="px-20 py-4 rounded">
            <div className="flex max-h-screen flex-1 flex-col justify-center rounded-xl px-6 py-12 lg:px-8 bg-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Apakah Anda yakin mau meminjam buku?
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex flex-row gap-2">
                        <div className="basis-1/2">
                            <button
                                className="flex w-full justify-center rounded-md bg-white outline outline-1 px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-800 shadow-sm hover:bg-indigo-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Tidak
                            </button>
                        </div>
                        <div className="basis-1/2">
                            <button
                                onClick={handleLoan}
                                className="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyLoan;