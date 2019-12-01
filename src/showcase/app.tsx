import React, { FC } from 'react'
import { palette } from '..'
import ManchesterApp from '../app'
import buttonDocs from '../components/button/docs'
import headlineDocs from '../components/headline/docs'
import imageDocs from '../components/image/docs'
import lineChartDocs from '../components/line-chart/docs'
import numberInputDocs from '../components/number-input/docs'
import richTextDocs from '../components/rich-text/docs'
import selectInputDocs from '../components/select-input/docs'
import selectableListDocs from '../components/selectable-list/docs'
import splitPanelDocs from '../components/split-panel/docs'
import surfaceDocs from '../components/surface/docs'
import textInputDocs from '../components/text-input/docs'
import toggleInputDocs from '../components/toggle-input/docs'
import { paletteDocs } from './palette'
import Showcase from './showcase'

const components = [
  paletteDocs,
  buttonDocs,
  headlineDocs,
  imageDocs,
  lineChartDocs,
  numberInputDocs,
  richTextDocs,
  selectableListDocs,
  selectInputDocs,
  splitPanelDocs,
  surfaceDocs,
  textInputDocs,
  toggleInputDocs,
]

const App: FC = () => (
  <ManchesterApp
    layout="app"
    theme={{
      accentColor: palette['Nuclear Green'],
      backgroundColor: palette['Concrete Grey'],
      foregroundColor: palette['Pure Black'],
      mutedForegroundColor: palette['Pure White'],
      layers: [
        {
          backgroundColor: palette['Ash Grey'],
          foregroundColor: palette['Pure Black'],
          mutedForegroundColor: palette['Pure White'],
        },
        {
          backgroundColor: palette['Slate Grey'],
          foregroundColor: palette['Pure White'],
          mutedForegroundColor: palette['Ash Grey'],
        },
      ],
    }}
  >
    <Showcase title="Manchester" components={components} />
  </ManchesterApp>
)

export { App }
