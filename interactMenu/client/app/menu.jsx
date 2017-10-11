import React from 'react'
import ReactDom from 'react-dom'
import {spring, Motion} from 'react-motion'


class Menu extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isOpen: false,
            x: 0,
            y: 0
        }

        this.BASE_ANGLE = this.BASE_ANGLE.bind(this);
        this.FAN_ANGLE = this.FAN_ANGLE.bind(this);
        this.REAL_ANGLE = this.REAL_ANGLE.bind(this);
        this.getCoordinate = this.getCoordinate.bind(this);
        this.Final_x_POS = this.Final_x_POS.bind(this);
        this.Final_y_POS= this.Final_y_POS.bind(this);
        this.initialChildButtonStylesInit = this.initialChildButtonStylesInit.bind(this);
        this.getCoordinate = this.getCoordinate.bind(this);
        this.mainButtonStyles = this.mainButtonStyles.bind(this)
    }

    mainButtonStyles() {
        // let {x, y} = this.getCoordinate();
        var test = {
          width: this.props.Circle.MAIN_BUTTON_DIAM,
          height: this.props.Circle.MAIN_BUTTON_DIAM
        };
        return test;
      }

      initialChildButtonStylesInit() {
        // let {x, y} = this.getCoordinate();
        let CHILD_BUTTON_DIAM = parseInt(this.props.Circle.CHILD_BUTTON_DIAM)
        return {
          width: CHILD_BUTTON_DIAM,
          height:CHILD_BUTTON_DIAM,
          top: this.state.y - (CHILD_BUTTON_DIAM / 2),
          left: this.state.x - (CHILD_BUTTON_DIAM / 2),
          rotate: -180,
          scale: 0.5
        };
      }


    FAN_ANGLE()
    {
        return (this.props.Circle.CHILD_NUMBER * this.props.Circle.SEPARATION_ANGLE);
    }

    BASE_ANGLE()
    {
        return (180 - FAN_ANGLE()) / 2;
    }

    REAL_ANGLE(index)
    {
        return (BASE_ANGLE() + index * this.props.Circle.SEPARATION_ANGLE);
    }

    componentDidMount()
    {
        var dropMen = ReactDom.findDOMNode(this.refs['targetDiv']).getBoundingClientRect();
        this.setState(prevState =>
        {
            prevState.x = dropMen.left + this.props.Circle.CHILD_BUTTON_DIAM;
            prevState.y = dropMen.top + this.props.Circle.CHILD_BUTTON_DIAM;
            return prevState; 
        });
    }
    ///To get the position of the main button 
    getCoordinate()
    {
        // var dropMen = ReactDom.findDOMNode(this.refs['targetDiv'])
        // console.log(dropMen)
        // var specs = dropMen.getBoudingClientRect();
        // var x = (specs.right + specs.left) / 2;
        // var y = (specs.top + specs.bottom) / 2;
        // let x = 300;
        // let y = 200;
        return {x, y};
    }

    Final_x_POS(angle)
    {
        var {x, y} = this.getCoordinate();
        return (x + (this.props.FLY_OUT_RADIUS * Math.cos(angle)));
    }

    Final_y_POS(angle)
    {
        var {x, y} = this.getCoordinate();
        return (y - (this.props.FLY_OUT_RADIUS * Math.sin(angle)));
    }

    render()
    {
        let rows = [];
        let {CHILD_NUMBER} = this.props.Circle;
        Array(CHILD_NUMBER).fill(0).forEach((_, index) =>
            {
                let test = this.initialChildButtonStylesInit();
                rows.push(<div key={index} style={test}> </div>);    
            });
        
         let ok = this.mainButtonStyles();
         
        return (
            <div>

                 {rows} 
                <div ref='targetDiv' className='main-button' style={ok}>
                    <i className="fa fa-close fa-3x"/>
                </div>
            </div>
        );
    }

}

export default Menu;