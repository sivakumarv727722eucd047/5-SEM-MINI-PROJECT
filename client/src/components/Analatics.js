import { Progress } from "antd";
import React from "react";
import "../resources/analatics.css";

function Analatics({ transactions }) {
 
  const totalTransactions = transactions.length;

  const totalIncomeTransactions = transactions.filter(transaction => transaction.type === "income");
  const totalExpenseTransactions = transactions.filter(transaction => transaction.type === "expense");
 
  const totalIncomeTransactionsPercentage = totalTransactions === 0 ? 0 : (totalIncomeTransactions.length / totalTransactions) * 100;
  const totalExpenseTransactionsPercentage =
    totalTransactions === 0
      ? 0
      : (totalExpenseTransactions.length / totalTransactions) * 100;



  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);


      const totalExpenseTurnover = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    console.log(totalExpenseTurnover);

    

  

  const categories = [
    "charity",
    "education",
    "entertainment",
    "food",
    "freelance",
    "fuel",
    "gifts",
    "groceries",
    "healthcare",
    "insurance",
    "investments",
    "rent",
    "salary",
    "savings",
    "shopping",
    "subscriptions",
    "taxes",
    "transportation",
    "travel",
    "utilities",
    "Other"
  ];

  return (
    <div className="analytics">
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="transactions-count">
            <h4>Total Transactions: {totalTransactions}</h4>
            <hr />
            <h5>Income: {totalIncomeTransactions.length}</h5>
            <h5>Expense: {totalExpenseTransactions.length}</h5>

            <div className="progress-bars">
              <div className="progress-bar-wrapper">
                <Progress
                  className="progress-income"
                  strokeColor="#1EBDC4"
                  type="circle"
                  percent={totalIncomeTransactionsPercentage.toFixed(0)}
                />
              </div>
              <div className="progress-bar-wrapper">
                <Progress
                  className="progress-expense"
                  strokeColor="#FF7777"
                  type="circle"
                  percent={totalExpenseTransactionsPercentage.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>


    

      </div>

      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Income - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter(
                  (t) => t.type === "income" && t.category === category
                )
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card" key={category}>
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#78ABA8"
                      percent={totalIncomeTurnover === 0 ? 0 : ((amount / totalIncomeTurnover) * 100).toFixed(0)}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Expense - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter(
                  (t) => t.type === "expense" && t.category === category
                )
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card" key={category}>
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#EF9C66"
                      percent={totalExpenseTurnover === 0 ? 0 : ((amount / totalExpenseTurnover) * 100).toFixed(0)}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analatics;





