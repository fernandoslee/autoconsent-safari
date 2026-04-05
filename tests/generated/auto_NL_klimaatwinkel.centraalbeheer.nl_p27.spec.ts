import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_klimaatwinkel.centraalbeheer.nl_p27', ['https://klimaatwinkel.centraalbeheer.nl/duurzaam-woongemak'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
