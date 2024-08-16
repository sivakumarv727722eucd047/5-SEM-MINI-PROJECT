import React, { useState } from "react";
import { Modal, Form, Input, Select, message } from "antd";
import Spinner from "./Spinner";
import axios from "axios";

function AddEditTransaction({
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  getTransactions
}) {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("expensetracker-dev-user"));
      setLoading(true);
      await axios.post("/api/transactions/add-transaction", {
        ...values,
        userid: user._id,
      });
      getTransactions();
      message.success("Transaction added successfully");
      setLoading(false);
      setShowAddEditTransactionModal(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Add Transaction"
      open={showAddEditTransactionModal}
      onCancel={() => setShowAddEditTransactionModal(false)}
      footer={false}
    >
      {loading && <Spinner />}
      <Form
        layout="vertical"
        className="transaction-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Amount" name="amount">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="Type" name="type">
          <Select>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expense">Expense</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select>
          <Select.Option value="charity">Charity</Select.Option>
          <Select.Option value="education">Education</Select.Option>
          <Select.Option value="entertainment">Entertainment</Select.Option>
          <Select.Option value="food">Food</Select.Option>
          <Select.Option value="freelance">Freelance</Select.Option>
          <Select.Option value="fuel">Fuel</Select.Option>
          <Select.Option value="gifts">Gifts</Select.Option>
          <Select.Option value="groceries">Groceries</Select.Option>
          <Select.Option value="healthcare">Healthcare</Select.Option>
          <Select.Option value="insurance">Insurance</Select.Option>
          <Select.Option value="investments">Investments</Select.Option>
          <Select.Option value="rent">Rent</Select.Option>
          <Select.Option value="salary">Salary</Select.Option>
          <Select.Option value="savings">Savings</Select.Option>
          <Select.Option value="shopping">Shopping</Select.Option>
          <Select.Option value="subscriptions">Subscriptions</Select.Option>
          <Select.Option value="taxes">Taxes</Select.Option>
          <Select.Option value="transportation">Transportation</Select.Option>
          <Select.Option value="travel">Travel</Select.Option>
          <Select.Option value="utilities">Utilities</Select.Option>
          <Select.Option value="other">Other</Select.Option>
          
          
            
          </Select>
        </Form.Item>

        <Form.Item label="Date" name="date">
          <Input type="date" />
        </Form.Item>
        <Form.Item label="Reference" name="reference">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input type="text" />
        </Form.Item>

        <div className="d-flex justify-content-end">
          <button className="primary" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddEditTransaction;
