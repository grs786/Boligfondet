var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Pie from "paths-js/pie";
import React from "react";
import { View,Platform } from "react-native";
import { G, Path, Rect, Svg, Text } from "react-native-svg";
import AbstractChart from "./AbstractChart";
var PieChart = /** @class */ (function (_super) {
    __extends(PieChart, _super);
    function PieChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieChart.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.style, style = _b === void 0 ? {} : _b, backgroundColor = _a.backgroundColor, _c = _a.absolute, absolute = _c === void 0 ? false : _c, _d = _a.hasLegend, hasLegend = _d === void 0 ? true : _d, _e = _a.avoidFalseZero, avoidFalseZero = _e === void 0 ? false : _e;
        var _f = style.borderRadius, borderRadius = _f === void 0 ? 0 : _f;
        var chart = Pie({
            center: this.props.center || [0, 0],
            r: 0,
            R: this.props.height / 2,
            data: this.props.data,
            accessor: function (x) {
                return x[_this.props.accessor];
            }
        });
        var total = this.props.data.reduce(function (sum, item) {
            return sum + item[_this.props.accessor];
        }, 0);
        var slices = chart.curves.map(function (c, i) {
            var value;
            if (absolute) {
                value = c.item[_this.props.accessor];
            }
            else {
                if (total === 0) {
                    value = 0 + "%";
                }
                else {
                    var percentage = Math.round((100 / total) * c.item[_this.props.accessor]);
                    value = Math.round((100 / total) * c.item[_this.props.accessor]) + "%";
                    if (avoidFalseZero && percentage === 0) {
                        value = "<1%";
                    }
                    else {
                        value = percentage ;
                    }
                }
            }
            return (<G key={Math.random()}>
          <Path d={c.sector.path.print()} fill={c.item.color} />
          {hasLegend ? (<Rect width="16px" height="16px" fill={c.item.color} rx={4} ry={4} x={_this.props.width / 2.5 - 24} y={-(_this.props.height / 2.5) +
                ((_this.props.height * 0.7) / _this.props.data.length) * i +
                12}/>) : null}
          {hasLegend ? (<Text fill={c.item.legendFontColor} fontSize={12} fontFamily={Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular'} x={_this.props.width / 2.5} y={-(_this.props.height / 2.5) +
                ((_this.props.height * 0.7) / _this.props.data.length) * i +
                12 * 2}>
              {c.item.name}
            </Text>) : null}
        </G>);
        });
        return (<View style={__assign({ width: this.props.width, height: this.props.height, padding: 0 }, style)}>
        <Svg width={this.props.width} height={this.props.height}>
          <G>
            {this.renderDefs(__assign({ width: this.props.height, height: this.props.height }, this.props.chartConfig))}
          </G>
          <Rect width="100%" height={this.props.height} rx={borderRadius} ry={borderRadius} fill={backgroundColor} />
          <G x={this.props.width / 2 / 2 +
            Number(this.props.paddingLeft ? this.props.paddingLeft : 0)} y={this.props.height / 2}>
            {slices}
          </G>
        </Svg>
      </View>);
    };
    return PieChart;
}(AbstractChart));
export default PieChart;
