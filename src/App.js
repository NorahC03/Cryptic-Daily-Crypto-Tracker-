import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from "antd";
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News, Exchanges } from "./components"
import './App.css';
function App() {
    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='/exchange' element={<Exchanges />} />
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route path='/crypto/:cryptoId' element={<CryptoDetails />} />
                            <Route path='/news' element={<News />} />
                        </Routes>

                    </div>
                </Layout>

            </div>
            <div className="footer" >
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    Cryptic<br />
                    All rights reserved
                </Typography.Title>
                <Space >
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    <Link to='/cryptodetails'>Cryptodetails</Link>
                    <Link to='/news'>News</Link>
                </Space>

            </div>
        </>
    )
}

export default App; 