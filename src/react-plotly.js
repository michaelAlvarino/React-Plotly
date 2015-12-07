var React = require('react');

var Plot = React.createClass({
  propTypes: {
    handle: React.PropTypes.string.isRequired,
    data: React.PropTypes.array.isRequired,
    layout: React.PropTypes.object
  },
  componentDidMount: function () {
    this.plot(this.props);
  },
  componentWillReceiveProps: function (nextProps) {
    this.plot(nextProps);
  },
  plot: function (props) {
    var handle = props.handle,
        data = props.data,
        layout = props.layout;
    Plotly.plot(handle, data, layout);
  },
  render: function () {
    return (
      <div id={this.props.handle} >test</div>      
    );
  }
});


module.exports = Plot;