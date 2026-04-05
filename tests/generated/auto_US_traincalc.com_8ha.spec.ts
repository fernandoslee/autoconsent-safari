import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_traincalc.com_8ha', ['https://traincalc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
