import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_craftelier.com_tyr', ['https://craftelier.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
