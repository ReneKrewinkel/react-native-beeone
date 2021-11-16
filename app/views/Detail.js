import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default class Detail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        showImage: false, 
        newImage: {},
        flashMode: Camera.Constants.FlashMode.off,
        cameraType: this.props.showFront ? Camera.Constants.Type.front : Camera.Constants.Type.back,
        showCamera: Platform.OS === "android" ? Camera.isAvailableAsync() : true,
    }
  }

  async componentDidMount() {
    this.getPermissionsAsync();
}

  getPermissionsAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === 'ios') {
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        this.setState({ permissionsLibrary: status === 'granted'});
    }

    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  
    renderImage() {
      if(this.state.showImage)  {
        return(
          <View style={{ marginTop: 20, alignItems: "center"}}>
            <Image source={ this.state.newImage }
                   style={{width: 100, height: 100, borderRadius: 20}}/>
          </View>
        )
      }
    }

    takePicture = async () => {
      if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          if(this.state.permissionsLibrary) {
              await MediaLibrary.saveToLibraryAsync(photo.uri);
          }

          this.setState({
              newImage: photo,
              showImage: true,
          })
      }
  }

  renderContent() {

    let bStyle = { alignItems: "center", margin: 20,
                    justifyContent: "center", 
                    width: 80, height: 40, 
                    backgroundColor: "#635DB7"}
    
  
      return(

          <View style={{flex: 1}}>
              <Camera style={styles.camera}
                      type={this.state.cameraType}
                      flashMode={this.state.flashMode}
                      ref={ref => {
                              this.camera = ref
                      }}>
                  <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 30}}>

                      <TouchableOpacity
                          style={styles.button}
                          onPress={() => {
                              this.setState({
                                cameraType: this.state.cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                              });
                          }}>
                          <Text style={{color: "#FFF"}}>{
                            this.state.cameraType === Camera.Constants.Type.back ? "Front" : "Back"
                          }</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                          style={styles.button}
                          onPress={() => {

                              this.setState({
                                  flashMode: this.state.flashMode ===  Camera.Constants.FlashMode.off ?  Camera.Constants.FlashMode.on :  Camera.Constants.FlashMode.off,
                                  flashIndicator: this.state.flashIndicator === '0' ? '5' : '0'
                              })

                          }}>
                          <Text style={{color: "#FFF"}}>
                            {
                              this.state.flashMode ===  Camera.Constants.FlashMode.off ? "Flash On" : "Flash Off"
                            }
                          </Text>
                      </TouchableOpacity>


                  </View>

              </Camera>
              <View style={{ alignItems: "center", justifyContent: "center"}}>
              <TouchableOpacity
                  style={styles.buttonCapture}
                  onPress={() => this.takePicture()} >
                  <View style={{ width: 38, height: 38, borderRadius: 38/2 }}></View>
              </TouchableOpacity>
              </View>
              {this.renderImage() }
          </View>
      )
  
  }

  render() {
    return(      
        <View style={{ paddingTop: 100, flex: 1, justifyContent: "center", alignItems: "center" }}>
          { this.renderContent()}
        </View>        
    )
  }

}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#d8006b",
  },
  camera: {
      width: 300,
      height: 300,
      borderWidth: 1,
      margin:20
  },
  buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  button: {
      backgroundColor: "transparent",
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100, height: 50  

  },
  buttonCapture: {
      backgroundColor: "transparent",
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60, height: 60,
      borderWidth: 1,
      borderColor: "#d8006b",
      borderRadius: 40

  },
  text: {
      fontSize: 18,
      color: 'white',
  },
});