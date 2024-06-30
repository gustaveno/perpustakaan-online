import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner'

const Home = () => {
    useEffect(() => {
        axios
            .get('http://localhost:5000/members')
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="bg-white">
            <div className="container items-center justify-center px-20 py-4">
                <div className="flex flex-auto content-center">
                    <div className="gap-8 columns-2 my-14">
                        <div className="flex-col space-y-8 my-14 ml-14 mr-8">
                            <p className="text-6xl font-semibold text-slate-900">Hai, Anggota!</p>
                            <p className="text-4xl font-semibold text-slate-900">Selamat Datang di Perpustakaan Eletronik</p>
                            <p className="text-xl font-semibold text-slate-900">Baca-Dengar-Pelajari-Ulangi</p>
                        </div>
                        <img className="object-cover h-300 w-300" src="https://img.freepik.com/premium-vector/woman-reading-book-sitting-stack-books-concept-flat-illustration_720185-2560.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home