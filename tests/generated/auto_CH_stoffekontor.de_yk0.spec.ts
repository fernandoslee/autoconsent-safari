import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stoffekontor.de_yk0', ['https://www.stoffekontor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
