import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";

export async function gerarCredenciaisIncricao(){

    const hash = uuidv4();

    const qrCode = await QRCode.toDataURL(hash);

    return { hash, qrCode };
}