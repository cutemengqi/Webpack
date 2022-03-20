/*
 * @Author: your name
 * @Date: 2022-02-07 14:43:36
 * @LastEditTime: 2022-02-19 01:00:18
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Webapck\geektime-webpack-course-master\code\chapter04\my-project\builder-webpack\src\search\index.js
 */
'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import largeNumber from 'large-number';
import logo from './images/logo.png';
import './search.less';

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        const { Text } = this.state;
        const addResult = 1000
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            { addResult }
            搜索文字的内容<img src={ logo } onClick={ this.loadComponent.bind(this) } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);