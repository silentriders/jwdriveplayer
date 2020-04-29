import React from 'react';
import moment from 'moment';
import { Radio, Select, DatePicker, Input, Col, Checkbox, Form, TimePicker } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Item } = Form;

const _mappingItemForm = (items, getFieldDecorator) =>
    items.map((item, key) => (
      <Col span={item?.size ?? 24} key={key}>
        <Item label={item?.label} style={{ marginTop: item.label ? 0 : 40 }}>
          {getFieldDecorator(item.field_name, {
            rules: [
              {
                required: item.required,
                message: `Please input ${item?.label ?? item?.field_name}!`
              }
            ],
            initialValue: _initialValue(item.type, item.field_name, item.initialValue, item.optional)
          })(_typeField(item.type, item.field_name, item.initialValue, item.optional, item.disabled, item.placeholder))}
        </Item>
      </Col>
    ));

const _initialValue = (type, field, initialValue) => {
  if (field === 'date' || type === 'date') {
    return moment(initialValue, 'YYYY/MM/DD');
  } else if (field === 'timeStart' || type === 'time-range' ||  type === 'time') {
    return moment(initialValue, 'HH:mm:ss');
  } else if (field === 'timeEnd') {
    return moment(initialValue, 'HH:mm:ss');
  } else if (
    type === 'radio' ||
    type === 'select' ||
    type === 'text' ||
    type === 'textarea' ||
    type === 'email' ||
    type === 'checkbox' ||
    type === 'phone'
  ) {
    return initialValue;
  } else {
    return;
  }
};

const _mappingRadio = items =>
  items.map(item => (
    <Radio value={item.name} key={item.id} disabled={item.disabled}>
      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
    </Radio>
  ));

const _mappingSelect = items =>
  items.map(item => (
    <Option size="default" key={item.id} value={item.name}>
      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
    </Option>
  ));

const _typeField = (type, field, initialValue, optional, disabled, placeholder) => {
  if (type === 'date') {
    return <DatePicker size="default" format="YYYY/MM/DD" />;
  } else if (type === 'select' && field === 'membership') {
    return (
      <Select size="default">
        <Option value={'yes'}>Yes</Option>
        <Option value={'no'}>No</Option>
      </Select>
    );
  } else if (type === 'select') {
    return <Select size="default">{_mappingSelect(optional)}</Select>;
  } else if (type === 'radio') {
    return <Radio.Group size="default">{_mappingRadio(optional)}</Radio.Group>;
  } else if (type === 'textarea') {
    return <TextArea size="default" />;
  } else if (type === 'phone') {
    return <Input size="default" addonBefore="+" style={{ width: '100%' }} />;
  } else if (type === 'checkbox') {
    return (
      <Checkbox.Group size="default" style={{ width: '100%' }}>
        {_mappingCheckbox(optional)}
      </Checkbox.Group>
    );
  }else if (type === 'time' || type === 'time-range') {
    return <TimePicker size="default" defaultOpenValue={moment('00:00', 'HH:mm')} format={'HH:mm'} disabled={disabled} />;
  } else if (type === 'password') {
    return <Input.Password size="default" placeholder={placeholder} />
  } else {
    return <Input size="default" disabled={disabled} placeholder={placeholder} />
  }
};

const _mappingCheckbox = items =>
  items.map(item => (
    <Col span={8} key={item.id}>
      <Checkbox size="default" value={item.name}>{item.name}</Checkbox>
    </Col>
  ));

export {
  _initialValue,
  _mappingRadio,
  _mappingSelect,
  _typeField,
  _mappingCheckbox,
  _mappingItemForm
};
