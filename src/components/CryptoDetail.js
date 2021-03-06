// //Core Imports
// import React, { useState, useEffect } from 'react';
// import HTMLReactParser from 'html-react-parser';
// import { useParams } from 'react-router-dom';
// import { useGetCryptoDetailsQuery } from '../Services/ApiService';
// //Style Imports
// import millify from 'millify';
// import { Col, Row, Typography, Select } from 'antd';
// import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
// const { Text, Title } = Typography;
// const { Option } = Select;
// //

// function CryptoDetails() {
//     const { cryptoId } = useParams();
//     const [timeperiod, setTimeperiod] = useState('7D');
//     const { data, isFetching } = useGetCryptoDetailsQuery(cryptoId);
//     const cryptoDetails = data?.data?.coin;
//     const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];
//     if (isFetching) {
//         console.log('Loading....')
//     }
//     // // const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

//     const stats = [
//         { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
//         { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
//         { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
//         { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
//         { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
//     ];

//     const genericStats = [
//         { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
//         { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
//         { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
//         { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
//         { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
//     ];

//     console.log(cryptoDetails);
//     return (


//         // <Col className='coin-detail-container'>
//         //     <Col className='coin-heading-container'>
//         //         <Title level={2} className='coin-heading'>
//         //             {cryptoDetails.name}({cryptoDetails.symbol})(Price ${millify(cryptoDetails.price)})
//         //         </Title>
//         //         <p>
//         //             {cryptoDetails.name} live price in USA.View value statistics,market cap and much more
//         //         </p>
//         //     </Col>
//         //     {/* <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
//         //         {time.map((date) => <Option key={date}>{date}</Option>)}
//         //     </Select> */}
//         // </Col>
//         <>
//             <div>{cryptoId}</div>
//         </>


//     )
// }
// export default CryptoDetails;
import React, { useState, useEffect } from 'react';
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../Services/ApiService';
const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {

    const { cryptoId } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(cryptoId);
    const cryptoDetail = data?.data?.coin;
    const [detail, setDetail] = useState("");

    useEffect(() => {
        setDetail(data?.data?.coin);
    }, [])
    console.log(detail);
    return (
        <>
            <div>
                <Col className="coin-details-container">
                    <Col className="coin-heading-container">
                        <Title level={2} className="coin-heading">{detail.name}</Title>
                        <p> {detail.name} live price in USA.View value statistics,market cap and much more</p>
                    </Col>
                </Col>
            </div>
        </>
    )
}
export default CryptoDetails;

