import React from "react";
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';


const columns = [{
    dataField: 'id',
    text: 'Order ID'
}, {
    dataField: 'itm_name',
    text: 'Item Name'
}, {
    dataField: 'qty',
    text: 'Qty'
},
{
    dataField: 'total',
    text: 'Total'
},
{
    dataField: 'address',
    text: 'Address'
},
{
    dataField: 'contact',
    text: 'Contact'
},
{
    dataField: 'date',
    text: 'Date'
},
];

function Order() {
    const [data, setData] = React.useState(null);



    const getData = () => {
        axios
            .get("http://localhost:5000/orders")
            .then((response) => {
                var dt = response.data.message

                setData( dt );

            });
    }
    console.log(data)
    if (data == null) {
        getData();
    }

    return (
        <div style={{ paddingTop: "160px", width: "100%" }}>
            {data==null? <div></div>:  <BootstrapTable keyField='id' data={data} columns={columns} />}

        </div>
    );
}

export default Order;


