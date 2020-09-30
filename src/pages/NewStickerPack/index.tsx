import React from 'react'
import './style.scss'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { Button } from '@material-ui/core'

export default () => <div className="new-sticker-pack-page">
  <div className="new-sticker-pack-page-container">
    <h2>New sticker pack</h2>
    <Step1 />
    <Step2 />
    <Step3 />
    <Step4 />
    <Button variant="contained" component="span" color="primary">Review sticker pack</Button>
</div>
