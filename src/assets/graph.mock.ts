import GraphData, { GraphTypes } from "src/app/model/data.MODEL";

const GraphDataMock : GraphData = {
    name : 'Sales',
    nav : {
        month : {
            otherinfo : '',
            slides : [{
                title : 'slide 1',
                data : {
                    type : GraphTypes.BASETABLE,
                    title : 'graphdata 1',
                    name : 'name here 1',
                    description : 'description here 1'
                },
                options: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                      type: 'value',
                      position: 'right'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }],
                   grid: 
                     {borderColor: '#ff00cf'}
                }
            },{
                title : 'slide 2',
                data : {
                    type : GraphTypes.MULTIPLEROWS,
                    title : 'graphdata 2',
                    name : 'name here 2',
                    description : 'description here 2'
                }
            }
        ]
        },
        qtd : {
          otherinfo : '',
          slides : []
        },
        ytd : {
          otherinfo : '',
          slides : []
        }
    }
}

export default GraphDataMock;
