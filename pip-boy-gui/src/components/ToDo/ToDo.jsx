import { useState } from 'react';

function ToDo(){

    const [data, setData] = useState([{ key: "0", name: "Eat a hot dog", description: "Eat a juicy hot dog", complete: false }, { key: "1", name: "Eat a hamburger", description: "Eat a juicy hamburger", complete: false }])
    const [formData, setFormData] = useState({})
    function markComplete(key) {
        let newdata = []
        for (let x = 0; x < data.length; x++) {
            if (data[x].key === key) {
                newdata.push({ key: data[x].key, name: data[x].name, description: data[x].description, complete: true })
            }
            else {
                newdata.push({ key: data[x].key, name: data[x].name, description: data[x].description, complete: data[x].complete })
            }
        }
        setData(newdata)
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let name = formData.name
        let description = formData.description
        setData([...data, { key: data.length, name: name, description: description, complete: false }])
        setFormData({})
    }
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>ToDo Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            required={true}
                        />
                    </label>
                    <label>Description:
                        <input
                            type="text"
                            name="description"
                            value={formData.description || ""}
                            onChange={handleChange}
                            required={true}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>
            <h1>To do list</h1>
            <ol>
                {data && data.map((item) => <div key={item.key}>{item.complete === false &&
                    <li >
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                        <button onClick={() => markComplete(item.key)}>Complete</button>
                    </li>}
                </div>)}
            </ol>
            <h1>Completed</h1>
            <ol>
                {data && data.map((item) => <div key={item.key}>{item.complete !== false &&
                    <li >
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                    </li>}
                </div>)}
            </ol>
            </div>
    )
}

export default ToDo;