import React, { Component } from 'react';
import './App.css';
import Colorpicker from './components/Colorpicker';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';




class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      color : 'red',
      fontSize: 12
    }
  }

  onSetColor = (params)=>{ // Cú pháp viết hàm khi có State 
    this.setState({
      color:params
    });
  }
  onChangeSize=(value)=>{
    // size từ 8 đến 36 thôi
    if(this.state.fontSize + value >=8 && this.state.fontSize + value <=36)
    {
      this.setState({
       fontSize: this.state.fontSize + value
      });
    }
  }
    onSettingDefault=(value)=>{
      if(value){
        this.setState({
          color : 'red',
          fontSize: 12
        });
      }
    }

  render()
  {
      return (  
        
        <div className="container mt-50">
            <div className="row">
                <Colorpicker color={this.state.color} onReceiveColor={ this.onSetColor} />
              <div className="col-md-6">
                <SizeSetting  
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}

                />
                <Reset onSettingDefault={this.onSettingDefault}/>
              </div>
                <Result color={this.state.color} fontSize={this.state.fontSize}/>
            </div>
        </div>
      );
  }
}

export default App;
