import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aiper.com_8fy', ['https://aiper.com/au/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
