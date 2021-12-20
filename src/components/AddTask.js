import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text) {
            alert('Add a new task before submitting!')
            return
        }
        onAdd({text,day,reminder})
        setText('') // clear the form back to null
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add new task' values={text} onChange={(e) => setText(e.target.value)}/>
            </div> 
            <div className="form-control">
                <label>Day & Time </label>
                <input type='text' placeholder='Add day & time' values={day} onChange={(e) => setDay(e.target.value)}/>
            </div> 
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>    
            <input type='submit' value='Save Task'
            className="btn btn-block"/>        
        </form>
    )
}

export default AddTask
