import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_desktop.yandex.com_u16', ['http://desktop.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
