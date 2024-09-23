// @ts-ignore
import TronWeb from 'tronweb';

export const tronWeb: any = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  headers: { 'TRON-PRO-API-KEY': '2432d164-fce5-4d0f-a655-30cac3c95546' },
});
(window as any).tronWeb1 = tronWeb;

