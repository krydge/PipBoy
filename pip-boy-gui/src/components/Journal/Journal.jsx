import './JournalStyle.css'
import { useState } from 'react'

function Journal() {
    const [formData, setFormData] = useState({})
    const [journals, setJournals] = useState([])
    console.log(journals)
    const handleFormChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setFormData(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        let date = cDay + "/" + cMonth + "/" + cYear
        journals.push({ "date": date, formData })
        setJournals(journals)
        setFormData({})
    }
    return (
        <div className="Journal">
            <div>
                <form>
                    <label> What did you do today?
                        <textarea type="text" name="today" value={formData.today || ""} onChange={handleFormChange}></textarea>
                    </label>
                    <label> What did you Learn today?
                        <textarea type="text" name="learn" value={formData.learn || ""} onChange={handleFormChange}></textarea>
                    </label>
                    <label> What good thing did you do today?
                        <textarea type="text" name="good" value={formData.good || ""} onChange={handleFormChange}></textarea>
                    </label>
                    <label> How can I be Better tomorrow?
                        <textarea type="text" name="better" value={formData.better || ""} onChange={handleFormChange}></textarea>
                    </label>
                    <button onClick={handleSubmit}>Finalize Day</button>
                </form>
            </div>
            {journals &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {journals.map((journal) =>
                                <tr key = {journal.date}>
                                    <td>{journal.date}</td></tr>)}

                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Journal;