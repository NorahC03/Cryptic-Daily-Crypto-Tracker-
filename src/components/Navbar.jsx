import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import icon from '../icon&images/cryptocurrency.png';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const { Item } = Menu;
function Navbar() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Title level={2} className='logo'>
          <Link to="/">Cryptic</Link>
        </Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu theme="dark">
        <Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Item>
        <Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item icon={<BulbOutlined />}>
          <Link to="/news">Trending News</Link>
        </Item>
      </Menu>



    </div>
  )
}

export default Navbar;