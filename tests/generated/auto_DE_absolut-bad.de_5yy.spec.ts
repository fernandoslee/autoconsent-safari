import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_absolut-bad.de_5yy', ['https://absolut-bad.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
