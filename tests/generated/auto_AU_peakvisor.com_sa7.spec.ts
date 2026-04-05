import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_peakvisor.com_sa7', ['https://peakvisor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
