import generateCMPTests from '../playwright/runner';

generateCMPTests('PrimeBox CookieBar', ['https://inpn.mnhn.fr/accueil/index', 'http://manunicast.seaes.manchester.ac.uk/'], {});

generateCMPTests('PrimeBox CookieBar', ['https://en.luxuretv.com/'], { onlyRegions: ['GB'] });
