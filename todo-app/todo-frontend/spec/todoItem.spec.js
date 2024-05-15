import {describe, expect, test} from "@jest/globals";
import {TodoItem} from "../src/Todos/List.jsx";
import { render } from '@testing-library/react';

describe('Todo item', () => {
    const todo = {text: 'Todo one', done: false}

    test('Todo item contains delete button', () => {
        const {container} = render(<TodoItem todo={todo} />)
        const deleteButton = container.querySelector('button')
        expect(deleteButton).toHaveTextContent('Delete')
    })

    test('', () => {
        const {container} = render(<TodoItem todo={todo} />)
        const todoTitle = container.querySelector('.todo-text')
        expect(todoTitle).toHaveTextContent('Todo one')
    })
});