import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ca-autofinance.ch_4od', ['https://www.ca-autofinance.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
