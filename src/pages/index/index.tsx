import "./index.less";

import { Text, Video, View } from "@tarojs/components";

import { Component } from "react";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Video controls={false}></Video>
      </View>
    );
  }
}
