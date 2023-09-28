import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('Render Todo', () => {
  const todo = {
    _id: '1jlksj',
    text: 'Attend meeting',
    done: false,
    }

    const onClickComplete = jest.fn()
    const onClickDelete = jest.fn()
  
    render(<Todo key={todo._id} todo={todo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />)

    const element = screen.getByText('Attend meeting')
    expect(element).toBeDefined()
  }) 