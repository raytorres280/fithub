'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';

import MacrosTab from './MacrosTab';
import MealsTab from './MealsTab';
import LogsTab from './LogsTab';
import AccountTab from './AccountTab';

const tabIcon1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAQAAABNTyozAAAFDElEQVR4Ae3bA5/l2BrG0beq3T22bdu2bdu2bdu2bdu2bU/b6/58Nao62XWS3Vkf4X+YnSdRG1HUarVarVar1Wq1mk5mtbHj3e51v8Wf8Lu33OsM21vEyDEi0MUijvSYvv5D/An/abj3XGozk0aejGw9N+oN0MZA/+ldJ1pYS+RCq2VcYwBQQCDgSyeZMarOaPb0MVBwIOAZG+kS1WRcJ+gDCQPB1/Y1clSL0Z2gP6QPBH6yv15RDbrYy6/QgYHgG1tojbKzuHegCYHgJXNGeRnFRdDEQAxzqh5RRpbwBU0PBO+aO8pFJ0cZRkkCMdgeUR7G9iiUKBDcauQoA7P7nBIG4i1TRLNZXl9KGogfmvxtZHNDKHEg+lo2msWOhlPyQAy0cjSD3aACgRhslehotqUygRhoiehI1jWsUoHoY7boKBY2kIoF4isTRkcwlZ+pYCBe0j1S08tbVDQQl0RqrqPCgdgsUrINFQ/Ux9SRiun1q3wgntOa6kjjeTIIxJ6Rgr3JJFB/k0XRTKp/NoG4NYrmVjIKxDJRJEuTWaBXtURRtHglu0BsGEWxHhkGek9rFEGLd7IMxHpRBGuQaaCXowieyzYQC0ejzEPGga6PRrk860CDjNXoHKF/1oHYLRphazIP9Hw0wuPZB2KyRlaGw/IPZI+k54cZBHok2ssdUhvuejPHnzCJA3wptcFGifbQWW9pvWPB+Bu62sVv0lox2sOC0rpEj/hHTOQJKZ0Y7WFfKe0dbaCLa6TzbLSHW6SzQ7SRTm6WygBdou18JZXDox309LpUZo+2MoZU7tQS7WImg6SxSbSVRaTxvbGi3RwjjePK8ydxs2iAkf0khVvL8lq9pTUa4mApvBZt5epybiuMbaDi/RZt5VHF66175MIbindt5MPXirdt5MPvijdP5MNAxRsr8mGY4nWJ9OpA9Ues/pLOgq/qn/mO/6N4XeTDo4rXR4/IhauksEU+F6vHSOFdrdEQh0rhtfIcmG3Z4Nrkl7IcmC0sjR+NE+3m+PIcuY4hlXu0RLuY1WBpbFKu2z7HpHmUrwGzp79xmHjXpZPbpDJA52g7+0jpwGgD3dwonWeiPSwgrSv1in/EpJ4t43ihs9+l9YHF42/obi+9Szl/iXC79G41R/wJUzrMtx01oEqwca0neOMYJv9Au0f7eUz+gSaN9rNl9oGey+BRhKR2jca4LOtAA40ZjTFX1oGui8Z5NuNAC0bjrJZtoJeiCFq8lWmgdaMY1sky0LtaoxhavJRhoPWjOJbILtDLWqJIbsos0JJRLJPol1Ggm6N49sgmUD+TRPG0ejaTQLtFGqbVN4NAz2iNVGxZ+UC9TREpubrigTaKtPT0eoUDnR/pmcJPFQ30vK7RESxoYAUDfWH86CjWNqxigX43c3QkWxleoUADLBodzS6VCTTIStEMtjO8AoEGWCGaxcYGlzxQH0tFM1la7xIH+s4c0Wxm8UlJA71usigDY3qohIFu1CvKQqtDDS1RoEF2jrKxiE9LEugts0cZGcm5hjc50BDH6RblZWFvNjHQs2aJstPZrn5uQqAvbKQlqsGojtWvAwP9YC89olqM7Ri/Sx/oC3vqFdVkZLv4IGGgx62nc1SbFku4Qr+CA33qWNNGPvSylmv9XkCgNx1rvsiTzhZwqIf0bnOgod50gQ1NGCMCrWaygWPc6lW/xp/wmzfc5RRbW1CvGEHUarVarVar1Wq1Wu1fqoYBwdn5trIAAAAASUVORK5CYII=';

const tabIcon3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAQAAABNTyozAAADJklEQVR4Ae3B30vddRzH8df06Ip2kelSy5utH7ts9wW7iSiKUbg53EVRLMxRKRtL2HURSRybUHdj2G6jH9B+SPe1ptLxdvPGBcU4O5vzeCb+Os/+gCimft/H8/6c9+MhhRBCCCGEEEIIIYQQQgghhBBqgG6OM84kc5RYZZUSc0xyjn661NjoYIhp/s8UH9OuRkQP4zzgYVT4iqfUSGjlLBU2Y4kRWtQYOMAsW1HgeaWPXspsVZm3lDZOssF2bDCgdDFIFgaUJnrZIAsbvKn0cIAyWVnkOaWFVmbJ0h+0KCWcJWtnlA56qJC1JbqVCsaxkFca6OABFiq0KwUMYeVDpYBprPwu/+jGTpUn5R3HsXRM3jGOpTF5xySWLss75rB0U95RwlJR3rGKpRV5xyqWVuQdJSwV5R1zWLop77iKpcvyjnNYGpN39GOpT97RiZ0qe+Uf17Hym1LAR1gZVAp4giUslGlTGshjYVSpoJsyWbtPp9LBGbI2rJSQY4YsTdGstPAsi2RlgX1KD4dZJwtrvK40cYIsvKd0cYJ1tmOdd5U2DnOfrVrgDaWPZ5hhK6bYr8ZAjtOU2YxFhmlWI6GLL1niYZQZpVONiDZOco0q/6XKrwzSpsbGXvrIc4kbFFlhhSI3uESeo3QohBBCCCGEEEKoHXaxj5d5n8/4lqvMME+JCutUWeEetyjwCxf5nA94hf00qTHwKC9xigmmqbAZyxS4yCkOsUcpop0jfE2BNbZrg1m+4RidSgFNvMgXFKiStSqzjHKInHyimVc5z22s3eECr5GTJ7xAnr+ppSLjHFT9I0c/19gp13mbVtUrHmOEP9lpfzHCHtUbdjPEberFHT7hEdUPepmn3sxzVPWAbr6nXl2hRzuLI9yjni3Qp53CLj7FgzGaVHu08iNe/MRu1RbNfIcnV2hRLXEebyZUO7yDRwOqDbq4i0cVelQLXMCrCdnjcZbxao2nZY1BPBuWNX7As59ljQKe3ZI1FvBsWdZwTtZwTtZwTtZwTtZwTtZwTtZwTtZwTtZwTtZwTtZwTtZwTiGEEEIIIYQQQgghhBBCCCGEf/kHYIRQeja+qU0AAAAASUVORK5CYII=';

const tabIcon4 = 'data:image/png;base64,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';
export default class AppTabBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      tabSelected: 'macros',
    }
  }
  changeTab(tabId) {
    this.setState({tabSelected: tabId});
  }

  render() {
    return(
      <TabBarIOS>
        <TabBarIOS.Item
          title="macros"
          onPress={() => this.changeTab('macros')}
          icon={{uri: tabIcon1, scale: 4}}
          selected={this.state.tabSelected === 'macros'}
          >
          <MacrosTab user={this.props.user}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="logs"
          onPress={() => this.changeTab('logs')}
          icon={{uri: tabIcon4, scale: 4}}
          selected={this.state.tabSelected === 'logs'}
          >
          <LogsTab user={this.props.user}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="account"props
          onPress={() => this.changeTab('account')}
          icon={{uri: tabIcon3, scale: 4}}
          selected={this.state.tabSelected === 'account'}>
          <View style={styles.container}>
            <AccountTab />
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
