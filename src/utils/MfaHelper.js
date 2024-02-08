import speakeasy from "speakeasy";
import QRCode from "qrcode";
import hexToBase32 from "hex-to-32";

// Helper function for ASCII to Hex conversion
const asciiToHexa = (str) => {
  return str
    .split("")
    .map((char) => Number(char.charCodeAt(0)).toString(16))
    .join("");
};

// Generates the base32 encoded secret and the OTP Auth URL
const generateSecretAndOtpAuthUrl = (userId) => {
  const ascii = "?:SD%oDD<E!^q^1N):??&QkeqRkhkpt&" + userId;
  const hex = asciiToHexa(ascii);
  const base32 = hexToBase32.encode(hex).toUpperCase();
  const otpauth_url = `otpauth://totp/${encodeURIComponent(
    userId
  )}?secret=${base32}&issuer=YourAppName`;
  return { base32, otpauth_url };
};

// Generates a QR code URL from the OTP Auth URL
const generateQrCodeUrl = async (otpAuthUrl) => {
  try {
    const qrCodeUrl = await QRCode.toDataURL(otpAuthUrl);
    return qrCodeUrl;
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw error;
  }
};

// Verifies an OTP against the secret
const verifyOtp = ({ token, secret }) => {
  // Ensure the secret is in base32 format for speakeasy
  const verified = speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token,
    window: 7, // Allows a bit of leeway in timing
  });

  return verified;
};

export const MFAHelper = {
  generateSecretAndOtpAuthUrl,
  generateQrCodeUrl,
  verifyOtp,
};
