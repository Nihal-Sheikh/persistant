import { useState , ChangeEvent} from "react"
function App() {
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState("")
    const [editing, setEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(-1)
    // const [usingTImer, setUsingTimer] = useState(false)
    // const [timerIndex, setTimerIndex] = useState(-1)
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setNewTask(e.target.value)
    }
    function addTask() {
        setTasks([...tasks, newTask])
        setNewTask("")
    }
    function deleteTask(index: number) {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }
    function toggleEditMode(index: number) {
        setEditIndex(index)
        setNewTask(`${index + 1}. ${tasks[index]}`)
        setEditing(!editing)
    }
    function editTask() {
        if (newTask && editIndex >= 0) 
        {
            const newTasks = [...tasks]
            let index:number = -1;
            let indexTemp:string;
            let lim:string = '';
            for (const c of newTask) {
                if (c === ".") {
                    indexTemp = newTask.slice(0, newTask.indexOf(c))
                    index = parseInt(indexTemp)
                    lim = c
                    break
                }
                
            }
            const finalTask = newTask.slice(newTask.indexOf(lim) + 1)
            let uIndex = editIndex
            if (index - 1 !== editIndex) {
                for (let i = editIndex; i < newTasks.length - 1; i++) {
                    newTasks[i] = newTasks[i + 1]
                }         
                for (let i = newTasks.length - 1; i > index - 1; i = i - 1) {
                    const temp = newTasks[i - 1]
                    newTasks[i-1] = newTasks[i]
                    newTasks[i] = temp          
                }
                uIndex = index - 1
            }
            newTasks[uIndex] = finalTask
            setTasks(newTasks)
            setNewTask("")
    }
    setEditing(false)
    }
    function moveTaskUp(index: number) {
        if (index > 0) {
            const newTasks = [...tasks]
            const temp = newTasks[index - 1]
            newTasks[index - 1] = newTasks[index]
            newTasks[index] = temp
            setTasks(newTasks)
        }
    }
    function moveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const newTasks = [...tasks]
            const temp = newTasks[index + 1]
            newTasks[index + 1] = newTasks[index]
            newTasks[index] = temp
            setTasks(newTasks)
        }
    }
    return <section>
        <h1 className="header">Discover to-do with persistant</h1>
        <p className="description">
            Utilizing a to-do list is an invaluable tool for organizing tasks and ensuring nothing is overlooked.
            Begin by entering tasks into the list, ensuring each is clearly defined and prioritized.
            Additionally, consider incorporating timers to help manage time effectively.
            This simple yet effective approach enhances productivity and helps individuals stay on track with their responsibilities.
        </p>
        <article className="setTask">
            <input className="inputForms" type="text" value={newTask} onKeyDown={e => e.key === "Enter" ? editing === true ? editTask() : addTask() : null} onChange={e => handleChange(e)} placeholder={editing ? `Edit Task ${editIndex + 1}` : "Add Task"} />
            <button className="inputForms" onClick={() => editing ? editTask() : addTask()}>{editing ? "Edit" : "Add"}</button>
        </article>
        <article id="list" className="listContainer">
            <ol>
                {
                tasks.map((task, index) =>
                 <li className={`listItems`} key={index}><span>{index + 1}. {task}</span>
                 <div>
                    <button type="button" onClick={() => deleteTask(index)}>.<i className="fa fa-trash"></i></button>
                    <button type="button" onClick={() => toggleEditMode(index)}>.<i className="fa fa-edit"></i></button>
                    <button type="button" onClick={() => moveTaskUp(index)}>.<i className="fa fa-chevron-up"></i></button>
                    <button type="button" onClick={() => moveTaskDown(index)}>.<i className="fa fa-chevron-down"></i></button></div></li>)
                }
            </ol>
        </article>
    </section>
}
export default App