import React from 'react';
import {
    ChartLegend,
    ChartTheme,
    ChartPie
} from '@patternfly/react-charts';
import {
    Grid,
    GridItem,
    Text,
    TextVariants
} from '@patternfly/react-core';

class SimpleChart extends React.Component {
    constructor(props) {
        super(props);
    }

    getChart = (theme, chartData) => (
        <ChartPie
           /* data={[
                { x: 'Premium', y: 35 },
                { x: 'Standard', y: 55 },
                { x: 'Basic', y: 10 }
            ]}*/
            //data={this.props.data}
            data={chartData}
            labels={this.getTooltipLabel}
            theme={theme}
            height={200}
            width={200}
        />
    );

    getChart2 = (theme) => (
        <ChartPie
            data={[
                { x: 'Premium', y: 350 },
                { x: 'Standard', y: 234 },
                { x: 'Basic', y: 112 }
            ]}
            labels={this.getTooltipLabel}
            theme={theme}
            height={200}
            width={200}
        />
    );

    getLegend = (theme, horizontal) => (
        <ChartLegend
            data={[
                { name: 'Premium' }, { name: 'Standard' }, { name: 'Basic' }
            ]}
            orientation={horizontal ? 'horizontal' : 'vertical'}
            theme={theme}
            y={horizontal ? 0 : 55}
            height={horizontal ? 35 : 200}
            width={200}
        />
    );

    getTooltipLabel = (datum) => {
        return `${datum.x}: ${datum.y}`;
    }
//{this.getLegend(ChartTheme.light.blue, false)}
    render() {
        if (this.props.isLegend) {
            return (
                <GridItem span={2}>
                    {this.getLegend(ChartTheme.light.blue, false)}
                </GridItem>
            );
        } else {
            return (
                <GridItem span={2}>
                    <Text className="chart-title" component={TextVariants.h2} style={{textAlign: "center"}}>
                        {this.props.clientName} <b>{this.props.title}</b>
                    </Text>
                    <div className="chart-container">
                        {this.getChart(ChartTheme.light.blue, this.props.chartData)}
                    </div>
                </GridItem>
            );
        }
    }
}

export default SimpleChart;