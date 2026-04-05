import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tantefanny.com_iin', ['https://www.tantefanny.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
