import React from 'react';

const OrderListInfo = (props) => {
    const { name, service, email } = props.serviceInfo;

    return (
                <tr className="bg-white" style={{textAlign: "justify"}}>
                    <th className="text-secondary" scope="col"><small>{name}</small></th>
                    <th className="text-secondary" scope="col"><small>{email}</small></th>
                    <th className="text-secondary" scope="col"><small>{service}</small></th>
                    <th className="text-secondary" scope="col">Pay With</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
    );
};

export default OrderListInfo;