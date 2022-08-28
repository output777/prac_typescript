import React, { useState } from 'react'



const Myform = () => {
  // never문제로 useState에 7번줄처럼 타입을 지정해줌
  const [list, setList] = useState<{ name: string, description: string }[]>([])
  const [form, setForm] = useState({
    name: '',
    description: ''
  })

  const { name, description } = form;

  // e의 타입은 onSubmit에 마우스를 가져가면 알 수 있음
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList(prev => [...prev, form])
    setForm({
      name: '',
      description: ''
    })
  }

  // e의 타입은 onClick에 마우스를 가져가면 알 수 있음
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input name='name' value={name} onChange={onChangeHandler} />
        <input name='description' value={description} onChange={onChangeHandler} />
        <button type='submit'>등록</button>
      </form>
      <div>
        {list.map((data, index) => (
          <div key={index}>
            <p>{data.name} {data.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Myform