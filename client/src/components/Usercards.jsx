import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

function Usercards(props) {
    const { token, userFetch } = props; // Destructure token and userFetch from props
    const {API} = useAuth();
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                toast.success("user deleted successfully.")
                userFetch(); // Call userFetch after successful deletion
            } else {
                console.log("Error deleting data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full my-6 py-5 px-9 border-2 rounded-md drop-shadow-md flex items-center justify-between">
            <ul className="flex flex-col lg:flex-row w-2/3 justify-between">
                <li className="w-1/3">Username: {props.un}</li>
                <li className="w-1/3">Name: {props.n}</li>
                <li className="w-1/3">Email: {props.e}</li>
            </ul>
            <button
                onClick={() => deleteUser(props.e)}
                className="px-4 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white"
            >
                Delete
            </button>
        </div>
    );
}

export default Usercards;
