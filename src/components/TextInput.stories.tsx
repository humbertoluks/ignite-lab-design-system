import { Meta, StoryObj } from '@storybook/react'
import { EnvelopeSimple, Lock } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    /** para o children, estou retornando o HTML como um vetor para não utilizar
     * o fragment( <></>) e ele ser descrito na documentação.
     * Obs. Atenção para a virgula estranha após o (</TextInput.Icon>,)
    */
    children:
      [
        <TextInput.Icon>
          <EnvelopeSimple />
        </TextInput.Icon>,
        <TextInput.Input placeholder='Placeholder example' />
      ],
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Placeholder example' />
  }
}

export const MailInput: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Placeholder example' />
    ]
  }
}

export const PasswordInput: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Placeholder example' />
    ]
  }
}