import React, { Component } from 'react';
import { View, ActionSheetIOS, Text, Button } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'iOS 平台 - 显示一个 ActionSheet 弹出框';
const COMPONENT_VALUE = 'ActionSheetIOS';
const ACTIONSHEETIOS_LIST = [
  {
    label: 'ActionSheet',
    value: '_showActionSheetWithOptions'
  },
  {
    label: 'ShareActionSheet',
    value: '_showShareActionSheetWithOptions'
  }
];
const MESSAGE =
  'React-Native-Demos 是基于 react-native 官方文档，把文档所列出的基础组件（简洁、易用、高效） 和 API 实现一遍，并以演示的形式呈现出来。';

class ActionSheetIOSPackage extends Component {
  _onOperate = item => {
    this[item.value]();
  };

  _showActionSheetWithOptions = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['取消', '删除'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        title: 'reactNativeDemo',
        message: MESSAGE
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          return alert('您选择了删除按钮');
        }
        return alert('您取消了');
      }
    );
  };

  _showShareActionSheetWithOptions = () => {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        url: 'https://github.com/cllemon/reactNativeDemo',
        message: MESSAGE,
        subject: 'reactNativeDemo'
      },
      fail => {
        alert(JSON.stringify(fail));
      },
      (isSuccess, content) => {
        if (isSuccess) return alert(content);
        return alert('分享失败');
      }
    );
  };

  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        {ACTIONSHEETIOS_LIST.map((item, index) => {
          return (
            <View style={{ marginRight: 26 }} key={index}>
              <Button
                onPress={() => {
                  this._onOperate(item);
                }}
                title={item.label}
              />
            </View>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      >
        {/** demo - 1 */}
        <Card html={COMPONENT_VALUE} codeHeight={820}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ActionSheetIOSPackage;
