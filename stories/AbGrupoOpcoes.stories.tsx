import React from "react";

import {AbGrupoOpcoes, AbGrupoOpcoesProps} from '../src/components/AbGrupoOpcoes'

import {ComponentMeta, ComponentStory} from '@storybook/react'


export default {
  title: 'Componentes/AbGrupoOpcoes',
  component: AbGrupoOpcoes
} as ComponentMeta <typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Padrao = Template.bind({})

Padrao.args ={
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00, 00',
      rodape: '.pdf, .pub, .mobi'
    },
    {
      id: 2,
      titulo: 'E-book',
      corpo: 'R$ 00, 00',
      rodape: '.pdf, .pub, .mobi'
    },
    {
      id: 3,
      titulo: 'E-book',
      corpo: 'R$ 10, 00',
      rodape: '.pdf, .pub, .mobi'
    }
  ]
} as AbGrupoOpcoesProps