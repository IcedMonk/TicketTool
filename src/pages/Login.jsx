import React, { useState, useEffect } from "react";
import { MFAHelper } from "../utils/MfaHelper";

const MfaSimulation = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Assuming you retrieve userId from somewhere, like sessionStorage
    const retrievedUserId = "srihari@vyapisoft.com"; //sessionStorage.getItem('userid1');
    setUserId(retrievedUserId);

    const { otpauth_url } =
      MFAHelper.generateSecretAndOtpAuthUrl(retrievedUserId);
    MFAHelper.generateQrCodeUrl(otpauth_url)
      .then(setQrCodeUrl)
      .catch((err) => console.error("Error generating QR code:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming you have the token stored or retrieved from the session or passed after login
    const tokenFromApi =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTEiLCJuYmYiOjE3MDczNzk4MjIsImV4cCI6MTcwNzk4NDYyMiwiaWF0IjoxNzA3Mzc5ODIyfQ.1HHsQlgtH8zDm-SqfuIlCcCUX8p_7l8bZ5IivjhM5F4"; // This should be dynamically obtained

    // Simulate OTP verification - replace with actual verification against the token
    // In real scenario, send userInput and token to the server for verification
    const isVerified = MFAHelper.verifyOtp({
      token: userInput,
      secret: tokenFromApi, // Here you should use the secret corresponding to the token, not the token itself
    });

    if (isVerified) {
      console.log("OTP Verification: Successful");
    } else {
      console.log("OTP Verification: Failed");
    }
  };

  return (
    <div>
      <div>
        {qrCodeUrl && (
          <img src={qrCodeUrl} alt="Scan this QR code with your MFA app" />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter OTP"
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default MfaSimulation;
