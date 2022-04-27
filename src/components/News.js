import React, { useState, useEffect } from 'react'
import millify from 'millify';
import moment from 'moment';
import { useGetCryptoQuery } from '../Services/ApiService';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../Services/NewsApiService';

const { Text, Title } = Typography;
const { Option } = Select;


const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const News = ({ simplified }) => {
    const [Category, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: Category, count: simplified ? 7 : 15 });

    const { data } = useGetCryptoQuery(100);
    //console.log(data?.data?.coins);

    if (!cryptoNews?.value) {
        return 'Loading....!';
    }
    // style={{ maxwidth: '200px', maxheight: '100px' }}
    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        {/* <Select
                            showSearch
                            className="select-news"
                            placeholder="Select news category"
                            optionFilterProp='children'
                            onChange={(value) => setNewsCategory(value)
                            }
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Cryptocurrency">Cryptocurrencies</Option>
                            {data?.data?.coins.map((coin) =>
                                <Option value={coin.name}>{coin.name}</Option>
                            )}
                            
                        </Select> */}
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            {/* {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)} */}
                        </Select>
                    </Col>
                )}
            </Row>
            <div className={simplified ? "" : "crypto-overflow"}>
                <Row gutter={[16, 16]}>
                    {cryptoNews.value?.map((news, i) =>
                        <Col xs={24} sm={12} lg={8} key={i}>
                            <Card hoverable className="news-card">
                                <a href={news.url} target="blank" rel="noreferrer">
                                    <div className="news-image-container">
                                        <Title className="news-title" level={4}>{news.name}</Title>
                                        <img style={{ maxwidth: '100px', maxheight: '50px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt=""></img>
                                    </div>
                                    {/* <p>
                                        {news.description > 100 ?
                                            `${news.description.substring(0, 20)}...` : news.description}
                                    </p> */}
                                    <div className='provider-container'>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                        <span className="provider-name">{news.provider[0]?.name}</span>
                                    </div>
                                    <Text >{moment(news.datePublished).startOf('ss').fromNow()}
                                    </Text>

                                </a>
                            </Card>
                        </Col>
                    )
                    }
                </Row>

            </div>
        </>


    )
}


export default News;