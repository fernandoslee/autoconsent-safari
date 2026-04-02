import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_online.yandex.com_4g6', ['http://online.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
