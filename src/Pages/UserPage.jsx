import React, { useEffect, useState } from "react";
import { UserNavBar } from "../Components/Navbar";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import axios from "axios";



const UserPage = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [foundUser, setFoundUser] = useState([])
    const [visible, setVisible] = useState(false);
    const URL = "http://localhost:5000/users";
    const email = "adamumo99@gmail.com";
    const password = "12345king@gmail";

    useEffect(()=> {
        axios.get(URL)
        .then((response) => {
            console.log(response.data);
            setUserDetails(response.data.find((user) => user.email === email && user.password === password));
        })
        .catch((error) => {
            console.log(`The error is :${error}`);
        })
    }, []);

    // const firstName = userDetails.firstName;
    // const lastName = userDetails.lastName;
    // const fnFirstLetter = firstName.charAt(0)
    // const lnFirstLetter = lastName.charAt(0);

    // const nameShortcut = `${fnFirstLetter}${lnFirstLetter}`;
    const fullName = `${userDetails.firstName} ${userDetails.lastName}`


    const buttonLabel = `See ${userDetails.pair} details`;


    return (
        <div>
            <UserNavBar fullName={fullName} />
            <div className="flex flex-col h-screen justify-center items-center leading-10">
                <hi className="text-[50px] mb-5 text-center"> {`Hey ${userDetails.firstName}👋`} </hi>
                <span className="font-bold"> {`You have been paired with ${userDetails.pair}`} </span>
                <span className="text-center"> Please do well to call him/her when coming for church service, 
                    morning devotion or any other NUPS-G gathering </span>
                <span className="text-center" > {`Click the button below👇 to see ${userDetails.pair} details`} </span>
                <div className="my-[20px]">
                    <Button label={buttonLabel} icon="pi pi-external-link" className="h-[45px]" onClick={() => setVisible(true)} />
                </div>
                <Dialog header="Details" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
            </div>
        </div>
    )    
}

export default UserPage;
