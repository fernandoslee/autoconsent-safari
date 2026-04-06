import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.cloud_vs2', ['https://yandex.cloud/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
