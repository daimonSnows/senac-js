new Morris.Line({
    element: 'grafico',
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
    ],
    // atribuição dos anos eixo X.
    xkey: 'year',
    // atribuição dos valores eixo Y.
    ykeys: ['value'],
    labels: ['Value']
  });