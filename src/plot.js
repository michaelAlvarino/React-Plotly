import React, {Component, PropTypes} from 'react';

export default class Plot extends Component{
  constructor(props) {
    super(props);
    this.state = {Data: props.Data,
                  Layout: props.Layout,
                  containerId: props.containerId};
  }
  componentDidMount(){
    var layout = props.layout;
    var data = props.data;
    var containerId = props.containerId
    Plotly.newPlot(containerId, this.state.Data, layout);
  }
  render(){
    return(
      <div>
        <div id={containerId}></div>
      </div>
    );
  }
}
Plot.propTypes={
  Data: React.PropTypes.array,
  Layout: React.PropTypes.object,
  containerId: React.PropTypes.string
}