import React from "react";

const RoomLink = ({roomID}) => {
    const roomLink = `${window.location.origin}/room/${roomID}`
    const handleCopy = () => {
        navigator.clipboard.writeText(roomLink);
        alert("Room link copied");
    }

    return(
        <div className="flex flex-col justify-center items-center p-4 text-center gap-2">
            <p>Your room link: <span className="text-blue-700">{roomLink}</span></p>
            <button onClick={handleCopy} className="btn">Copy Link</button>
        </div>
    )
}

export default RoomLink