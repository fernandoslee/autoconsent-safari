import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ekbo.de_gy7', ['https://www.ekbo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
