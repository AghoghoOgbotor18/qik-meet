import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const RoomLink = ({roomID}) => {
    const [show, setShow] = useState(false);
    const roomLink = `${window.location.origin}/room/${roomID}`
    const handleCopy = () => {
        navigator.clipboard.writeText(roomLink);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, [2000])
    }

    return(
        <div className="flex flex-col justify-center items-center p-4 text-center gap-2">
            <p>Your room link: <span className="text-blue-700">{roomLink}</span></p>
            <button onClick={handleCopy} className="btn">Copy Link</button>

            {
                show && <p className="absolute top-30 left-[45%] bg-white text-black rounded-md py-2 px-3 z-100 flex items-center gap-1"><FaCheck className="text-green-600" /> Link Copied</p>
            }
        </div>
    )
}

export default RoomLink