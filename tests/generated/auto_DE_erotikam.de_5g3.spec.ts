import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erotikam.de_5g3', ['https://erotikam.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
