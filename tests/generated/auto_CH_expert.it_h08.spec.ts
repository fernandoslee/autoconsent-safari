import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_expert.it_h08', ['https://www.expert.it/it/it/exp/?r=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
