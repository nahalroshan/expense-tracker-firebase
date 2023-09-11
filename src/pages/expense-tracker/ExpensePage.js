import React, { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import Navbar from "../../components/Navbar";
import bgimage from "../../Images/bg.png";
function ExpensePage() {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionAmountTotal } = useGetTransactions();
  const { name, photoUrl, userId, isAuth } = useGetUserInfo();
  const { totalBalance, totalExpense, totalIncome } = transactionAmountTotal;
  const backgroundImageStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover", // You can adjust the background size as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
    alert("Details Added Successfully");
    setDescription("");
    setTransactionAmount("");
  };

  return (
    <>
      <div class="    bg-slate-100 ">
        <Navbar />
        <div class="">
          <div class="md:flex md:flex-row mt-20">
          <h1 class="md:font-serif md:ml-20 md:mt-28 text-6xl font-bold" >
              Track Your Expenses<br></br> Here!!
            </h1>
            <div class="  ml-20 mt-10 md:w-full md:ml-28 max-w-xs">
              <form
                onSubmit={onSubmit}
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Description
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Amount(Rs)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    placeholder="₹"
                    value={transactionAmount}
                    onChange={(e) => {
                      setTransactionAmount(e.target.value);
                    }}
                  />
                </div>

                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="expense"
                    checked={transactionType === "expense"}
                    onChange={(e) => {
                      setTransactionType(e.target.value);
                    }}
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Expense
                  </label>
                </div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="income"
                    checked={transactionType === "income"}
                    onChange={(e) => {
                      setTransactionType(e.target.value);
                    }}
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                  >
                    Income
                  </label>
                </div>

                <div class="flex items-center justify-center">
                  <button
                    class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={onSubmit}
                  >
                    Add Amount
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>

        <div class=" flex flex-col md:flex md:flex-row md:justify-evenly  md:items-center">
          <div class="flex flex-col">
            <div class="md:w-72  m-10 h-96 max-w-sm p-4  rounded-lg shadow sm:p-8 bg-gradient-to-r from-red-300 to-gray-600 ">
              <h5 class="mb-1 text-xl font-medium text-gray-500 dark:text-gray-200">
                Balance
              </h5>
              <div class="flex ml-2 items-baseline text-gray-900 dark:text-white">
                <span class="text-5xl font-extrabold tracking-tight">
                  {totalBalance < 0 ? (
                    <div class="flex ml-4 items-baseline text-gray-900 dark:text-white">
                      <span class="text-3xl font-semibold">- ₹</span>
                      <span class="text-5xl font-extrabold tracking-tight">
                        {totalBalance * -1}
                      </span>
                    </div>
                  ) : (
                    <div class="flex ml-4 items-baseline text-gray-900 dark:text-white">
                      <span class="text-3xl font-semibold">₹</span>
                      <span class="text-5xl font-extrabold tracking-tight">
                        {totalBalance}
                      </span>
                    </div>
                  )}
                </span>
              </div>
              <h5 class="mb-1  mt-8 text-xl font-medium text-gray-500 dark:text-gray-200">
                Income
              </h5>
              <div class="flex ml-6 items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">₹</span>
                <span class="text-5xl font-extrabold tracking-tight">
                  {totalIncome}
                </span>
              </div>
              <h5 class="mb-1 mt-8 text-xl font-medium text-gray-500 dark:text-gray-200">
                Expense
              </h5>
              <div class="flex ml-6 items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">₹</span>
                <span class="text-5xl font-extrabold tracking-tight">
                  {totalExpense}
                </span>
              </div>
            </div>
          </div>

          <div class="  w-96  md:w-full m-10 h-96  max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="max-h-96 p-4 sm:p-8">
              <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  {name}'s Payment History
                </h5>
              </div>
              <div class=" overflow-auto h-60 flow-root">
                <ul
                  role="list"
                  class="divide-y m-4 divide-gray-200 dark:divide-gray-700"
                >
                  {transactions.map((transaction) => {
                    return (
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src={photoUrl}
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {transaction.description}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                              {transaction.transactionType}
                            </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {transaction.transactionType === "expense"
                              ? `-₹${transaction.transactionAmount}`
                              : `+₹${transaction.transactionAmount}`}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpensePage;
