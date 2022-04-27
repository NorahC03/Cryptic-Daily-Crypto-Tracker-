import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptoQuery } from '../Services/ApiService';
import { Cryptocurrencies, News } from './index.js'
const { Title } = Typography;
function Homepage() {
    const { data, isFetching } = useGetCryptoQuery(10);

    //console.log(data);
    const globalStats = data?.data?.stats;
    if (isFetching) {
        return ('Loading ....');
    }
    // console.log(globalStats);

    // const { total24hVolume, totalMarketCap, totalMarkets, totalExchanges, totalCoins } = globalStats;
    return (
        <div className="homepage">
            <Title level={2} className="heading">Global Crypto Stats </Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title='Total 24hr Volume ' value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title='Total Market' value={millify(globalStats.totalMarkets)} /></Col>
            </Row>

            <div className='home-heading-container'>
                <Title level={3} className='home-title'>Top 10 Cryptocurrencies by Market Cap</Title>

                <Title level={4} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className='home-heading-container'>
                <Title level={3} className='home-title'>Top Cryptocurrencies News</Title>
                <Title level={4} className='show-more'><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified />

        </div>
    )
}

export default Homepage;