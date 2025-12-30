import { useState } from "react";
import { Plus, MoreVertical, Clock, X, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const INITIAL_TASKS = [
    { id: "1", title: "Design Landing Page", status: "todo", priority: "High", date: "Dec 30" },
    { id: "2", title: "Fix Navbar Bug", status: "in-progress", priority: "Medium", date: "Dec 31" },
    { id: "3", title: "Client Meeting", status: "done", priority: "Low", date: "Dec 28" },
    { id: "4", title: "API Integration", status: "todo", priority: "High", date: "Jan 02" },
];

function Tasks() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({ title: "", priority: "Medium" });

    const columns = [
        { id: "todo", title: "To Do", color: "bg-gray-400" },
        { id: "in-progress", title: "In Progress", color: "bg-indigo-500" },
        { id: "done", title: "Completed", color: "bg-emerald-500" },
    ];

    // Handle Drag and Drop Logic
    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const updatedTasks = Array.from(tasks);
        const taskIndex = updatedTasks.findIndex(t => t.id === draggableId);
        const [removed] = updatedTasks.splice(taskIndex, 1);
        
        // Update the status of the task to the new column ID
        removed.status = destination.droppableId;
        
        // Re-insert task (Note: simple implementation inserts at end of filtered list logic)
        updatedTasks.push(removed);
        setTasks(updatedTasks);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!newTask.title.trim()) return;

        const taskObject = {
            id: Date.now().toString(),
            title: newTask.title,
            status: "todo",
            priority: newTask.priority,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        };

        setTasks([...tasks, taskObject]);
        setNewTask({ title: "", priority: "Medium" });
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-6 relative">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Task Board</h2>
                    <p className="text-gray-500 text-sm">Manage and track your team tasks</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md active:scale-95"
                >
                    <Plus size={18} /> Add Task
                </button>
            </div>

            {/* Kanban Board */}
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {columns.map((col) => (
                        <div key={col.id} className="bg-gray-100/40 rounded-2xl p-4 min-h-[650px] border border-gray-200/60 flex flex-col">
                            {/* Column Header */}
                            <div className="flex items-center justify-between mb-5 px-1">
                                <div className="flex items-center gap-2">
                                    <span className={`w-2.5 h-2.5 rounded-full ${col.color}`}></span>
                                    <h3 className="font-bold text-gray-700 uppercase text-xs tracking-wider">{col.title}</h3>
                                    <span className="bg-white border border-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                        {tasks.filter(t => t.status === col.id).length}
                                    </span>
                                </div>
                                <MoreVertical size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                            </div>

                            {/* Droppable Area */}
                            <Droppable droppableId={col.id}>
                                {(provided, snapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className={`flex-1 space-y-4 rounded-xl transition-colors duration-200 ${snapshot.isDraggingOver ? 'bg-indigo-50/50 ring-2 ring-indigo-200 ring-dashed' : ''}`}
                                    >
                                        {tasks
                                            .filter((task) => task.status === col.id)
                                            .map((task, index) => (
                                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`transition-all ${snapshot.isDragging ? 'z-50' : ''}`}
                                                        >
                                                            <TaskCard task={task} isDragging={snapshot.isDragging} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">New Task</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleAddTask} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Task Title</label>
                                <input 
                                    autoFocus
                                    type="text" 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                                    placeholder="Enter task name..."
                                    value={newTask.title}
                                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Priority Level</label>
                                <select 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all appearance-none"
                                    value={newTask.priority}
                                    onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                                >
                                    <option value="Low">🟢 Low Priority</option>
                                    <option value="Medium">🟡 Medium Priority</option>
                                    <option value="High">🔴 High Priority</option>
                                </select>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button 
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition font-medium"
                                >
                                    Discard
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-bold shadow-lg shadow-indigo-200"
                                >
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function TaskCard({ task, isDragging }) {
    const priorityColors = {
        High: "text-rose-600 bg-rose-50 ring-rose-100",
        Medium: "text-amber-600 bg-amber-50 ring-amber-100",
        Low: "text-emerald-600 bg-emerald-50 ring-emerald-100",
    };

    return (
        <div className={`bg-white p-4 rounded-xl border transition-all select-none ${isDragging ? 'shadow-2xl border-indigo-400 rotate-2 scale-105' : 'shadow-sm border-gray-200 hover:border-indigo-300 hover:shadow-md'}`}>
            <div className="flex justify-between items-center mb-3">
                <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full ring-1 ${priorityColors[task.priority]}`}>
                    {task.priority}
                </span>
                <GripVertical size={14} className="text-gray-300" />
            </div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4 line-clamp-2 leading-relaxed">
                {task.title}
            </h4>
            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <div className="flex items-center gap-1.5 text-gray-400 font-medium text-[11px]">
                    <Clock size={12} />
                    <span>{task.date}</span>
                </div>
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold uppercase">
                        JD
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;