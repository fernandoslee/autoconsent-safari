import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_olibetta.de_72j', ['https://www.olibetta.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
