import styled from 'styled-components';

export const WrapperUploadDocument = styled.div`
    position: relative;
    .ant-upload-list-item{
        display: ${props => props.showFiles === true ? "block" : "none"};
    }
`;

export const UploadButton = styled.div`
    position: relative;
    background: #fff;
    color: #40a9ff;
    border: 1px solid #40a9ff;
    padding: 4px 8px;
    border-radius: 3px;
`;