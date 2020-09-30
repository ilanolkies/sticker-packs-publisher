import React from 'react'
import './style.scss'
import Step1 from './Step1'
import sticker_2 from '../../icons/sticker_2.svg'
import sticker_3 from '../../icons/sticker_3.svg'
import sticker_4 from '../../icons/sticker_4.svg'

export default () => <div className="new-sticker-pack-page">
  <div className="new-sticker-pack-page-container">
    <h2>New sticker pack</h2>
    <Step1 />
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header"><h3><img src={sticker_2} /> Stickers</h3></div>
      <div className="new-sticker-pack-section-body"></div>
    </div>
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header">
        <h3><img src={sticker_3} /> Sticker Market Banner</h3>
      </div>
      <div className="new-sticker-pack-section-body"></div>
    </div>
    <div className="new-sticker-pack-section">
      <div className="new-sticker-pack-section-header">
        <h3><img src={sticker_4} /> Stickers Pack Thumbnail</h3>
      </div>
      <div className="new-sticker-pack-section-body"></div>
    </div>
  </div>
</div>
