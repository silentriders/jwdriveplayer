import React, { Component } from 'react';
import { MenuBar, CenterLayout } from '../../Components';
import { Content, Container } from './withMenuBar.style';

const withMenuBar = (isShowMenubar, menuBarList) => WrappedComponent =>
  class extends Component {
    _setMenuBarActive = menuBarActive => {
      this.props.history.push(menuBarActive);
    };

    _renderMenuBar = () => {
      return isShowMenubar ? (
        <MenuBar
          menuBarList={menuBarList}
          menuBarActive={this.props.location.pathname}
          setMenuBarActive={this._setMenuBarActive}
          searchParams={this.props.location.search}
        />
      ) : null;
    };
    render() {
      const splittedPath = this.props.location.pathname.split('/');
      const list = menuBarList
        ? menuBarList.filter(comp => {
            const splittedMenu = comp.path.split('/');
            const temp = splittedMenu.map((p, id) => {
              if (!p.startsWith(':')) return p;
              return splittedPath[id];
            });
            return JSON.stringify(temp) === JSON.stringify(splittedPath);
          })[0]
        : {};
      return (
        <div>
          {this._renderMenuBar()}

          {isShowMenubar ? (
            <Content>
              <Container>
                <CenterLayout>
                  {list.renderComponent(this.props)}
                  <WrappedComponent {...this.props} />
                </CenterLayout>
              </Container>
            </Content>
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </div>
      );
    }
  };

export default withMenuBar;
