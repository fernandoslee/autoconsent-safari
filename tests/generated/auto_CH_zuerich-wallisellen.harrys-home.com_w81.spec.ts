import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zuerich-wallisellen.harrys-home.com_w81', ['https://zuerich-wallisellen.harrys-home.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
