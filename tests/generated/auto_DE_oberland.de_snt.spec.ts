import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_oberland.de_snt', ['https://www.oberland.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
