import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autodesk.de_nku', ['https://www.autodesk.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
