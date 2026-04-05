import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_app.hellofax.com_3ya', ['https://app.hellofax.com/account/logIn'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
