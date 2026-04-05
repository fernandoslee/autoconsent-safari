import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_meter.com_um9', ['https://www.meter.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
