import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_messerundco.de_rzs', ['https://messerundco.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
