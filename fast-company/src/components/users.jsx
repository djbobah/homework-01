import React from "react";
import Pagination from "./pagination";
import User from "./user";

const Users = ({ users, ...rest }) => {
  const count = users.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    console.log("page", pageIndex);
  };
  return (
    <>
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
