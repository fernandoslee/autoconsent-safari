import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_themodems.com_fqm', ['https://themodems.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
