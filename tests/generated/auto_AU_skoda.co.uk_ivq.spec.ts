import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skoda.co.uk_ivq', ['https://www.skoda.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
