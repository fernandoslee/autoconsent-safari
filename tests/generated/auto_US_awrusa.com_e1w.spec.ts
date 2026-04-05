import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_awrusa.com_e1w', ['https://www.awrusa.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
