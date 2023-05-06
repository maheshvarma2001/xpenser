import { React } from "react";
import "./expense-list.css"
import Card from "./card";

const ExpenseList = () => {
    const list = [
    {
        title: "Made a purchase",
        logo: "djiii",
        createdAt: Date.now(),
        amount: 2033,
    },
    ];
    return (
        <div>
            {list.length ? list.map((item) => <Card item = {item}/>): <div>Not showing</div> }
        </div>
    );
};

export default ExpenseList;