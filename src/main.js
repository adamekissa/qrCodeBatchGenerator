import QRCode from 'qrcode';
import { channels } from './channels.js';

const generateQR = async channelList => {
   for (let channel of channelList) {
      await QRCode.toFile(`outputImages/${channel.channelName}.png`, channel.url)

   }
  
  }

  generateQR(channels);