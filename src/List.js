import React from 'react';

import { AiFillEdit, AiFillDelete} from "react-icons/ai";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='thought-list'>
      {items.map((item) => {
        // const { id, title } = item;
       
        return (
          <article className='thought-item' key={item.id}>
            <p className='title'>{item.title}</p>
            <div className='btn-container'>
              <button
               
                className='edit-btn'
                onClick={() => editItem(item.id)}
              >
                <AiFillEdit />
              </button>
              <button
               
                className='delete-btn'
                onClick={() => removeItem(item.id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;