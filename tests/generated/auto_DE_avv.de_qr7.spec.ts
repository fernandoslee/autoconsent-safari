import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_avv.de_qr7', ['https://avv.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
