import React from 'react';
import './TodoItem.css';
import {GrCompliance} from 'react-icons/gr';
import {AiTwotoneDelete} from 'react-icons/ai';


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <GrCompliance />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <AiTwotoneDelete id="delete-button" />
      </span>
    </li>
  );
}

export { TodoItem };