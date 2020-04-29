import React from 'react';
import { Table, Input, Row, Col } from 'antd';
import { isEmpty } from 'lodash';

const ListMoviesComponent = props => {
  const { columns, dataSource, onSearch } = props;
  return (
    <div>
      <Row>
        <Col span={12}>
          <Input.Search
            placeholder="Search ID or Title or IMDB ID"
            onSearch={value => onSearch(value)}
            style={{ width: 300 }}
            size="large"
          />
        </Col>
        <Col span={12} style={{textAlign: 'right'}}>
          <h1>Total : {dataSource.movies.length}</h1>
        </Col>
      </Row>
      {isEmpty(dataSource.search) ? (
        <Table
          rowKey={record => record._id}
          dataSource={dataSource.movies}
          columns={columns}
        />
      ) : (
        <Table
          rowKey={record => record._id}
          dataSource={dataSource.search}
          columns={columns}
        />
      )}
    </div>
  );
};

export default ListMoviesComponent;
