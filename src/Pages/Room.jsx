import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import RoomLink from "../Components/RoomLink";

const Room = () => {
  const { roomID } = useParams();
  const meetingContainer = useRef(null);

  useEffect(() => {
    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Guest User"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingContainer.current,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `${window.location.origin}/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showPreJoinView: false,
    });

    //Clean up when user leaves or navigates away
    return () => {
      zp.destroy(); // stops camera, mic, and room connection
    };
  }, [roomID]);

  return (
    <div className="relative">
        <NavBar />
        <div className="">
            <div
            ref={meetingContainer}
            className="w-screen h-screen mx-auto bg-black text-red"></div>
            <RoomLink roomID={roomID}/>
        </div>
    </div>
  );
};

export default Room;
