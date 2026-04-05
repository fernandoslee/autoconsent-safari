import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mvz-labor-lb.de_7uz', ['https://www.mvz-labor-lb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
