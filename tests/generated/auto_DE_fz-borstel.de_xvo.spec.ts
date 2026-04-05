import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fz-borstel.de_xvo', ['https://fz-borstel.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
