import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Input, Select } from 'antd';
import { useGetCryptoQuery } from '../Services/ApiService';
const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data, isFetching } = useGetCryptoQuery(count);
    const [crypto, Setcrypto] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const filteredResult = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        Setcrypto(filteredResult);
    }, [data, searchTerm])
    if (isFetching) {
        return 'Loading....';
    }
    return (
        <>
            {/* <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Enter coin to search"
                    >

                    </Select>
                </Col>

            </Row> */}

            <div className={simplified ? "" : "crypto-overflow"}>
                {!simplified && (
                    <div className='search-crypto'>
                        <Input placeholder="Search Cryptocurrency" enterbutton="Search" allowClear onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                )}

                <Row gutter={[32, 32]} className='crypto-card-container'>
                    {crypto?.map((currency) => <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl} alt={currency.name}>
                                </img>}
                                hoverable
                            >
                                <p>Price:{millify(currency.price)}</p>
                                <p>Market Cap:{millify(currency.marketCap)}</p>
                                <p>Daily Change:{millify(currency.change)}</p>
                            </Card>
                        </Link>

                    </Col>)}



                </Row>

            </div >
        </>
    )
}

export default Cryptocurrencies;