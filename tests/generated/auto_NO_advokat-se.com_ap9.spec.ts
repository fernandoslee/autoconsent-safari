import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_advokat-se.com_ap9', ['https://advokat-se.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
