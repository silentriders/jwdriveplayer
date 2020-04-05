import styled from '@emotion/styled';
import Constants from '../../Config/Constants';

export const WrapperTabsMovie = styled.div`
  position: relative;
  padding: 0 48px;
  margin-top: 48px;

  .ant-tabs-nav .ant-tabs-tab {
    opacity: 0.3;
    color: ${Constants.COLOR.WHITE};
  }

  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${Constants.COLOR.WHITE};
    opacity: 1;
    :after {
    position: relative;
    display: block;
    content: ' ';
    width: 9px;
    height: 9px;
    z-index: 1;
    border-radius: 9px;
    margin: 0 auto;
    background: #DC1623;
    box-shadow: 0px 1px 9px rgba(220,22,35,0.9);
    margin-top: 8px;
    left: 10px;
}
  }

  .ant-tabs-nav .ant-tabs-tab:hover {
    color: ${Constants.COLOR.WHITE};
    opacity: 1;
  }

  .ant-tabs-bar {
    border-bottom: 1px solid ${Constants.COLOR.GREY};
  }

  .ant-tabs-ink-bar {
    display: none !important;
  }

`;
