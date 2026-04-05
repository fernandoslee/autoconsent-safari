import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mounjaro.lilly.com_uov', ['https://mounjaro.lilly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
