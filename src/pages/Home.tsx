import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserTable from "../components/UserTable";
import { User } from "../models/User";
import {BACKEND_BASE_URL} from "../utils/Constants";

const Home = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(BACKEND_BASE_URL + "/users");
                setUsers(response.data);
            } catch (err) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 px-2 mb-4">Users</h1>
            <UserTable users={users} />
        </>
    );
};

export default Home;
