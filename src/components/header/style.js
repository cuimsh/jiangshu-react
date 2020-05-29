import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const Styled = {
  'HeaderWrapper': styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
  `,
  'Logo': styled.a.attrs({
    href: '/'
  })`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: url(${logoPic});
    background-size: contain;
    height: 56px;
    width: 100px;
  `,
  'Nav': styled.div`
    width: 945px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
  `,
  'NavItem': styled.div`
    height: 56px;
    line-height: 26px;
    padding: 15px;
    font-size: 17px;
    color: #333;
    &.left{
      float: left;
    }
    &.right {
      float: right;
      margin-right: 6px;
      color: #969696;
    }
    &.active {
      color: #ea6f5a;
    }
  `,
  'NavSearch': styled.input.attrs({
    placeholder: '搜索'
  })`
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    color: #777;
    box-sizing: border-box;
    &::placeholder {
      color: #999;
    }
    &.focused {
      width: 240px;
    }
    &.slide-enter {
      width: 160px;
      transition: all .2s ease-out;
    }
    &.slide-enter-active {
     width: 240px;
    }
    &.slide-exit {
      transition: all .2s ease-out;
    }
    &.slide-exit-active {
     width: 160px;
    }
  `,
  'Addition': styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
    float: right;
  `,
  'Button': styled.div`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    font-size: 15px;
    border-radius: 20px;
    line-height: 24px;
    &.sign_up{
      width: 54px;
      margin: 9px 5px 0 15px;
      border: 1px solid rgba(236,97,73,.7);
      color: #ea6f5a;
      background-color: transparent;
    },
    &.write-btn{
      width: 80px;
      margin: 8px 12px 0;
      color: #fff;
      background-color: #ea6f5a;
    }
  `,
  'SearchWrapper': styled.div`
    float: left;
    position: relative;
    .iconfont{
      position: absolute;
      float: left;
      right: 5px;
      top: 13px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 15px;
      color: #969696;
      &.focused {
        background: #777; 
        color: white;
      }
    }
  `
};

//#ea6f5a
