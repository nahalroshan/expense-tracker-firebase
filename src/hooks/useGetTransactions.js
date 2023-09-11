import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
  QueryOrderByConstraint,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const transactionCollectionRef = collection(db, "transactions");
  const [transactionAmountTotal, setTransactionAmountTotal] = useState({
    totalBalance: 0.0,
    totalExpense: 0.0,
    totalIncome: 0.0,
  });
  const { userId } = useGetUserInfo();
  const getTransactions = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];

        let totalExpense = 0;
        let totalIncome = 0;
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });

          if (data.transactionType === "expense") {
            totalExpense += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }
        });
        setTransactions(docs);
        let totalBalance = totalIncome - totalExpense;
        setTransactionAmountTotal({
          totalBalance,
          totalExpense,
          totalIncome,
        });
      });
    } catch (error) {
      console.log(error);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions, transactionAmountTotal };
};
