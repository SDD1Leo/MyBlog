import Usercards from "../components/Usercards";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const userFetch = async (token) => {
    try {
        const response = await fetch("http://localhost:8008/api/admin/users", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const usersData = await response.json();
            return usersData; // Return the data
        } else {
            console.error("Error fetching user data");
            return null;
        }
    } catch (error) {
        console.error(`Admin user section error: ${error}`);
        return null;
    }
};

function AdminUser() {
    const { token } = useAuth();
    const [usersArray, setUsersArray] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await userFetch(token);
            if (usersData) {
                setUsersArray(usersData);
            }
        };
        fetchUsers();
    }, [token]);

    return (
        <div className="w-full h-full p-20">
            {usersArray.map((elem) => (
                <Usercards
                    key={elem.id}
                    un={elem.username}
                    n={elem.name}
                    e={elem.email}
                    userFetch={() => userFetch(token).then(setUsersArray)} // Pass userFetch as a prop
                    token={token} // Pass token as a prop
                />
            ))}
        </div>
    );
}

export { userFetch }; // Named export for userFetch
export default AdminUser;
