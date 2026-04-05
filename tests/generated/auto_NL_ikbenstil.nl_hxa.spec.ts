import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ikbenstil.nl_hxa', ['https://www.ikbenstil.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
