import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import RoomLink from "../Components/RoomLink";

const Room = () => {
  const { roomID } = useParams();
  const meetingContainer = useRef(null);
  const zpRef = useRef(null); //store zp instance in a ref

  useEffect(() => {
    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

    if (!appID || !serverSecret) {
      console.error("Missing ZEGOCLOUD credentials in .env");
      return;
    }

    if (!meetingContainer.current) return;

    try {
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Guest User"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current = zp; //save to ref so cleanup can access it

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
        showPreJoinView: false, //shows camera preview before joining
      });
    } catch (err) {
      console.error("ZEGOCLOUD error:", err);
    }

    //zp cleanup
    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
        zpRef.current = null;
      }
    };
  }, [roomID]);

  return (
    <div className="flex flex-col w-screen h-screen">
      <NavBar />
      <div className="relative flex-1">
        <div
          ref={meetingContainer}
          className="w-full h-[85vh] bg-black"
        />
        <RoomLink roomID={roomID} />
      </div>
    </div>
  );
};

export default Room;