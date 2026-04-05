import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_parler-francais.eklablog.com_c4j', ['https://parler-francais.eklablog.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
