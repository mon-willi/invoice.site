import { useState,useEffect } from 'react';
import '../Pages/Pages.css';
import { GetApiInvoices } from '../services/service';
function JunInvoices() {
    const [Totals , setTotals] = useState([]);
    useEffect(() => {
        GetApiInvoices()
        .then((res) => (setTotals(res.data)))
        .catch((err) => (console.log(err.message)));
    },[]);
    return ( 
        <>
            <h1 className="container text-center bg-success text-white rounded w-25 py-2 fs-2 mt-4">
                June Invoices
            </h1>
            <table class="table container text-center mt-5">
                <thead>
                    <tr>
                        <th scope="col">Internal ID</th>
                        <th scope="col">Invoice Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Tax ID</th>
                        <th scope="col">Value</th>
                        <th scope="col">Vat</th>
                        <th scope="col">Wht</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Totals.map((ele, index) => (
                            ele.IssuerId === "100523196"  && ele.IssuanceDatetime.includes("2023-06") ? 
                            <tr>
                            <td key={index}>{ele.InternalID}</td>
                            <td key={index}>{ele.IssuanceDatetime}</td>
                            <td key={index}>{ele.RecevierName}</td>
                            <td key={index}>{ele.RecevierId}</td>
                            <td key={index}>{ele.TotalNetAmount}</td>
                            <td key={index}>{ele.TotalVAT}</td>
                            <td key={index}>{ele.TotalWHT}</td>
                            <td key={index}>{ele.TotalInvoiceAmount}</td>
                        </tr> : ""
                        ))
                    }
                </tbody>
            </table>
        </>
     );
}

export default JunInvoices;