import React from 'react'
import ReactDom from 'react-dom'
import {spring, Motion, StaggeredMotion} from 'react-motion'
import './menu.css'
import range from 'lodash.range';


const SpringConfig = 
{
    stiffness: 120,
    damping: 17
};

const OFFSET = 0.05;

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

        this.finalChildButtonStyles = this.finalChildButtonStyles.bind(this);
        this.finalChildButtonStylesInit = this.finalChildButtonStylesInit.bind(this);
        this.renderChildButton = this.renderChildButton.bind(this);
        this.BASE_ANGLE = this.BASE_ANGLE.bind(this);
        this.FAN_ANGLE = this.FAN_ANGLE.bind(this);
        this.REAL_ANGLE = this.REAL_ANGLE.bind(this);
        this.getCoordinate = this.getCoordinate.bind(this);
        this.Final_x_POS = this.Final_x_POS.bind(this);
        this.Final_y_POS= this.Final_y_POS.bind(this);

        this.initialChildButtonStyles = this.initialChildButtonStyles.bind(this);
        this.initialChildButtonStylesInit = this.initialChildButtonStylesInit.bind(this);
        this.getCoordinate = this.getCoordinate.bind(this);
        this.mainButtonStyles = this.mainButtonStyles.bind(this)
        this.changeState = this.changeState.bind(this);
    }

    changeState()
    {
        let {isOpen} = this.state;
        this.setState({isOpen: !isOpen})
    }

    mainButtonStyles() {
        // let {x, y} = this.getCoordinate();
        var test = {
          width: this.props.Circle.MAIN_BUTTON_DIAM,
          height: this.props.Circle.MAIN_BUTTON_DIAM
        };
        return test;
    }

    initialChildButtonStyles()
    {
        let CHILD_BUTTON_DIAM = parseInt(this.props.Circle.CHILD_BUTTON_DIAM)
        return {
            width: CHILD_BUTTON_DIAM,
            height:CHILD_BUTTON_DIAM,
            top: spring(this.state.y, SpringConfig), //- (CHILD_BUTTON_DIAM / 2),
            left: spring(this.state.x, SpringConfig), //- (CHILD_BUTTON_DIAM / 2),
            rotate: spring(-180, SpringConfig),
            scale: spring(0.5, SpringConfig)
        };
    }

      initialChildButtonStylesInit() {

        let CHILD_BUTTON_DIAM = parseInt(this.props.Circle.CHILD_BUTTON_DIAM)
  
        return {
            
            width: CHILD_BUTTON_DIAM,
            height:CHILD_BUTTON_DIAM,
            top: this.state.y, //- (CHILD_BUTTON_DIAM / 2),
            left: this.state.x, //- (CHILD_BUTTON_DIAM / 2),
            rotate: -180,
            scale: 0.5
        };
    }
    
    finalChildButtonStyles(index)
    {
        let x = this.Final_x_POS(this.REAL_ANGLE(index));
        let y = this.Final_y_POS(this.REAL_ANGLE(index));
        let CHILD_BUTTON_DIAM = parseInt(this.props.Circle.CHILD_BUTTON_DIAM)
        return {
            width: CHILD_BUTTON_DIAM,
            height:CHILD_BUTTON_DIAM,
            top: spring(y, SpringConfig),
            left: spring(x, SpringConfig), //- (CHILD_BUTTON_DIAM / 2),
            rotate: spring(0, SpringConfig),
            scale: spring(1, SpringConfig)
        };
    }

    finalChildButtonStylesInit(childIndex) {
        let x = this.Final_x_POS(this.REAL_ANGLE(childIndex));
        let y = this.Final_y_POS(this.REAL_ANGLE(childIndex));
        // let { deltaX, deltaY } = finalChildDeltaPositions(childIndex);
        let CHILD_BUTTON_DIAM = parseInt(this.props.Circle.CHILD_BUTTON_DIAM)
        return {
          width: CHILD_BUTTON_DIAM,
          height: CHILD_BUTTON_DIAM,
          top: y,
          left: x,
          rotate: 0,
          scale: 1
        };
      }

    FAN_ANGLE()
    {
        return parseInt(this.props.Circle.CHILD_NUMBER) * parseInt(this.props.Circle.SEPARATION_ANGLE);
    }
    
    BASE_ANGLE()
    {
        return (180 - this.FAN_ANGLE()) / 2;
    }
    
    REAL_ANGLE(index)
    {
        return (this.BASE_ANGLE() + index * parseInt(this.props.Circle.SEPARATION_ANGLE));
    }
    
    componentDidMount()
    {
        
        var dropMen = this.targetDiv.getBoundingClientRect();
        this.setState(prevState =>
        {
             prevState.x = parseInt(dropMen.left)// + parseInt(this.props.Circle.CHILD_BUTTON_DIAM);
             prevState.y = parseInt(dropMen.top)// + parseInt(this.props.Circle.CHILD_BUTTON_DIAM);   
             return prevState; 
        });
    }

    ///To get the position of the main button 
    getCoordinate()
    {
    }

    Final_x_POS(angle)
    {
        var x = this.state.x;
        
        return (x + (parseInt(this.props.Circle.FLY_OUT_RADIUS) * Math.cos(angle)));
    }

    Final_y_POS(angle)
    {
        var y = this.state.y;

        return (y - (parseInt(this.props.Circle.FLY_OUT_RADIUS) * Math.sin(angle)));
    }

    renderChildButton()
    {
  
        let {isOpen} = this.state    
        let {CHILD_NUMBER} = this.props.Circle;
        let rowsObjInit = [];
        Array(CHILD_NUMBER).fill(0).forEach((_, index) =>
        {
            return isOpen? rowsObjInit.push(this.finalChildButtonStylesInit(index)): rowsObjInit.push(this.initialChildButtonStylesInit());
        });

        let rowsInit = Object.keys(rowsObjInit).map(key => rowsObjInit[key]);

        let rowObjFinal = [];
        Array(CHILD_NUMBER).fill(0).forEach((_, index) =>
            {
                return isOpen? rowObjFinal.push(this.finalChildButtonStyles(index)): rowObjFinal.push(this.initialChildButtonStyles());
            }
        );

        const targetButtonStylesInitObject = range(CHILD_NUMBER).map(i => {
            return isOpen ? this.finalChildButtonStylesInit(i) : this.initialChildButtonStylesInit();
          });
      
          //StaggeredMotion now takes an Array of object
          const targetButtonStylesInit = Object.keys(targetButtonStylesInitObject).map(key => targetButtonStylesInitObject[key]);


        const scaleMin = this.initialChildButtonStyles().scale.val;
        const scaleMax = this.finalChildButtonStyles(0).scale.val;

        let calculateStylesForNextFram = prevFrameStyles => {
            
            prevFrameStyles = isOpen? prevFrameStyles: prevFrameStyles.reverse();
            let nextFrameTargetStyles = prevFrameStyles.map((buttonStyleInPreviousFrame, i) => {
             //   console.log(rowObjFinal)
                if (i == 0)
                {
                    return rowObjFinal[i];
                }

                const prevButtonScale = prevFrameStyles[i - 1].scale;
                const shouldApplyTargetStyle = () =>
                {
                    if (isOpen)
                    {
                        return prevButtonScale >= scaleMin + OFFSET;
                    }
                    else
                    {
                        return prevButtonScale <= scaleMax + OFFSET;
                    }      
                };
                return shouldApplyTargetStyle? rowObjFinal[i] : buttonStyleInPreviousFrame;
            });
         
            return isOpen? nextFrameTargetStyles: nextFrameTargetStyles.reverse();
        };
        
        return(
                    <StaggeredMotion
                    defaultStyles={rowsInit}
                    styles={calculateStylesForNextFram}>
                    {
                        interpolatedStyles =>
                        {
                            {/* console.log(interpolatedStyles) */}
                           return( 
                            <div>
                            
                                {interpolatedStyles.map(({width, scale, rotate, left, top, height}, index) =>
                                
                                    <div 
                                        className="child-button"
                                        key={index}
                                        style={{
                                            width,
                                            transform: `rotate(${rotate}deg) scale(${scale})`,
                                            left,
                                            top,
                                            height
                                        }}
                                    >
                                        ijsijs
                                    </div>
                                )
                            }

                        </div>
                           )
                    }
                }
            </StaggeredMotion>
        );
    }

    render()
    {
        let rows = [];
        if (this.state.isOpen)
        {        
            let {CHILD_NUMBER} = this.props.Circle;
            Array(CHILD_NUMBER).fill(0).forEach((_, index) =>
            {
                let test = this.initialChildButtonStylesInit();
                rows.push(<div key={index} style={test}> </div>);    
            });
        }
         let ok = this.mainButtonStyles();
         
         let mainButtonRotation =
            this.state.isOpen? {rotate: spring(135, {stiffness: 50, damping: 25})} : {rotate: spring(0, {stiffness: 50, damping: 25})};

        return (
            <div>
                
                 {this.renderChildButton()}

                <Motion defaultStyle={{rotate: 0}}
                        style={mainButtonRotation}>
                {
                    ({rotate}) =>
                    
                        <div onClick={this.changeState} className='main-button' style={{...ok, transform:`rotate(${rotate}deg)`}}>
                            <i ref={input => this.targetDiv = input} className="fa fa-close fa-3x"/>
                        </div>
                    
                }
                </Motion>
            </div>
        );
    }

}

export default Menu;