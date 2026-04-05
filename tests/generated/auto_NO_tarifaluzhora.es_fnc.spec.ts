import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tarifaluzhora.es_fnc', ['https://tarifaluzhora.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
