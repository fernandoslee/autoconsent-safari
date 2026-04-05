import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_consumentenbond.nl_c59', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
