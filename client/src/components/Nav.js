import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'

const Nav = () => {
    return (
        <nav class="bg-white">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-20 items-center justify-between pl-10 pr-2">
                    <img className="object-cover h-7 w-32" src={logo} />
                    <div class="flex flex-initial items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-blue-950 hover:bg-blue-950 hover:text-white" aria-current="page">Beranda</a>
                                <a href="/books" class="rounded-md px-3 py-2 text-sm font-medium text-blue-950 hover:bg-blue-950 hover:text-white">Katalog</a>
                                <a href="/loans" class="rounded-md px-3 py-2 text-sm font-medium text-blue-950 hover:bg-blue-950 hover:text-white">Pinjaman</a>
                                <a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-blue-950 hover:bg-blue-950 hover:text-white">Tentang Kami</a>
                            </div>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">View notifications</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <div class="relative ml-3">
                            <div>
                                <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full" src="https://i.pinimg.com/236x/f5/6b/ae/f56baef86aed6c261c422402aab59065.jpg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;