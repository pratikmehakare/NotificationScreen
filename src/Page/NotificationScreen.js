import React from "react";
import toast from "react-hot-toast";
import vector from "../assets/Vector.png";
import Ellipse198 from "../assets/Ellipse 198.png";
import Ellipse196 from "../assets/Ellipse 196.png";
import Ellipse197 from "../assets/Ellipse 197.png";
import Ellipse195 from "../assets/Ellipse 195.png";

const NotificationScreen = () => {
  const sendNotification = () => {
    if (!("Notification" in window)) {
      console.log("Browser does not support notifications");
      alert("This browser does not support desktop notifications.");
      return;
    }

    console.log("Notification permission:", Notification.permission);

    if (Notification.permission === "granted") {
      console.log("Permission granted. Sending notification...");
      new Notification("Notification Title", {
        body: "This is a sample notification.",
      });
      toast.success("Notification sent!");
    } else if (Notification.permission !== "denied") {
      console.log("Requesting notification permission...");
      Notification.requestPermission().then((permission) => {
        console.log("New permission:", permission);
        if (permission === "granted") {
          new Notification("Notification Title", {
            body: "This is a sample notification.",
          });
          toast.success("Notification sent!");
        } else {
          toast.error("Notification permission denied.");
        }
      });
    } else {
      toast.error("Notification permission denied.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">

      <div className="bg-gradient-to-b from-[#2C2143] to-black p-8 shadow-md w-[392px] h-[821px] relative">
        {/* Centered "Hola!" */}
        <p className="flex items-center justify-center w-[40px] h-[21px] text-white absolute top-[32px] left-1/2 transform -translate-x-1/2">
          Hola!
        </p>

        {/* Illustration*/}
        <div className="absolute top-[81px] left-0 w-[392px] h-[392px] flex items-center justify-center">
          {/* Background Ellipses */}
          <img src={Ellipse198} className="absolute" alt="Ellipse 198" />
          <img
            src={Ellipse196}
            className="absolute w-[324px] h-[324px]"
            alt="Ellipse 196"
          />
          <img
            src={Ellipse197}
            className="absolute w-[260px] h-[260px]"
            alt="Ellipse 197"
          />
          <img
            src={Ellipse195}
            className="absolute w-[196px] h-[196px]"
            alt="Ellipse 195"
          />

          {/* Foreground Vector */}
          <img src={vector} className="absolute" alt="Vector" />
        </div>

        {/* Bottom section */}
        <div className="absolute top-[579px] left-1/2 transform -translate-x-1/2 w-[327px] h-[173px] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center h-[71px] justify-center gap-4">
            <h2 className="text-white font-inter font-bold text-[29px] leading-[110%] tracking-[0px] text-center">
              Lorem Ipsum...
            </h2>
            <p className="w-[325px] h-[23px] font-inter font-normal text-[19px] leading-[100%] tracking-[0px] text-center text-[#FFFFFF99] rounded-md">
              Lorem Ipsum dolor sit amet.
            </p>
          </div>
          <div className="mt-[60px] flex justify-center">
            <button
              onClick={sendNotification}
              className="bg-[#1D103A] border-2 border-[#6434CE] shadow-md shadow-[#0000001F] h-[42px] w-[327px] text-white font-inter font-semibold text-[16px] leading-[100%] tracking-[0.48px] text-center px-6 py-3 rounded-lg"
            >
              Send Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationScreen;
