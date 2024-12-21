import { useEffect, useState } from "react";
import Contactcards from "../components/Contactcards";
import { useAuth } from "../store/auth";



function AdminContact() {

    const {token} = useAuth()
    const [contactsArray, setContactsArray] = useState([]);
    const contactFetch = async () => {
        try {
            const response = await fetch("http://localhost:8008/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                setContactsArray(data);
            } else {
                console.log("contact fetch error");
            }

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        contactFetch()
    }, []);
    return (
        <div className="w-full h-full p-20">
            {contactsArray.map((elem) => (
                <Contactcards
                    key={elem.id}
                    un={elem.username}
                    e={elem.email}
                    m={elem.message}
                />
            ))}
        </div>
    );
}

export default AdminContact;