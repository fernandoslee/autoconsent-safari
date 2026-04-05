import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_parkhoteladler.de_vae', ['https://www.parkhoteladler.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
