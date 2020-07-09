import CryptoJS from "crypto-js";

const test = () => {
  const encryptWithAES = (text) => {
    const passphrase = "123";
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  };

  const decryptWithAES = (ciphertext) => {
    const passphrase = "123";
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  let cryp = encryptWithAES("1");
  console.log(cryp);
  cryp = decryptWithAES(cryp);
  console.log(cryp);
  let cryp2 = encryptWithAES("1");
  console.log(cryp2);
  cryp2 = decryptWithAES(cryp2);
  console.log(cryp2);
};

export default test;
