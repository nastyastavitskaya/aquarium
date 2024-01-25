/* eslint-disable @typescript-eslint/no-floating-promises */

import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { Checkbox, Divider } from 'src/components'
import { useState } from 'react'
import { ExampleStory } from 'src/utils/ExampleStory'
import { type CheckboxValueType } from 'antd/es/checkbox/Group'
import { type ICheckboxProps } from 'src/components/data-entry/Checkbox/Checkbox'
import { userEvent } from '@storybook/test'
import { expect } from '@storybook/test'

const meta: Meta<typeof Checkbox> = {
  title: 'Aquarium/Data Entry/Checkbox',
  component: props => {
    const [checked, setChecked] = useState<boolean>(props.checked ?? props.defaultChecked ?? false)
    return (
      <Checkbox
        {...props}
        checked={checked}
        onChange={e => {
          setChecked(!checked)
        }}
      />
    )
  },

  args: {
    autoFocus: false,
    checked: false,
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
    onChange: e => {
      alert(`checked = ${e.target.checked}`)
    },
  },
}
export default meta

type Story = StoryObj<typeof Checkbox>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const WithAutoFocus: Story = {
  args: {
    autoFocus: true,
  },
}

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}

export const ExampleCheckAll: Story = {
  render: () => {
    const plainOptions = ['A', 'B', 'C']
    const defaultCheckedList = ['A', 'C']

    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList)

    const checkAll = plainOptions.length === checkedList.length
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length

    const onCheckAllChange: ICheckboxProps['onChange'] = e => {
      setCheckedList(e.target.checked ? plainOptions : [])
    }

    return (
      <>
        <ExampleStory title="The `indeterminate` property can help achieve a 'check all' effect.">
          <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={onCheckAllChange}>
            Check all
          </Checkbox>
          <Divider />
          <Checkbox.Group options={plainOptions} value={checkedList} onChange={setCheckedList} />
        </ExampleStory>
      </>
    )
  },

  play: async context => {
    expect(context.canvasElement.querySelectorAll('.ant-checkbox-checked').length).toBe(2)
    await userEvent.click(context.canvasElement.querySelector('.ant-checkbox-indeterminate'))
    expect(context.canvasElement.querySelectorAll('.ant-checkbox-checked').length).toBe(4)
  },
}
