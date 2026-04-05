import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_daikin.it_5hg', ['https://www.daikin.it/it_it/privati.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
