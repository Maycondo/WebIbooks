/* eslint-disable react/no-unknown-property */

import './style.css'





export default function Loader() {
    return (
        <div className="Painel">
            <div className="loader">
                <div className="book-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 126 75" className="book">
                    <rect stroke-width="5" stroke="#CD853F" rx="7.5" height="70" width="121" y="2.5" x="2.5"></rect>
                    <line stroke-width="5" stroke="#CD853F" y2="75" x2="63.5" x1="63.5"></line>
                        <path stroke-linecap="round" stroke-width="4" stroke="#c18949" d="M25 20H50"></path>
                        <path stroke-linecap="round" stroke-width="4" stroke="#c18949" d="M101 20H76"></path>
                        <path stroke-linecap="round" stroke-width="4" stroke="#c18949" d="M16 30L50 30"></path>
                        <path stroke-linecap="round" stroke-width="4" stroke="#c18949" d="M110 30L76 30"></path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff74" viewBox="0 0 65 75" className="book-page" >
                        <path stroke-linecap="round" stroke-width="4" stroke="#c18949" d="M40 20H15"></path>
                        <path stroke-linecap="round" stroke-width="4" stroke="#c18949" d="M49 30L15 30"></path>
                        <path stroke-width="5" stroke="#CD853F" d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"></path>
                    </svg>
                </div>
            </div>
        </div>

    )
}

