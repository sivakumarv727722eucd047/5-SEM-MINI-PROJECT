import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import '../resources/authentication.css';
import axios from 'axios';
import Spinner from "../components/Spinner";

function Register() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post('/api/users/register', values);
      message.success('Registration Successful');
      setLoading(false);
      navigate("/login");
    } catch (error) {
      message.error('Something went wrong');
      setLoading(false);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("expensetracker-dev-user")) {
      navigate("/");
    }
  });

  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <dotlottie-player
              src="https://lottie.host/1822f7e0-6502-45dc-938b-c43d7ded1e5e/tpnajSHRCh.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>

        <div className="col-md-3">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>
              <Link to="/" className="lumin-link">Lumin</Link> / SIGNUP
            </h1>
            <hr />
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login" className="no-underline">
                <div className="Already-Registered">Already Registered, Click Here to Login </div>
              </Link>
              <button className="primary" type="submit">REGISTER</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
