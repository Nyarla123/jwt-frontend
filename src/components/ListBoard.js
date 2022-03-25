import React,{useState} from "react";
import {adminTest} from "../apis/userApi";
import styles from '../styles/ListBoard.module.css';

const ListBoard = () => {

    const [users, setUsers] = useState([]);
    const [userState, setUserState] = useState(false);

    const userHandler = () => {
        adminTest().then((response) =>{
            setUsers(response.data);
            console.log(users);
            setUserState(true);
        });
    };

    const renderUser = users.map((user) => {
        return (
            <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
            </tr>
        );
    });

    return(
        <div>
            <h2 className="text-center">Boards List</h2>
            <button onClick={userHandler}>userButton</button>
            <div className={styles.row}>
                <table className='table table-striped table-bordered'>
                    <thead>
                    <tr>
                        <th>userId</th>
                        <th>username</th>
                        <th>user_role</th>
                    </tr>
                    </thead>
                    <tbody>
                        {userState && renderUser}
                    </tbody>
                </table>
            </div>
        </div>

    );
};
export default ListBoard;
