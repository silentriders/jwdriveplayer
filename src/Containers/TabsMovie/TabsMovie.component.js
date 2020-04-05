import React from 'react';
import { WrapperTabsMovie } from './TabsMovie.style';
import { Tabs } from 'antd';
import { IconFline } from '../../Components';

const { TabPane } = Tabs;

const TabsMovieComponent = props => {
  const { menuTabs, activeTabs } = props;

  const mappingTabs = () =>
    menuTabs.map(menu => (
      <TabPane
        tab={
          <IconFline img={menu.icon} size={24}>
            {menu.name}
          </IconFline>
        }
        key={menu.key}
      >
        {menu.content}
      </TabPane>
    ));
  return (
    <WrapperTabsMovie>
      <Tabs defaultActiveKey={activeTabs}>{mappingTabs()}</Tabs>
    </WrapperTabsMovie>
  );
};

export default TabsMovieComponent;
