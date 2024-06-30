import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import QRModal from "../components/QRModal";

const LoanDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [loans, setLoans] = useState([]);
    const [src, setSrc] = useState('')
    const { nomerid } = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:5000/loans/${nomerid}`)
            .then((response) => {
                setLoans(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${nomerid}`;

    return (
        <div className="p-4">
            <div className="w-full bg-white rounded-md">
                <div className="px-8 py-8">
                    <span className="text-xl font-medium">Detail Pinjaman</span>
                    <div className="block py-6">
                        <div class="relative overflow-x-auto px-8">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-900">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            No. Pinjaman
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            No. Buku
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            ID Peminjam
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Tanggal Pinjam
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            QR Code
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {loans.nomerid}
                                        </th>
                                        <td class="px-6 py-4">
                                            {loans.idbuku}
                                        </td>
                                        <td class="px-6 py-4">
                                            {loans.nik}
                                        </td>
                                        <td class="px-6 py-4">
                                            {loans.tglpinjam}
                                        </td>
                                        <td class="px-6 py-4">
                                            {loans.status}
                                        </td>
                                        <td class="px-6 py-4">
                                            <button onClick={() => setShowModal(true)}>Tekan untuk melihat</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal && (
                    <QRModal src={url} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    )
}

export default LoanDetail;