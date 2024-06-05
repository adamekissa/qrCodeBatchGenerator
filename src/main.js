import QRCode from 'qrcode';
// import { channels } from './channels';

const generateQR = async text => {
  
     await QRCode.toFile('outputImages/text.png', text)
  }

  generateQR("https://www.youtube.com/@codeorg");