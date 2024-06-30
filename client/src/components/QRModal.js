import React from "react";
import { AiOutlineClose } from 'react-icons/ai';

const QRModal = ({ src, onClose }) => {
    return (
        <div
            className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-800 cursor-pointer" onClick={onClose}
                />
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-xl font-medium">QR Code</h4>
                    <img src={src} className="w-[300px] h-[300px] mt-6" />
                </div>
            </div>
        </div>
    )
}

export default QRModal;