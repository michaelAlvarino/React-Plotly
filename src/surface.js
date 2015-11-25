var Surface = React.createClass({
  propTypes: {
    containerId: React.PropTypes.string.isRequired,
    data: React.PropTypes.array.isRequired,
    layout: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    this.plot(this.props);
  },
  componentWillReceiveProps: function (nextProps) {
    this.plot(nextProps);
  },
  plot: function (props) {
    var containerId = props.containerId,
        data = props.data,
        layout = props.layout;
    Plotly.plot(containerId, data, layout);
  },
  render: function () {
    return (
      <div id={this.props.containerId} >test</div>      
    );
  }
});

module.exports = Surface;