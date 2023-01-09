import { useState } from "react";

function ATM() {
    const [balance, setBalance] = useState(0.00)
    const [formData, setFormData] = useState({})
    const [explist, setList] = useState([])
    console.log(explist)
    const handleChange = (event) => {
        event.preventDefault();
        const number = event.target.name;
        const value = event.target.value;
        console.log(value)
        if (value !== null) {
            setFormData(values => ({ ...values, [number]: value }))
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle submit")
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime;
        console.log(dateTime);
        const mult = event.target.value;
        let change = 0;
        console.log(formData.number)
        if (formData.number === undefined) {
            console.log("is NaN")
            change = balance + (0 * mult)
        }
        else {
            console.log("push")
            change = balance + (formData.number * mult)
            explist.push({ "amount": (formData.number * mult), "balance": change, "description": formData.description, "date": dateTime })
            setList(explist)
        }
        setBalance(change)

    }
    return (
        <div>
            <div>
                <h1>Your current balance is:</h1>
                <h2>{balance}$</h2>
            </div>
            <div>
                <form>
                    <label>Amount
                        <input type="number"
                            name="number"
                            value={formData.number || ""}
                            onChange={handleChange}
                            required={true}
                        >
                        </input>
                    </label>
                    <label>Description
                        <input type="text"
                            name="description"
                            value={formData.description || ""}
                            onChange={handleChange}
                            required={true}
                        >
                        </input>
                    </label>
                    <button value={1} onClick={handleSubmit}>IN</button>
                    <button value={-1} onClick={handleSubmit}>OUT</button>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th><th>Description</th><th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {explist && explist.length > 0 &&
                            explist.map((item) => <tr>
                                <td>{item.amount}</td>
                                <td>{item.description}</td>
                                <td>{item.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ATM;