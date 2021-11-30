import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../redux/todos';
import Preloader from './Preloader';
import { useParams } from 'react-router-dom';

function Todos(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todos.loading);
  const todos = useSelector((state) => state.todos.items);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(loadTodos(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="todos">
      <table className="table">
        <thead>
        <tr>
          <th>№</th>
          <th>Описание</th>
          <th>Статус</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          todos.map(item => {
            return (
              <React.Fragment key={item.id}>
                <tr>
                  <td>
                    {item.id}
                  </td>
                  <td>
                    {item.title}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.completed}
                    />
                  </td>
                </tr>
              </React.Fragment>


            )
          })
        }
        </tbody>
      </table>
    </div>

  );
}

export default Todos;
