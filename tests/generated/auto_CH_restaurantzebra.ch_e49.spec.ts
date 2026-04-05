import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_restaurantzebra.ch_e49', ['https://restaurantzebra.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
