import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import RoomLink from "../Components/RoomLink";

const Room = () => {
  const { roomID } = useParams();
  const navigate = useNavigate();
  const meetingContainer = useRef(null);
  const zpRef = useRef(null);
  const streamRef = useRef(null); //track raw media stream
  const [status, setStatus] = useState("connecting"); // connecting | connected | failed

  //stops camera and mic completely
  const stopAllTracks = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const handleExit = () => {
    stopAllTracks();
    if (zpRef.current) {
      zpRef.current.destroy();
      zpRef.current = null;
    }
    navigate("/");
  };

  useEffect(() => {
    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

    if (!appID || !serverSecret || !meetingContainer.current) return;

    //capture mic/camera stream so we can stop it later
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        streamRef.current = stream;
      })
      .catch(err => console.error("Media access error:", err));

    //if not connected after 10 seconds, show failed state
    const connectionTimeout = setTimeout(() => {
      if (status === "connecting") {
        setStatus("failed");
      }
    }, 10000);

    try {
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Guest User"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current = zp;

      zp.joinRoom({
        container: meetingContainer.current,
        sharedLinks: [{ name: "Copy Link", url: `${window.location.origin}/room/${roomID}` }],
        scenario: { mode: ZegoUIKitPrebuilt.VideoConference },
        showPreJoinView: false,
        onJoinRoom: () => {
          setStatus("connected"); //mark as connected
          clearTimeout(connectionTimeout);
        },
        onLeaveRoom: () => {
          handleExit(); //clean up when user leaves
        },
      });
    } catch (err) {
      console.error("ZEGOCLOUD error:", err);
      setStatus("failed");
    }

    return () => {
      clearTimeout(connectionTimeout);
      stopAllTracks();
      if (zpRef.current) {
        zpRef.current.destroy();
        zpRef.current = null;
      }
    };
  }, [roomID]);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="relative flex-1">

        {/*connection failed overlay */}
        {status === "failed" && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black gap-4">
            <p className="text-white text-lg font-semibold">Unable to connect to room</p>
            <p className="text-zinc-400 text-sm">Your camera and microphone will be released.</p>
            <button
              onClick={handleExit}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Exit
            </button>
          </div>
        )}

        <div
          ref={meetingContainer}
          className="w-full h-[80vh] bg-black"
        />
        <RoomLink roomID={roomID} />
      </div>
    </div>
  );
};

export default Room;