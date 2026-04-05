import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pepeporn.com_xdm', ['https://pepeporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
