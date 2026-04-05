import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_quintedge.com_1mo', ['https://quintedge.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
