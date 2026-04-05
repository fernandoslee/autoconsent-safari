import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_museeliberation-leclerc-moulin.paris.fr_etu', ['https://www.museeliberation-leclerc-moulin.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
