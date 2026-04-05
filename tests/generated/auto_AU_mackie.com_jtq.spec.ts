import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mackie.com_jtq', ['https://mackie.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
