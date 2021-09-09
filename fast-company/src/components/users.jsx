import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";

const Users = ({ users: allUsers, ...rest }) => {
    const count = allUsers.length;
    const [professions, setProfession] = useState();
    const pageSize = 4;
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));

        console.log("render");
    }, []);

    const handleProfessionSelect = (params) => {
        /// console.log(params);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        // console.log("page", pageIndex);
        setCurrentPage(pageIndex);
    };

    const users = paginate(allUsers, currentPage, pageSize);
    return (
        <>
            <GroupList
                items={professions}
                onItemSelect={handleProfessionSelect}
            />
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
                            <User {...rest} {...user} key={user._id} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array
};
export default Users;
