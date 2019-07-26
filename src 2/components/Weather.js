import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div>
             { this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
             {this.props.temparature && <p>Current Temparature :{this.props.temparature} </p>}
             {this.props.temp_max && <p>Maximum Temperature: {this.props.temp_max}</p>}
             {this.props.temp_min && <p>Minimum Temperature: {this.props.temp_min}</p>}
             {this.props.humidity && <p>Humidity :{this.props.humidity} </p>}
             {this.props.description && <p> Condition: {this.props.description} </p>}
             {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
}
}

export default Weather; 


