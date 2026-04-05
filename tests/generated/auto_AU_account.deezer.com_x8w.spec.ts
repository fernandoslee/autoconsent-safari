import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_account.deezer.com_x8w', ['https://account.deezer.com/login/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
