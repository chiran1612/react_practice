import '@picocss/pico'
import TaskItem from './TaskItem'
export default function TaskList({ tasks, title }) {
    return (
        <article style={{ textAlign: 'left' }}>
            <h1>{title}</h1>
            {tasks === null || tasks.length === 0 ? (
                <p>No Task yet</p>
            ) : (
                <ul>
                    {tasks.map((t) => (
                        <TaskItem key={t} task={t} />
                    ))}
                </ul>
            )}
        </article>
    )
}
