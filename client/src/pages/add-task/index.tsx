import { Component } from 'react'
import { View, Form, Text, Label, Input, Picker, Button  } from '@tarojs/components'
import { showToast, navigateTo } from '@tarojs/taro'
import { addTask } from '@/api/index'
import { PageState } from './type'
import './index.scss'

export default class AddTask extends Component<{}, PageState> {
  constructor(props) {
    super(props);
    this.state = {
      typeList: ['JavaScript', 'Vue', 'CSS'], // 先写死
      form: {
        name: '',
        type: '',
        status: 0,
        startTime: '',
        endTime: '',
        score: ''
      }
    };
  }

  setFormDate = key => e => {
    const { form } = this.state;
    form[key] = e.detail.value.trim();

    this.setState({
      form
    })
  };

  onTypeChange = e => {
    const { form, typeList } = this.state;
    form.type = typeList[e.detail.value];

    this.setState({
      form
    })
  }

  save = async () => {
    try {
      const { form } = this.state;

      await addTask(form);

      showToast({
        title: '保存成功',
        icon: 'success'
      });

      navigateTo({
        url: `pages/task-list/index`
      })

    } catch (error) {
      showToast({
        title: '保存失败',
        icon: 'error'
      });
    }
  }

  render() { 
    const { form, typeList } = this.state;
    return (
      <View className='add-task'>
        <Form className='form'>
          <View className='form__item'>
            <Text>任务：</Text>
            <Input value={form.name} type='text' onBlur={this.setFormDate('name')} placeholder='请输入任务' placeholderStyle='color: #A2A2A4' />
          </View>
          <View className='form__item'>
            <Text>任务类型：</Text>
            <Picker mode='selector' range={typeList} onChange={this.onTypeChange}>
              {!form.type ? (
                <Label className='form__item--placeholder' style={{ color: '#A2A2A4' }}>
                  请选择任务类型
                </Label>
              ) : (
                <Label>{form.type}</Label>
              )}
            </Picker>
          </View>
          <View className='form__item'>
            <Text>开始时间：</Text>
            <Picker mode='date' value={form.startTime} onChange={this.setFormDate('startTime')}>
              {!form.startTime ? (
                <Label className='form__item--placeholder' style={{ color: '#A2A2A4' }}>
                  请选择开始时间
                </Label>
              ) : (
                <Label>{form.startTime}</Label>
              )}
            </Picker>
          </View>
          <View className='form__item'>
            <Text>结束时间：</Text>
            <Picker mode='date' value={form.endTime} onChange={this.setFormDate('endTime')}>
              {!form.endTime ? (
                <Label className='form__item--placeholder' style={{ color: '#A2A2A4' }}>
                  请选择结束时间
                </Label>
              ) : (
                <Label>{form.endTime}</Label>
              )}
            </Picker>
          </View>
          <View className='form__item'>
            <Text>获得积分：</Text>
            <Input value={form.score} type='number' onBlur={this.setFormDate('score')} placeholder='请输入积分' placeholderStyle='color: #A2A2A4' />
          </View>
        </Form>
        <Button className='action-btn' onClick={this.save}>保存</Button>
      </View>
    )
  }
}