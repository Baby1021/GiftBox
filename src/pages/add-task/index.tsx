import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Form, Text, Input, Picker, Button  } from '@tarojs/components'

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeList: ['JavaScript', 'Vue', 'CSS'], // 先写死
      form: {
        name: '',
        type: '',
        date: '',
        score: ''
      }
    };
  }

  onValue(key, e) {
    const { form } = this.state;
    form[key] = e.detail.value.trim();

    this.setState({
      form
    })
  };

  changeType = e => {
    const { form, typeList } = this.state;
    form.type = typeList[e.detail.value];

    this.setState({
      form
    })
  }

  save = () => {
    const { form } = this.state;

    Taro.cloud.callFunction({
      name: 'task',
      data: form,
      complete: res => {
        console.log('callFunction test result: ', res)
      }
    })
  }

  render() { 
    const { form, typeList } = this.state;
    return (
      <View className='add-task'>
        <Form className='form'>
          <View className='form__item'>
            <Text>任务：</Text>
            <Input value={form.name} type='text' onBlur={(e) => this.onValue('name', e)} placeholder='输入任务' />
          </View>
          <View className='form__item'>
            <Text>任务类型：</Text>
            <Picker mode='selector' range={typeList} onChange={this.changeType}>
              <View className='picker'>
                当前选择：{form.type}
              </View>
            </Picker>
          </View>
          <View className='form__item'>
            <Text>完成时间：</Text>
            <Picker mode='date' onChange={(e) => this.onValue('date', e)}>
              <View className='picker'>
                当前选择：{form.date}
              </View>
            </Picker>
          </View>
          <View className='form__item'>
            <Text>获得积分：</Text>
            <Input value={form.score} type='number' onBlur={(e) => this.onValue('score', e)} placeholder='输入积分' />
          </View>
        </Form>
        <Button onClick={this.save}>保存</Button>
      </View>
    )
  }
}