import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamoncloa.gob.es_88n', ['https://www.lamoncloa.gob.es/Paginas/index.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
