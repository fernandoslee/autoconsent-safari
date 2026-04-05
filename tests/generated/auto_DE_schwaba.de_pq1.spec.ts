import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwaba.de_pq1', ['https://www.schwaba.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
