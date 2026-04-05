import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_feldschloesschen.swiss_0zy', ['https://feldschloesschen.swiss/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
