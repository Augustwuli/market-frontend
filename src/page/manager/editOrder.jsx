import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Form, Select, Input, Button, Icon, Upload, Modal } from 'antd';
import Navbar from '@/coms/navbar'
import Api from '@/tool/api.js'

const { TextArea } = Input;
const { Option } = Select;

export default class EditOrder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      defaultSelected: '2',
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://localhost:3000/',
      }],
    }
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.Save(values);
      }
    });
  }

  Save (params) {
    let file = this.state.fileList[0]
    let id = this.props.match.params.id
    let upload = false;
    let image = 'test';
    if(params.image.indexOf('public') === -1){
      upload = true;
      image = file.thumbUrl;
    }
    let param = {
      id: id,
      title: params.title,
      price: params.price,
      num: params.num,
      content: params.info,
      image: image,
      isUpload: upload
    }
    console.log(param)
    Api.post('products/save', param, r => {
      console.log(r);
    })
  }

  componentDidMount(){
    this.getData()
  }

  getData () {
    let id = this.props.match.params.id
    Api.get(`products/detail/${id}`, null , r => {
      let fileList = [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: `http://localhost:3000/${r.data.thumb_url}`,
      }];
      this.setState({
        data: r.data,
        fileList: fileList
      })
    })
  }

  render () {
    const { data, defaultSelected, previewVisible, previewImage, fileList} = this.state;
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="manager-page">
        <Navbar defaultSelected={defaultSelected}></Navbar>
        <div className="main">
        <p className="title">编辑产品</p>
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Form.Item
              label="标题"
            >
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '请输入标题' }],
                initialValue: data.title
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="单价"
             >
              {getFieldDecorator('price', {
                rules: [{ required: true, message: '请输入产品单价' }],
                initialValue: data.price
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="库存"
             >
              {getFieldDecorator('num', {
                rules: [{ required: true, message: '请输入产品库存' }],
                initialValue: data.num
              })(
                <Input type="number"/>
              )}
            </Form.Item>
            <Form.Item
              label="描述"
             >
              {getFieldDecorator('info', {
                rules: [{ required: true, message: '请输入产品描述' }],
                initialValue: data.content
              })(
                <TextArea placeholder="请输入描述"/>
              )}
            </Form.Item>
            <Form.Item
              label="上传图片"
             >
              {getFieldDecorator('image', {
                rules: [{ required: true, message: '请上传产品图片' }],
                initialValue: data.thumb_url
              })(
                <div className="clearfix">
                  <Upload
                    action="/hello"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                  >
                    {fileList.length >= 1 ? null : uploadButton}
                  </Upload>
                  <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </div>
              )}
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 12, offset: 5 }}
            >
              <Button type="primary" htmlType="submit">
                保存 
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
EditOrder = Form.create({ name: 'coordinated' })(EditOrder);