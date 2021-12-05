
import './App.css';
import {Button} from 'antd'
import { Form, Input} from 'antd';
//eslint-disable-next-line
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  //eslint-disable-next-line
  const [data, setData] = useState({});
  const api_key = "9e3abdb4cc801db426aacad893282af0";
  
  const getData = async (city) => {
    const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
    console.log(response);
  }
  function SubmitHandler(e) {
    setInput(e.username.trim());
    getData(input);
  }
  return (
    
    <div className="App">
      <Form onFinish={SubmitHandler}>
        <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input the City!' }]}
      >
        <Input placeholder="Username" value="test"/>

      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            
          >
            Log in
          </Button>
        )}
      </Form.Item>
      </Form>
    </div>
  );
}

export default App;
