import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_new.de_845', ['https://www.new.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
