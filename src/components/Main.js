require('normalize.css/normalize.css');
require('styles/App.scss');

var imagesDatas = require('../data/imageDatas.json');

import React from 'react';

//利用自执行函数，奖图片名片信息转成图片url路径信息
imagesDatas = (function genImageURL(imagesDatasArr){
    for (var i = 0, j = imagesDatasArr.length; i < j; i++) {
        var singleImageData = imagesDatasArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imagesDatasArr[i] = singleImageData;
    }
    return imagesDatasArr;
})(imagesDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
