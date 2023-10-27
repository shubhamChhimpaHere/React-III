import { useState } from "react"

export default function PageStrip({ totalRes, page, setPage }) {

 
    return <>
    <div id="page-strip">

    <button onClick={() => setPage(page - 1)} disabled = {page === 1 }>Prev</button>
    <span className="page-number"> {page}</span>
   
    <button onClick={() => setPage(page + 1)} disabled = {totalRes < 5}>Last</button>
    </div>
    </>
}