import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_praxiskollektiv-gueterstrasse.ch_r9k', ['https://www.praxiskollektiv-gueterstrasse.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
