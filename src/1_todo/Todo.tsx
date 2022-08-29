import React, { useRef } from 'react'
import { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState<{ id: number, title: string, done: boolean }[]>([]);
  const [inputTodo, setInputTodo] = useState<{ id: number, title: string, done: boolean }>({
    id: 1,
    title: '',
    done: false,
  })

  /**
   * useRef로 조회 및 수정 할 수 있는 변수를 관리할 수 있다.
   * 그래서 useRef로 새 항목에서 사용 할 고유 id를 관리할 수 있다.
   * useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 
   * 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, 
   * useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.
   */

  const nextId = useRef(1);

  const { id, title, done } = inputTodo;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodos((prev) => [...prev, inputTodo]);
    nextId.current += 1;
    setInputTodo({
      ...inputTodo,
      id: nextId.current,
      title: '',
    })
  }

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInputTodo({
      ...inputTodo,
      title: value
    })
  }

  const onClickDeleteHandler = (id: number): void => {
    console.log(id);
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  const onClickCompleteHandler = (id: number): void => {
    const completeTodo = todos.map((data) => {
      if (data.id === id) {
        data.done = !data.done;
      }
      return data;
    })
    console.log(completeTodo)
    setTodos(completeTodo);
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
            <button onClick={() => { onClickCompleteHandler(todo.id) }}>{todo.done ? '완료 취소하기' : '완료하기'}</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Todo