import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_joopstoop.com_xej', ['https://joopstoop.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
