import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Table, InputNumber, Popconfirm, 
} from "antd";

import AccountBar from './AccountBar';

/*
List or Table?
*/

const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
      editing: false,
    };
  
    toggleEdit = () => {
      const editing = !this.state.editing;
      this.setState({ editing }, () => {
        if (editing) {
          this.input.focus();
        }
      });
    };
  
    save = e => {
      const { record, handleSave } = this.props;
      this.form.validateFields((error, values) => {
        if (error && error[e.currentTarget.id]) {
          return;
        }
        this.toggleEdit();
        handleSave({ ...record, ...values });
      });
    };
  
    renderCell = form => {
      this.form = form;
      const { children, dataIndex, record, title } = this.props;
      const { editing } = this.state;
      return editing ? (
        <Form.Item style={{ margin: 0 }}>
          {form.getFieldDecorator(dataIndex, {
            rules: [
              {
                required: true,
                message: `${title} 不能为空.`,
              },
            ],
            initialValue: record[dataIndex],
          })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
    };
  
    render() {
      const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        children,
        ...restProps
      } = this.props;
      return (
        <td {...restProps}>
          {editable ? (
            <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
          ) : (
            children
          )}
        </td>
      );
    }
}

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.columns = [
          {
            title: '房间',
            dataIndex: 'room',
            width: '30%',
            editable: true,
          },
          {
            title: '温度',
            dataIndex: 'temperature',
            editable: true,
          },
          {
            title: '风速',
            dataIndex: 'wind',
            editable: true,
          },
          {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm title="确定删除?" onConfirm={() => this.handleDelete(record.key)}>
                  <a>删除</a>
                </Popconfirm>
              ) : null,
          },
    ];

    this.state={
        dataSource: [
            {
              key: '0',
              room: '测试0',
              temperature: 26,
              wind: '风速 0',
            },
            {
              key: '1',
              room: '测试 1',
              temperature: 26,
              wind: '风速 1',
            },
          ],
          count: 2,
        };
    }

    onChangeRange = (value1, value2) =>{
    }

    onChange = (time, timeString) => {
        console.log(time, timeString);
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: count,
          room: `测试 ${count}`,
          temperature: 26,
          wind: `风速 ${count}`,
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
    };
    
    render(){
        const { dataSource } = this.state;
        const components = {
        body: {
            row: EditableFormRow,
            cell: EditableCell,
        },
        };
        const columns = this.columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
            }),
        };
        });

        return(
            <div>
                <AccountBar path="/userPage"/>
                <Row>
                    <Col span={2}/>
                    <Col span={20}>
                        <div>
                            <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                            添加
                            </Button>
                            <Table
                            components={components}
                            rowClassName={() => 'editable-row'}
                            bordered
                            dataSource={dataSource}
                            columns={columns}
                            />
                        </div>
                    </Col>
                    <Col span={2}/>
                </Row>
            </div>
        )
    }

}

export default AdminPage;