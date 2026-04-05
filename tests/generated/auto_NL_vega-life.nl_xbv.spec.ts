import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vega-life.nl_xbv', ['https://www.vega-life.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
