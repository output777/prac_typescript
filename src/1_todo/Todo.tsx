import React, { useRef } from 'react'
import { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState<{ id: number, title: string, done: boolean }[]>([]);
  const [inputTodo, setInputTodo] = useState<{ id: number, title: string, done: boolean }>({
    id: 1,
    title: '',
    done: false,
  })

  // useRef로 조회 및 수정 할 수 있는 변수를 관리할 수 있다
  // 그래서 useRef로 새 항목에서 사용 할 고유 id를 관리할 수 있다.
  const nextId = useRef(1);

  const { id, title, done } = inputTodo;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => [...prev, inputTodo]);
    nextId.current += 1;
    setInputTodo({
      ...inputTodo,
      id: nextId.current,
      title: '',
    })

  }

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputTodo({
      ...inputTodo,
      title: value
    })
  }

  const onClickDeleteHandler = (id: number) => {
    console.log(id);
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h1>Todo List</h1>
        <input name='title' value={title} onChange={onchangeHandler} />
        <button type='submit'>등록하기</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => { onClickDeleteHandler(todo.id) }}>삭제하기</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todo