import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.nothing.tech_i95', ['https://ch.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
