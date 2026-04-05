import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_intranetssl.net_6yq', ['https://intranetssl.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
