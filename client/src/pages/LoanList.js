import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner'
import { BsInfoCircle } from 'react-icons/bs'

const LoanList = () => {
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5000/loans')
            .then((response) => {
                setLoans(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="w-full bg-white rounded-md">
                <div className="px-8 py-8">
                    <span className="text-xl font-medium">Daftar Pinjaman</span>
                    <div className="block py-8">
                        {loading ? (
                            <Spinner />
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {loans.map((loan) => (
                                    <Link to={`/loans/${loan.nomerid}`}>
                                        <div key={loan.nomerid} className="rounded-lg shadow-xl hover:shadow-inner hover:bg-gray-100/50 transition duration-150 ease-in-out">
                                            <div className="p-5 flex flex-col">
                                                <h5 className="text-lg font-medium mt-3">No. Pinjaman: {loan.nomerid}</h5>
                                                <h5 className="text-lg font-medium mt-3">Tgl. Pinjam: {loan.tglpinjam}</h5>
                                                <h5 className="text-lg font-medium mt-3 text-green-500 uppercase">{loan.status}</h5>    
                                            </div>
                                        </div>
                                    </Link>

                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanList;