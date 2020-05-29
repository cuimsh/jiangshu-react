import React from 'react';
import { connect } from 'react-redux';
import { Styled } from './style';
import { CSSTransition } from 'react-transition-group';
import header from './store/reducer';

const Header = (props)=>{
  return (
    <Styled.HeaderWrapper>
      <Styled.Logo/>
      <Styled.Nav>
        <Styled.NavItem className='left active'>首页</Styled.NavItem>
        <Styled.NavItem className='left'>下载App</Styled.NavItem>
        <Styled.NavItem className='right'><i className="iconfont">&#xe636;</i></Styled.NavItem>
        <Styled.NavItem className='right'>登录</Styled.NavItem>
        <Styled.SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <Styled.NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}/>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe682;</i>
        </Styled.SearchWrapper>
      </Styled.Nav>
      <Styled.Addition>
        <Styled.Button className='sign_up'>注册</Styled.Button>
        <Styled.Button className='write-btn'><i className="iconfont">&#xe6e5;</i>写文章</Styled.Button>
      </Styled.Addition>
    </Styled.HeaderWrapper>
  );
};


const mapStateToProps = (state)=>{
  return{
    focused: state.header.focused
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur(){
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
