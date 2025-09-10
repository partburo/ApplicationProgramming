// 2_7_3 Fix the mutations using non-mutative methods  
/*
    В этом примере все обработчики событий в App.js используют мутацию. В результате редактирование и удаление todos не работает. Перепишите handleAddTodo, handleChangeTodo и handleDeleteTodo, чтобы они использовали немутационные методы:
*/

import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export type Todo = {
    id: number;
    title: string;
    done: boolean;
}

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title: string) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    function handleChangeTodo(nextTodo: Todo) {
        setTodos(todos.map(todo =>
            todo.id === nextTodo.id ? nextTodo : todo
        ))
    }

    function handleDeleteTodo(todoId: number) {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}