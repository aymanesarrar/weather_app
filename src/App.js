
import './App.css';
import {Button, Form, Input, Layout, Typography} from 'antd'
import Card from './Card';
import {TiWeatherStormy} from 'react-icons/ti';
//eslint-disable-next-line
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const { Header, Footer, Content } = Layout;
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [setter, setSetter] = useState(false);
  //eslint-disable-next-line
  const [data, setData] = useState(null);
  const api_key = "9e3abdb4cc801db426aacad893282af0";

 function getTime(unix_timestamp) {
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`);
        setData(result.data);
        console.log(result.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [setter])
  function SubmitHandler(e) {
    setInput(e.username.trim());
    setSetter(true);
  }
  function get_city(e) {
    setInput(e.target.value);
  }
  return (
    <div className="layout">
    <Layout>
      <Header className="Header__content">
        <div className="Header__title">
          
          <h1 className="title"><TiWeatherStormy/> Weather App</h1>
        </div>
      <Form onFinish={SubmitHandler} className="Form__content">
         <Form.Item
         name="username"
         rules={[{ required: true, message: 'Please input the City!' }]}
       >
         <Input placeholder="City" className="input" onChange={get_city}/>

       </Form.Item>
       <Form.Item shouldUpdate>
         {() => (
           <Button
             type="primary"
             htmlType="submit"
             disabled={input ? false : true}
           >
             Search
           </Button>
         )}
       </Form.Item>
       </Form>
      </Header>
      <Content className="Main__content">
        {data && <Card wind={data && data.wind.speed} name={data && data.name} temperature={data && Math.round(data.main.temp-273.15)} weather_description={data && data.weather[0].description} sunrise={data && getTime(data.sys.sunrise)} sunset={data && getTime(data.sys.sunset)}/>}
        {!data && <Typography.Title level={2} className="error" style={{color: "white"}}>{error}</Typography.Title>}
      </Content>
      <Footer className="Footer__content">
          <Typography.Title level={4} style={{color: "white"}}>LOREMMMMMMMMMMMMMMMM</Typography.Title>
      </Footer>
    </Layout>
    </div>
  );
}

export default App;
