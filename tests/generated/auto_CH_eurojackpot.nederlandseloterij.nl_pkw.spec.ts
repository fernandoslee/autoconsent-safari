import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eurojackpot.nederlandseloterij.nl_pkw', ['https://eurojackpot.nederlandseloterij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
